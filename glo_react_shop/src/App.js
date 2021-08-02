import {createGlobalStyle} from 'styled-components';
import { NavBar } from './Components/NavBar';


const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}
*,*:before,*:after{box-sizing: inherit;}
body {
  background-color: #f0f0f0;
  font-family: Roboto, sans-serif;
  margin: 0;
  font-size: 20px;
  color: #000;
}
img {
  max-width: 100%;
  height: auto;
}
a{
  text-decoration: none;
  color: inherit;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
h1,h2,h3 {
  font-family: Pacifico, sans-serif;
  padding: 0;
  margin: 0;
}
input[type="button"], button{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  cursor: pointer;
  color: #fff;
  border-radius: 0;
  font-weight: bold;
  border: none;
  background: transparent;
}
p {
  padding: 0;
  margin: 0;
}
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
    </>
  );
}

export default App;
