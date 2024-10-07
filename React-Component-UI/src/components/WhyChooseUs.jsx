import { ClipboardList, BriefcaseConveyorBelt, Gem } from "lucide-react"
import RoundButton from "./RoundButton"


export function ChooseUsCard({ icon, title, description }) {
    return (
        <div className="w-full xl:w-1/3">
            <div className="flex flex-col justify-center items-center bg-white p-4 h-full text-center">
                <i className="p-3 rounded-full transition-all grid place-items-center bg-red-100 hover:bg-red-600 text-red-600 hover:text-white text-2xl mb-4">
                    {icon}
                </i>
                <h4 className="text-lg font-semibold mb-2">{title}</h4>
                <p className="text-center">{description}</p>
            </div>
        </div>
    )
}

export default function WhyChooseUs() {
    return (
        <section className="bg-gray-100 py-20">
            <div className="mx-auto">
                <div className="flex gap-4">
                    <div className="w-full lg:w-1/3">
                        <div className="bg-red-600 text-white p-4 flex flex-col">
                            <h3 className="text-3xl text-white font-bold mb-4">Why Choose Yummy</h3>
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                            </p>
                            <RoundButton text="Learn More" />
                        </div>
                    </div>
                    <div className="w-full flex items-stretch">
                        <div className="flex gap-4" data-aos="fade-up" data-aos-delay="200">
                            <ChooseUsCard title="Corporis voluptates officia eiusmod" description="Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip" icon={<ClipboardList className="w-8 h-8" />} />
                            <ChooseUsCard title="Ullamco laboris ladore lore pan" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt" icon={<Gem className="w-8 h-8" />} />
                            <ChooseUsCard title="Labore consequatur incidid dolore" description="Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere" icon={<BriefcaseConveyorBelt className="w-8 h-8" />} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
