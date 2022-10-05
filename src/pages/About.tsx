import { motion } from 'framer-motion'

export const About = () => {
    return (
        <div id="about">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-1 p-10 md:p-20">
                <div className="flex col-span-1 md:col-span-2 flex-col justify-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        variants={{
                            visible: { x: 0, opacity: 1 },
                            hidden: { x: -100, opacity: 0 },
                        }}>
                        <span className="text-indigo-700 text-3xl font-bold my-2"> {'< About />'} </span>
                        <h2 className="text-6xl font-bold text-neutral-200 mb-2 italic"> But who are you? </h2>
                        <p className="text-xl text-neutral-200 mb-4"> Currently a Computer Science student, Tech enthusiast and Web developer. <br /> Well, I've already said that, but it's just a good way to summarize it! </p>
                        <p className="text-xl text-neutral-200 mb-4">
                            I've been using computers ever since I was a kid, and my interest for programming began with the desire to make my own games.
                            Then I entered an IT course on my high school. After finishing it, I've entered the Computer Science course in Brazil at the <a href="https://www.ufc.br/" rel="noopener noreferrer" target="_blank" className="font-bold text-indigo-500">Federal University of Ceará </a> (UFC)
                        </p>
                        <p className="text-xl text-neutral-200">
                            I've been working as a freelancer for a while now, but I want to take my career to the next level. That's why I'm currently looking for an internship or a junior position, so if you have any opportunities, please contact me!
                        </p>
                        {/* Buttons for resume (in portuguese and english) */}
                        <div className="flex mt-4">
                            {/* resume button */}
                            <a href="#" target="_blank" rel="noreferrer">
                                <button className="bg-indigo-700 text-neutral-200 px-4 py-2 rounded-md hover:bg-indigo-600 transition ease-in-out">
                                    Resume (PT-BR)
                                </button>
                            </a>
                            {/* resume button */}
                            <a href="#" target="_blank" rel="noreferrer" className="mx-3">
                                <button className="bg-indigo-700 text-neutral-200 px-4 py-2 rounded-md hover:bg-indigo-600 transition ease-in-out">
                                    Resume (EN)
                                </button>
                            </a>
                        </div>
                    </motion.div >
                </div>


                <div className="flex col-span-1 md:col-span-2 justify-center mt-4 md:mb-0">
                    {/* Não sei oq colocar aq ainda :v */}
                </div>
            </div>
        </div >
    )
}
