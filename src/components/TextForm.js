import React, {useState} from 'react'

export default function TextForm(props) {

    // function to change the entire value to uppercase
    const handleUpCase = () =>{
        if (text.length === 0){
            props.showAlert('Please enter your text','warning');
        }
        else{
            setText(text.toUpperCase());
            props.showAlert('Converted to uppercase','success');
        }
    }

    // function to change the entire value to lowercase
    const handleLowCase = () =>{
        setText(text.toLocaleLowerCase());
        props.showAlert('Converted to lowercase','success');
    }
    // function to clean context
    const handleClean = () =>{  
        setText('');
        props.showAlert('Cleaned','success');
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
        props.showAlert('First alphabet successfully converted to Uppercase','success');
    }

    // function to update the default text value
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleCopy = () =>{
        var text = document.getElementById("exampleFormControlTextarea1")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert('Copy successfull','success')
    }

    const handleRemoveExtraSpaces = () =>{
       let newText = text.split(/[ ]+/);
       setText(newText.join(" "))
       props.showAlert('Extra space removed','success')

    }
    // Change font to bold
    

    const [text,setText] = useState('');

    //setText('Hello enter your text');
  return (
    <>
    <div className='container'>
        <h2 className='my-3'>{props.heading}</h2>
        <div className="my-4">
        <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} value={text} rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-2" onClick={handleUpCase}>Convert to Uppercase</button>&nbsp;
        <button className="btn btn-primary mx-1 my-2" onClick={handleLowCase}>Convert to Lowercase</button>&nbsp;
        <button className="btn btn-primary mx-1 my-2" onClick={handleFirstCase}>Convert to First Alphabets to Uppercase</button>&nbsp;
        <button className="btn btn-primary mx-1 my-2" onClick={handleClean}>Clean</button>&nbsp;
        <button className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy</button>&nbsp;
        <button className="btn btn-primary mx-1 my-2" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>&nbsp;
    </div>
    <div className="container my-3">
        <h3>Summary</h3>
        <p>Total characters are : {text.length}</p>
        <p>Total words are : {text.split(" ").length-1}</p>
        <p>Minutes Read : {0.008 * text.split(" ").length - 0.008 }</p>
        <h4>{text.length >0?text:'Enter you text to get preview'}</h4>
    </div>
    </>
  )
}
