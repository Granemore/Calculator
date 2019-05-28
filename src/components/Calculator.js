import React from "react"
import "../css/calculator.css"

class Calculator extends React.Component {
    constructor() {
        super()

        this.state = {
            resultValue: ""
        }

        this.handleClear = this.handleClear.bind(this)
        this.handleMath = this.handleMath.bind(this)
        this.calculate = this.calculate.bind(this)
    }

    handleClear() {
        this.setState({
            resultValue: ""
        })
    }

    handleMath(event) {
        const { name } = event.target
        if (name === "=") {
            this.calculate()
        } else if (name === "back") {
            this.setState({
                resultValue: this.state.resultValue.slice(0, -1) // 0 indicates beginning from index[0], -1 indicates extracting the last element
            })
        } else if (name === "clear") {
            this.handleClear()
        } else {
            this.setState({
                resultValue: this.state.resultValue + name
            })
        }
    }

    calculate() {
        try {
            this.setState({
                resultValue: (eval(this.state.resultValue) || "") + ""
            })
        } catch (e) {
            this.setState({
                resultValue: "error ):"
            })
        }
    }

    render() {
        return (
            <div className="calculatorWrapper">
                <div className="results">
                    <h2>{this.state.resultValue}</h2>
                </div>
                <div className="inputWrapper">
                    <button
                        className="mathButton"
                        name="clear"
                        onClick={this.handleMath}
                    >
                        Clear
                    </button>
                    <button
                        className="mathButton"
                        name="back"
                        onClick={this.handleMath}
                    >
                        Back
                    </button>
                    <button
                        className="mathButton"
                        name="("
                        onClick={this.handleMath}
                    >
                        (
                    </button>
                    <button
                        className="mathButton"
                        name=")"
                        onClick={this.handleMath}
                    >
                        )
                    </button>

                    <button
                        className="mathButton"
                        name="7"
                        onClick={this.handleMath}
                    >
                        7
                    </button>
                    <button
                        className="mathButton"
                        name="8"
                        onClick={this.handleMath}
                    >
                        8
                    </button>
                    <button
                        className="mathButton"
                        name="9"
                        onClick={this.handleMath}
                    >
                        9
                    </button>
                    <button
                        className="mathButton"
                        name="*"
                        onClick={this.handleMath}
                    >
                        *
                    </button>
                    <button
                        className="mathButton"
                        name="4"
                        onClick={this.handleMath}
                    >
                        4
                    </button>
                    <button
                        className="mathButton"
                        name="5"
                        onClick={this.handleMath}
                    >
                        5
                    </button>
                    <button
                        className="mathButton"
                        name="6"
                        onClick={this.handleMath}
                    >
                        6
                    </button>
                    <button
                        className="mathButton"
                        name="/"
                        onClick={this.handleMath}
                    >
                        ÷
                    </button>
                    <button
                        className="mathButton"
                        name="1"
                        onClick={this.handleMath}
                    >
                        1
                    </button>
                    <button
                        className="mathButton"
                        name="2"
                        onClick={this.handleMath}
                    >
                        2
                    </button>
                    <button
                        className="mathButton"
                        name="3"
                        onClick={this.handleMath}
                    >
                        3
                    </button>
                    <button
                        className="mathButton"
                        name="-"
                        onClick={this.handleMath}
                    >
                        -
                    </button>
                    <button
                        className="mathButton"
                        name="0"
                        onClick={this.handleMath}
                    >
                        0
                    </button>
                    <button
                        className="mathButton"
                        name="."
                        onClick={this.handleMath}
                    >
                        .
                    </button>
                    <button
                        className="mathButton"
                        name="="
                        onClick={this.handleMath}
                    >
                        =
                    </button>
                    <button
                        className="mathButton"
                        name="+"
                        onClick={this.handleMath}
                    >
                        +
                    </button>
                </div>
            </div>
        )
    }
}

export default Calculator
