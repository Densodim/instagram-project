import Image from "next/image";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'


export default function Header() {
    return (
        <>
            <div className="flex items-center justify-between max-w-6xl mx-auto space-x-4">
                {/* Left */}
                <div className="flex items-center space-x-4">
                    <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
                        <Image
                            src="https://cdn.pixabay.com/photo/2015/06/29/22/37/follow-826033_640.png"
                            width={256}
                            height={256}
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
                <div className="relative flex items-center w-full max-w-xs">
                    <div className="absolute left-3 flex items-center pointer-events-none">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500"/>
                    </div>

                    <input
                        type="text"
                        placeholder="Search form"
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:border-gray-400"
                    />
                </div>

                {/* Right */}
                <div className="flex items-center">
                    <h1>Right side</h1>
                </div>
            </div>

        </>
    )
}