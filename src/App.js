import datainfo from './data/db.json';
import MainBanner from './Banner';
function App(props) {
    return (
        <div>
            {/* <p>
                {props.sendinfo.price}
            </p>
            <p>
                {props.sendinfo.pronm}
            </p>
            <p>
                 {props.sendinfo.protext}
            </p> */}
            <div className="App">
                <ul>
                    {
                    datainfo["gnb"].map((v , i) => {
                        return (
                        <li>
                            <a href={v.href}>
                            {v.atext}
                            </a>
                        </li>
                        )
                    })
                    }
                </ul>
                <MainBanner></MainBanner>
            </div>
        </div>
    )
}

export default App
