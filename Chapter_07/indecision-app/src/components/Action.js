import React from "react";


const Action = (props) => (
        <div>
            <button onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should do ?
            </button>
        </div>
    )


export default Action;