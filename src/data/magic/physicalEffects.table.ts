import { listIt } from "../../utils"
import { SimpleTable } from "../types"

export const physicalEffects: SimpleTable = {
  name: "PhysicalEffects",
  entries: listIt`
  Animating
  Attracting
  Binding
  Blossoming
  Consuming
  Creeping

  Crushing
  Dimininshing
  Dividing
  Duplicating
  Enveloping
  Expanding

  Fusing
  Grasping
  Hastening
  Hindering
  Illuminating
  Imprisoning

  Levitating
  Opening
  Petrifying
  Phasing
  Piercing
  Pursuing

  Reflecting
  Regenerating
  Rending
  Repelling
  Resurrectig
  Screaming

  Sealing
  Shapeshifting
  Shielding
  Spawning
  Transmuting
  Transporting
  `()
}