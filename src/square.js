import React from 'react';

const Square = (props) => {
    const styles = {
        backgroundColor: props.color,
        border: "solid black 2px"
    }

    return (
        <div style={styles}></div>
    )
}

export default Square