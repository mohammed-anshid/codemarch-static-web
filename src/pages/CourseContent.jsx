import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { useSelector } from 'react-redux'

const CourseContent = () => {
    const { content } = useSelector((state) => state.contentInfo)
    console.log(content,'from redux')

    const useChildren = true;

  return (
    <> 
        <Sidebar useChildren={useChildren} state={{}} >
            <main className="content-main  w-full max-h-full flex flex-grow flex-col transition-all duration-150 ease-in-out md:ml-0" >
                <div className="flex h-full w-full p-5 text-center justify-center shadow-md" style={{background:'linear-gradient(180deg, #003229 0%, #00201A 100%)'}}>
                    <div className="w-full pt-16 p-4 ">
                        <div className="content-show h-[83vh] overflow-y-scroll text-start md:px-20">
                            <div className="">
                                <h2 className='text-[#EDF1E4] text-2xl sm:text-3xl md:text-5xl font-bold header'>{content?.title}</h2>
                                <p className='text-[#D7CEA5] font-semibold md:font-bold text-sm md:text-base mt-5 md:mt-10 leading-8 lg:leading-9'>
                                    {content?.content}
                                </p>
                                {
                                    content?.media.map((media)=> {
                                        return (
                                            <div className="content-img mt-10 ">
                                                <img src={media?.url} alt="" className='' />
                                            </div>
                                        )
                                    })
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Sidebar>
    </>
  )
}

export default CourseContent