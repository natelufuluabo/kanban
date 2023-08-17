import { collection, addDoc, query, where, getDocs } from "firebase/firestore"; 
import { db } from "./config";

const usersRef = collection(db, "users");

export const addUser = async (user, authID) => {
    try {
        const docRef = await addDoc(usersRef, {
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

export const getUser = async (authID) => {
    try {
        const q = query(usersRef, where("authID", "==", authID));
        const result = await getDocs(q);
        const promises = result.docs.map(async (doc) => {
            const id = doc.id;
            const data = doc.data();
            const document = { id, data };
            return document;
        });
        const documents = await Promise.all(promises);

        return documents;
    } catch (error) {
        console.error(error);
    }
};
