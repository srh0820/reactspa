import './App.css';
import { Title , Abtn , Button , Buttoncolor , Buttonany } from './commonui/ui'

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
            <Button>일반 버튼</Button>
            <Button primary>프라이머리 버튼</Button>
            <Buttoncolor bgcolor="red" textcolor="white">props 배경색 글자색 넣기</Buttoncolor>
            <Buttonany bgcolor="black" textcolor="white" fonstsize="50px" fontfamily="맑은 고딕">변수 4개</Buttonany>
        </div>
      );
    }

export default App2;
