import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Category, HomePage, ReviewDetails } from './pages';
import { SiteHeader } from './components';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <SiteHeader />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/details/:id" component={ReviewDetails} />
            <Route path="/category/:id" component={Category} />
          </Switch>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
