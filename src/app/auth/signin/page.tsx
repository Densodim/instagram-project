import Header from "@/components/Header";
import SignIn from "@/components/sign-in";
import {auth} from "../../../../auth";
import {SingOut} from "@/components/sign-out";


export default async function SignInPage() {
    const session = await auth();
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
                    <SignIn/>
                    <SingOut/>
                </div>

                <div className="flex flex-col rounded-md bg-gray-100">
                    <div className="rounded-t-md bg-gray-200 p-4 font-bold">
                        Current Session
                    </div>
                    <div className="whitespace-pre-wrap break-all px-4 py-6">
                    {JSON.stringify(session, null, 2)}
                    </div>
                </div>

            </div>
        </>
    )
}