import React from 'react'

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex gap-2 items-center">
            <div className="w-5 h-5 rounded-full animate-pulse bg-[#3D8361]"></div>
            <div className="w-5 h-5 rounded-full animate-pulse bg-[#3D8361]"></div>
            <div className="w-5 h-5 rounded-full animate-pulse bg-[#3D8361]"></div>
        </div>
    </div>
  )
}

export default Loader