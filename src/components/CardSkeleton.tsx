
export const CardSkeleton = () => {
    return (
        <>
            <div className="w-full p-2 mr-4">
                <div className="bg-neutral-800 rounded-lg shadow-lg p-4">
                    <div className="animate-pulse flex flex-col">
                        <div className="flex-1 space-y-4 py-1">
                            <div className="h-4 bg-neutral-700 rounded w-3/4"></div>
                            <div className="space-y-2">
                                <div className="h-4 bg-neutral-700 rounded"></div>

                                <div className="flex items-center space-x-2">
                                    <div className="h-4 bg-neutral-700 rounded"></div>
                                    <div className="h-4 bg-neutral-700 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
