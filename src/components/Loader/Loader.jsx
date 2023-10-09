import React from 'react'

function Loader() {
  return (
    <div className="flex gap-2">
        <div className="w-5 h-5 rounded-full animate-pulse bg-[#3D8361]"></div>
        <div className="w-5 h-5 rounded-full animate-pulse bg-[#3D8361]"></div>
        <div className="w-5 h-5 rounded-full animate-pulse bg-[#3D8361]"></div>
    </div>
  )
}

export default Loader