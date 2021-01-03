import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Intro from './components/Intro/Intro'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Slideshow from './components/Slideshow/Slideshow'
import Socials from './components/Socials/Socials'

export default function App()
{
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Intro />
          </Route>
        </Switch>
      </Router>

      <Socials />
      <Slideshow />
    </div>
  );
}
