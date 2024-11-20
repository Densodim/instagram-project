
import {signIn} from "../../auth"



export default function SignIn({provider = "google"}:{provider?: string}) {

    const handleSignIn = async () => {
        "use server"
        try {
            await signIn(provider)
            console.log(provider)
        }catch (e) {
            console.error('Error from auth', e)
        }

    }
    return (
        <form>
            <div className='flex flex-col items-center'>
                <img
                    className='w-32 object-cover '
                    src='https://webpromoexperts.net/images/uploads/course/instagram/WVmfeUiFBd.png'
                    alt='instagram Image'/>
                <p className='text-sm italic my-10 text-center'> This app is created for learning purposes</p>
            </div>
            <button
                className='bg-red-400 rounded-lg p-3 text-white hover:bg-red-500'
                type="submit"
                onClick={handleSignIn}

            >Signin with Google
            </button>
        </form>
    )
}