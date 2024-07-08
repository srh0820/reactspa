import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

const myinfo = [{
  price : 50000,
  pronm : "신발",
  protext : "신발입니다1"
},
{
  price : 100000,
  pronm : "신발",
  protext : "신발입니다2"
}]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* myinfo 배열의 첫 번째와 두 번째 요소를 각각 sendinfo prop으로 App 컴포넌트에 전달하고 있습니다. */}
    <App sendinfo ={myinfo[0]}></App>
    <App sendinfo ={myinfo[1]}></App>
    
    {/* myinfo 배열을 map 함수로 순회하며 각 요소를 sendinfo prop으로 전달하여 App 컴포넌트를 렌더링합니다.
            이 방법은 배열의 모든 요소에 대해 App 컴포넌트를 생성합니다. */}
    {
      myinfo.map((ele, idx)=>{
          return(
              <App sendinfo={myinfo[idx]}></App>
          )
      })
    }
    
    {/* 앞서 설명한 map 함수와 동일하지만 더 간결한 문법으로 작성되었습니다.
		    return 문을 생략하고 바로 JSX를 반환합니다. */}
    {
	    myinfo.map((ele, idx)=> <App sendinfo={myinfo[idx]}></App>) 
    }
    
  </>
);