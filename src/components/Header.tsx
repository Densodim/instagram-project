import Image from "next/image";

export default function Header() {
    return (
        <>
            <div>
                {/*Left*/}
                <div className='flex items-center justify-between max-w-6xl'>
                    <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
                        <Image
                            src={'https://cdn.pixabay.com/photo/2015/06/29/22/37/follow-826033_640.png'}
                            width={256}
                            height={256}
                            className='object-contain'
                            alt={'Image logo instagram'}/>
                    </div>
                    <div className='cursor-pointer h-24 w-10 relative lg:hidden'>
                        <Image
                            src={'https://celes.club/collections/uploads/posts/2024-02/1709038010_celes-club-p-znachok-punkta-instagram-69.png'}
                            width={256}
                            height={256}
                            className='object-contain'
                            alt={'Image logo instagram'}/>
                    </div>

                    <h1>Rigth </h1>
                </div>

                {/*    Middle*/}


                {/*    Rigth*/}
            </div>
        </>
    )
}