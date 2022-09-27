import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                APP HELLO
                <Route path={"/hello"} render={() => <HelloMessage message={"Hello friends"}/>}/>
                <Route path={"/bye"} render={() => <ByeMessage message={"Bye samurai"}/>}/>
            </div>
        </BrowserRouter>
    );
}

type MessageType = {
    message: string
}

function HelloMessage(props: MessageType) {
    return <h1>{props.message}</h1>
}

const ByeMessage: React.FC<MessageType> = (props) => {
    return <h1>{props.message}</h1>
}

export default App;
