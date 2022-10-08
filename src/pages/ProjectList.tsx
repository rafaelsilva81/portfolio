import React, { useEffect, useState } from 'react'
import api from '../services/api'
import { motion } from 'framer-motion'
import { Card } from '../components/Card'
import { Loading } from './Home/components/Loading'

interface Project {
  _id: string,
  title: string,
  description: string,
  short_description: string,
  image: {
    key: string
    mimetype: string
    filename: string
    bucket: string
  }
  tags: string[],
  github?: string,
  link?: string
  completed: boolean
}


export const ProjectList = () => {

  const [projectData, setProjectData] = useState<Project[] | undefined>(undefined);
  useEffect(() => {
    api
      .get(`/projects`)
      .then(({ data }) => {
        /* console.log(data) */
        setProjectData(data);
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
    //setProjectData(offlineData);
  }, []);

  return (
    <div id="project-list" className='bg-neutral-900 p-10 md:p-24'>
      {
        projectData ? (
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
              <span className="text-indigo-700 text-4xl font-bold my-2"> {'< Project List />'} </span>
              <p className="text-3xl text-neutral-200 mb-4 font-bold mt-2"> Here are all my projects! </p>
            </motion.div >

            {/* Map projects into cards (use flex)*/}
            <div className="flex flex-col md:flex-row flex-wrap">
              {
                projectData.map((project: Project, index) => (
                  <div key={project._id} className="w-full md:w-[30%] p-2 mr-4"><Card {...project} /></div>
                ))
              }
            </div>
          </div>
        ) : (
          <Loading />
        )
      }
    </div>

  )
}
