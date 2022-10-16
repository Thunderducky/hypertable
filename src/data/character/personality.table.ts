import { listIt } from "../../utils"
import { SimpleTable } from "../types"

export const personalityTable: SimpleTable = {
  name: "Personality",
  entries: listIt`
    Bitter
    Brave
    Cautious
    Chipper
    Contrary
    Cowardly
    
    Cunning
    Driven
    Entitled
    Gregarious
    Grumpy
    Heartless
    
    Honor-bound
    Hotheaded
    Inquisitive
    Irascible
    Jolly
    Know-it-all
    
    Lazy
    Loyal
    Menacing
    Mopey
    Nervous
    Protective
    
    Righteous
    Rude
    Sarcastic
    Savage
    Scheming
    Serene
    
    Spacey
    Stoic
    Stubborn
    Stuck-up
    Suspicious
    Wisecracking
  `
}
