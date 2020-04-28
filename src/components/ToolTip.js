import React from 'react'
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

const ColoredTooltip = () => {
    return(
      <span style={{color:'yellow'}}>Colored Component</span>
    );
  }

function ToolTip() {
    return (
        <div>
          <h1>Tooltips Hovers</h1>
        <div style = {{paddingBottom:'5px'}}>
          <Tippy content = "Basic Tooltips!!">
            <button><h2>Hover!</h2></button>
          </Tippy>
        </div>
        <div style = {{paddingBottom:'5px'}}>
          <Tippy placement = 'right' content={<span style = {{color:'orange'}}>Colored</span>}>
            <button><h2>Hover!</h2></button>
          </Tippy>
        </div>
        <div style = {{paddingBottom:'5px'}}>
          <Tippy delay = {1000} content={<ColoredTooltip />}>
            <button><h2>Hover!</h2></button>
          </Tippy>
        </div>
      </div>
    )
}

export default ToolTip
