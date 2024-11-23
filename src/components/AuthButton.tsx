"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <p>Loading...</p>; // Показываем индикатор загрузки, пока проверяется сессия
    }

    if (status === "authenticated" && session) {
        return (
            <div>
                <p>Signed in as {session.user?.email}</p>
                <button onClick={() => signOut()} className="btn">
                    Sign out
                </button>
            </div>
        );
    }

    return (
        <button
            onClick={() =>
                signIn("google", { callbackUrl: process.env.NEXTAUTH_URL || "http://localhost:3000" })
            }
            className="btn"
        >
            Sign in with Google
        </button>
    );
}