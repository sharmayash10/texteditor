import React, {useState} from 'react'

export default function TextBox(props) {
    const [text, setText] = useState("");
    const changeValue = (event) => {
        setText(event.target.value);
    }

    const convertUpperCase = () => {
        setText(text.toUpperCase());
    }

    const convertLowerCase = () => {
        setText(text.toLowerCase());
    }
    
    return (
    <>
    <div className='mt-3'>
        <h3>Enter the Text Below</h3>
        <div className='mb-3'>
        <textarea className="form-control" style={{backgroundColor: props.mode === 'light' ? 'white' : 'lightgrey'}} placeholder='Enter the text here' value={text} onChange={changeValue} id="textBox" rows="3" autoFocus></textarea>
        </div>
        <button className="btn btn-primary" onClick={convertUpperCase}>UPPERCASE</button>
        <button className="btn btn-primary mx-3" onClick={convertLowerCase}>lowercase</button>
    </div>
    <div className='mt-3'>
        <h4>Your Text Summary</h4>
        <p>Total words : {text.split(' ')
            .filter(function(n) { return n !== '' })
            .length}</p>
        <p>Total Characters : {text.split(" ").join('').length}</p>
    </div>
    </>
  )
}
