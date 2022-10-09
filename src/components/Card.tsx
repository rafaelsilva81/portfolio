import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import { ProjectDTO } from '../dtos/ProjectDTO'


export const Card = (props: ProjectDTO) => {

    const navigate = useNavigate()

    const { _id, title, short_description: shortDescription, image, tags, qtdTags = 2 } = props;


    let imageUrl;

    const coverImage = image.key
    imageUrl = `https://portfolioapi-rafaelsilva81.herokuapp.com/public/${coverImage}`;


    const handleClick = () => {
        navigate(`/projects/${_id}`)
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -100 }
            }}
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
            }}
        >


            <div id="projectCard" className='cursor-pointer mb-2' onClick={handleClick}>
                <div className="flex flex-col bg-neutral-200 rounded-t-md h-64">
                    {/* Grid with project info and image */}
                    <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 h-full">
                        {/* Project info with padding */}
                        <div className="flex flex-col justify-center p-4 col-span-1 order-2 md:order-1 py-2">
                            <h2 className="text-4xl font-bold text-indigo-700 break-words md:my-2"> {title} </h2>
                            <p className="text-xl text-neutral-900 md:mb-4"> {shortDescription} </p>
                        </div>
                        <div className="flex justify-center items-center m-0 col-span-1 order-1 md:order-2">
                            {/* Contain img inside card */}
                            <div className="w-full h-full bg-cover bg-center mr-0 md:rounded-t-none md:rounded-tr-md rounded-t-md " style={{ backgroundImage: `url(${imageUrl})` }} />
                        </div>
                    </div>
                </div>
                {/* Add tags below card */}
                <div className="flex flex-row justify-start items-center rounded-b-md bg-indigo-700 p-2">
                    <span className="text-lg text-neutral-200 font-bold mx-2"> {`< Tags />`} </span>
                    {/* Badges for tags */}
                    {tags.map((tag: string, idx: number) => {
                        if (idx < qtdTags) {
                            return (
                                <span key={tag} className="text-lg text-neutral-200 font-bold px-2 bg-neutral-800 mx-1 rounded-md"> {tag} </span>
                            );
                        }
                    })}
                    {tags.length - 3 > 0 && <span className="text-lg text-neutral-200 font-bold px-2 bg-neutral-800 mx-1 rounded-md"> + {tags.length - qtdTags} </span>}
                </div>
            </div>
        </motion.div>
    )
}
