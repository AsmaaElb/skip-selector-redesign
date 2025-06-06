import { Check, Clock3, Users } from "lucide-react"
import { Skip } from "../types/skip"

interface Props {
  skip: Skip
  selected: boolean
  onSelect: () => void
}

export default function SkipCard({ skip, selected, onSelect }: Props) {
  const totalPrice = Math.round(skip.price_before_vat * (1 + skip.vat / 100))
  const binBags = skip.size * 10
  const needsPermit = skip.allowed_on_road
  const imagePath = `/images/skips/${skip.size * 2}-yarder-skip.jpg`

  const tags = [
    ...(skip.size <= 4 ? ["Garden waste", "Small renovation", "Household clearance"] : []),
    ...(skip.size > 4 && skip.size <= 6 ? ["Kitchen renovation", "Bathroom refit", "Garden clearance"] : []),
    ...(skip.size > 6 ? ["Home renovation", "Construction waste", "Office clearance"] : [])
  ]

  const features = [
    ...(skip.size <= 4 ? ["Perfect for small cleanouts", "Easy to place", "Quick delivery"] : []),
    ...(skip.size > 4 && skip.size <= 6 ? ["Great value option", "Versatile size", "Reliable service"] : []),
    ...(skip.size > 6 ? ["Most popular choice", "Perfect balance", "Great capacity"] : [])
  ]

  return (
    <div
      className={`rounded-xl border p-4 shadow-md flex flex-col justify-between relative 
        transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl
        bg-white text-black border-gray-200 
        dark:bg-[#121212] dark:text-[#e5e7eb] dark:border-gray-800
        ${selected ? "ring-2 ring-blue-600" : ""}
      `}
    >
      {/* Image */}
      <div className="h-36 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
        <img
          src={imagePath}
          alt={`${skip.size * 2} Yard Skip`}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Price badge */}
      <div className="absolute top-3 left-3 bg-black text-yellow-400 text-lg font-bold px-3 py-1 rounded shadow-md border border-yellow-400">
        £{totalPrice}
      </div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{skip.size * 2} Yards</h2>
        <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs px-2 py-0.5 rounded-full">
          {skip.size} Yards
        </span>
      </div>

      {/* Hire info */}
      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-2">
        <Clock3 className="w-4 h-4" />
        {skip.hire_period_days} day hire
        <Users className="w-4 h-4 ml-4" />
        {binBags} bin bags
      </div>

      {/* Tags */}
      <p className="mt-4 text-sm font-medium">Perfect for:</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-0.5 text-sm rounded-full font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Features */}
      <div className="mt-4 space-y-1">
        {features.map((feat) => (
          <div key={feat} className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm">
            <Check className="w-4 h-4" />
            {feat}
          </div>
        ))}
      </div>

      {/* Permit warning */}
      {needsPermit && (
        <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300 text-sm p-2 rounded mt-4 border border-yellow-300 dark:border-yellow-500">
          <strong className="block mb-1">Important</strong>
          Road permit may be required
        </div>
      )}

      {/* Button */}
      <button
        onClick={onSelect}
        className={`mt-4 font-semibold py-2 rounded text-white transition-all duration-300 ease-in-out ${
          selected
            ? "bg-blue-600 hover:bg-blue-700 scale-[1.03]"
            : "bg-gray-800 hover:bg-gray-700"
        }`}
      >
        {selected ? "Selected" : "Select Skip"}
      </button>
    </div>
  )
}
