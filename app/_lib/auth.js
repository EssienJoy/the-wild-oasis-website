import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
    ],
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth }) {
            return !!auth?.user;
        },
        async signIn({ user }) {
            try {
                const existingGuest = await getGuest(user.email);
                if (!existingGuest) {
                    await createGuest({ email: user.email, fullName: user.name });
                }
                return true;
            } catch {
                return false;
            }
        },
        async session({ session }) {
            const guest = await getGuest(session?.user?.email);
            session.user.guestId = guest.id;
            return session;
        },
    },
};


export const { auth, handlers: { GET, POST }, signIn, signOut } = NextAuth(authConfig);



// authConfig
// ├── providers: [... ]               ✅ Top - level
// ├── pages: {                         ✅ Top - level
// │   └── signIn: '/login'
// │   └── error: '/auth/error'
// │   └── signOut: '/logout'
// │
// }
// ├── callbacks: {                     ✅ Top - level
// │   ├── signIn({ user })             ✅ Inside callbacks
// │   ├── session({ session, token })  ✅ Inside callbacks
// │   ├── jwt({ token, user })         ✅ Inside callbacks
// │   └── authorized({ auth })         ✅ Inside callbacks(for middleware)
// │
// }
// ├── session: {                       ✅ Top - level
// │   └── strategy: 'jwt' or 'database'
// │   └── maxAge: 60 * 60 * 24 * 30
// │
// }
// ├── secret: '...'                    ✅ Top - level
// ├── adapter: ...                     ✅ Top - level(optional, for DB support)
// ├── events: { ... }                  ✅ Top - level(optional, e.g., on signIn)
// ├── theme: { ... }                   ✅ Top - level(optional, for default UI)
// └── debug: true / false                ✅ Top - level(optional);
