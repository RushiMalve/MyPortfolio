import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

export const TechComponent = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-20">
            {technologies.map((technology) => {
                return (
                    <div>
                        <div className="w-28 h-28 rounded-full bg-white p-4" key={technology.name}>
                            <img src={technology.icon} alt={technology.name}
                                className="w-[100%] h-[100%] object-contain" />
                        </div>
                        <p className="mt-4 text-white text-[14px] justify-center text-center">{technology.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

{/* @ts-ignore */ }
export const Tech = SectionWrapper(TechComponent, "")