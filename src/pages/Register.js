import { useState } from "react"
import { useHistory } from 'react-router'
import { register } from '../http'
import { Link } from "react-router-dom"

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeat_password, setRepeat_password] = useState('')
    const history = useHistory()

    const submit = async () => {
        const res = await register({  name, email,  password, repeat_password })
        console.log(res);
        alert(`Hello ${name} !
        Registration succsessful! `)
        history.push('/')
    }

    return (


        <div className="flex container items-center justify-between flex-col py-10">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-2/5">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Enter your Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter your Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
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
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="repeat_password">
                        comform Password
                    </label>
                    <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="comform password" value={repeat_password} onChange={(e) => { setRepeat_password(e.target.value) }} />

                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={submit}>
                        Register
                    </button>
                    <div className="inline-block align-baseline font-bold text-sm text-yellow-500 hover:text-yellow-800 ml-3">
                        <Link to='/login'>
                            Already have username?
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

export default Register
