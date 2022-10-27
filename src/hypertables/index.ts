export type HyperNode = {
  label?: string
  options: {
    children: ({
      type: "leaf"
      value: string
    } | { type: "branch", value: HyperNode })[]
  }[]
}
export type HyperNodeTable = HyperNode['options'][0]
export type HyperNodeChild = HyperNodeTable['children'][0]

export const hyper = (label: string, hyperOptions: { splitter: string } = { splitter: "\n" }) => {
  // Hyper Builder
  return (templateStrings: TemplateStringsArray, ...interps: HyperNode[]): HyperNode => {
    let tables = [] as HyperNodeTable[];
    let children = [] as HyperNodeChild[];
    for (let i = 0; i < templateStrings.length; i++) {
      const splitten = templateStrings[i].split(hyperOptions.splitter)
      if (!!splitten[0]) {
        children.push({ type: "leaf", value: splitten[0] });
      }
      for (let j = 1; j < splitten.length; j++) {
        if (children.length > 0) {
          tables.push({ children });
        }
        children = [];
        const term = splitten[j];
        if (!!term) {
          children.push({ type: "leaf", value: term })
        }
      }
      if (i < interps.length) {
        children.push({ type: "branch", value: interps[i] });
      }
    }
    if (children.length > 0) {
      tables.push({ children });
    }
    children = []

    return {
      label,
      options: tables
    }
  }
}

const choose = <T>(choices: T[], index?: number) => {
  return choices[index || Math.floor(Math.random() * choices.length)]
}

export const generate = (node: HyperNode): string => {
  const option = choose(node.options);
  const result = option.children.reduce((prev, current) => {
    if (current.type === "leaf") { return prev + current.value }
    else { return prev + generate(current.value) }
  }, "").trim();
  return result;
}



