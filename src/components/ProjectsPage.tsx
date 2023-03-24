import appProjects from "../data/appProjects";
import ProjectClearCast from "./ProjectClearCast";
import ProjectFlavorNavigator from "./ProjectFlavorNavigator";
import ProjectPocketChange from "./ProjectPocketChange";

export default function () {
  return (
    <>

      {/* {appProjects.map(app => (
        <Project_App app={app} />
      ))} */}

      <ProjectClearCast />

      <ProjectPocketChange />

      <ProjectFlavorNavigator />

    </>

  )
}