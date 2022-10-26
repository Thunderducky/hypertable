import { useEffect, useState } from 'react'
import './App.css'
import { SimpleTable } from './components/SimpleTable'
import { itemsTable } from './data/character/items.table'
import { physicalEffects } from './data/magic/physicalEffects.table'
import { physicalElements } from './data/magic/physicalElements.table'
import { leaf, makeSimpleTable, simpleTable } from './data/types'
import { listIt, pickRandom } from './utils'

function useRoller(size:number){
  const [selectedIndex, setSelectedIndex] = useState(null as number | null)
  const makeRoll = () => {
    setSelectedIndex(Math.floor(Math.random() * size))
  }
  const clear = () => setSelectedIndex(null);
  return [selectedIndex, makeRoll, clear] as const;
}

const isNums = (...n:(number | null | undefined)[]) => n.every(n => +(n as any) === n); 

function App() {
  // Hook for a shifty number
  const [result, roll] = useRoller(itemsTable.entries.length);
  const [result2, roll2] = useRoller(physicalEffects.entries.length);
  const [result3, roll3] = useRoller(physicalEffects.entries.length);
  const itemName = isNums(result)
    ? `${itemsTable.entries[result as number]}`
    : '';
  const spellName = isNums(result2, result3) 
    ? `${physicalEffects.entries[result2 as number]} ${physicalElements.entries[result3 as number]}`
    : '';
  return (
    <div className="App display flex-col justify-center ">
      <h1 className="text-3xl">Hypertable</h1>
      <h2 className="text-slate-500">Rolling on embedded tables</h2>
      {
        itemName !== ""
          ? <div className='p-3'>{itemName}</div>
          : <></>
      }
      <div>
        <button className="my-6" onClick={() => roll()}>Pick a Random Item</button>
        <SimpleTable label="Items" entries={itemsTable.entries} selectedIndex={result} />
      </div>
      <br />
      <br />
      <h3 className='text-xl'>Magic</h3>
      <button onClick={() => { roll2(); roll3();}}>Generate New Spell</button>
      {
        spellName !== ""
          ? <div className='p-3'>{spellName}</div>
          : <></>
      }
      
      <div className="flex">
        <div>
          <SimpleTable label="Physical Effects" entries={physicalEffects.entries} selectedIndex={result2} />
          <button className="my-6" onClick={() => roll2()}>Pick a Random Physical Effect</button>
        </div>
        <div>
          <SimpleTable label="Physical Effects" entries={physicalElements.entries} selectedIndex={result3} />
          <button className="my-6" onClick={() => roll3()}>Pick a Random Physical Element</button>
        </div>
      </div>
      
    </div>
  )
}

export default App


const test = (strings:TemplateStringsArray, ...keys:string[]) => {
  const lastIndex = strings.length - 1;
  const newText = strings
    .slice(0, lastIndex)
    .reduce((p, s, i) => p + s + keys[i], '')
    + strings[lastIndex];
  return (text:string) => {
    return newText + text;
  }
}


console.log(makeSimpleTable(listIt`Hello  Hallo  Hola  Yo`('  '))(leaf(1)).resolvedText)
console.log(makeSimpleTable(listIt`Bye  Seeya  God Be With You  Godspeed`('  '))(leaf(1)).resolvedText)
