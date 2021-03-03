import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Intro from './components/Intro/Intro'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Slideshow from './components/Slideshow/Slideshow'
import Socials from './components/Socials/Socials'
import ThemeSelect from './components/ThemeSelect/ThemeSelect'

export default function App(props)
{
  return (
    <div id='app-container'>
      <ThemeSelect />
      <div id='content-container'>
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
    </div>
  );
}
