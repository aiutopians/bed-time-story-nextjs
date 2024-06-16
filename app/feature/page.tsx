import Image from "next/image";
import Story from "@/components/component/story-creator";
import HomePage from '@/components/home'
import Link from "next/link"
import Header from "@/components/component/header"
import Footer from '@/components/component/footer'
import Component from '@/components/component'

// export default function Home() {
//   return (
//     <>
//       <Header/>
//       <main className="flex-1">
//         <section className="w-full pt-12 md:pt-24 lg:pt-32">
//           <div className="container space-y-10 xl:space-y-16">
//             <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
//               <img
//                 alt="Hero"
//                 className="mx-auto aspect-[2/1] overflow-hidden rounded-xl object-cover object-center"
//                 height="600"
//                 src="/placeholder.svg"
//                 width="1200"
//               />
//               <div className="flex flex-col items-start space-y-4">
//                 <div className="space-y-2">
//                   <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
//                     The complete platform for building the Web
//                   </h1>
//                   <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
//                     Beautifully designed components that you can copy and paste into your apps. Accessible.
//                     Customizable. Open Source.
//                   </p>
//                 </div>
//                 <Link
//                   className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
//                   href="/story"
//                 >
//                   Get Started
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container space-y-12 px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Faster iteration. More innovation.</h2>
//                 <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                   The platform for rapid progress. Let your team focus on shipping features instead of managing
//                   infrastructure with automated CI/CD, built-in testing, and integrated collaboration.
//                 </p>
//               </div>
//             </div>
//             <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
//               <div className="grid gap-1">
//                 <InfinityIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
//                 <h3 className="text-lg font-bold">Infinite scalability, zero config</h3>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                   Enable code to run on-demand without needing to manage your own infrastructure or upgrade hardware.
//                 </p>
//               </div>
//               <div className="grid gap-1">
//                 <InfoIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
//                 <h3 className="text-lg font-bold">Real-time insights and controls</h3>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                   Get granular, first-party, real-user metrics on site performance per deployment.
//                 </p>
//               </div>
//               <div className="grid gap-1">
//                 <DotIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
//                 <h3 className="text-lg font-bold">Personalization at the edge</h3>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                   Deliver dynamic, personalized content, while ensuring users only see the best version of your site.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// }

import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-white text-black">
      <Head>
        <title>Personalized Bedtime Stories</title>
        <meta name="description" content="Create an enchanting bedtime story in seconds, tailored to include your child's name, favorite characters, and beloved themes, and have it read aloud." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component />
      {/* <main className="flex flex-1 flex-col items-center justify-center w-full px-20 text-center">
        <h1 className="text-4xl font-bold">
          Have AI read and write <br /> Personalized Bedtime Stories
        </h1>
        <p className="mt-4 text-xl">
          Create an enchanting bedtime story in seconds, tailored to include your child's name, favorite characters, and beloved themes, and have it read aloud!
        </p>

        <div className="mt-8">
          <a href="#" className="px-6 py-2 border border-gray-600 text-gray-800 rounded-lg hover:text-blue-600 hover:border-blue-600">
            Try the Demo &rarr;
          </a>
        </div>

        <div className="mt-8">
          <Image src="/home.png" alt="Storyteller" width={500} height={500} />
        </div>
      </main> */}
      <Footer />
      {/* <footer className="w-full py-8 border-t border-gray-200 flex justify-around">
        <div className="flex flex-col text-left">
          <h3 className="font-semibold">Learn and Product</h3>
          <ul>
            <li>Bedtime stories for kids</li>
            <li>Short bedtime stories</li>
            <li>Bedtime stories for babies</li>
            <li>Princess bedtime stories</li>
          </ul>
        </div>
        <div className="flex flex-col text-left">
          <h3 className="font-semibold">Stories</h3>
          <ul>
            <li>Cute bedtime stories</li>
            <li>Animal bedtime stories</li>
            <li>Fun bedtime stories</li>
            <li>Scary bedtime stories</li>
          </ul>
        </div>
        <div className="flex flex-col text-left">
          <h3 className="font-semibold">Company</h3>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </footer> */}
    </div>
  );
}


function DotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  )
}


function InfinityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
    </svg>
  )
}


function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
