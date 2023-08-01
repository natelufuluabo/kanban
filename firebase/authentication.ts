import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "./config";
import { User } from "@/classes/User";
import { formDataType } from "@/components/LogInForm";
import { addUser, getUser } from "./usersCollection";

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
    } catch (error) {
        console.error(error);
    };
};

export const signInUser = async (formData: formDataType) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password)
        // Get user authID
        const authID = userCredential.user.uid;
        // Redirect user to manager page
        window.location.href = "/manager";
    } catch (error) {
        console.log(error);
    }
};

export const signOutUser = async () => {
    try {
        await signOut(auth);
        window.location.href = "/login";
    } catch (error) {
        console.error(error);
    }
};