import React from 'react'
import { ts, js, python, node, react, firebase, html, css, tailwind, mongo, pgsql, ionic, git, bootstrap } from '../assets/Technologies'

export const Technologies = () => {
    return (
        <div id="technologies" className="p-10 md:p-20 overflow-auto">
            <div className="flex flex-col">
                <span className="text-indigo-700 text-3xl font-bold my-2"> {'< Technical Knowledge />'} </span>
                <h2 className="text-6xl font-bold text-neutral-200 mb-2 italic"> And what can you work with? </h2>
                <p className="text-xl text-neutral-200 mb-4"> Those are the Programming Languages and Technologies I'm currently working with the most:  </p>
            </div>

            <div className="flex mt-8">
                {/* list with the images of programming languages */}
                <div className="flex items-center">
                    <div className="flex flex-col mr-2 items-center justify-center">
                        <img src={js} alt="JSLogo" className="w-20 h-20 md:h-28 md:w-28 rounded-md" />
                        <span className="text-neutral-200 text-lg md:text-xl font-bold mt-1"> Javascript </span>
                    </div>
                    <div className="flex flex-col mx-2 items-center justify-center">
                        <img src={ts} alt="TSLogo" className="w-20 h-20 md:h-28 md:w-28 rounded-md" />
                        <span className="text-neutral-200 text-lg md:text-xl font-bold mt-1"> Typescript </span>
                    </div>
                    <div className="flex flex-col mx-2 items-center justify-center">
                        <img src={python} alt="Pylogo" className="w-20 h-20 md:h-28 md:w-28 bg-neutral-200 rounded-md" />
                        <span className="text-neutral-200 text-lg md:text-xl font-bold mt-1"> Python </span>
                    </div>
                </div>
            </div>

            <div className="flex mt-8 flex-wrap">
                {/* list with the images of programming languages */}
                <div className="flex items-center">
                    <div className="flex flex-col mr-2 items-center justify-center">
                        <img src={react} alt="ReactJS" className="w-12 h-12 md:w-20 md:h-20 rounded-md" />
                        <span className="text-neutral-200 text-sm md:text-md font-bold mt-1"> React </span>
                    </div>
                    <div className="flex flex-col mx-2 items-center justify-center">
                        <img src={node} alt="Node" className="w-12 h-12 md:w-20 md:h-20 rounded-md bg-neutral-200 p-1" />
                        <span className="text-neutral-200 text-sm md:text-md font-bold mt-1"> Node </span>
                    </div>
                    <div className="flex flex-col mx-2 items-center justify-center">
                        <img src={html} alt="HTML" className="w-12 h-12 md:w-20 md:h-20 rounded-md bg-zinc-800 p-1" />
                        <span className="text-neutral-200 text-sm md:text-md font-bold mt-1"> HTML5 </span>
                    </div>
                    <div className="flex flex-col mx-2 items-center justify-center">
                        <img src={css} alt="CSS" className="w-12 h-12 md:w-20 md:h-20 rounded-md bg-zinc-800 p-1" />
                        <span className="text-neutral-200 text-sm md:text-md font-bold mt-1"> CSS3 </span>
                    </div>
                    <div className="flex flex-col mx-2 items-center justify-center">
                        <img src={firebase} alt="Firebase" className="w-12 h-12 md:w-20 md:h-20 rounded-md bg-blue-500 p-1" />
                        <span className="text-neutral-200 text-sm md:text-md font-bold mt-1"> Firebase </span>
                    </div>
                    <div className="flex flex-col mx-2 items-center justify-center">
                        <img src={tailwind} alt="Tailwind" className="w-12 h-12 md:w-20 md:h-20 rounded-md bg-neutral-200 p-1" />
                        <span className="text-neutral-200 text-sm md:text-md font-bold mt-1"> TailwindCSS </span>
                    </div>
                    <div className="flex flex-col mx-2 items-center justify-center">
                        <img src={bootstrap} alt="Bootstrap" className="w-12 h-12 md:w-20 md:h-20 rounded-md" />
                        <span className="text-neutral-200 text-sm md:text-md font-bold mt-1"> Bootstrap </span>
                    </div>
                    <div className="flex flex-col mx-2 items-center justify-center">
                        <img src={pgsql} alt="Postgres" className="w-12 h-12 md:w-20 md:h-20 rounded-md bg-neutral-200 p-1" />
                        <span className="text-neutral-200 text-sm md:text-md font-bold mt-1"> PgSQL </span>
                    </div>
                    <div className="flex flex-col mx-2 items-center justify-center">
                        <img src={mongo} alt="Mongo" className="w-12 h-12 md:w-20 md:h-20 rounded-md bg-zinc-800 p-1" />
                        <span className="text-neutral-200 text-sm md:text-md font-bold mt-1"> MongoDB </span>
                    </div>
                    <div className="flex flex-col mx-2 items-center justify-center">
                        <img src={ionic} alt="Ionic" className="w-12 h-12 md:w-20 md:h-20 rounded-md bg-neutral-200 p-1" />
                        <span className="text-neutral-200 text-sm md:text-md font-bold mt-1"> Ionic </span>
                    </div>
                    <div className="flex flex-col mx-2 items-center justify-center">
                        <img src={git} alt="Git" className="w-12 h-12 md:w-20 md:h-20 rounded-md bg-neutral-200 p-1" />
                        <span className="text-neutral-200 text-sm md:text-md font-bold mt-1"> Git </span>
                    </div>
                </div>
            </div>

            <div className="flex mt-8 text-3xl font-bold text-neutral-200">
                ... But I'm always studiyng something new!
            </div>

        </div>
    )
}
