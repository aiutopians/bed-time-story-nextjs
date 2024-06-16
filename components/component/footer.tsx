import Link from 'next/link'

export default function Footer () {
    return (
      <footer className="py-12 px-8 border-t border-gray-400">
        <div className='flex'>
          <div className='flex-none w-25 text-gray-900 self-center'>
            <h1 className="text-2xl font-bold mb-4">Sleepytales Adventure</h1>
            <p className="text-gray-400 text-sm">
              Transform bedtime stories into a magical adventure with our AI bedtime story generator.
            </p>
          </div>
          <div className="flex-1 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
            <div>
              <h3 className="text-lg font-bold mb-4">Twitter</h3>
              <ul className="space-y-2 text-gray-400 leading-6">
                <li>
                  <Link href="#" prefetch={false}>
                    Follow us on Twitter
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400 leading-6">
                <li>
                  <Link href="#" prefetch={false}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" prefetch={false}>
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Realms</h3>
              <ul className="space-y-2 text-gray-400 leading-6">
                <li>
                  <Link href="#" prefetch={false}>
                    Fairy Tale Realm
                  </Link>
                </li>
                <li>
                  <Link href="#" prefetch={false}>
                    Pirate's Cove Realm
                  </Link>
                </li>
                <li>
                  <Link href="#" prefetch={false}>
                    Enchanted Forest Realm
                  </Link>
                </li>
                <li>
                  <Link href="#" prefetch={false}>
                    Mythical Creature Realm
                  </Link>
                </li>
                <li>
                  <Link href="#" prefetch={false}>
                    Outer Space Realm
                  </Link>
                </li>
                <li>
                  <Link href="#" prefetch={false}>
                    Medieval Kingdom Realm
                  </Link>
                </li>
                <li>
                  <Link href="#" prefetch={false}>
                    Underwater Realm
                  </Link>
                </li>
                <li>
                  <Link href="#" prefetch={false}>
                    Magical School Realm
                  </Link>
                </li>
                <li>
                  <Link href="#" prefetch={false}>
                    Spooky Realm
                  </Link>
                </li>
                <li>
                  <Link href="#" prefetch={false}>
                    Time Travel Realm
                  </Link>
                </li>
                <li>
                  <Link href="#" prefetch={false}>
                    Superhero Realm
                  </Link>
                </li>
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
  