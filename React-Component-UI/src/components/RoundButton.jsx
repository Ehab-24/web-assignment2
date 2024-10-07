export default function RoundButton({ text }) {
    return (
        <button className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 border-red-600 hover:border-red-800 transition-all">
            {text}
        </button>
    )
}
