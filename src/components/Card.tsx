import React from 'react'

interface Props {
    _id: string,
    title: string,
    short_description: string,
    images: {
        key: string[]
        mimetype: string[]
        filename: []
        bucket: []
    }
    tags: string[],
    qtdTags?: number
}

export const Card = (props: any) => {

    const { _id, title, short_description: shortDescription, images, tags, qtdTags = 2 } = props;

    let imageUrl;

    const coverImage = images.key[0];
    imageUrl = `https://portfolioapi-rafaelsilva81.herokuapp.com/public/${coverImage}`;


    const handleClick = () => {
        console.log('clicked');
    };

    return (
        <div id="projectCard" className='cursor-pointer mb-2' onClick={handleClick}>
            <div className="flex flex-col bg-neutral-200 rounded-t-md">
                {/* Grid with project info and image */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Project info with padding */}
                    <div className="flex flex-col justify-center p-4">
                        <h2 className="text-4xl font-bold text-indigo-700 my-2"> {title} </h2>
                        <p className="text-xl text-neutral-900 mb-4"> {shortDescription} </p>
                    </div>
                    <div className="flex justify-center items-center m-0">
                        {/* Contain img inside card */}
                        <div className="w-full h-full bg-cover bg-center mr-0 md:mr-1" style={{ backgroundImage: `url(${imageUrl})` }} />
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
                            <span className="text-lg text-neutral-200 font-bold px-2 bg-neutral-800 mx-1 rounded-md"> {tag} </span>
                        );
                    }
                })}
                {tags.length - 3 > 0 && <span className="text-lg text-neutral-200 font-bold px-2 bg-neutral-800 mx-1 rounded-md"> + {tags.length - qtdTags} </span>}
            </div>
        </div>
    )
}
