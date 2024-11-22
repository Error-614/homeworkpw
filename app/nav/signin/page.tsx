export default function Signin(){
    return(
        <div className=" bg-fixed bg-gradient-to-b from-black to bg-blue-800">
            <h1 className=" text-white text-5xl font-semibold text-center uppercase"> Enter your details
            
            </h1>

            <form className="flex gap-5 justify-center items-center flex-col   h-96">
                <input type="name" className="p-2 rounded-2xl w-2/5 border border-red-500"placeholder="Enter your Name"/>
                <input type="email" className="p-2 rounded-2xl w-2/5 border border-red-500"placeholder="Enter your Email"/>
                <input type="password" className="p-2 rounded-2xl w-2/5 border border-red-500 "placeholder="Enter your Password"/>
                <button className="p-2 rounded-2xl font-semibold bg-red-500 text-white mt-5 uppercase">sign in</button>
                </form>
                </div>         
    )
} 