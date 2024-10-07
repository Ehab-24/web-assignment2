export default function ContactListItem({ icon, title, description }) {
    return (
        <div className="flex items-center gap-2">

            <div className="rounded-sm bg-orange-200 grid place-items-center w-12 h-12">
                {icon}
            </div>

            <div className="flex flex-col">
                <h3 className="text-white font-serif font-bold text-xl">{title}</h3>
                <p className="text-gray-300 tracking-wide">{description}</p>
            </div>

        </div>
    )
}
