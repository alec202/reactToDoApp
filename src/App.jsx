import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// const subject = "React";
function App(props) {
    console.log(`Props is:`);
    console.log(props);
    return (
        <>
            <header>
                <h1>Hello {props.subject }!!</h1>
            </header>
            <button type="button">Click me!</button>
        </>
    )
}

export default App
