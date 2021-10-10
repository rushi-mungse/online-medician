import React from 'react'
import styled from 'styled-components'

const Cart = () => {
    return (
        <section className="empty-cart">
            <div className="container mx-auto order w-1/2 py-12">
                <div className="flex items-center border-b border-gray-300 pb-4">
                    <img src="/img/cart.png" alt="cart" className="bg-gray-300" />
                    <h1 className="ml-2 font-bold text-lg">Order summary</h1>
                </div>
                <div className="pizza-list">
                    <div className="flex items-center py-4">
                        <img src="/img/pizza.png" alt="pizza" className="w-24" />
                        <div className="ml-4 flex-1">
                            <h1>Margherita</h1>
                            <span>SMALL</span>
                        </div>
                        <span className="flex-1">1 Pcs</span>
                        <span className="font-bold text-lg">₹ 300</span>
                    </div>
                    <div className="flex items-center py-4">
                        <img src="/img/pizza.png" alt="pizza" className="w-24" />
                        <div className="ml-4 flex-1">
                            <h1>Margherita</h1>
                            <span>SMALL</span>
                        </div>
                        <span className="flex-1">1 Pcs</span>
                        <span className="font-bold text-lg">₹ 300</span>
                    </div>
                </div>
                <hr />
                <div className="text-right ">
                    <div className="my-4 ">
                        <span className="font-bold">Total Amount: </span>
                        <span className="text-yellow">₹ 300</span>
                    </div>
                    <form action="">
                        <div className="">
                            <input type="text" placeholder="Enter your phone " className="border border-gray-300 px-2 py-1 w-1/2 mb-4" />
                        </div>
                        <div className="">
                            <input type="text" placeholder="Enter your address" className="border border-gray-300 px-2 py-1 w-1/2 mb-4" />
                        </div>
                    </form>
                    <div className="">
                        <Button className=" py-1 px-4 text-white text-lg rounded-full mt-4">Order Now</Button>
                        {/* <!-- <button className="btn-primary py-1 px-4 text-white text-lg rounded-full">Login to contnue</button> --> */}
                    </div>
                </div>
            </div>
            {/* <!-- <div className="container mx-auto text-center pt-12">
        <h1 className="font-bold mb-4 text-lg">Cart Empty 😄 </h1>
        <p className="text-gray-500 mb-4">You probably haven't ordered a pizza yet. <br>
            To order a pizza, go to the main page.
        </p>
        <img src="/img/empty-cart.png" alt="empty-cart" className="w-4/12 mx-auto">
        <a href="/" className="inline-block px-6 py-2 rounded-full text-white btn-primary font-bold mt-12">Go back</a>
    </div> --> */}

        </section>
    )
}

export default Cart

const Button = styled.button`
transition:all .3s ease-in-out;
background:#FE5F1E;
&:hover{
    background :#b23301;
}

`