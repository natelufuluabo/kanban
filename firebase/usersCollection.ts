import { collection, addDoc } from "firebase/firestore"; 
import { db } from "./config";
import { User } from "@/classes/User";

export const addUser = async (user: User, authID: string) => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            authID
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};
