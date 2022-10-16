import { useEffect, useState } from 'react'
import './App.css'
import { SimpleTable } from './components/SimpleTable'
import { listIt, splitInto } from './utils'

type SimpleTable =  {
  name: string,
  entries: string[]
}

const simpleTable: SimpleTable = {
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
  Fishing Net
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

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl">Hypertable</h1>
      <h2 className="text-slate-500">Rolling on embedded tables</h2>
      <br />
      <SimpleTable entries={simpleTable.entries} />
      
    </div>
  )
}

export default App
