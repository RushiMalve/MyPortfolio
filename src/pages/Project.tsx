import { useEffect } from 'react'
import { styles } from '../styles'
import { projects } from '../constants'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi"
import { IconContext } from 'react-icons'

export const Project = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const index = parseInt(id!, 10) !== -1 ? parseInt(id!, 10) : 0;
    const project = projects[index];
    const { name, description, tags, image, source_code_link, live_link } = project;

    const handleBack = () => {
        navigate("/")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <div className={`mx-auto h-full w-full ${styles.padding} max-w-7xl mx-auto relative z-0`}>
                    <div>
                        <div className="flex flex-row items-center">
                            <IconContext.Provider value={{ size: "1.5rem" }}>
                                <div onClick={handleBack} className="cursor-pointer">
                                    <FiArrowLeft />
                                </div>
                            </IconContext.Provider>
                            <p className="ml-4">
                                Back
                            </p>
                        </div>
                        <div className='mt-5 pl-8'>
                            <div className="flex flex-col items-start">
                                <p className="text-white text-[24px]">{name}</p>
                                <div className="mt-5">
                                    <img src={image} alt="project" className="w-full h-1/4 rounded-md" />
                                </div>
                                <div className="mt-5">
                                    <p className="text-white text-[18px]">Description:</p>
                                    <p className="text-white text-[16px] mt-2 whitespace-pre-line">{description}</p>
                                </div>
                                <div className="mt-5">
                                    <p className="text-white text-[18px]">Skills Acquired:</p>
                                    <div className='mt-2 flex flex-wrap gap-2'>
                                        {tags.map((tag) => (
                                            <p
                                                key={`${name}-${tag.name}`}
                                                className={`text-[16px] text-white`}
                                            >
                                                {tag.name}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                {live_link !== undefined ? (
                                    <div className="mt-5">
                                        {/* <p className="text-white text-[18px]">Live Demo:</p> */}
                                        <Link to="" onClick={() => { window.open(live_link, "_blank") }} title="Click here">
                                            <p className="text-blue-400 text-[16px]">View Live Demo</p>
                                        </Link>
                                        {/* <p className="text-white text-[16px] mt-2">{live_link}</p> */}
                                    </div>
                                ) : null}
                                <div className="mt-5">
                                    {/* <p className="text-white text-[18px]">Source Code:</p> */}
                                    <Link to="" onClick={() => { window.open(source_code_link, "_blank") }} title="Click here">
                                        <p className="text-blue-400 text-[16px]">View Source Code</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
