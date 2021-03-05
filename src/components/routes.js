import Skills from "./skills/skills";
import Projects from "./projects/projects";
import About from "./about/about";
import {
   BrowserRouter as Router,
   Route,
   Switch,
   NavLink,
} from "react-router-dom";
const Navigation = () => (
   <div className='nav'>
      <NavLink to='/skills' activeClassName='active'>
         Skills
      </NavLink>
      <NavLink to='/projects' activeClassName='active'>
         Projects
      </NavLink>
      <NavLink to='/about' activeClassName='active'>
         About
      </NavLink>
   </div>
);

const RouteContainer = () => {
   return (
      <Router>
         <Navigation />
         <Switch>
            <Route path='/skills' component={Skills} />
            <Route path='/projects' component={Projects} />
            <Route path='/about' component={About} />
         </Switch>
      </Router>
   );
};
export default RouteContainer;
