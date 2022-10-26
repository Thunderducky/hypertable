export type SimpleTable =  {
  name: string,
  entries: string[]
}



/* 
How to Author
Lists of entries
$Entry$
*/

// How to author in tree form but keep selections
type TableTree = {
  name: string,
  nodes: TableNode[]
}
enum TableNodeType {
  Subtree,
  SimpleNode
}
type SubtreeNode = {
  type: TableNodeType.Subtree,
  label: string,
  nodes: TableNode[]
}
type SimpleNode = {
  type: TableNodeType.SimpleNode,
  label: string
  nodes: undefined
}
type TableNode = 
  | SubtreeNode
  | SimpleNode

type TablePath = TableNode[]