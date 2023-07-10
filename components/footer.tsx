import whiteLogo from '@assets/White.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="p-4 bg-slate-900 dark:bg-[#1c1d20] sm:p-6 w-full">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Link href="/">
            <a>
              <Image
                src={whiteLogo}
                alt="white_logo"
                height={80}
                width={150}
                className="flex items-center cursor-pointer"
              />
            </a>
          </Link>
        
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
              Resources
            </h2>
            <ul className="text-gray-400">
             
              <li className="mb-4 hover:underline">
                <Link href="/marketplace">
                  <a>Marketplace</a>
                </Link>
              </li>
             
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
              Legal
            </h2>
            <ul className="text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-slate-700 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
       
      </div>
    </footer>
  )
}
