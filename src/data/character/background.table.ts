import { listIt } from "../../utils"
import { SimpleTable } from "../types"

export const backgroundTable: SimpleTable = {
  name: "Background",
  entries: listIt`
    Alchemist
    Beggar-prince
    Blackmailer
    Bounty-hunter
    Chimney sweep
    Coin-clipper
    
    Contortionist
    Counterfeiter
    Cultist
    Cutpurse
    Debt-collector
    Deserter
    
    Fence
    Fortuneteller
    Galley slave
    Gambler
    Gravedigger
    Headsman
    
    Hedge knight
    Highwayman
    Housebreaker
    Kidnapper
    Mad prophet
    Mountebank
    
    Peddler
    Pit-fighter
    Poisoner
    Rat-catcher
    Scrivener
    Sellsword
    
    Slave
    Smuggler
    Street performer
    Tattooist
    Urchin
    Usurer  
  `()
}