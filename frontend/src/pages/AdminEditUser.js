import React, { useEffect,  useState } from "react";
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Sidebar from '../components/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { getUserDetails, updateUser } from '../actions/userActions'
import { Link,useNavigate, useParams } from 'react-router-dom'
import { USER_UPDATE_RESET } from "../constants/userConstants";

const AdminEditUser = () => {
    const [openSidebar,setOpenSidebar] = useState(false)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [isAdmin,setisAdmin] = useState(false)
    const navigate = useNavigate()
    const {id} = useParams()

    const dispatch = useDispatch()
    const userDetails = useSelector(state => state.userDetails)
    const {loading, error,user} = userDetails

    const userUpdate = useSelector(state => state.userUpdate)
    const {loading:loadingUpdate, error:errorUpdate,success:successUpdate} = userUpdate

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(()=> {
        if(successUpdate){
            dispatch({type: USER_UPDATE_RESET})
            navigate('/admin')
        }
        else{
            if(!user.name || user._id !== id) {
                dispatch(getUserDetails(id))
            }
            else{
                setName(user.name)
                setEmail(user.email)
                setisAdmin(user.isAdmin)
            }

        }

    },[user,dispatch,id,successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser({_id:id,name,email,isAdmin}))
    }
    return (
        <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800 md:overflow-x-hidden">
            <Sidebar openSidebar = {openSidebar} />
            <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in pl-64">
                <header className="header bg-white shadow py-4 px-4">
                    <div className="header-content flex items-center flex-row">
                    <div >
                        <a href className="flex flex-row items-center">
                        <img
                            src={`https://avatars.dicebear.com/api/initials/${userInfo.name}.svg`}
                            alt
                            className="h-10 w-10 bg-gray-200 border rounded-full"
                        />
                        <span className="flex flex-col ml-2">
                            <span className=" w-60 font-semibold tracking-wide leading-none">{userInfo.name}</span>
                            <span className=" w-30 text-gray-500 text-xs leading-none mt-1">{userInfo.email}</span>
                        </span>
                        </a>
                    </div>
                    <div className="flex ml-auto">
                        {!openSidebar?
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-black w-8 h-8 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={()=>setOpenSidebar(!openSidebar)}>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        :
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-black w-8 h-8 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"  onClick={()=>setOpenSidebar(!openSidebar)}>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        }
                    </div>
                    </div>
                </header>
                <div className="main-content flex flex-col flex-grow p-4">
                    <Link to={`/admin`} className="text-xl underline text-gray-700 mb-6"> Go Back</Link>
                    <h1 className="font-bold text-2xl text-gray-700 ">Edit User</h1>
                    {loadingUpdate && <p>Loading...</p>}
                    {errorUpdate && <p>{errorUpdate}</p>}
                    {loading ? <p>Loading...</p> : error ? <p>{error}</p>
                        :
                        <form onSubmit={submitHandler} className="mt-8 flex flex-col justify-start items-start w-full space-y-8 ">
                                <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)} />

                                <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} />

                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-radio" name="admin" value="PayPal" onClick={(e)=> setisAdmin(true)}/>
                                    <span className="ml-2 text-xl font-semibold">Admin</span>
                                </label>
                                <label className="inline-flex items-center mt-2 mb-5">
                                    <input type="radio" className="form-radio" name="admin" value="Stripe" onClick={(e)=> setisAdmin(false)}/>
                                    <span className="ml-2 text-xl font-semibold">Not Admin</span>
                                </label>

                                <button type="submit" className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium  focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">Update User</button>
                        </form>  
                    }
                </div>
                <footer className="footer px-4 py-6">
                    <div className="footer-content">
                    <p className="text-sm text-gray-600 text-center">© Brandname 2020. All rights reserved. <a href="https://twitter.com/iaminos">by iAmine</a></p>
                    </div>
                </footer>
            </main>
        </div>
        
    )
}

export default AdminEditUser

