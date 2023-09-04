import { collection, addDoc, query, where, getDocs } from "firebase/firestore"; 
import { db } from "./config";

const projectsRef = collection(db, "projects");

export const addProject = async (title, ownerID) => {
    try {
        const docRef = await addDoc(projectsRef, {
            title, ownerID
        });
        return docRef;
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

export const getProject = async (ownerID) => {
    try {
        const q = query(projectsRef, where("ownerID", "==", ownerID));
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