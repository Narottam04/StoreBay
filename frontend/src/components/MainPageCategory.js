import React from 'react'

function MainPageCategory() {
    return (
         <div className = "relative" id = "services">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 relative">
          {/* our services */}
          <div className = "flex flex-col md:flex-row  md:gap-8 ">
            <div className = "bg-black  rounded-xl flex flex-col justify-center items-center">
              <img  src="https://source.unsplash.com/zXCDDLA49c8" alt="" srcset="" className = "w-full h-full"/>
              {/* <h2 className = "text-white uppercase font-bold text-center pb-8 md:pb-0">Personal Finance Management</h2> */}
            </div>
            <div>
              <div className = "bg-black  rounded-xl flex flex-col justify-center items-center mt-8  md:mt-0">
                <img  src="https://source.unsplash.com/dlxLGIy-2VU" alt="" srcset=""  className = "w-full"/>
                {/* <h2 className = "text-white uppercase font-bold pb-8 text-center">Stock Overview</h2> */}
              </div>
              <div className = "bg-black rounded-xl mt-8 flex flex-col justify-center items-center">
                <img  src="https://source.unsplash.com/EhTcC9sYXsw" alt="" srcset=""  className = "w-full"/>
                 {/* <h2 className = "text-white uppercase font-bold pb-8 text-center">Stock Overview</h2> */}
              </div>
            </div>
            <div>
              <div className = "bg-black  rounded-xl flex flex-col justify-center items-center mt-8 md:mt-0">
                <img  src="https://source.unsplash.com/EhTcC9sYXsw" alt="" srcset=""  className = "w-full"/>
                {/* <h2 className = "text-white uppercase font-bold pb-8 text-center ">Financial News</h2> */}
              </div>
              <div className = "bg-black  rounded-xl mt-8 flex flex-col justify-center items-center">
                <img  src="https://source.unsplash.com/EhTcC9sYXsw" alt="" srcset=""  className = "w-full"/>
                {/* <h2 className = "text-white uppercase font-bold pb-8 text-center">Financial Knowledge</h2> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default MainPageCategory
