import { collection, addDoc, query, where, getDocs } from "firebase/firestore"; 
import { db } from "./config";

const tasksRef = collection(db, "tasks");

export const getTasks = async (projectID) => {
    try {
        const q = query(tasksRef, where("projectID", "==", projectID));
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