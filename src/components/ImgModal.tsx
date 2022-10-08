import { useState } from 'react'
import { X } from 'phosphor-react'

export const ImgModal = (props: { image: string, show: boolean }) => {

    const { image, show } = props;

    const [showModal, setShowModal] = useState(show);

    const closeModal = () => {
        setShowModal(false);
    }

    console.log(showModal)

    /* Add event to trigger on click outside modal */
    const handleOutsideClick = (e: any) => {
        if (e.target.id === 'modal') closeModal();
    }

    return (
        /* Simple modal for fullscreen image */
        <div className={`fixed top-0 left-0 w-full h-full bg-neutral-900 z-50 ${showModal ? 'flex' : 'hidden'}`} >
            {/* Close button on top right */}
            <button className="absolute top-0 right-0 m-4 text-neutral-100" onClick={closeModal}>
                <X size={24} />
            </button>
            {/* Image */}
            <div className="m-auto">
                <img src={image} alt="project" className="w-full h-full" />
            </div>
        </div>
    )
}
