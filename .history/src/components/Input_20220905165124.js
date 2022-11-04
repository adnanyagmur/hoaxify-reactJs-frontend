import React from "react";

const Input = (props) =>{
    return(
        <div className="form-group">
                <label>{props.label}</label>
                <input className={props.error ? "form-control is-invalid" : "form-control"} name={props.name} onChange={props.onChange}/>
                <div className="invalid-feedback">
        {props.error}
      </div>
                </div>

    )
}
export default Input;