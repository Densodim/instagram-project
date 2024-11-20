import {signOut} from "../../auth";

export function SingOut() {
    return (
        <>
            <form action={
                async () => {
                    "use server"
                    await signOut()
                }
            }>
                <button> Sing Out</button>
            </form>
        </>
    )
}