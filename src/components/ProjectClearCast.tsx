import { Link } from "react-router-dom";
import appProjects from "../data/appProjects";
import Project_App from "./Project_App";

export default function () {
  return (
    <Project_App app={appProjects.ClearCast}>
      <p>
        I have always felt that most weather apps have overly-complicated UIs;
        with ClearCast, I focused on a minimalist interface built around the following tenets:
        <ul style={{ fontStyle: 'italic' }}>
          <li>
            Most people want a weather app that is intuitive, rather than one that is feature-rich.
          </li>
          <li>
            Weather data from the recent past is valuable.
          </li>
        </ul>
      </p>
      <p>
        Aggregate data from OpenWeather APIs are displayed in one intuitive screen of forecasts.
        Weather for the current day is extended back in time to display hourly forecasts from 12 A.M. through the end of the day.
        Integration with Google Places Autocomplete makes finding places effortless and familiar,
        and layout animations allow the app to smoothly and convincingly adjust to show as much or little information as the user needs.
      </p>
      <p>
        ClearCast is currently available on TestFlight via invite. <Link to="/contact">Let me know</Link> if you'd like to be a tester!
        Check out the <a href="https://github.com/colecharb/ClearCast">GitHub repo</a>.
      </p>
    </Project_App>
  )
}