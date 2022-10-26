import { listIt } from "../../utils"
import { SimpleTable } from "../types"

export const physicalElements: SimpleTable = {
  name: "PhysicalElements",
  entries: listIt`
  Acid
  Amber
  Bark
  Blood
  Bone
  Brine

  Clay
  Crow
  Crystal
  Ember
  Flesh
  Fungus

  Glass
  Honey
  Ice
  Insect
  Wood # This seems like a duplicate?
  Lava

  Moss
  Obsidian
  Oil
  Poison
  Rat
  Salt

  Sand
  Sap
  Serpent
  Slime
  Stone
  Tar

  Thorn
  Vine
  Water
  Wine
  Wood
  Worm
  `()
}