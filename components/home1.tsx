/**
 * v0 by Vercel.
 * @see https://v0.dev/t/5UOEHDxMabG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="flex justify-between p-6">
        <a href="#" className="text-2xl font-bold">
          Sleepytales
        </a>
        <div className="space-x-4">
          <a href="#" className="text-sm font-medium hover:underline">
            Pricing
          </a>
          <a href="#" className="text-sm font-medium hover:underline">
            Login
          </a>
        </div>
      </nav>
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-16">
        <section className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight">Have AI read and write personalized bedtime stories</h1>
          <p className="text-lg">
            Create an enchanting bedtime story in seconds, tailored to include your child's name, favorite characters,
            and beloved themes, and have AI read it to them!
          </p>
          <div className="flex space-x-4">
            <Button className="bg-[#bd1e59] text-white">Get started for free</Button>
            <Button variant="outline">Try the demo</Button>
          </div>
          <div className="flex items-center space-x-2">
            <SmileIcon className="text-[#bd1e59]" />
            <HeartIcon className="text-[#bd1e59]" />
            <StarIcon className="text-[#bd1e59]" />
            <span className="text-sm">by 1,000+ happy users and counting!</span>
          </div>
        </section>
        <div>
          <img src="/placeholder.svg" alt="Illustration" className="max-w-full h-auto" />
        </div>
      </main>
      <footer className="border-t mt-10 py-6 px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <GlobeIcon className="h-6 w-6 text-black" />
            <p className="text-sm">
              Transform bedtime stories into a magical adventure with our AI bedtime story generator.
            </p>
            <div className="flex space-x-2">
              <TwitterIcon className="h-6 w-6 text-black" />
              <MailIcon className="h-6 w-6 text-black" />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Product</h3>
            <a href="#" className="block text-sm hover:underline">
              Bedtime stories for adults
            </a>
            <a href="#" className="block text-sm hover:underline">
              Short bedtime stories
            </a>
            <a href="#" className="block text-sm hover:underline">
              Christmas bedtime stories
            </a>
            <a href="#" className="block text-sm hover:underline">
              Bedtime stories for girlfriend
            </a>
            <a href="#" className="block text-sm hover:underline">
              Bedtime stories for toddlers
            </a>
            <a href="#" className="block text-sm hover:underline">
              Princess bedtime stories
            </a>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Baby Bedtime Stories</h3>
            <a href="#" className="block text-sm hover:underline">
              Cute bedtime stories
            </a>
            <a href="#" className="block text-sm hover:underline">
              Bible bedtime stories
            </a>
            <a href="#" className="block text-sm hover:underline">
              5 minute bedtime stories
            </a>
            <a href="#" className="block text-sm hover:underline">
              Funny bedtime stories
            </a>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Company</h3>
            <a href="#" className="block text-sm hover:underline">
              Terms of Service
            </a>
            <a href="#" className="block text-sm hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function GlobeIcon(props) {
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
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}


function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function SmileIcon(props) {
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
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
}


function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}