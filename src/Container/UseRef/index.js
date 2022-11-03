import React, {useRef} from 'react';


const UseRefComp = ()=>{
    //const [inputvalue, setInputValue] =  useState('Enter any text');


    let _text = useRef(null);

    console.log('My component Re Render', _text);
    const handleChange = ()=>{
    //    console.log('text.current', _text.current.value);
    //    alert(_text.current.value)

    if(_text.current.value === 'react'){
        _text.current.style.backgroundColor='red';
       _text.current.style.padding='20px';
       _text.current.style.fontSize='25px';
    }else if(_text.current.value === 'js'){
        _text.current.style.backgroundColor='green';
       _text.current.style.padding='10px';
       _text.current.style.fontSize='15px';
    }else{
        _text.current.style.backgroundColor='white';
       _text.current.style.padding='2px';
       _text.current.style.fontSize='35px';
    }
       
    }
    return(
        <>
        <div className='wrapSection'>
            <input ref={_text} defaultValue="React Js"  type="text" /> 
            
            <br />
            <br />
            <button onClick={handleChange}>Click to button </button>
        </div>
        </>
    )
}

export default UseRefComp;