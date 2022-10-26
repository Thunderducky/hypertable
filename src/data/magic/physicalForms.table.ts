import { listIt } from "../../utils"
import { SimpleTable } from "../types"

export const physicalFormTable: SimpleTable = {
  name: "PhysicalForm",
  entries: listIt`
    Altar
    Armor
    Arrow
    Beast
    Blade
    Cauldron

    Chain
    Chariot
    Claw
    Cloak
    Colossus
    Crown

    Elemental
    Eye
    Fountain
    Gate
    Golem
    Hammer

    Horn
    Key
    Mask
    Monolith
    Pit
    Prison

    Sentinel
    Servant
    Shield
    Spear
    Steed
    Swarm

    Tentacle
    Throne
    Torch
    Trap
    Wall
    Web
  `()
}