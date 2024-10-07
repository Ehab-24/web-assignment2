import './App.css'
import './index.css'
import Sidebar from './components/Sidebar.jsx'
import ProjectsTable from './components/ProjectsTable.jsx'
import Calendar from './components/Calendar.jsx'
import NotificationsDropDown from './components/NotificationsDropDown.jsx'
import AboutUs from './components/AboutUs'
import WhyChooseUs from './components/WhyChooseUs'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import ChefCard from './components/ChefCard'

import Chef1 from "./assets/images/chefs/chefs-1.jpg"
import Chef2 from "./assets/images/chefs/chefs-2.jpg"
import Chef3 from "./assets/images/chefs/chefs-3.jpg"
import ContactListItem from './components/ContactListItem'
import { MapPin, Mail, Phone } from 'lucide-react'

function App() {
    return (
        <div className="flex w-screen h-max bg-white">
            <Sidebar />

            <div className='flex flex-col pb-20 overflow-y-scroll justify-center items-center w-full h-full'>
                <Navbar />

                <div className='mt-20' />
                <ProjectsTable />

                <div className='mt-20' />
                <Calendar />

                <div className='mt-20' />
                <NotificationsDropDown />

                <AboutUs />

                <WhyChooseUs />

                <Gallery />

                <div className='flex gap-4 w-full mt-20'>
                    <ChefCard name="Walter White" post="Master Chef" image={Chef1} />
                    <ChefCard name="Sarah Johnson" post="Patissier" image={Chef2} />
                    <ChefCard name="William Anderson" post="Cook" image={Chef3} />
                </div>

                <div className='flex flex-col gap-4 py-20 bg-zinc-900 w-full'>
                    <ContactListItem title="Location" description="A108 Adam Street, New York, NY 535022" icon={<MapPin />} />
                    <ContactListItem title="Call Us" description="+1 5589 55488 55" icon={<Phone />} />
                    <ContactListItem title="Email Us" description="info@example.com" icon={<Mail />} />
                </div>

            </div>
        </div>
    )
}

export default App
