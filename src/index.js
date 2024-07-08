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
    <App sendinfo ={myinfo[0]}></App>
    <App sendinfo ={myinfo[1]}></App>

    {
      myinfo.map((ele, idx)=>{
          return(
              <App sendinfo={myinfo[idx]}></App>
          )
      })
    }

    {
	    myinfo.map((ele, idx)=> <App sendinfo={myinfo[idx]}></App>) 
    }

  </>
);