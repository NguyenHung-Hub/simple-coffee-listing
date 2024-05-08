import "./App.css";
import { coffeeData } from "./data/coffee";
import "./index.css";
import Card from "./components/card";

function App() {
    return (
        <div className=" flex flex-col items-center">
            <div className="h-75 w-full">
                <img className="h-full" src="./img/bg-cafe.jpg" alt="bg" />
            </div>
            <main className="relative -mt-[140px] w-[80%] bg-[#1B1D1F] rounded-2xl px-10 md:px-20 lg:px-[124px] py-20 mb-40">
                <div className="absolute top-0 left-1/2 z-0">
                    <img src="./svg/vector.svg" alt="vector" />
                </div>
                <div className="relative flex justify-center flex-col items-center font-semibold z-10">
                    <h1 className="text-[#FEF7EE] text-[32px]">
                        Our Collection
                    </h1>
                    <p className="mt-2 text-[#6F757C] w-2/3">
                        Introducing our Coffee Collection, a selection of unique
                        coffees from different roast types and origins, expertly
                        roasted in small batches and shipped fresh weekly.
                    </p>
                    <div className="mt-5 flex">
                        <a href="#" className="block btn btn-primary mr-2">
                            All Products
                        </a>
                        <a href="#" className="block btn">
                            Available Now
                        </a>
                    </div>
                </div>

                <div className="mt-10 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {coffeeData.map((c) => (
                        <Card key={c.id} {...c} />
                    ))}
                </div>
            </main>
            <div className="mt-10"></div>
        </div>
    );
}

export default App;
