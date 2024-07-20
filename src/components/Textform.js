import React, { useState } from "react";


function Textform(props) {

  const handleOnChange = (event) =>{
    setText(event.target.value);
  }
  const handleonClick1 = () =>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleonClick2 = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleonClick3 = () => {
    setText('');
  }
  const handleonClick4 = () => {
    navigator.clipboard.writeText(text)
  }
  const handleonClick5 = () => {
    let newText = text.charAt(0).toUpperCase()+text.substring(1).toLowerCase()
    setText(newText)
  }
  const handlenewLine = () => {
    let newText = text.replace(/(^\w|\n\w)/g, (match) => match.toUpperCase());
    setText(newText)
  }
  const handleonlynewLine = () => {
    let newText = text.replace(/(?:\r\n|\r|\n)(.)/g, (match) => match.toUpperCase());
    setText(newText)
  }
  const handlefullstop = () => {
    let newText = text.replace(/(^\w|\.\w)/g, (match) => match.toUpperCase());
    setText(newText)
  }
  const[text, setText] = useState("");
  // setText("")
  return (
    <>
    
      <div className="conatiner" style={{color:props.mode==="dark"?'white':'black'}}>
      <h1>{props.txt}</h1>
        <textarea
          className="form-control"
          id="my-box"
          rows="6"
          value={text}
          style={{backgroundColor:props.mode==="dark"?'white':'black',color:props.mode==="light"?'white':'black'}}
          onChange={handleOnChange}
        ></textarea>
        <div className="container">
        <button className={`btn btn-${props.mode==='dark'?'outline-warning':'danger'} m-2`} onClick={handleonClick1}>UPPER CASE</button>
        <button className={`btn btn-${props.mode==='dark'?'outline-warning':'danger'} m-2`} onClick={handleonClick2}>LOWER CASE</button>
        <button className={`btn btn-${props.mode==='dark'?'outline-warning':'danger'} m-2`} onClick={handleonClick3}>CLEAR</button>
        <button className={`btn btn-${props.mode==='dark'?'outline-warning':'danger'} m-2`} onClick={handleonClick4}>COPY</button>
        <button className={`btn btn-${props.mode==='dark'?'outline-warning':'danger'} m-2`} onClick={handleonClick5}>CAPITIALIZE</button>
        <button className={`btn btn-${props.mode==='dark'?'outline-warning':'danger'} m-2`} onClick={handlenewLine}>newline-CAP</button>
        <button className={`btn btn-${props.mode==='dark'?'outline-warning':'danger'} m-2`} onClick={handleonlynewLine}>only-newline-CAP</button>
        <button className={`btn btn-${props.mode==='dark'?'outline-warning':'danger'} m-2`} onClick={handlefullstop}>full-stop-CAP</button>
        </div>
      </div>
      <div className="container" style={{color:props.mode==="dark"?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>minutes to raed : {0.32*text.split(' ').length}sec</p>

        <h3>Preview : </h3>
        <p>{text.length>0 ? text : "Enter in the textbox to preview it"}</p>
      </div>
    </>
  );
}

export default Textform;
