import { listIt } from "../utils"

export type SimpleTable =  {
  name: string,
  entries: string[]
}

type IndexTreeEmptyNode = {
  type: "Empty",
  data: undefined
}
type IndexTreeLeafNode = {
  type: "Leaf",
  data: number
}
type IndexTreeBranchNode = {
  type: "Branch",
  data: IndexTreeNode[]
}
type IndexTreeNode = 
  | IndexTreeEmptyNode
  | IndexTreeLeafNode
  | IndexTreeBranchNode

type ResolvedTreeNode = {
  resolvedText: string,
  resolvedIndexTree: Exclude<IndexTreeNode, IndexTreeEmptyNode>
}

function randomChoice<T>(arr:T[]):[T, number]{
  const index = Math.floor(Math.random() * arr.length);
  return [arr[index], index];
}
export const leaf = (index:number):IndexTreeLeafNode => ({
  type: "Leaf" as const,
  data: index
})
export const resolvedLeaf = (index:number, value:string) => ({
  resolvedText: value,
  resolvedIndexTree: leaf(index)
})

export const makeSimpleTable = (options: string[]) => {
  return (node?: IndexTreeNode):ResolvedTreeNode => {
    if(!node || node.type === "Empty"){
      const [value, index] = randomChoice(options);
      return resolvedLeaf(index, value);
    }
    else if(node.type === "Leaf"){
      const index = node.data;
      const value = options[index];
      return resolvedLeaf(index, value);
    } else {
      throw new Error("Cannot apply a branch node to a simple table")
    }
  }
}

export const branchTable = (nodes:(IndexTreeNode | undefined)[] | undefined) => {
  const a = makeSimpleTable(listIt`Hi  Hello  Godspeed`("  "))
  const b = makeSimpleTable(listIt`Bye  Seeya   Goodbye`("  "));
  const options = [a,b];
}
export const simpleTable = (node?: IndexTreeNode):ResolvedTreeNode => {
  const options = listIt`Hello  Hallo  Guten Tag  Hola  Yooo!`("  ")
  if(!node || node.type === "Empty"){
    const [value, index] = randomChoice(options);
    return resolvedLeaf(index, value);
  }
  else if(node.type === "Leaf"){
    const index = node.data;
    const value = options[index];
    return resolvedLeaf(index, value);
  } else {
    throw new Error("Cannot apply a branch node to a simple table")
  }
}