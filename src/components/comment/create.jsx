import React, { useState } from "react";

export function CreateComment(props) {
  const [state, setState] = useState({ comment: {}, errors: {} });

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid()) {
      props.onComment(state.comment);
      setState({ comment: {}, errors: {} });
    }
  };

  const formIsValid = () => {
    const errors = {};
    if (!state.comment.author) {
      errors.author = "Name is requierd";
    }
    if (!state.comment.text) {
      errors.text = "text is requierd";
    }
    setState({ ...state, errors });
    return !(errors.author || errors.text);
  };

  const changeHandler = (event) => {
    const formData = { [event.target.name]: event.target.value };
    setState({ ...state, comment: { ...state.comment, ...formData } });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>name</label>
          <input
            value={state.comment.author || ""}
            onChange={changeHandler}
            name="author"
            type="text"
            className="form-control"
          />
          <small className="form-text text-danger">{state.errors.author}</small>
        </div>
        <div className="mb-3">
          <label>enter your review</label>
          <textarea
            value={state.comment.text || ""}
            onChange={changeHandler}
            className="form-control"
            row="5"
            name="text"
          ></textarea>
          <small className="form-text text-danger">{state.errors.text}</small>
        </div>

        <button type="submit" className="btn btn-primary m-3">
          Submit
        </button>
      </form>
    </>
  );
}
