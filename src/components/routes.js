import Skills from "./skills/skills";
import Projects from "./projects/projects";
import About from "./about/about";
import {
  // BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  HashRouter,
} from "react-router-dom";
const Navigation = () => (
  <div className="nav">
    <NavLink to="/skills" activeClassName="active">
      Skills
    </NavLink>
    <NavLink to="/projects" activeClassName="active">
      Projects
    </NavLink>
    <NavLink to="/about" activeClassName="active">
      About
    </NavLink>
  </div>
);

const RouteContainer = () => {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Skills} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
      </Switch>
    </HashRouter>
  );
};
export default RouteContainer;
