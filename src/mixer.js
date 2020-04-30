import React, {Component} from 'react';
import Square from './square';

class Mixer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['white', 'white', 'white', 'white']
        }
    }

    handleBlackWhite = () => {
        this.setState((prevState) => {
            if(prevState.colors[0] === "white"){
                return {colors: ['black', 'black', 'black', 'black']}
            } else if(prevState.colors[0] === 'purple' && prevState.colors[2] === 'white'){
                return {colors: ['black', 'black', 'black', 'black']}
            } else if(prevState.colors[0] === "purple" && prevState.colors[2] === 'black'){
                return {colors: ['purple','purple', 'white', 'white']}
            } else {
                return {colors: ['white', 'white', 'white', 'white']}
            }
        })
    }

    handlePurple = () => {
        this.setState((prevState) => {
            if(prevState.colors[0] === "white"){
                return {colors: ['purple', 'purple', 'white', 'white']}
            } else if(prevState.colors[0] === "black"){
                return {colors: ['purple', 'purple', 'black', 'black']}
            } else if(prevState.colors[0] === "purple" && prevState.colors[2] === "black"){
                return {colors: ['black', 'black', 'black', 'black']}
            } else if (prevState.colors[0] === "white" && prevState.colors[2] === "blue"){
                return {colors: ['purple', 'purple', 'blue', 'white']}
            } else if (prevState.colors[0] === "white" && prevState.colors[2] === "blue" && prevState.colors[3] === "blue"){
                return {colors: ['purple', 'purple', 'blue', 'blue']}
            } else if (prevState.colors[0] === "black" && prevState.colors[2] === "blue"){
                return {colors: ['purple', 'purple', 'blue', 'black']}
            } else if (prevState.colors[0] === 'black' && prevState.colors[2] === 'blue' && prevState.colors[3] === 'blue'){
                return {colors: ['purple', 'purple', 'blue', 'blue']}
            } else {
                return {colors: ['white', 'white', 'white', 'white']}
            }
        })
    }

    handleBlueLeft = () => {
        this.setState((prevState) => {
            if(prevState.colors[0] === "white"){
                return {colors: ['white', 'white', 'blue', 'white']}
            } else if (prevState.colors[0] === "white" && prevState.colors[3] === 'blue'){
                return {colors: ['white', 'white', 'blue', 'blue']}
            } else if (prevState.colors[0] === "black"){
                return {colors: ['black', 'black', 'blue', 'black']}
            } else if (prevState.colors[0] === "black" && prevState.colors[3] === "blue"){
                return {colors: ['black', 'black', 'blue', 'blue']}
            } else if (prevState.colors[0] === "black" && prevState.colors[2] === "blue"){
                return {colors: ['black', 'black', 'black', 'black']}
            } else if (prevState.colors[0] === "black" && prevState.colors[2] === "blue" && prevState.colors[3] === "blue"){
                return {colors: ['black', 'black', 'black', 'blue']}
            } else if (prevState.colors[0] === "purple" && prevState.colors[2] === "white"){
                return {colors: ['purple', 'purple', 'blue', 'white']}
            } else if (prevState.colors[0] === "purple" && prevState.colors[2] === "black"){
                return {colors: ['purple', 'purple', 'blue', 'black']}
            } else if (prevState.colors[0] === "purple" && prevState.colors[2] === "blue" && prevState.colors[3] === "white"){
                return {colors: ['purple', 'purple', 'white', 'white']}
            } else if (prevState.colors[0] === "purple" && prevState.colors[2] === "blue" && prevState.colors[3] === "black"){
                return {colors: ['purple', 'purple', 'black', 'black']}
            } else if (prevState.colors[0] === "purple" && prevState.colors[2] === "blue" && prevState.colors[3] === "blue"){
                return {colors: ['purple', 'purple', 'white', 'blue']}
            }
        })
    }

    handleBlueRight = () => {
        this.setState((prevState) => {
            if(prevState.colors[0] === "white"){
                return {colors: ['white', 'white', 'white', 'blue']}
            } else if (prevState.colors[0] === "white" && prevState.colors[2] === 'blue'){
                return {colors: ['white', 'white', 'blue', 'blue']}
            } else if (prevState.colors[0] === "white" && prevState.colors[2] === 'blue' && prevState.colors[3] === 'blue'){
                return {colors: ['white', 'white', 'blue', 'white']}
            } else if (prevState.colors[0] === 'black'){
                return {colors: ['black', 'black', 'black', 'blue']}
            } else if (prevState.colors[0] === 'black' && prevState.colors[2] === 'blue'){
                return {colors: ['black', 'black', 'blue', 'blue']}
            } else if (prevState.colors[0] === 'black' && prevState.colors[2] === 'blue' && prevState.colors[3] === 'blue'){
                return {colors: ['black', 'black', 'blue', 'black']}
            } else if (prevState.colors[0] === 'purple' && prevState.colors[2] === 'white'){
                return {colors: ['purple', 'purple', 'white', 'blue']}
            } else if (prevState.colors[0] === 'purple' && prevState.colors[2] === 'blue'){
                return {colors: ['purple', 'purple', 'blue', 'blue']}
            } else if (prevState.colors[0] === 'purple' && prevState.colors[2] === 'black'){
                return {colors: ['purple', 'purple', 'black', 'blue']}
            } else if (prevState.colors[0] === 'purple' && prevState.colors[2] === 'blue' && prevState.colors[3] === 'blue'){
                return {colors: ['purple', 'purple', 'blue', 'white']}
            } else if (prevState.colors[0] === 'purple' && prevState.colors[2] === 'blue' && prevState.colors[3] === 'black'){
                return {colors: ['purple', 'purple', 'blue', 'blue']}
            }
        })
    }


    render() {
        const styles = {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "200px 200px",
            gridGap: "15px",
            gridColumnGap: '5px',
            transitionProperty: "all",
            transitionDuration: ".25s"

        }

        const styleClick = {
            borderRadius: "50%",
        }

        const colors = this.state.colors.map(color => {
            return <Square color={color} />
        })


        return (
            <div>
                <div style={styles} onClick={styleClick}>{colors}</div>
                <button onClick={this.handleBlackWhite}>Toggle Black and White</button>
                <button onClick={this.handlePurple}>Toggle Purple</button>
                <button onClick={this.handleBlueLeft}>Toggle Blue 1</button>
                <button onClick={this.handleBlueRight}>Toggle Blue 2</button>
            </div>
        )
    }
}

export default Mixer