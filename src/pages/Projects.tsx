import { useEffect, useState } from 'react'
import { ArrowRight } from 'phosphor-react'
import { Card } from '../components/Card';
import api from '../services/api';
import { motion } from 'framer-motion'

interface Project {
    _id: string,
    title: string,
    description: string,
    short_description: string,
    images: {
        key: string[]
        mimetype: string[]
        filename: []
        bucket: []
    }
    tags: string[],
    github?: string,
    link?: string
    completed: boolean
}

export const Projects = () => {

    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        api
            .get('/projects?max=3')
            .then(({ data }) => {
                console.log(data)
                setProjectData(data);
            })
            .catch((err) => {
                console.error('ops! ocorreu um erro' + err);
            });
        //setProjectData(offlineData);
    }, []);


    return (
        <div id="projects" className="p-10 md:p-24 bg-neutral-900">
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
                    <span className="text-indigo-700 text-3xl font-bold my-2"> {'< Projects />'} </span>
                    <h2 className="text-6xl font-bold text-neutral-200 mb-2 italic"> "Talk is cheap, show me the Code" </h2>
                    <p className="text-xl text-neutral-200 mb-4"> Here are some of my projects, you can click on any to have more details! </p>
                </div>
            </motion.div>

            {/* Grid with 3 columns, only 1 column on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {/* Card component */}
                {/* Will only show 1 if mobile */}
                {projectData.map((project: Project, idx) => {
                    return (
                        <Card key={idx} {...project} />
                    );
                })}
            </div>

            {/* Call to action to see more */}
            <div className="flex justify-center items-center mt-6">
                <a href="/projects" className="text-2xl bg-neutral-200 text-indigo-700 hover:bg-indigo-700 hover:text-neutral-200 transition ease-in-out font-bold my-2 rounded-md flex items-center p-4"> See all projects  <ArrowRight size={24} className="ml-2" /> </a>
            </div>
        </div>
    )
}
