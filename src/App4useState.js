import { useState } from "react";
import styled from "styled-components";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Allmenu = styled.button`
font-family: 'bootstrap-icons';
background-color: white;
border: 0px;
  &:before{
    content : '\\F479';
    font-size : 30px;
  }
`
const Closemenu = styled.button`
font-family: 'bootstrap-icons';
background-color: white;
border: 0px;
  &:before{
    content : '\\F62A';
    font-size : 30px;
  }
`

function App() {
  const [allmenu, setAllmenu] = useState(false);
  return (
    <div className="App">
      <div onClick={() => setAllmenu(!allmenu)}>
        {
          allmenu ? <Closemenu /> : <Allmenu />
        }
      </div>
    </div>
  );
}

export default App;