import { Dispatch, SetStateAction, useState } from "react";
import styles from "./AddProjectForm.module.scss";
import { DualRingComponent } from "./DualRing";

interface propsType {
    setNewProjectFormState: Dispatch<SetStateAction<boolean>>
}

export const AddProjectForm = ({ setNewProjectFormState }: propsType) => {
    const [waiting, setWaiting] = useState<boolean>(false);
    return (
        <div className={styles.formContainer}>
            <form className={styles.addProjectForm}>
                <div className={styles.inputFormContainer}>
                    <input 
                        type='text'
                        placeholder='Project title'
                        name="title"
                    />
                </div>   
                <div className={styles.buttonsContainer}>
                    <button className={styles.addProjectButton}>Submit { waiting && <DualRingComponent /> }</button>
                    <button onClick={() => setNewProjectFormState(false)} className={styles.cancelButton}>Cancel</button>
                </div>   
            </form>
        </div>
    )
}