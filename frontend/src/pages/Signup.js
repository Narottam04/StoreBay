import React,{useRef,useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {login, register} from '../actions/userActions'

function Signup() {
    const usernameRef = useRef()
    const emailref = useRef()
    const passwordref = useRef()
    const passwordconfirmref = useRef()

    const dispatch = useDispatch()
    const userRegister = useSelector(state => state.userRegister)
    const {loading, error,userInfo} = userRegister

    const [errorMsg, setErrorMsg] = useState()
    const navigate = useNavigate()

    
    useEffect(() => {
        if(userInfo) {
            navigate('/')
        }
    }, [userInfo])

    async function handleSubmit(e) {
        e.preventDefault()
        if(passwordref.current.value !== passwordconfirmref.current.value){
            return setErrorMsg('Password do not match')
        }
        dispatch(register(usernameRef.current.value,emailref.current.value,passwordref.current.value))
    }



    return (
        <section>
        <div className="flex min-h-screen overflow-hidden">
        <div className="flex flex-col justify-center flex-1 px-4 py-12  sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="w-full max-w-xl mx-auto lg:w-96">
            <div>
                <Link to = "/">
                    <img src="https://img.icons8.com/ios-filled/50/000000/circled-left-2.png"className = "mb-6" />
                </Link>
                <a href="/" className="font-yeseva text-blue-400 text-medium">StoreBay</a>
                <h2 className=" font-merriweather mt-6 text-3xl font-bold text-neutral-600"> Sign Up. </h2>
            </div>
            <div className="mt-8">
                <div className="mt-6">
                {errorMsg && <p className = "error">{errorMsg}</p> }
                {error && <p className = "error">{error}</p> }
                <form onSubmit = {handleSubmit} className="space-y-6">
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-600"> Username </label>
                    <div className="mt-1">
                        <input id="name" name="name" type="name" ref = {usernameRef} required placeholder="Your Username" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                    </div>
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-600"> Email address </label>
                    <div className="mt-1">
                        <input id="email" name="email" type="email" ref = {emailref} required placeholder="Your Email" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                    </div>
                    </div>
                    <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-neutral-600"> Password </label>
                    <div className="mt-1">
                        <input id="password" name="password" type="password" autoComplete="current-password" ref = {passwordref}  required placeholder="Your Password" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                    </div>
                    </div>
                    <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-neutral-600"> Confirm Password </label>
                    <div className="mt-1">
                        <input id="password" name="password" type="password" autoComplete="current-password" ref = {passwordconfirmref} required placeholder="Confirm your Password" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                    </div>
                    </div>
                    <div className="flex items-center justify-end">
                    {/* <div className="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" placeholder="Your password" className="w-4 h-4 text-blue-400 border-gray-200 rounded  focus:ring-blue-500" />
                        <label for="remember-me" className="block ml-2 text-sm text-neutral-600"> Remember me </label>
                    </div> */}
                    {/* <div className="text-sm">
                        <a href="#" className="font-medium text-blue-400 hover:text-blue-500"> Forgot your password? </a>
                    </div> */}
                    </div>
                    <div>
                    <input type="submit" disabled = {loading} value={loading ? "Give us a sec": "Sign Up"} className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-400  rounded-xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"/> 
                    </div>
                </form>
                <Link to = "/login" className="text-md my-8 flex justify-center">
                        <a href="#" className="font-medium text-blue-400 hover:text-blue-500"> Already have an account? Log In </a>
                </Link>
                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                    </div>
                    {/* <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-neutral-600"> Or continue with </span>
                    </div> */}
                </div>
                {/* <div>
                    <button type="submit" className="
                w-full
                items-center
                block
                px-10
                py-3.5
                text-base
                font-medium
                text-center text-blue-400
                transition
                duration-500
                ease-in-out
                transform
                border-2 border-white
                shadow-md
                rounded-xl
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-gray-500
                ">
                    <a onClick = {()=>googleSignUp()} className="flex items-center justify-center">
                        <img src="https://img.icons8.com/color/48/000000/google-logo.png" />
                        <span className="ml-4"> Log in with Google</span>
                    </a>
                    </button>
                </div> */}
                </div>
            </div>
            </div>
        </div>
        <div className="relative flex-1 hidden w-0 overflow-hidden lg:block">
            <img className="absolute inset-0 object-cover w-full h-full" src="https://source.unsplash.com/p0j-mE6mGo4" alt="" />
        </div>
        </div>
        </section>
    )
}

export default Signup
