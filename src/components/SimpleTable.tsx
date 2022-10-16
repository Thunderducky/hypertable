import { splitInto } from "../utils"

export const SimpleTable = ({ label, entries, selectedIndex }: { label: string, entries: string[], selectedIndex?: number | null }) => {
  console.log(label, selectedIndex, entries.length)
  const textColor = (index: number) => {
    if (selectedIndex != 0 && !selectedIndex) { return 'text-slate-400' }
    else {
      return index === selectedIndex ? "text-slate-200" : "text-slate-500";
    }
  }
  return <div>
    <h2 className="text-xl">{label}</h2>
    <div className="flex flex-row justify-center">
      {splitInto(entries, 6).map((collection, index) => {
        return <div
          key={`group_${index}`}
          className="p-2">
          {
            collection.map((item, _index) => {
              return <p
                className={textColor(index * 6 + _index)}
                key={`${item}_${index}_${_index}`}
              >{item as string}</p>
            })
          }
        </div>
      })}
    </div>
  </div>
}