type Props = {
  show: boolean
  onContinue: () => void
}

export default function ContinueFooter({ show, onContinue }: Props) {
  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 backdrop-blur-md bg-black/80 border-t border-gray-700 p-4 flex justify-end px-6">
      <button
        onClick={onContinue}
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-sm sm:text-base px-6 py-2 rounded-xl shadow transition duration-200"
      >
        Continue →
      </button>
    </div>
  )
}
