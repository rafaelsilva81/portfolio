import React from 'react'
import { ts, js, python, node, react, firebase, html, css, tailwind, mongo, pgsql, ionic, git, bootstrap } from '../assets/Technologies'
import { motion } from 'framer-motion'

export const Technologies = () => {
    return (
        <div id="technologies" className="p-10 md:p-20 overflow-auto">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                    visible: { x: 0, opacity: 1 },
                    hidden: { x: -100, opacity: 0 },
                }}>
                <div className="flex flex-col">
                    <span className="text-indigo-700 text-3xl font-bold my-2"> {'< Technical Knowledge />'} </span>
                    <h2 className="text-6xl font-bold text-neutral-200 mb-2 italic"> And what can you work with? </h2>
                    <p className="text-xl text-neutral-200 mb-4"> Those are the Programming Languages and Technologies I'm currently working with the most:  </p>
                </div>
            </motion.div>

            <div className="flex mt-8">
                {/* list with the images of programming languages */}
                <div className="flex items-center">
                    <TechnologyIcon icon={ts} name="Typescript" large />
                    <TechnologyIcon icon={js} name="Javascript" large />
                    <TechnologyIcon icon={python} name="Python" large bg />
                </div>
            </div>

            <div className="flex mt-8 flex-wrap">
                {/* list with the images of programming languages */}
                <div className="flex items-center">
                    <TechnologyIcon icon={node} name="NodeJS" bg />
                    <TechnologyIcon icon={react} name="ReactJS" />
                    <TechnologyIcon icon={firebase} name="Firebase" bg />
                    <TechnologyIcon icon={html} name="HTML" bg />
                    <TechnologyIcon icon={css} name="CSS" bg />
                    <TechnologyIcon icon={tailwind} name="TailwindCSS" bg />
                    <TechnologyIcon icon={mongo} name="MongoDB" bg />
                    <TechnologyIcon icon={pgsql} name="PostgreSQL" bg />
                    <TechnologyIcon icon={ionic} name="Ionic" bg />
                    <TechnologyIcon icon={git} name="Git" bg />
                    <TechnologyIcon icon={bootstrap} name="Bootstrap" />
                </div>
            </div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                    visible: { x: 0, opacity: 1 },
                    hidden: { x: -100, opacity: 0 },
                }}>
                <div className="flex mt-8 text-3xl font-bold text-neutral-200">
                    ... But I'm always studiyng something new!
                </div>
            </motion.div>

        </div>
    )
}


const TechnologyIcon = (props: { icon: string, name: string, large?: boolean, bg?: boolean }) => {

    const { icon, name, large, bg } = props;
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
            }}
        >
            <div className="flex flex-col mx-2 items-center justify-center">
                {large ? (
                    <>
                        <img src={icon} alt={name} className={`w-20 h-20 md:h-28 md:w-28 rounded-md ${bg ? 'bg-neutral-200 p-1' : ''}`} />
                        <span className="text-neutral-200 text-lg md:text-xl font-bold mt-1"> {name} </span>
                    </>
                ) : (
                    <>
                        <img src={icon} alt={name} className={`w-12 h-12 md:h-20 md:w-20 rounded-md ${bg ? 'bg-neutral-200 p-1' : ''}`} />
                        <span className="text-neutral-200 text-sm md:text-md font-bold mt-1"> {name} </span>
                    </>
                )}
            </div>
        </motion.div>
    )
}