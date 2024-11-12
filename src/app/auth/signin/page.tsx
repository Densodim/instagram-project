// import {getProviders, signIn} from "next-auth/react";
import Header from "@/components/Header";
import SignIn from "@/components/sign-in";

export default function SignInPage() {
    console.log("AUTH_SECRET:", process.env.AUTH_GOOGLE_SECRET);
    return (
        <>
                <Header/>
                <div>
                    <img
                        src='https://www.mspy.com/static/mspy/public/assets/images/redesign/features/instagram/en/instagram.png?v=v2'
                        alt='instagram Image'
                    />
                    <div className=''>
                        <SignIn/>
                        {/*{Object.values(getProviders()).map((provider) => (*/}
                        {/*    <>*/}
                        {/*        <div className=''>*/}
                        {/*            <img*/}
                        {/*                src='https://webpromoexperts.net/images/uploads/course/instagram/WVmfeUiFBd.png'*/}
                        {/*                 alt='instagram Image'/>*/}
                        {/*            <p> This app is created for lerning propertic</p>*/}
                        {/*        </div>*/}

                        {/*    </>*/}
                        {/*))}*/}
                    </div>
                </div>
        </>
    )
}