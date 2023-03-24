import appProjects from "../data/appProjects";
import Project_App from "./Project_App";

export default function () {
  return (
    <Project_App app={appProjects.ClearCast}>
      <p>
        I have always felt that most weather apps overcomplicate their UI.
        With ClearCast, I focused on a minimalist interface and prioritized the following tenets:
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
    </Project_App>
  )
}