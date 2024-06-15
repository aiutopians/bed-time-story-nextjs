import Link from 'next/link'

export default function Footer () {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-between">
                <div className="w-full md:w-1/2 lg:w-1/3">
                <h3 className="font-bold text-lg mb-4">Product</h3>
                <ul className="space-y-2">
                    <li>Bedtime stories for adults</li>
                    <li>Bedtime stories for teens</li>
                    <li>Christmas bedtime stories</li>
                    <li>Bedtime stories for toddlers</li>
                    <li>Personalized bedtime stories</li>
                    <li>Bedtime stories for babies</li>
                </ul>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3">
                <h3 className="font-bold text-lg mb-4">Features</h3>
                <ul className="space-y-2">
                    <li>Long bedtime stories</li>
                    <li>New bedtime stories</li>
                    <li>Bedtime stories for kids</li>
                    <li>Funny bedtime stories</li>
                    <li>Bedtime stories for girls</li>
                    <li>Bedtime stories for babies</li>
                </ul>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3">
                <h3 className="font-bold text-lg mb-4">Company</h3>
                <ul className="space-y-2">
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Contact Us</li>
                </ul>
                </div>
            </div>
            </div>
        </footer>
    )
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
  