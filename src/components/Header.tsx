import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline"
import { HomeIcon } from "@heroicons/react/24/solid"
import Image from "next/image"


export default function Header() {
  return (
    <>
      <div className="shadow-sm border-b sticky top-0 bg-white z-30">
        <div className="flex items-center justify-between max-w-6xl mx-auto space-x-4">
          {/* Left */}
          <div className="flex items-center space-x-4">
            <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
              <Image
                src="https://mobile-review.com/all/wp-content/uploads/2021/07/instagram-logo.png"
                width={400}
                height={400}
                className="object-contain"
                alt="Image logo instagram"
              />
            </div>
            <div className="cursor-pointer h-24 w-10 relative lg:hidden">
              <Image
                src="https://celes.club/collections/uploads/posts/2024-02/1709038010_celes-club-p-znachok-punkta-instagram-69.png"
                width={256}
                height={256}
                className="object-contain"
                alt="Image logo instagram"
              />
            </div>
          </div>

          {/* Middle */}
          <div className="mt-1 flex items-center bg-gray-50 border border-gray-300 rounded-md focus-within:ring-1 focus-within:ring-black">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 ml-3" />
            <input
              type="text"
              placeholder="Search form"
              className="bg-gray-50 pl-3 pr-3 py-2 w-full text-sm text-gray-700 focus:outline-none rounded-md"
            />
          </div>

          {/* Right */}
          <div className="flex items-center space-x-4">
            <HomeIcon className=" hidden md:inline-flex h-5 w-5 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
            <PlusCircleIcon className="h-5 w-5 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT23pygNK5BeDGhj88DN6qfpSg0pMb78Tlo9A&s"
              alt="user-image"
              className="h-10 rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  )
}
