import './App.css';
import styled from 'styled-components';

const Title = styled.h2`
    background-color : black;
    color : white;
    font-size : 50px;
    display : inline-block;
    padding : 10px;
`;
const Abtn = styled.a`
    border:1px solid black;
    color: black;
    display:inline-block;
    padding:10px;
    border-radius: 15px;
    &:hover{
      background-color:black;
      color:white;
    }
`;

function App2(){
    return (
        <div className="App">
            <Title>스타일컴포넌트입니다</Title>
            <Title>베스트상품</Title>
            <Title>추천상품</Title>
         <h2>
            타이틀입니다
            <Abtn>더보기</Abtn>
         </h2>
         <h2>
            타이틀입니다
            <Abtn>응모하기</Abtn>
         </h2>
        </div>
      );
    }

export default App2;
