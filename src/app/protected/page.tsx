
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function ProtectedPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return <p>Access Denied. Please sign in.</p>;
    }

    return <div>
        <h1>Welcome, {session.user?.email}!</h1>
    </div>;
}