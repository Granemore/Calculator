import "./css/index.css"
import React from "react"
import ReactDOM from "react-dom"
import Calculator from "./components/Calculator"

const Index = () => {
    return (
        <div>
            <Calculator />
        </div>
    )
}

ReactDOM.render(<Index />, document.getElementById("root"))

module.hot.accept()
