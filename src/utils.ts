export const splitInto = <T>(arr:T[], amount:number) => {
  const arrs = [] as T[][];
  let index = 0;
  while(index < arr.length){
    arrs.push(arr.slice(index, index + amount))
    index += amount;
  }
  return arrs;
}

export const listIt = (strings:TemplateStringsArray, ...keys:string[]) => {
  const lastIndex = strings.length - 1;
  const newText = strings
    .slice(0, lastIndex)
    .reduce((p, s, i) => p + s + keys[i], '')
    + strings[lastIndex];
  return newText.split("\n").map(t => t.trim()).filter(t => t !== "");
};