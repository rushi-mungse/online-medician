const Product = (props) => {
    const {product}=props
    return (
        <div>
            <img src='/img/logo-1.png' alt="peproni" />
            <div className="text-center">
                <h2 className="text-lg font-bold py-2 ">{product.name}</h2>
                <span className="bg-gray-200 py-1 rounded-full text-sm px-4 ">{(product.size).toUpperCase()}</span>
            </div>
            <div className="flex items-center justify-between mt-3 ">
                <span >₹ {product.price/100}</span>
                <button className='bg-yellow-500 text-sm py-1 px-2 rounded-full font-bold hover:bg-yellow-600 '>ADD</button>
            </div>
        </div>
    )
}

export default Product;
