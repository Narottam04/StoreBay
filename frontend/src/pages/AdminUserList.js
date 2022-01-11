import React, { useEffect,  useState } from "react";
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Sidebar from '../components/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { deleteUser, listUsers } from '../actions/userActions'
import { Link,useNavigate } from 'react-router-dom'

const AdminUserList = () => {
    
    const [openSidebar,setOpenSidebar] = useState(false)
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const userList = useSelector(state => state.userList)
    const {loading, error,users} = userList

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    
    const userDelete = useSelector(state => state.userDelete)
    const {success:successDelete} = userDelete

    useEffect(()=> {
        if(userInfo && userInfo.isAdmin){
            dispatch(listUsers())
        }
        else {
            navigate('/')
        }

    },[dispatch,successDelete,userInfo])

    const deleteHandler = (id) => {
        if(window.confirm('Are you sure')) {
            dispatch(deleteUser(id))
        }
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
                    <h1 className="font-bold text-2xl text-gray-700 mb-6">User Profile</h1>
                    {/* table */}
                    {
                        loading ? <Loader/> : error ? <p>{error}</p>
                        :
                    <div className="flex flex-col w-[70vw] overflow-x-scroll overflow-y-hidden md:overflow-y-auto">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow  border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        User Id
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        User Info
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Admin
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {users.map((user) => (
                                    <tr key={user._id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-gray-800">
                                            {user._id}
                                            </span>
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                            <img className="h-10 w-10 rounded-full" src={`https://avatars.dicebear.com/api/initials/${user.name}.svg`} alt="avatar" />
                                            </div>
                                            <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                            <div className="text-sm text-gray-500">{user.email}</div>
                                            <div className="text-sm text-gray-500">{user._id}</div>
                                            </div>
                                        </div>
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {
                                                user.isAdmin ?
                                                <p className="text-sm w-20 text-green-700 bg-green-100 rounded-lg px-2 py-1">Admin</p>
                                                :
                                                <p className="text-sm text-red-700 w-28 bg-red-100 rounded-lg px-2 py-1">Not Admin</p>
                                            }
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex space-x-2">
                                            <Link to={`/admin/user/${user._id}/edit`} className="text-indigo-600 hover:text-indigo-900">
                                            Edit
                                            </Link>
                                            <a href="#" className="text-red-600 hover:text-red-900" onClick={()=> deleteHandler(user._id)}>
                                            Delete
                                            </a>
                                        
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                        </div>
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

export default AdminUserList

