import { generate, hyper } from "."
const splitter  = "   "
export const Color = hyper("Color", { splitter })`
  Red     Blue    Gray
`
export const Shade = hyper("Shade", {splitter })`
  Transparent     ${Color}      Light ${Color}     Dark ${Color}
`
export const Form = hyper("Form", { splitter })`
  Sword     Spear     Shield
`
export const Weapon = hyper("Test2")`
  ${Shade} ${Form}
  Plain ${Form}
`
console.log(`

${generate(Weapon)}
${generate(Weapon)}
${generate(Weapon)}
${generate(Weapon)}

`)
