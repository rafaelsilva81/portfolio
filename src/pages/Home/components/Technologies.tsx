import React from 'react'
import { ts, js, python, node, react, firebase, html, css, tailwind, mongo, pgsql, ionic, git, bootstrap, php } from '../../../assets/Technologies'
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
                    <span className="text-indigo-700 text-3xl font-bold my-2"> {'< Tech Skills />'} </span>
                    <h2 className="text-6xl font-bold text-neutral-200 mb-2 italic"> And what can you work with? </h2>
                    <p className="text-xl text-neutral-200 mb-4"> Those are the Programming Languages and Technologies I'm currently working with the most:  </p>
                </div>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                    visible: { x: 0, opacity: 1 },
                    hidden: { x: -100, opacity: 0 },
                }}>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                    <TechnologyIcon icon={ts} name="Typescript" />
                    <TechnologyIcon icon={js} name="Javascript" />
                    <TechnologyIcon icon={node} name="NodeJS" bg />
                    <TechnologyIcon icon={react} name="ReactJS" />
                    <TechnologyIcon icon={firebase} name="Firebase" bg />
                    <TechnologyIcon icon={mongo} name="MongoDB" bg />
                    <TechnologyIcon icon={git} name="Git" bg />
                    <TechnologyIcon icon={tailwind} name="Tailwind" bg />
                    <TechnologyIcon icon={python} name="Python" bg />
                    <TechnologyIcon icon={php} name="PHP" bg />
                    <TechnologyIcon icon={ionic} name="Ionic" bg />
                    <TechnologyIcon icon={bootstrap} name="Bootstrap" />
                </div>
            </motion.div>
        </div>
    )
}

const TechnologyIcon = (props: { icon: string, name: string, large?: boolean, bg?: boolean }) => {

    const { icon, name, large, bg } = props;
    return (
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
    )
}
