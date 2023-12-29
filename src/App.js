import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import BlogItemDetails from './components/BlogItemDetails'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Switch>
          <Route exact path="/contact" component={Home} />
          <Route exact path="/abou" component={About} />
          <Route exact path="/" component={Contact} />
          <Route path="/blogs/id" component={BlogItemDetails} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
