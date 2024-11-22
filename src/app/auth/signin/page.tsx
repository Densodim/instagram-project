

import Header from "@/components/Header";




export default async function SignInPage() {

    return (
        <>
            <Header/>
            <div className='flex justify-center space-x-7 mt-20'>
                <img
                    className='hidden object-cover rounded-6 md:inline-flex md:w-50'
                    src='https://www.mspy.com/static/mspy/public/assets/images/redesign/features/instagram/en/instagram.png?v=v2'
                    alt='instagram Image'
                />
                <div className=''>
                    <h1>Page Sing In</h1>
                </div>

            </div>
        </>
    )
}
