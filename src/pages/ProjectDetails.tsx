import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../services/api';


export const ProjectDetails = () => {

  /* Get query params */
  const {id} = useParams();

  console.log(id)

  const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        api
            .get(`/projects/${id}`)
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
    /* grid with flex having text on the left and img on the right */
    <div className="h-screen w-full bg-neutral-900">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 p-10 md:p-20" id="hero">
        <div className="flex col-span-2 flex-col justify-center">
          <span className="text-indigo-700 text-3xl font-bold my-2"> {'< Project />'} </span>
          <h2 className="text-7xl font-bold text-neutral-200 mb-1"> Test </h2>
          <p className="text-xl text-neutral-200"> Description </p>

        </div>
        {/* invert order on mobile */}
        <div className="flex col-span-1 justify-end mb-2 md:mb-0 border-t-2 border-neutral-200 md:border-l-2 md:border-t-0 border-opacity-50">
              <span className="text-lg font-bold text-end text-neutral-200"> Status: <StatusTag completed={true}/> </span> 
        </div>
      </div>
    </div>
  )
}


const StatusTag = (props: {completed: boolean}) => {
    const {completed} = props;
    return (
     <>
      {completed? (
         <span className="text-lg text-neutral-200 font-bold px-2 py-1 bg-green-700 mx-1 rounded-md"> Completed </span>
      ) : (
        <span className="text-lg text-neutral-200 font-bold px-2 py-1 bg-red-700 mx-1 rounded-md"> In development </span>
      )}
     </>
    )
}