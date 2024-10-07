import RoundButton from "./RoundButton";

export default function Navbar() {
    return (
        <nav className="bg-gray-100 flex w-full h-20 items-center justify-between px-8">
            <h1 className="text-3xl font-bold tracking-wide">YUMMY</h1>

            <ul className="flex gap-4 h-full items-center">
                <li>
                    <a href="#" className="text-gray-500 hover:underline-2 transition-all hover:text-gray-900">Home</a>
                </li>
                <li>
                    <a href="#" className="text-gray-500 hover:underline-2 transition-all hover:text-gray-900">About</a>
                </li>
                <li>
                    <a href="#" className="text-gray-500 hover:underline-2 transition-all hover:text-gray-900">Menu</a>
                </li>
                <li>
                    <a href="#" className="text-gray-500 hover:underline-2 transition-all hover:text-gray-900">Chefs</a>
                </li>
                <li>
                    <a href="#" className="text-gray-500 hover:underline-2 transition-all hover:text-gray-900">Gallery</a>
                </li>
                <li>
                    <a href="#" className="text-gray-500 hover:underline-2 transition-all hover:text-gray-900">Contact</a>
                </li>
            </ul>

            <RoundButton text="Book a Table" />
        </nav>
    )
}
