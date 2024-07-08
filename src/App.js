function App(props) {
    return (
        <div>
            <p>
                {props.sendinfo.price}
            </p>
            <p>
                {props.sendinfo.pronm}
            </p>
            <p>
                 {props.sendinfo.protext}
            </p>
        </div>
    )
}

export default App
