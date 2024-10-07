import About1 from "../assets/images/about.jpg"
import About2 from "../assets/images/about-2.jpg"


export default function AboutUs() {
    return (
        <div className="flex flex-col w-full px-12 py-20">

            <div className="w-full flex flex-col items-center gap-2">
                <h2 className="text text-gray-500 font-mono tracking-wider">ABOUT US</h2>
                <p className="text-3xl font-light tracking-wider font-serif">LEARN MORE <span className="text-red-500">ABOUT US</span></p>
            </div>

            <div className="flex gap-12 mt-16">

                <div className="flex flex-col w-[60%] min-h-full justify-between">
                    <img src={About1} alt="about_us_1" className="w-full h-max object-cover" />
                    <div className="w-full flex flex-col items-center py-3 border-4 border-gray-900">
                        <h3 className="text-gray-900 text-2xl font-bold tracking-wide">Book a Table</h3>
                        <p className="text-red-600 text-2xl font-bold tracking-wide">+1 5589 55488 55</p>
                    </div>
                </div>

                <div className="flex gap-4 flex-col w-[40%]">
                    <div className="flex flex-col gap-3">
                        <p className="text-gray-500 tracking-wide leading-relaxed italic">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
                        <ul className="flex flex-col gap-2">
                            <li className="flex gap-2">
                                <div className="text-xs w-4 h-4 grid place-items-center text-white font-bold aspect-square rounded-full bg-red-500">✓</div>
                                <p className="text-gray-900 tracking-wide">Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </li>
                            <li className="flex gap-2">
                                <div className="text-xs w-4 h-4 grid place-items-center text-white font-bold aspect-square rounded-full bg-red-500">✓</div>
                                <p className="text-gray-900 tracking-wide">Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                            </li>
                            <li className="flex gap-2">
                                <div className="text-xs w-4 h-4 grid place-items-center text-white font-bold aspect-square rounded-full bg-red-500">✓</div>
                                <p className="text-gray-900 tracking-wide">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
                            </li>
                        </ul>
                        <p className="text-gray-900 tracking-wide leading-relaxed">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident </p>
                    </div>

                    <img src={About2} alt="about_us_2" className="w-full h-max object-cover" />
                </div>

            </div>

        </div>
    )
}
