
import Image from "next/image"
import Link from "next/link"
import icon from "./components/assets/icon.png"
import check from "./components/assets/check.png"
import corolla from "./components/assets/Corolla.jpg"
import alto from "./components/assets/Alto.png"
import city from "./components/assets/City.jpg"
import civic from "./components/assets/Civic.jpg"


export default function home () {
    return(
     
          <main className="min-h-screen justify-around">
         <div className="h-96 bg-fixed bg-gradient-to-b from-black to bg-blue-800 text-center content-center  justify-around">
          <p className="text-white text-4xl">Find Used Cars in Pakistan</p>
          <p className="text-white text-lg">With thousands of cars, we have just the right one for you</p>
          <form className="flex justify-around ">
            <div className="flex py-6">
            <input type="text" placeholder="Car Make or Model" className="w-56 h
            -12 p-2 border border-gray-400 " />
             <input type="text" placeholder="All Cities" className="w-56 h
            -12 p-2 border border-gray-400 " />
             <input type="number" placeholder="Price Range" className="w-56 h
            -12 p-2 border border-gray-400 " />
            
            <Link href="/nav/usedcars">
               <Image src={icon} alt="icon" />
            </Link>
           </div>
        
          </form>
          <button className="border border-white py-1 px-5 text-white bg-transparent mt-7 rounded text-sm">Advanced Filter &gt;</button>
          </div>
          
          <div className="h-96">
            <h1 className="text-2xl font-semibold text-center py-14 font-sans">
            Sell Your Car on PakWheels and Get the Best Price
            </h1>

      <div className="flex justify-around">
            <div className=" justify-around" >
              <div className="text-2xl font-semibold text-blue-900 font-sans">
              Post your Ad on PakWheels
              </div>
              <div>
            <div className="py-2 font-sans flex">
            <div><Image src={check} alt="check" /></div>
            <div>Post your Ad for Free in 3 Easy Steps</div> 
           </div>
           <div className="py-2 font-sans flex">
            <div><Image src={check} alt="check" /></div>
            <div>Get Genuine offers from Verified Buyers</div> 
           </div>
           <div className="py-2 font-sans flex">
            <div><Image src={check} alt="check" /></div>
            <div>Sell your car Fast at the Best Price</div>
            </div>
            <button className="py-2 px-10 rounded bg-red-500 text-white mt-5 ">Post Your Ad</button>
            </div>
            </div>
            <div  className="font-bold text-center justify-center text-gray-600 text-3xl pt-16">OR</div>

            <div>

              <div className="text-2xl font-semibold text-blue-900 font-sans">
              Try PakWheels Sell It For Me
              </div>
              <div className="justify-around">
            <div className="py-2 font-sans flex">
            <div><Image src={check} alt="check" /></div>
            <div>Dedicated Sales Expert to Sell your Car</div> 
           </div>
           <div className="py-2 font-sans flex">
            <div><Image src={check} alt="check" /></div>
            <div>We Bargain for you and share the Best Offer</div> 
           </div>
           <div className="py-2 font-sans flex">
            <div><Image src={check} alt="check" /></div>
            <div>We ensure Safe & Secure Transaction</div>
            </div>
            <button className="py-2 px-5 rounded bg-blue-500 text-white mt-5 ">Register Your Car</button>
            </div>
            </div>
            </div>
           </div>
           <div className="bg-gray-200">
           <div className=" flex justify-around py-10 ">
            <p className="text-2xl font-semibold font-sans pr-56 ">Featured New Cars</p>
            <Link href="/nav/newcars"className="p-2 text-blue-600">View All New Cars</Link>
           </div>
           <div  className="flex font-semibold font-sans text-xl gap-10 px-28">
            <p>Popular</p>
            <p>Upcoming</p>
            <p>Newly Launched</p>
           </div>
           
           <div className="flex gap-6 justify-center py-14">
            <Link href="/car/corolla">
           <div className="bg-white h-64 w-56">
           <Image src={corolla} alt="corolla" />
           <p className="font-bold text-blue-900 text-center font-sans text-lg ">Toyota Corolla</p>
           <p className="text-green-700 text-center font-sans  ">PKR 59.7 - 75.5 lacs</p>
           <div className="flex justify-center py-2">
            <p className="text-orange-600">★★★☆☆</p>
            <p className="text-sm text-gray-600">623 Reviews</p>
            </div>
            </div>
            </Link>

            <div className="bg-white h-64 w-56">
           <Image src={alto} alt="alto" />
           <p className="font-bold text-blue-900 text-center font-sans text-lg ">Suzuki Alto</p>
           <p className="text-green-700 text-center font-sans  ">PKR 23.3 - 30.5 lacs</p>
           <div className="flex justify-center py-2">
            <p className="text-orange-600">★★★☆☆</p>
            <p className="text-sm text-gray-600">200 Reviews</p>
            </div>
            </div>

            <div className="bg-white h-64 w-56">
           <Image src={city} alt="city" />
           <p className="font-bold text-blue-900 text-center font-sans text-lg ">Honda City</p>
           <p className="text-green-700 text-center font-sans  ">PKR 46.5 - 58.5 lacs</p>
           <div className="flex justify-center py-2">
            <p className="text-orange-600">★★★☆☆</p>
            <p className="text-sm text-gray-600">456 Reviews</p>
            </div>
            </div>

            <div className="bg-white h-64 w-56">
           <Image src={civic} alt="civic" />
           <p className="font-bold text-blue-900 text-center font-sans text-lg ">Honda Civic</p>
           <p className="text-green-700 text-center font-sans  ">PKR 86.6 - 99.0 lacs</p>
           <div className="flex justify-center py-2">
            <p className="text-orange-600">★★★☆☆</p>
            <p className="text-sm text-gray-600">361 Reviews</p>
            </div>
            </div>
           </div>
           </div>
          </main> 
    ) 
}


// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }





// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">app/page.tsx</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Docs{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Learn{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Templates{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Explore starter templates for Next.js.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Deploy{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   );
// }
