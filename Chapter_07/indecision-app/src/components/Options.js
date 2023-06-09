import React from "react";
import Option from './Option'
const Options = (props) => (
        <div>
            <button onClick={props.handleDeleteAll}>Remove All</button>
            {props.options.length === 0 && <p>Please Add some options to do</p>}
            {
                props.options.map((option) => (
                    <Option 
                    key={option} 
                    optionText={option} 
                    handleDeleteOption = {props.handleDeleteOption}
                    />))
            }
        </div>
    )


export default Options;