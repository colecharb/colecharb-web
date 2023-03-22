import { appProjects } from "../data/portfolioItems";
import ProjectFlavorNavigator from "./ProjectFlavorNavigator";
import Project_App from "./Project_App";

export default function () {
  return (
    <>

      {/* <h2>Projects</h2> */}
      {/* <div className='line-horizontal' /> */}

      {/* <h4>Apps</h4> */}

      {appProjects.map(app => (
        <Project_App app={app} />
      ))}

      <ProjectFlavorNavigator />

    </>

  )
}