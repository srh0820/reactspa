import { useEffect } from "react";
import styled from "styled-components";

const Allmenu = styled.button`
  display: inline-block;
  font-family: bootstrap-icons !important;
  font-style: normal;
  font-weight: 400 !important;
  font-variant: normal;
  text-transform: none;
  &.close:before {
    content: '\\F62A';
  }
  &:before {
    content: '\\F479';
  }
`;

function App() {
  useEffect(() => {
    const menuButton = document.querySelector('#allMenu');
    
    const toggleClass = () => {
      menuButton.classList.toggle('close');
    };
    
    menuButton.addEventListener('click', toggleClass);

    return () => {
      menuButton.removeEventListener('click', toggleClass);
    };
  }, []);

  return (
    <div className="App">
      <div>
        <Allmenu id="allMenu" className="close"></Allmenu>
      </div>
    </div>
  );
}

export default App;