import React from 'react';
import "./ToggleCheck.css";

const ToggleCheck = props => {
    return React.createElement(
        "div",
        { className: "fbm-rform-input fbm-rform-form-check" },
        React.createElement("input", {
            id: "fbm-rform-input-checkbox",
            name: "fbm-rform-input-checkbox",
            type: "checkbox",
            className: "fbm-rform-input-checkbox"
        }),
        React.createElement(
            "label",
            {
                className: "fbm-rform-input-label",
                htmlFor: "fbm-rform-input-checkbox"
            },
            props.label
        )
    );
};

export default ToggleCheck;