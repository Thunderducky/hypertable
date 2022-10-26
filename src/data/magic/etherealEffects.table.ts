import { listIt } from "../../utils"
import { SimpleTable } from "../types"

export const etherealEffectsTable: SimpleTable = {
  name: "EtherealEffects",
  entries: listIt`
    Avenging
    Banishing
    Bewildering
    Blinding
    Charming
    Communicating

    Compelling
    Concealing
    Deafening
    Deceiving
    Deciphering
    Disguising

    Dispelling
    Emboldening
    Encoding
    Energizing
    Enlightening
    Enraging

    Excruciating
    Foreseeing
    Intoxicating
    Maddening
    Mesmerizing
    Mindreading

    Nullifying
    Paralyzing
    Revealing
    Revolting
    Scrying
    Silencing

    Soothing
    Summoning
    Terrifying
    Warding
    Wearying
    Withering
  `()
}