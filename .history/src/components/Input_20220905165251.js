import React from "react";

const Input = (props) =>{
    const {label,error,name,onChange} = props;
    return(
        <div className="form-group">
                <label>{label}</label>
                <input className={error ? "form-control is-invalid" : "form-control"} name={name} onChange={onChange}/>
                <div className="invalid-feedback">
        {error}
      </div>
                </div>

    )
}
export default Input;