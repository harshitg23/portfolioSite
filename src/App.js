import { Route, Switch } from "react-router";
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from "react";
import { IconButton } from "@material-ui/core";
import { About, Blog, Contact, Home, Portfolio, Resume } from "./screens";
import { Sidebar } from "./Components";

function App() {
  const [navToggle, setNavToggle] = useState(false);
  const toggle = () => {
    setNavToggle(!navToggle);
  }
  return (
    <div className="App">
      <Sidebar navToggle={navToggle} setNavToggle={setNavToggle} />

      <div className="ham-burger-menu">
        <IconButton onClick={toggle}>
          <MenuIcon />
        </IconButton>
      </div>

      <MainContentStyle>
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <Switch >
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/resume" exact>
            <Resume />
          </Route>
          <Route path="/portfolios" exact>
            <Portfolio />
          </Route>
          <Route path="/blogs" exact>
            <Blog />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>

      </MainContentStyle>
    </div>
  );
}

const MainContentStyle = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and  (max-width:1200px){
    margin-left: 0;
    }
  .lines{
        position: absolute;
        min-height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        opacity: 0.4;
        z-index: -1;
        .line{
            width: 1px;
            min-height: 100vh;
            background-color: var(--border-color);
        }
    }
`;
export default App;
