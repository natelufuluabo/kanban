import styles from "./SideBar.module.scss";
import { useRecoilValue } from "recoil";
import { projectDataAtom } from "@/app/recoilContextProvider";
import { Dispatch, SetStateAction, useState } from "react";

interface propsType {
    setNewProjectFormState: Dispatch<SetStateAction<boolean>>
}

export const SideBar = ({ setNewProjectFormState }: propsType) => {
    const projectData = useRecoilValue(projectDataAtom);
    const [selectedProject, setSelectedProject] = useState("");
    const renderProjects = () => {
        return projectData?.map((project) => {
            const { id, data } = project;
            return (
                <li onClick={() => setSelectedProject(id)} id={id} className={selectedProject === id ? styles.selectedProject :styles.default} key={id}>
                    {data.title}
                </li>
            )
        })
    }
    return (
        <div className={styles.sideBar}>
            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>kanban</h1>
            </div>
            <ul className={styles.projectList}>
                <li className={styles.firstChild}>ALL PROJECT ({projectData?.length})</li>
                {renderProjects()}
                <li onClick={() => setNewProjectFormState(true)} className={styles.lastChild}>+Add New Project</li>
            </ul>
        </div>
    )
};