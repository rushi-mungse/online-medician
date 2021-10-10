import { useState } from "react"
import { Link } from 'react-router-dom'
import { login } from "../http"


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = async () => {
        const res=await login({email,password})
        console.log(res)
    }
    return (
        <div className="flex container items-center justify-between flex-col py-12">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  w-2/5">

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Enter your Email address
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Enter your email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Enter password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>

                <div className="flex items-center justify-between">
                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={submit}>
                        login
                    </button>
                    <div className="inline-block align-baseline font-bold text-sm text-yellow-500 hover:text-yellow-800 ml-3" >
                        <Link to='/register'>
                            Need a Registration?
                        </Link>
                    </div>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2020 webShala. All rights reserved.
            </p>
        </div>
    )
}
export default Login
