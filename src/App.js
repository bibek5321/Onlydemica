import React from 'react'
import Header from './components/common/Heading/Header'
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import "./App.css"
import Home from './components/Home/Home'
import About from "./components/About/About"
import CourseHome from './components/allcourses/CourseHome'
import Team from "./components/Team/Team"
import Contact from './components/contact/Contact'
import Pricing from "./components/pricing/Pricing"
import blog from './components/blog/Blog'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/about" exact component={About} />
           <Route path="/courses" exact component={CourseHome} />
           <Route path="/team" exact component={Team} />
           <Route path="/contact" exact component={Contact} />
           <Route path="/pricing" exact component={Pricing} />
           <Route path="/jornal" exact component={blog} />



        </Switch>
      </Router>
    </>
  )
}

export default App
