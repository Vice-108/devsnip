import { createAuthClient } from "better-auth/vue";

export const { signIn, signOut, signUp, useSession, forgetPassword, resetPassword, deleteUser, updateUser } = createAuthClient();
