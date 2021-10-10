
import Products from '../components/Products'

const Home = () => {
    return (
        <>
            <section className="hero py-16">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="w-1/2">
                        <h6 className="text-lg"><em>Always laugh when you can, it is cheap medicine!</em></h6>
                        <h1 className="text-6xl font-bold my-2">Medicine!!!</h1>
                        <button className="text-white font-bold rounded-full px-4 mt-3 py-1 bg-yellow-500 hover:bg-yellow-600">Order Now</button>
                    </div>
                    <div className="w-1/2 rounded-full overflow-hidden">
                        <img src="/img/Medician-1.jpg" alt="medician" />
                    </div>
                </div>
            </section>
            <Products />
        </>
    )
}

export default Home


