import NextAuth from "next-auth"
import Google from "next-auth/providers/google"


export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        })
    ],
    session: {strategy: "jwt"},
    callbacks: {
        authorized({ request, auth }) {
            const { pathname } = request.nextUrl
            if (pathname === "/middleware-example") return !!auth
            return true
        },
        jwt({token, trigger, session, account}) {
            if (trigger === "update") token.name = session.user.name
            if (account?.provider === "keycloak") {
                return {...token, accessToken: account.access_token}
            }
            return token
        },
        async session({session, token}) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            if (token?.accessToken) { // @ts-expect-error
                session.accessToken = token.accessToken
            }

            return session
        },
    },
    debug: !!process.env.NEXTAUTH_DEBUG,
    basePath: "/auth",
})

export {handlers as GET, handlers as POST};

declare module "next-auth" {
    interface Session {
        accessToken?: string
    }
}


