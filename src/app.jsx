import Main from './components/pages/main';
import { Route, Switch } from 'react-router-dom';
import './index.scss'

function App() {
  return (
    <Switch>
      <Route path="/:param?" component={Main} />
    </Switch>
  );
}

export default App;
