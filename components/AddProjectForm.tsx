"use client";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import styles from "./AddProjectForm.module.scss";
import { DualRingComponent } from "./DualRing";
import { addProject } from "@/firebase/projectsCollection";
import { userDataAtom } from "@/app/recoilContextProvider";
import { useRecoilValue } from "recoil";

interface propsType {
    setNewProjectFormState: Dispatch<SetStateAction<boolean>>
}

export const AddProjectForm = ({ setNewProjectFormState }: propsType) => {
    const userData = useRecoilValue(userDataAtom);
    console.log(userData?.id);
    const [waiting, setWaiting] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [title, setTitle] = useState("");
    const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        setWaiting(true);
        if (title.length === 0) {
            setErrorMessage("Title required");
            setWaiting(false);
            return;
        }
        await addProject(title, userData?.id);
        setWaiting(false);
        setNewProjectFormState(false);
    };
    const handleCancel = () => {
        setTitle("");
        setNewProjectFormState(false);
    };
    return (
        <div className={styles.formContainer}>
            <form className={styles.addProjectForm} onSubmit={handleSubmit}>
                <div className={styles.inputFormContainer}>
                    <input 
                        type='text'
                        placeholder='Project title'
                        name="title"
                        value={title}
                        onChange={(evt) => setTitle(evt.target.value)}
                    />
                </div>   
                <div className={styles.errorContainer}>
                    <p className={styles.errorMessage}>{errorMessage}</p>
                </div>
                <div className={styles.buttonsContainer}>
                    <button className={styles.addProjectButton}>Submit { waiting && <DualRingComponent /> }</button>
                    <button onClick={handleCancel} className={styles.cancelButton}>Cancel</button>
                </div>   
            </form>
        </div>
    )
}