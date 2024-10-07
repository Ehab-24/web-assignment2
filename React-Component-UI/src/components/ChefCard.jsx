import { useState } from "react"
import { Facebook, Twitch, Twitter } from "lucide-react"

export default function ChefCard({ image, name, post }) {

    const [isHovering, setIsHovering] = useState(false)

    return (
        <div
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative overflow-hidden w-full aspect-4/5">
            <img src={image} alt="chef_1" className="w-full h-full object-cover" />

            <div className={`flex flex-col items-center justify-end absolute w-full h-full bg-gradient-to-t from-black/90 to-transparent to-80% bottom-0 transition-all ${isHovering ? "opacity-100" : "opacity-0"}`}>
                <h3 className="text-xl font-bold text-white font-serif">{name}</h3>
                <p className="text-white italic">{post}</p>
                <div className="text-white mt-2 mb-4 flex gap-4">
                    <Facebook /><Twitter /><Twitch />
                </div>
            </div>
        </div>
    )
}
