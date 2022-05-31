import React, {useState} from 'react'

export default function Textform(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase", "success");
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase", "success");
  }

  const clearText = () => {
    let newText = ("");
    setText(newText)
    props.showAlert("Text is cleared", "success");
  }

  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is Copied", "success");
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces cleared", "success");
  }

  const handleOnChange =(event)=>{
    setText(event.target.value)
  }

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
          <h1>{props.heading}</h1>
          <div className="mb-3 ">
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-warning" onClick={handleUpClick}>Convert to UpperCase</button>
          <button className="btn btn-warning mx-3" onClick={handleLoClick}>Convert to LowerCase</button>
          <button className="btn btn-warning" onClick={clearText}>Clear Text</button>
          <button className="btn btn-warning mx-3" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-warning" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
      </div>
      <div className="container my=3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text summary</h1>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008*text.split(" ").length} minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter your text above in textbox to preview it here"}</p>
      </div>
    </>
  )
}
