import React, {useState} from 'react'
import {ChromePicker} from "react-color";

function ColorPicker() {
    const [color, setColor] = useState('#fff')
    const [showColorPicker, setshowColorPicker] = useState(false)
    return (
        <div>
            <h1>Color Picker</h1>
            <button onClick = {() => setshowColorPicker(showColorPicker =>!showColorPicker)}>
                { showColorPicker ? <h2>Close color picker</h2> : <h2>Pick a color</h2>}
            </button>
            {
                showColorPicker && (<ChromePicker color = {color} onChange = {(updatedColor) => setColor(updatedColor.hex)}></ChromePicker>
            )}

            <h3>Picked Color{color}</h3>
        </div>
    )
}

export default ColorPicker
