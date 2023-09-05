import styles from "./SideBar.module.scss";
import { useRecoilValue } from "recoil";
import { projectDataAtom } from "@/app/recoilContextProvider";

export const SideBar = () => {
    const projectData = useRecoilValue(projectDataAtom);
    const renderProjects = () => {
        return projectData?.map((project) => {
            const { id, data} = project;
            return (
                <li key={id}>
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
            <p>ALL PROJECT</p>
            <ul className={styles.projectList}>{renderProjects()}</ul>
        </div>
    )
};