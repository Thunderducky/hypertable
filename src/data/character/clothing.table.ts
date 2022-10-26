import { listIt } from "../../utils"
import { SimpleTable } from "../types"

export const clothingTable: SimpleTable = {
  name: "Clothing",
  entries: listIt`
    Antique
    Battle-torn
    Bedgraggled
    Blood-stained
    Ceremonial
    Dated
    
    Decaying
    Eccentric
    Elegant
    Embroidered
    Exotic
    Fashionable
    
    Flamboyant
    Food-stained
    Formal
    Frayed
    Frumpy
    Garish
    
    Grimy
    Haute Couture
    Lacey
    Livery
    Mud-stained
    Ostentatious
    
    Oversized
    Patched
    Patterned
    Perfumed
    Practical
    Rumpled
    
    Sigils
    Singed
    Tasteless
    Undersized
    Wine-stained
    Worn out
  `()
}