import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navigation = () => {
    const logo = {
        height: '75px',
        width: '75px',
        obkectFit: 'cover',
        borderRadius: '50%'
    }
    return (
        <div>
            <div className="container flex items-center justify-between mx-auto  py-4">
                <div className='w-18'>
                    <Link to='/'>
                        <img src="/img/logo-2.png" alt="logo" style={logo} />
                    </Link>
                </div>
                <NavRight className="flex items-center justify-center">
                    <li className='ml-4'><Link to='/'>Home</Link></li>
                    <li className='ml-4'><Link to='/menu'>Menu</Link></li>
                    <li className='ml-4'><Link to='/offer'>Offer</Link></li>
                    <li className='ml-4'><Link to='/register'>Register</Link></li>
                    <li className='ml-4'><Link to='/login'>Login</Link></li>
                    <li className='ml-4 bg-yellow-500 py-1 px-4 rounded-full hover:bg-yellow-600'><Link to='/cart'>
                        <div className='flex items-center justify-center'>
                            <span className='font-bold'>0</span>
                            <img src="/img/cart.png" alt="cart" className='ml-2' />
                        </div>
                    </Link></li>
                </NavRight>
            </div>
        </div>

    )
}

export default Navigation

const NavRight = styled.ul`
li{
    &:hover{
        color:orange;
       trantisoin:all .3s ease-in-out;
    }
}
`