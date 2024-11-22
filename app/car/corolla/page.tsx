import Image from "next/image"
import Link from "next/link"

export default function corolla(){
    return(
        <div  className="bg-blue-200  "> 
            <div className="text-center underline font-sans font-bold text-2xl py-10"> 
            Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs
            </div>
            <div className="flex justify-center py-10">
            <Image src="/car.png" alt="car" width={200} height={200}></Image>
            </div>
            <div className="flex justify-center py-6 font-sans gap-5">
                <button className="py-3 px-5 rounded bg-blue-800 text-white mt-5 border-white border-solid border-2 ">Book a test drive</button>
                <button className="py-3 px-5 rounded bg-white text-blue-800 mt-5 border-blue-800 border-solid border-2">Request Bank Finance</button>
                <button className="py-3 px-5 rounded bg-white text-blue-800 mt-5 border-blue-800 border-solid border-2">Visit Place</button>
                <button className="py-3 px-5 rounded bg-white text-blue-800 mt-5 border-blue-800 border-solid border-2">Car Inspection</button>
            </div>
            <div className="flex justify-center py-6 font-sans text-3xl">
            Vehicle Description
            </div>
            <div className="flex justify-center font-sans gap-4">
                <div className="flex">
                <div className="font-bold">Number of Doors :</div> <div> 4 </div>
                </div>
                <div className="flex">
                <div className="font-bold">Engine :</div> <div> 1800 CC  </div> 
                </div>
                <div className="flex">
                <div className="font-bold">Condition :</div> <div> 8.5 / 10 </div> 
                </div>
                <div className="flex">
                <div className="font-bold">Driven :</div> <div>  9,500 KM </div> 
                </div>
            </div>
            <div className="flex justify-center font-sans gap-4">
                <div className="flex">
                <div className="font-bold">Suspension Type :</div> <div> Soft Suspension </div> 
                </div>
                <div className="flex">
                <div className="font-bold">Avg  :</div> <div> 13 Km per Itr </div> 
                </div>
                <div className="flex">
                <div className="font-bold">Transmission  :</div> <div>  Automatic  </div> 
                </div>
                <div className="flex">
                <div className="font-bold">Fuel Type :</div> <div> High Octane </div> 
                </div>
            </div>
            <div className="flex justify-center py-6 font-sans text-3xl text-blue-800 ">
            PKR 50,00,000
            </div>
            <div className="flex justify-center">
            <button className="py-3 px-5 rounded bg-blue-800 text-white mt-5 ">Make Payment</button>
            </div>

        </div>
    )
}