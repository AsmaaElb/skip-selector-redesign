const steps = [
  "Postcode",
  "Waste Type",
  "Select Skip",
  "Permit Check",
  "Choose Date",
  "Payment",
]

export default function StepHeader() {
  return (
    <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-4 text-sm mb-6">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center">
          <div
            className={`rounded-full px-4 py-1 font-medium tracking-wide transition-colors duration-300
              ${
                i === 2
                  ? "bg-yellow-500 text-black shadow-md"
                  : "bg-gray-800 text-gray-400"
              }`}
          >
            {step}
          </div>
          {i < steps.length - 1 && <div className="mx-1 text-gray-500">→</div>}
        </div>
      ))}
    </div>
  )
}
