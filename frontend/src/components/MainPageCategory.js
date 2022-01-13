import React from 'react'

function MainPageCategory() {
    return (
         <div className = "relative" id = "services">

           <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6">
            <div className="max-w-xl mb-0 md:mx-auto sm:text-center lg:max-w-2xl md:mb-0">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <span className="relative text-black">Shop by Categories</span>
                </span>{' '}
              </h2>
            </div>
          </div>

        <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 relative">
          <div className = "flex flex-col md:flex-row  md:gap-8 ">
            <div className = "bg-black  rounded-xl flex flex-col justify-center items-center">
              <img  src="https://source.unsplash.com/zXCDDLA49c8" alt="" srcset="" className = "w-full h-full"/>
            </div>
            <div>
              <div className = "bg-black  rounded-xl flex flex-col justify-center items-center mt-8  md:mt-0">
                <img  src="https://source.unsplash.com/dlxLGIy-2VU" alt="" srcset=""  className = "w-full"/>
              </div>
              <div className = "bg-black rounded-xl mt-8 flex flex-col justify-center items-center">
                <img  src="https://source.unsplash.com/BZybQC-zZwQ" alt="" srcset=""  className = "w-full"/>
              </div>
            </div>
            <div>
              <div className = "bg-black  rounded-xl flex flex-col justify-center items-center mt-8 md:mt-0">
                <img  src="https://source.unsplash.com/EhTcC9sYXsw" alt="" srcset=""  className = "w-full"/>
              </div>
              <div className = "bg-black  rounded-xl mt-8 flex flex-col justify-center items-center">
                <img  src="https://source.unsplash.com/Fh3Dtg6QX4Q" alt="" srcset=""  className = "w-full"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default MainPageCategory
