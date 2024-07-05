import logo from './logo.svg';
// png gif jpg 는 아래 소스로 넣고
// svg xml 은 모듈이라 import 로 가져온다
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <header id='hd' className='border-bottom'>
      <div className='container d-flex justify-content-between align-items-center'>
        <h1 className='col-4 col-md-2'>
          <a href="/" className='d-block'>
            <img src={logo} className='w-100' alt="" />
          </a>
        </h1>
        <ul id='gnb' className='d-flex'>
          <li className=''><a href="" className='text-dark'>대메뉴</a></li>
          <li className='ms-3'><a href="" className='text-dark'>대메뉴</a></li>
          <li className='ms-3'><a href="" className='text-dark'>대메뉴</a></li>
          <li className='ms-3'><a href="" className='text-dark'>대메뉴</a></li>
        </ul>
      </div>
    </header>
  );
}

export default App;