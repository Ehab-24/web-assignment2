import Gallery1 from "../assets/images/gallery/gallery-1.jpg"
import Gallery2 from "../assets/images/gallery/gallery-2.jpg"
import Gallery3 from "../assets/images/gallery/gallery-3.jpg"
import Gallery4 from "../assets/images/gallery/gallery-4.jpg"
import Gallery5 from "../assets/images/gallery/gallery-5.jpg"
import Gallery6 from "../assets/images/gallery/gallery-6.jpg"
import Gallery7 from "../assets/images/gallery/gallery-7.jpg"
import Gallery8 from "../assets/images/gallery/gallery-8.jpg"


export default function Gallery() {
    return (
        <section className="flex flex-col w-full gap-12 py-20">
            <div class="flex pl-8 flex-col gap-2">
                <div className="flex gap-2 items-center">
                    <h2 className="font-serif font-semibold text-gray-500 tracking-tight">GALLERY</h2>
                    <div className="w-32 h-[2px] bg-yellow-600 rounded-full" />
                </div>
                <p className="text-3xl font-serif text-yellow-600 font-bold">Some photos from Our Restaurant</p>
            </div>

            <div className="w-full h-max grid grid-cols-4 gap-1">
                <img alt="gallery_1" className="w-full h-full object-cover" src={Gallery1} />
                <img alt="gallery_2" className="w-full h-full object-cover" src={Gallery2} />
                <img alt="gallery_3" className="w-full h-full object-cover" src={Gallery3} />
                <img alt="gallery_4" className="w-full h-full object-cover" src={Gallery4} />
                <img alt="gallery_5" className="w-full h-full object-cover" src={Gallery5} />
                <img alt="gallery_6" className="w-full h-full object-cover" src={Gallery6} />
                <img alt="gallery_7" className="w-full h-full object-cover" src={Gallery7} />
                <img alt="gallery_8" className="w-full h-full object-cover" src={Gallery8} />
            </div>
        </section>
    )
}
