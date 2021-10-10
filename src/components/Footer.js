
const Footer = () => {
    return (
        <div className="w-full conrainer bg-yellow-200 p-12">

            <div className="container flex flex-col items-center justify-center  ">
                <div className='container grid grid-cols-3 gap-12 mb-12'>
                    <div className="border-2 border-gray-900 p-2 mx-4 ">
                        <span className='text-lg font-bold text-yellow-600'>Our Services</span>
                        <ul>
                            <li>frist</li>
                            <li>second</li>
                            <li>thired</li>
                        </ul>
                    </div>
                    <div className="border-2 border-gray-900 p-2 mx-4 ">
                        <span className='text-lg font-bold text-yellow-600'>Features Categaries</span>
                        <ul>
                            <li>frist</li>
                            <li>second</li>
                            <li>thired</li>
                        </ul>
                    </div>
                    <div className="border-2 border-gray-900 p-2 mx-4 ">
                        <span className='text-lg font-bold text-yellow-600'>Need Help</span>
                        <ul>
                            <li>frist</li>
                            <li>second</li>
                            <li>thired</li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center justify-between w-1/2">
                    <div className="border-2 border-gray-900 p-2 mx-4 ">
                        <span className="text-yellow-600 font-bold text-lg">Follow us</span>
                        <ul>
                            <li><a href="">Facebook</a> </li>
                            <li><a href="">Instagram</a> </li>
                            <li><a href="">Twitter</a> </li>
                            <li><a href="">Linkedin</a> </li>
                        </ul>
                    </div>
                    <div className="border-2 border-gray-900 p-2 mx-4 ">
                        <span  className="text-yellow-600 font-bold text-lg">Policy Info</span>
                        <ul>
                            <li>1 </li>
                            <li> 2</li>
                            <li>3 </li>
                            <li>4 </li>
                        </ul>
                    </div>
                </div>
                <h4> &copy;2020 webShala. All rights reserved. </h4>
            </div>
        </div>
    )
}

export default Footer
