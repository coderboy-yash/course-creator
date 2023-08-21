import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

// 
// import { handleAuth } from '@auth0/nextjs-auth0';

// export default handleAuth();
// 

const handler = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
})

export { handler as GET, handler as POST }