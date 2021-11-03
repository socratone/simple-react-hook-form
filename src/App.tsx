import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Basic from './pages/Basic';
import Controller from './pages/Controller';
import Validate from './pages/Validate';
import TouchedValidate from './pages/TouchedValidate';
import RelativeValidate from './pages/RelativeValidate';

function App() {
  return (
    <Router>
      <Container>
        <Nav>
          <Link to="/basic">Basic</Link>
          <Link to="/controller">Controller</Link>
          <Link to="/validate">Validate</Link>
          <Link to="/touched">TouchedValidate</Link>
          <Link to="/relative">RelativeValidate</Link>
        </Nav>

        <Switch>
          <Route path="/basic">
            <Basic />
          </Route>
          <Route path="/controller">
            <Controller />
          </Route>
          <Route path="/validate">
            <Validate />
          </Route>
          <Route path="/touched">
            <TouchedValidate />
          </Route>
          <Route path="/relative">
            <RelativeValidate />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  height: 100vh;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  padding: 20px;
  border-bottom: 1px solid gainsboro;
`;

export default App;
