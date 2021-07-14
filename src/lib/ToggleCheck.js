import React from 'react'
import "./ToggleCheck.css"

const ToggleCheck = (props) => {
   return (
       <div className="fbm-rform-input fbm-rform-form-check">
           <input 
            id="fbm-rform-input-checkbox" 
            name="fbm-rform-input-checkbox"
            type="checkbox" 
            className="fbm-rform-input-checkbox"  
           />
           <label  
                className="fbm-rform-input-label"
                htmlFor="fbm-rform-input-checkbox"
            >
                {props.label}
           </label>

       </div>
   )
}

export default ToggleCheck

