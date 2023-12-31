export function ProgressDefault({ value }: { value: number }) {
    return (
        <div className="flex items-center mt-5">
            <div className="flex items-center text-teal-600 relative ml-3">
                <div className="rounded-full transition duration-500 ease-in-out h-5 w-5 border-2 border-teal-600">
                </div>
            </div>
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
            <div className="flex items-center text-white relative">
                <div className="rounded-full transition duration-500 ease-in-out h-5 w-5 border-2 border-teal-600 ">
                </div>
            </div>
            <div className={`flex-auto border-t-2  transition duration-500 ease-in-out ${value == 3 ? "border-teal-600" : "border-gray-300"} `}></div>
            <div className="flex items-center mr-3 text-gray-500 relative">
                <div className={`rounded-full transition duration-500 ease-in-out h-5 w-5 border-2 ${value == 3 ? "border-teal-600" : "border-gray-300"}`}>
                </div>
            </div>
            {/* <div className={`flex-auto border-t-2  transition duration-500 ease-in-out ${value == 4 ? "border-teal-600" : "border-gray-300"} `}></div>
            <div className="flex items-center mr-3 text-gray-500 relative">
                <div className={`rounded-full transition duration-500 ease-in-out h-5 w-5 border-2 ${value == 4 ? "border-teal-600" : "border-gray-300"}`}>
                </div>
            </div> */}
        </div>
    )
}
