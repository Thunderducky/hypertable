import { listIt } from "../../utils"
import { SimpleTable } from "../types"

export const appearanceTable: SimpleTable = {
  name: "Appearance",
  entries: listIt`
  Aquilline       Bullnecked    Furrowed    Hideous   Sinewy        Towering
  Athletic        Chieseld      Gaunt       Lanky     Slender       Trim
  Barrel-Chested  Coltish       Gorgeous    Pudgy     Slumped       Weathered
  Boney           Corpulent     Grizzled    Ripped    Solid         Willowy
  Brawny          Craggy        Haggard     Rosy      Square-Jawed  Wiry
  Brutish         Delicate      Handsome    Scrawny   Statuesque    Wrinkled
  `("  ", true)
}