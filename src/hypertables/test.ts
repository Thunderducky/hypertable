import { hyper } from "."

export const Color = hyper("Color")`
  Red
  Blue
  Gray
`

export const Form = hyper("Form")`
  Sword
  Spear
  Shield
`
export const Weapon = hyper("Test2")`
  ${Color} ${Form}
  Plain ${Form}
`
