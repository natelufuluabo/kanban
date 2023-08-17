import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "./config";
import { addUser } from "./usersCollection";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const signUpUser = async (user, setErrorMessage) => {
    try {
        // Create user for authentication
        const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password)
        // Get user authID
        const authID = userCredential.user.uid;
        // Add user in database
        await addUser(user, authID);
        setErrorMessage("");
    } catch (error) {
        setErrorMessage(error.message);
    };
};

export const signInUser = async (formData, setErrorMessage, setFormData) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password)
        // Get user authID
        const authID = userCredential.user.uid;
        // Redirect user to manager page
        window.location.href = "/manager";
        setErrorMessage("");
        setFormData({
            email: "",
            password: ""
        });
    } catch (error) {
        setErrorMessage(error.message);
        setFormData({
            email: formData.email,
            password: formData.password
        });
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