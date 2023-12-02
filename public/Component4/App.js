import { Component } from "react";




class App extends Component {
    constructor() {
        super()
        this.state = {
            number: 0
        }
        this.countN = this.countN.bind(this);
    }
    countN() {
        this.setState(prevState => {
            return {
                number : prevState.number +1
            }
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <bottun className="btn btn-primary" onClick={this.countN}> click me !</bottun>
            </div>

        )
    }
}
export default App;