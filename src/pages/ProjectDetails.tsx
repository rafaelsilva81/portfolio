import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../services/api';
import parse from 'html-react-parser';
import { Loading } from './Home/components/Loading';
import { ArrowSquareUpRight } from 'phosphor-react'
import { FaGithub } from 'react-icons/fa'

import '../styles/disableScroll.css'

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

const PUBLIC_URL = 'https://portfolioapi-rafaelsilva81.herokuapp.com/public/';

export const ProjectDetails = () => {

  /* Get query params */
  const { id } = useParams();

  /* console.log(id) */

  const [projectData, setProjectData] = useState<Project>();
  useEffect(() => {
    api
      .get(`/projects/${id}`)
      .then(({ data }) => {
        /* console.log(data) */
        setProjectData(data);
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
    //setProjectData(offlineData);
  }, []);

  const { title, description, short_description, images, tags, github, link, completed } = projectData || {};


  return (
    /* grid with flex having text on the left and img on the right */
    <div className="h-screen w-full bg-neutral-900">
      {
        projectData ? (
          <>
            <div className="flex flex-col md:flex-row h-full w-full overflow-hidden">

              {/* Left half */}
              <div className="flex flex-col justify-center items-center md:items-start md:w-2/3 p-10 md:p-0 md:pl-24 md:pr-12">
                <span className="text-indigo-700 text-3xl font-bold my-2"> {'< Project />'} </span>
                <h2 className="text-6xl font-bold text-neutral-200 mb-2"> {title} </h2>
                <p className="text-xl text-neutral-200 mb-4 description-content"> {description ? parse(description) : ''} </p>
                {/* Add images */}
                <div className="flex flex-row flex-wrap w-full">
                  {
                    images &&
                    images.key.map((image: string) => (
                      /* Contain all images inside container, dont go over 100% height */
                      <div className={`w-1/2 h-full pr-3 md:w-1/3`} > {/* Render 3 images on md and only 2 on mobile */}
                        <div className="max-h-full max-w-full w-96 h-96 bg-cover bg-center border-neutral-200 border-2" style={{ backgroundImage: `url(${PUBLIC_URL}${encodeURIComponent(image)})` }} />
                      </div>
                    ))
                  }
                </div>
              </div>

              {/* Right half */}
              <div className="flex flex-col justify-center items-center md:items-end md:w-1/3 pr-10 md:pr-24 border-neutral-200 border-opacity-30 border-t-2 md:border-t-0 md:border-l-2">
                <div className="flex flex-col flex-wrap mb-4">
                  <span className="text-lg text-neutral-200 font-bold py-1 text-start md:text-end mr-3"> Status : </span>
                  <StatusTag completed={completed} />
                </div>
                <div className="flex flex-col flex-wrap mb-4">
                  <span className="text-lg text-neutral-200 font-bold py-1 text-start md:text-end mr-3"> Tags : </span>
                  <div className="flex flex-row flex-wrap">
                    {
                      tags?.map((tag, index) => (
                        <span key={index} className="text-lg text-neutral-200 font-bold px-2 py-1 bg-indigo-700 mx-1 rounded-md"> {tag} </span>
                      ))
                    }
                  </div>
                </div>
                <div className="flex flex-col flex-wrap mb-4">
                  <span className="text-lg text-neutral-200 font-bold py-1 text-start md:text-end mr-3"> Links : </span>
                  <div className="flex flex-row">

                    {/* github button, disabled if doesnt exist */}
                    <button disabled={github ? false : true} className="disabled:opacity-50 disabled:pointer-events-none">
                      <a href={github} className="flex bg-neutral-800 rounded-md mx-1">
                        <span className="flex flex-row items-center justify-center text-lg text-neutral-200 font-bold p-2 hover:text-indigo-600 transition ease-in-out"> <FaGithub className="mr-2 text-2xl" /> Github </span>
                      </a>
                    </button>
                    <button disabled={link ? false : true} className="disabled:opacity-50 disabled:pointer-events-none">
                      <a href={link} className="flex bg-neutral-800 rounded-md mx-1">
                        <span className="flex flex-row items-center justify-center text-lg text-neutral-200 font-bold p-2 hover:text-indigo-600 transition ease-in-out"> <ArrowSquareUpRight className="mr-2 text-2xl" /> Direct Link </span>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) :
          (
            /* Loading */
            <Loading />
          )
      }

    </div >
  )
}


const StatusTag = (props: { completed?: boolean }) => {
  const { completed = true } = props;
  return (
    <>
      {completed ? (
        <span className="text-lg text-neutral-200 font-bold px-2 py-1 bg-green-700 mx-1 rounded-md"> Completed </span>
      ) : (
        <span className="text-lg text-neutral-200 font-bold px-2 py-1 bg-yellow-600 mx-1 rounded-md"> In development </span>
      )}
    </>
  )
}