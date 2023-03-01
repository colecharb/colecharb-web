import { appProjects } from "../data/portfolioItems";
import Project_App from "./Project_App";

export default function () {
  return (
    <>

      {/* <h2>Projects</h2> */}
      {/* <div className='line-horizontal' /> */}

      {appProjects.map(app => (
        <Project_App app={app} />
      ))}

    </>

  )
}