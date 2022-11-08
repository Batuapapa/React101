import React, { useState } from 'react'

function Colors() {
    const [colors, setColors] = useState(["red", "green", "blue"]);

    const handleClick = () => {

        // setColors([...colors, Math.random()]);
        // setColors(["Gray"]);
        setColors([...colors,"Gray"]);
        
    };
    return (
        <div>
            <h2>COLORS</h2>
            { colors.map((color, i) => (<div key={i}> {color}</div>))}
            <button onClick={handleClick}>Ekle</button>
        </div>
    )
}
export default Colors