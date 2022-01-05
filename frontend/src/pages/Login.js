import React,{useRef, useState} from 'react'
// import {useAuth} from '../../Context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
// import { Helmet } from 'react-helmet'
function Login() {
    const emailref = useRef()
    const passwordref = useRef()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    // const {login,signInWithGoogle} = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(emailref.current.value, passwordref.current.value)
        try {
            setError('')
            setLoading(true)
            // await login(emailref.current.value, passwordref.current.value)
            navigate("/")
        }
        catch {
            setError("Failed to sign in")
        }
        setLoading(false)
    }

    // async function googleSignUp(){
    //     try {
    //         signInWithGoogle().then(()=> {
    //             console.log("successfully logged in")
    //             navigate("/")
    //         })
    //         .catch(()=> {
    //             setError("There was some problem redirecting")
    //         })
    //     }
    //     catch{
    //         setError("Failed to sign up :(")
    //     }
    // }
    return (
        <section>
            {/* <Helmet> */}
                <title>StoreBay: Login Page</title>
                <meta name="description" content="Here on Bibliophilia,we connect you, our book lovers, directly to the sellers. In this way, you can assure everything about the book and see for yourself by having a one-to-one interaction with the seller. So what are you waiting for, sign up and boost your reading journey right away!"/>
                <link rel="canonical" href="https://bibliophilia.pages.dev/"/>
                <meta property="og:title" content="A Platform Where You Can Buy And Sell Your Old Books."/>
                <meta property="og:description" content="Here on Bibliophilia,we connect you, our book lovers, directly to the sellers. In this way, you can assure everything about the book and see for yourself by having a one-to-one interaction with the seller. So what are you waiting for, sign up and boost your reading journey right away!"/>
                <meta property="og:image" content="/images/logo.png"/>
                <meta property="og:image:width" content="2500"/>
                <meta property="og:image:height" content="1330"/>
                <meta property="og:site_name" content="Bibliophilia"/>
                <meta property="og:type" content="ecommerce"/>
                <meta name="language" content="EN"/>
                <meta name="country" content="IN"/>
                <meta name="author" content="Bibliophilia"/>
            {/* </Helmet> */}
        <div className="flex min-h-screen overflow-hidden">
        <div className="flex flex-col justify-center flex-1 px-4 py-12  sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="w-full max-w-xl mx-auto lg:w-96">
            <div>
                <Link to = "/" >
                    <img src="https://img.icons8.com/ios-filled/50/000000/circled-left-2.png" className = "mb-6"/>
                </Link>
                <a href="/" className="font-yeseva text-blue-400 text-medium">StoreBay</a>
                <h2 className="font-merriweather mt-6 text-3xl font-bold text-neutral-600"> Log In. </h2>
                {error && <p className = "error">{error}</p> }
            </div>
            <div className="mt-8">
                <div className="mt-6">
                <form onSubmit = {handleSubmit} className="space-y-6">
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-600"> Email address </label>
                    <div className="mt-1">
                        <input id="email" name="email" type="email" autoComplete="email" required ref = {emailref} placeholder="Your Email" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                    </div>
                    </div>
                    <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-neutral-600"> Password </label>
                    <div className="mt-1">
                        <input id="password" name="password" type="password" autoComplete="current-password" required ref = {passwordref} placeholder="Your Password" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                    </div>
                    </div>
                    <div className="flex items-center justify-end">
                    <div className="text-sm">
                        <Link to="/" className="font-medium text-blue-400 hover:text-blue-500"> Forgot your password? </Link>
                    </div>
                    </div>
                    <div>
                    <input  type="submit"  disabled = {loading} value={loading ? "Logging You In": "Login"} type="submit" className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-400  rounded-xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"/>
                    </div>
                </form>
                <Link to = "/signup" className="text-md my-8 flex justify-center">
                        <a href="#" className="font-medium text-blue-400 hover:text-blue-500"> Don't have an account? Sign Up  </a>
                </Link>
                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                    </div>
                    {/* <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-neutral-600"> Or continue with </span>
                    </div> */}
                </div>
                {/* <a onClick = {()=> googleSignUp()}>
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
                    <div className="flex items-center justify-center">
                        <img src="https://img.icons8.com/color/48/000000/google-logo.png" />
                        <span className="ml-4"> Log in with Google</span>
                    </div>
                    </button>
                </a> */}
                </div>
            </div>
            </div>
        </div>
        <div className="relative flex-1 hidden w-0 overflow-hidden lg:block">
            <img className="absolute inset-0 object-cover w-full h-full" src="https://source.unsplash.com/xrbbXIXAWY0" alt="" />
        </div>
        </div>
        </section>
    )
}

export default Login