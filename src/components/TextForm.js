import React, {useState} from 'react'

export default function TextForm(props) {

    // function to change the entire value to uppercase
    const handleUpCase = () =>{
        setText(text.toUpperCase());
    }

    // function to change the entire value to lowercase
    const handleLowCase = () =>{
        setText(text.toLocaleLowerCase());
    }
    // function to clean context
    const handleClean = () =>{  
        setText('');
    }

    // function to change first alphabet to uppercase
    const handleFirstCase = () =>{
        const str = text;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        
        }
        const result = arr.join(" ");
        setText(result);
    }

    // function to update the default text value
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }


    const [text,setText] = useState('Enter text');
    //setText('Hello enter your text');
  return (
    <>
    <div className='container'>
        <h2>{props.heading}</h2>
        <div className="my-4">
        <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} value={text} rows="10"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpCase}>Convert to Uppercase</button>&nbsp;
        <button className="btn btn-primary" onClick={handleLowCase}>Convert to Lowercase</button>&nbsp;
        <button className="btn btn-primary" onClick={handleFirstCase}>Convert to First Alphabets to Uppercase</button>&nbsp;
        <button className="btn btn-primary" onClick={handleClean}>Clean</button>&nbsp;
    </div>
    <div className="container my-3">
        <h3>Summary</h3>
        <p>Total characters are: {text.length}</p>
        <p>Total words are: {text.split(" ").length-1}</p>
    </div>
    </>
  )
}
