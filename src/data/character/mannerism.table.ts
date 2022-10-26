import { listIt } from "../../utils"
import { SimpleTable } from "../types"

export const mannerismTable: SimpleTable = {
  name: "Mannerism",
  entries: listIt`
    Anecdotes
    Breathy
    Chuckles
    Clipped
    Cryptic
    Deep Voice
    
    Drawl
    Enunciates
    Flowery speech
    Gravelly voice
    Highly formal
    Hypnotic
    
    Interrupts
    Laconic
    Laughs
    Long Pauses
    Melodious
    Monotone
    
    Mumbles
    Narrates
    Overly Casual
    Quaint sayings
    Rambles
    Random factos
    
    Rapid-fire
    Rhyming
    Robotic
    Slow speech
    Speechifies
    Squeaky
    
    Street slang
    Stutters
    Talks to self
    Trails off
    Very loud
    Whispers
  `()
}
