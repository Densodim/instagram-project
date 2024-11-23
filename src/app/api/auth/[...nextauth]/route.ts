import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import {refreshAccessToken} from "@/components/refreshAccessToken";


export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID as string,
            clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
        }),
    ],
    pages: {
        signIn: '/auth/signin',
        error: '/auth/error',

    },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, account, user }) {
            if (account ) {
                token.accessToken = account.access_token;
                token.refreshToken = account.refresh_token;
                token.accessTokenExpires = Date.now() + (account.expires_at || 0) * 1000;
            }

            if(Date.now() <(token.accessTokenExpires as number)){
                return token;
            }

            return refreshAccessToken(token);
        },
        async session({ session, token }) {
            if (token.accessToken) {
                session.accessToken = token.accessToken as string;
                session.error = token.error as string | undefined;
            }
            return session;
        },
    },
    debug: process.env.NODE_ENV === "development",
};



const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

//type
declare module "next-auth" {
    interface Session {
        accessToken?: string;
        error?: string;
    }

    interface JWT {
        accessToken?: string;
        refreshToken?: string;
        accessTokenExpires?: number;
        error?: string;
    }
}