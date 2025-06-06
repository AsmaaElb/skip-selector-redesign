import { useEffect, useState } from "react"
import axios from "axios"
import type { Skip } from "../types/skip"
import SkipCard from "../components/SkipCard"
import StepHeader from "../components/StepHeader"
import ContinueFooter from "../components/ContinueFooter"

export default function SkipSelection() {
  const [skips, setSkips] = useState<Skip[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)


useEffect(() => {
  console.log("useEffect running")

  axios
    .get("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft")
    .then((res) => {
      console.log("API SKIPS =", res.data)
      console.log("Un skip exemple =", (res.data as any)[0])

      setSkips(res.data as Skip[])


    })
    .catch((err) => {
      console.error("API ERROR =", err)
    })
}, [])

console.log("Skips state =", skips)

  return (
    <main className="max-w-6xl mx-auto px-4 py-6 pb-28">
      <StepHeader />

      <h1 className="text-2xl font-bold mb-6 text-gray-800">Choose Your Skip Size</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            selected={selectedId === String(skip.id)}

            onSelect={() => setSelectedId(String(skip.id))}

          />
        ))}
      </div>

      <ContinueFooter
        show={selectedId !== null}
        onContinue={() => alert(`Skip selected: ${selectedId}`)}
      />
    </main>
  )
}
