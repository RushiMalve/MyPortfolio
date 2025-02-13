import { Navbar, Hero, About, Experience, Tech, Works, Contact } from '../components'
import { StarsCanvas } from '../components/canvas/StarsCanvas'

export const Home = () => {
    return (
        <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar />
                <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
            </div>
        </div>
    )
}