export const splitInto = <T>(arr:T[], amount:number) => {
  const arrs = [] as T[][];
  let index = 0;
  while(index < arr.length){
    arrs.push(arr.slice(index, index + amount))
    index += amount;
  }
  return arrs;
}

export const pickRandom = <T>(arr:T[]):T => {
  return arr[
    Math.floor(Math.random() * arr.length)
  ];
}

export const listIt = (strings:TemplateStringsArray, ...keys:string[]) => {
  const lastIndex = strings.length - 1;
  const newText = strings
    .slice(0, lastIndex)
    .reduce((p, s, i) => p + s + keys[i], '')
    + strings[lastIndex];
  return newText
    .split("\n") // Split by newline
    .map(t => t.split("#")[0]) // Ignore comments
    .map(t => t.trim()) // Ignore whitespace
    .filter(t => t !== "");
};