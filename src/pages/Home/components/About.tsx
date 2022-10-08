import { motion } from 'framer-motion'

export const About = () => {
    return (

        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 p-10 md:p-20" id="about">
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
                    <p className="text-xl text-neutral-200 mb-4">
                        I'm a 20 years old developer from Brazil, currently studying <span className='font-bold text-indigo-600'> Computer Science</span> at the Federal University of Ceara. I'm <span className='font-bold text-indigo-600'> passionate</span> about technology and I love to learn new things.
                    </p>
                    <p className="text-xl text-neutral-200 mb-4">
                        I don't think I can say I dominate any technology but I'm more than confident to say that I'm a
                        <span className='font-bold text-indigo-600'> problem solver</span>,
                        a fast learner that<span className='font-bold text-indigo-600'> knows how to search for solutions</span>, and I'm always
                        <span className='font-bold text-indigo-600'> willing to learn</span>.
                    </p>
                    <p className="text-xl text-neutral-200">
                        I've worked as a Freelancer before, but I want to <span className='font-bold text-indigo-600'> take my career to the next level</span>. That's why I'm currently looking for an internship or a junior position, so if you have any opportunities, <span className='font-bold text-indigo-600'> please let me know</span>!
                    </p>
                    {/* Buttons for resume (in portuguese and english) */}
                    <div className="flex mt-4">
                        <a href="#" target="_blank" rel="noreferrer">
                            <button className="bg-indigo-700 text-neutral-200 px-4 py-2 rounded-md hover:bg-indigo-600 transition ease-in-out">
                                Resume (EN)
                            </button>
                        </a>
                        <a href="#" target="_blank" rel="noreferrer" className="mx-3">
                            <button className="bg-indigo-700 text-neutral-200 px-4 py-2 rounded-md hover:bg-indigo-600 transition ease-in-out">
                                Resume (PT-BR)
                            </button>
                        </a>
                    </div>
                </motion.div >
            </div>


            <div className="flex col-span-1 md:col-span-2 justify-center mt-4 md:mb-0">
                {/* Não sei oq colocar aq ainda :v */}
            </div>
        </div >

    )
}
