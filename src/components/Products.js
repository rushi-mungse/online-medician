import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5500/api/products")
            .then(res => { return res.json() })
            .then(products => {
                console.log(products);
                setProducts(products);
            })
    }, [])

    return (
        <div className="container mx-auto pb-24">
            <h1 className="text-lg font-bold my-8">Products</h1>
            <div className="grid grid-cols-5 my-8 gap-24">
                {
                    products.map((product) => <Product key={product._id} product={product} />)
                }

            </div>
        </div>
    )
}

export default Products;
