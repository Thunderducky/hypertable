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

const commentCharacters = "//"
const multilineCommentRegex = /\/\*[\s\S]*?\*\//g
export const listIt = (strings:TemplateStringsArray, ...keys:string[]) => {
  return (splitter:string = "\n", byColumn = false) => {
    const lastIndex = strings.length - 1;
    // Treat it like a regular bit of interpolated text
    const newText = (strings
      .slice(0, lastIndex)
      .reduce((p, s, i) => p + s + keys[i], '')
      + strings[lastIndex]).replaceAll(multilineCommentRegex, "") // Strip out any comments

   
    if(!byColumn){
      // Puts things in row order
      return newText
        .split(splitter) // Split by newline or custom splitter
        .map(t => t.split(commentCharacters)[0]) // Ignore comments
        .map(t => t.trim()) // Ignore whitespace
        .filter(t => t !== "");
    } else {
      // Puts things in column
      const rows = newText.split("\n").map(text => text.split(splitter) // Split by newline for rows and then use custom splitter
        .map(t => t.split(commentCharacters)[0]) // Ignore comments
        .map(t => t.trim()) // Ignore whitespace
        .filter(t => t !== ""));
      const columns = new Array(Math.max(...rows.map(r => r.length))).fill(null).map(a => []) as (string | undefined)[][]
      const items = rows.reduce((columns, row) => {
        for(let i = 0; i < columns.length; i++){
          columns[i].push(row[i])
        }
        return columns;
      }, columns).flatMap(text => text ?? "").filter(t => !!t) as string[]
      return items;
    }
  }
};