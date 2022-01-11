import React,{useRef,useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { listMyOrders } from '../actions/orderActions'
import loader from '../components/Loader'


function Profile() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState()
    

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userDetails = useSelector(state => state.userDetails)
    const {loading, error,user} = userDetails
    
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const {success} = userUpdateProfile

    const orderListMy = useSelector(state => state.orderListMy)
    const {loading: lodaingOrders, error:errorOrders,orders} = orderListMy


    useEffect(() => {
      if(!userInfo) {
          navigate('/login')
      }
      else {
        if(!user.name){
          dispatch(getUserDetails('profile'))
          dispatch(listMyOrders())
        }
        else {

          setName(user.name)
          setEmail(user.email)
        }
      }
    }, [dispatch,userInfo,user])

      async function handleSubmit(e) {
        e.preventDefault()
        if(password !== confirmPassword){
            return setErrorMsg('Password do not match')
        }
        dispatch(updateUserProfile({id: user._id,name,email,password}))
      }
    return (
        <>
        <Navbar/>      
        <div class="top h-64 w-full bg-blue-600 overflow-hidden relative" >
            <img src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" class="bg w-full h-full object-cover object-center absolute z-0" />
                <div class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
                    <img src={`https://avatars.dicebear.com/api/initials/${user.name}.svg`} class="h-24 w-24 object-cover rounded-full" />
                        <h1 class="text-2xl font-semibold">{user.name}</h1>
                        <h1 class="text-md font-semibold">Email: {user.email}</h1>
                </div>
        </div>
        {/* <div class="min-h-full bg-gray-300 dark:bg-gray-900 py-6 flex flex-col justify-center sm:py-12">
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
        </div> */}
        {success && <p className = "">Profile has been updated successfully</p> }
        {errorMsg && <p className = "error">{errorMsg}</p> }
        {error && <p className = "error">{error}</p> }
        <div class="flex justify-center">
        <form onSubmit={handleSubmit} class="bg-white w-1/2">
              <h1 class="text-gray-800 font-bold text-3xl mb-3 mt-4">User Profile</h1>
              <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd" />
                </svg>
                <input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder={user.name} value={name} onChange={(e)=> setName(e.target.value)} />
              </div>
                  <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder={user.email} value={email} onChange={(e)=> setEmail(e.target.value)}/>
              </div>
                    <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clip-rule="evenodd" />
                      </svg>
                      <input class="pl-2 outline-none border-none" type="password" name="" id=""  value={password} onChange={(e)=> setPassword(e.target.value)}/>
              </div>
              <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 password-gray-400" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clip-rule="evenodd" />
                      </svg>
                    <input class="pl-2 outline-none border-none" type="password" name="password" id=""  value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
              </div>
                      <button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Update</button>
            </form>
        </div>
        <div className="flex justify-center items-center w-full  mt-8 mb-2  flex-col space-y-4 ">
          <h2 className='text-4xl font-bold '>Your Orders</h2>
          {/* products */}
          {   lodaingOrders ? <loader/>
              : errorOrders ? <p>{errorOrders}</p>
              :
              orders.map(order =>{ 
                return(
                <Link to={`/order/${order._id}`} className="w-[80vw] flex justify-center items-center  mt-8  flex-col space-y-4 ">
                  {/* products */}
                  {
                      order.orderItems.map(item => (
                          <div key={item.product} className="flex md:flex-row justify-start items-start md:items-center  border border-gray-200 w-full">
                              <div className="flex justify-start md:justify-between items-start md:items-center  flex-col md:flex-row w-full p-4 md:px-8">
                                  <div className="flex flex-col md:flex-shrink-0  justify-start items-start">
                                      <h3 className="text-lg md:text-xl  w-full font-semibold leading-6 md:leading-5  text-gray-800">{item.name}</h3>
                                      <div className="flex flex-row justify-start  space-x-4 md:space-x-6 items-start mt-4  ">
                                        {
                                              order.isPaid ?
                                              <p className="text-sm leading-none  text-gray-800 font-semibold ">
                                              Payment Status: <span className="text-green-700  bg-green-100 rounded-lg ">Paid on {order.paidAt}</span>
                                              </p>
                                              :
                                              <p className="text-sm leading-none  text-gray-800 font-semibold">
                                                  Payment Status: <span className=" text-red-700 bg-red-100 rounded-lg ">Not Paid  </span>
                                              </p>
                                        }
                                        {
                                              order.isDelivered ?
                                              <p className="text-sm leading-none  text-gray-800 font-semibold">
                                              Delivery Status: <span className="text-green-700 bg-green-100 rounded-lg ">Delivered</span>
                                              </p>
                                              :
                                              <p className="text-sm leading-none  text-gray-800 font-semibold">
                                                  Payment Status: <span className=" text-red-700 bg-red-100 rounded-lg ">Not Delivered</span>
                                              </p>
                                        }

                                          <p className="text-sm leading-none text-gray-600">
                                              Quantity: <span className="text-gray-800">{item.qty}</span>
                                          </p>
                                      </div>
                                  </div>
                                  <div className="flex mt-4 md:mt-0 md:justify-end items-center w-full ">
                                      <p className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">${item.qty * item.price}</p>
                                  </div>
                              </div>
                          </div>
                      ))
                  }

                </Link>  
              )})
          }
      </div>
        <Footer/>
      </>
    )
}

export default Profile