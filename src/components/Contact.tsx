import { useState, useRef, FormEvent } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

export const ContactComponent = () => {
    const formRef = useRef<HTMLFormElement>(null)
    const [form, setForm] = useState({ name: "", email: "", message: "" })
    const [loading, setLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        emailjs.send("service_j880cvu", "template_8rhzq8b",
            {
                from_name: form.name,
                to_name: "Rushikesh",
                from_email: form.email,
                to_email: "rushismalve02@gmail.com",
                message: form.message,

            },
            "xZNo8hc5T1r4Z5S50").then(() => {
                setLoading(false);
                alert("Thank you. I will get back to you as soon as possible")
                setForm({ name: "", email: "", message: "" })
            }, (_error) => {
                setLoading(false);
                alert("Something went wrong")
            })


    }

    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.7] bg-back-100 p-8 rounded-2xl">
                <p className={`${styles.sectionSubText}`}>
                    Get in touch
                </p>
                <h1 className={styles.sectionHeadText}>Contact.</h1>


                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Name</span>
                        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your Name?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Email</span>
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your Email?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Message</span>
                        <textarea
                            rows={7} name="message" value={form.message} onChange={handleChangeTextArea} placeholder="What's your message?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
                    </label>

                    <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>

            {/* <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
                <EarthCanvas />
            </motion.div> */}
        </div>
    )
}
{/* @ts-ignore */ }
export const Contact = SectionWrapper(ContactComponent, "contact")
