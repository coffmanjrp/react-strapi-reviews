import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Category, HomePage, ReviewDetails } from './pages';
import { SiteHeader } from './components';

function App() {
  return (
    <Router>
      <div className="App">
        <SiteHeader />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/details/:id" component={ReviewDetails} />
          <Route path="/category/id" component={Category} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
