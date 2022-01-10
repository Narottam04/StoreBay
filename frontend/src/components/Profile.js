import React from 'react'
import Product from './Product'

function Profile() {
    return (
        <>
        
        <div class="top h-64 w-full bg-blue-600 overflow-hidden relative" >
            <img src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" class="bg w-full h-full object-cover object-center absolute z-0" />
                <div class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" class="h-24 w-24 object-cover rounded-full" />
                        <h1 class="text-2xl font-semibold">Antonia Howell</h1>
                        <h4 class="text-sm font-semibold">Joined Since '19</h4>
                </div>
        </div>
        <div class="min-h-full bg-gray-300 dark:bg-gray-900 py-6 flex flex-col justify-center sm:py-12">
  <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-4">
    
    <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
      <div class="flex flex-col justify-center">
        <p class="text-gray-900 dark:text-gray-300 font-semibold">Your Orders</p>
      </div>
    </div>
  
    <div class="bg-gray-100 border-red-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-red-400 dark:hover:bg-red-600 hover:border-transparent | transition-colors duration-500">
      <div class="flex flex-col justify-center">
        <p class="text-gray-900 dark:text-gray-300 font-semibold">Buy Again</p>
      </div>
    </div>
   
    <div class="bg-gray-100 border-yellow-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-yellow-400 dark:hover:bg-yellow-600 hover:border-transparent | transition-colors duration-500">
      <div class="flex flex-col justify-center">
        <p class="text-gray-900 dark:text-gray-300 font-semibold">Your Account</p>
      </div>
    </div>
   
    <div class="bg-gray-100 border-green-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-green-400 dark:hover:bg-green-600 hover:border-transparent | transition-colors duration-500">
      <div class="flex flex-col justify-center">
        <p class="text-gray-900 dark:text-gray-300 font-semibold">Your Wish List</p>
      </div>
    </div>
    
  </div>
</div>

<div class="flex justify-center">
<form class="bg-white w-1/2">
			<h1 class="text-gray-800 font-bold text-2xl mb-1">More Information!</h1>
			<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd" />
				</svg>
				<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Full name" />
      </div>
					<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address" />
      </div>
						<div class="flex items-center border-2 py-2 px-3 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
							<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Password" />
      </div>
      <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 mt-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
						<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Confirm Password" />
      </div>
							<button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Update</button>
							<span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
		</form>
</div>

<div class="flex flex-col bg-white m-auto p-auto">
<h1
        class="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-20 md:mx-20 mx-5 font-bold text-4xl text-gray-800"
      >
        Your Orders
      </h1>
      <div
        class="flex overflow-x-scroll pb-10 hide-scroll-bar"
      >
        <div
          class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
        >
          <div class="inline-block px-3">
            <div
              class="w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
        </div>
      </div>
</div>
</>
    )
}

export default Profile
