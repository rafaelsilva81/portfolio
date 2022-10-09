import React from 'react'
import { ts, js, python, node, react, firebase, html, css, tailwind, mongo, pgsql, ionic, git, bootstrap, php } from '../../../assets/TechnologiesList'
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
                    <p className="text-xl text-neutral-200 mb-8"> Those are the Programming Languages and Technologies I'm currently working with the most:  </p>
                </div>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                    visible: { x: 0, opacity: 1 },
                    hidden: { x: -100, opacity: 0 },
                }}>
                <div className="grid grid-cols-3 md:grid-cols-12 gap-4">
                    <TechnologyIcon icon={ts} name="Typescript" />
                    <TechnologyIcon icon={node} name="NodeJS" bg />
                    <TechnologyIcon icon={react} name="ReactJS" />
                    <TechnologyIcon icon={firebase} name="Firebase" bg />
                    <TechnologyIcon icon={mongo} name="MongoDB" bg />
                    <TechnologyIcon icon={tailwind} name="Tailwind" bg />
                </div>
            </motion.div>
            <p className="text-lg text-neutral-200 mt-4"> I used almost all of those for this portfolio! (Except for Firebase).
                Everything you see here was built in React using Typescript and Tailwind CSS. <br />
                The projects you're gonna see next were grabbed using an API built in NodeJS (Express) using MongoDB as the database. <br />
                <strong>  But I know a lot more stuff and I'm always learning something new! </strong> </p>

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
