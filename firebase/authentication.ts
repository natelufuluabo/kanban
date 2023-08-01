import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./config";
import { User } from "@/classes/User";
import { addUser } from "./usersCollection";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const signUpUser = async (user: User) => {
    try {
        // Create user for authentication
        const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password)
        // Get user authID
        const authID = userCredential.user.uid;
        // Add user in database
        await addUser(user, authID);
        // Redirect user to login page
        window.location.href = "/login";
    } catch (e) {
        console.error(e);
    };
}