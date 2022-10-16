import { listIt } from "../utils"
import { SimpleTable } from "./types"

export const itemsTable: SimpleTable = {
  name: "Items",
  entries: listIt`
  Animal Scent
  Bear Trap
  Bedroll
  Caltrops
  Chain (10 ft.)
  Chalk

  Chisel
  Crowbar
  Fishing Net # This is a note and shouldn't appear
  Glass Marbles
  Glue
  Grappling Hook

  Grease
  Hacksaw
  Hammer
  Hand drill
  Horn
  Iron spikes

  Iron tongs
  Lantern and Oil
  Large Sack
  Lockpicks(3)
  Manacles
  Medicine (3)

  Metal file
  Rations (3)
  Rope (50 ft.)
  Steel wire
  Shovel
  Steel mirror

  Ten Foot Pole
  Tinderbox
  Torch
  Vial of Acid
  Vial of Poison
  Waterskin
  `
}