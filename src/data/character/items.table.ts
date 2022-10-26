import { listIt } from "../../utils"
import { SimpleTable } from "../types"

export const itemsTable: SimpleTable = {
  name: "Items",
  entries: listIt`
  Animal Scent     Chisel           Grease        Iron tongs        Ten Foot Pole 
  Bear Trap        Crowbar          Hacksaw       Lantern and Oil   Tinderbox     
  Bedroll          Fishing Net      Hammer        Large Sack        Torch   
  Caltrops         Glass Marbles    Hand drill    Lockpicks(3)      Vial of Acid 
  Chain (10 ft.)   Glue             Horn          Manacles          Vial of Poison 
  Chalk            Grappling Hook   Iron spikes   Medicine (3)      Waterskin   
  `("  ", true)
}