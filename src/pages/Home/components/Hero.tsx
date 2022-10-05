import React from 'react'
import photo from '../../../assets/images/placeholder.webp'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

export const Hero = () => {
    return (
            /* grid with flex having text on the left and img on the right */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 p-10 md:p-20" id="hero">
                <div className="flex order-2 md:order-1 col-span-2 flex-col justify-center">
                    <motion.div initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        variants={{
                            visible: { x: 0, opacity: 1 },
                            hidden: { x: -100, opacity: 0 },
                        }}>
                        <span className="text-indigo-700 text-3xl font-bold my-2"> {'< Hi! My name is />'} </span>
                        <h2 className="text-7xl font-bold text-neutral-200 mb-1 italic"> Rafael Galdino da Silva </h2>
                        <p className="text-xl text-neutral-200">Computer Science student, Tech enthusiast and Web developer.</p>

                        {/* Social icons */}
                        <SocialIcons />
                    </motion.div >
                </div>
                {/* invert order on mobile */}
                <div className="flex order-1 col-span-1 justify-center mb-2 md:mb-0">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        variants={{
                            visible: { opacity: 1 },
                            hidden: { opacity: 0 },
                        }}>
                        <img src={photo} alt="Rafael" />
                    </motion.div>
                </div>
            </div>
   
    )
}

const SocialIcons = () => {
    return (
        <div className="flex mt-4">
            <a href="https://github.com/rafaelsilva81" target="_blank" rel="noreferrer">
                <FaGithub className="text-5xl text-neutral-200 mx-2 hover:text-indigo-600 transition ease-in-out" />
            </a>
            <a href="https://www.linkedin.com/in/rafael-galdino-da-silva-1a1b3b1b9/" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-5xl text-neutral-200 mx-2 hover:text-indigo-600 transition ease-in-out" />
            </a>
            <a href="https://www.instagram.com/rafaelgaldinodasilva/" target="_blank" rel="noreferrer">
                <FaInstagram className="text-5xl text-neutral-200 mx-2 hover:text-indigo-600 transition ease-in-out" />
            </a>
            <a href="mailto:rafaelgaldinosilva81@gmail.com" target="_blank" rel="noreferrer">
                <FaEnvelope className="text-5xl text-neutral-200 mx-2 hover:text-indigo-600 transition ease-in-out" />
            </a>
        </div>
    )
}