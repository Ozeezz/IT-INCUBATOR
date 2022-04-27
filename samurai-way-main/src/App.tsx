import React from 'react';
import './App.css';

function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQHeTQsBATkdwg/company-logo_200_200/0/1575544858313?e=2147483647&v=beta&t=18ncVsO6jYPAgpdianbDyvnJdSZsPfs38h2xMseE9eo" alt="logo"/>
            </header>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className='content'>
                Main Content
            </div>
        </div>
    );
}

export default App;
