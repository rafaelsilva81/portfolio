import React from 'react'

interface Props {
    children: React.ReactNode
}
/* receive children */
export const Layout = (props: Props) => {
    const { children } = props;
    return (
        <div className='min-h-screen bg-neutral-900'>
            {/* put children */}
            {children}
        </div>
    )
}