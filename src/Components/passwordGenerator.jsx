import React from 'react'
import '../css/passwordGenerator.css';
import copyIcon from '../assets/copyIcon.svg';
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PasswordStrengthIndicator from './StrengthChecker';

const uppercaseList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseList = 'abcdefghijklmnopqrstuvwxyz';
const numbersList = '0123456789';
const symbolsList = '!@#$%^&*()?/';

function PasswordGenerator() {
  const [passwordlength, setPasswordLength] = useState(4);
  const [password , setPassword] =useState ('');
  const [lowerCase , setLowerCase ] =useState (false);
  const [upperCase , setUpperCase] =useState (false);
  const [symbols, setSymbols] =useState (false);
  const [numbers , setNumbers] =useState (false);

  const generatePassword = () => {

    let characterList ='';

    if(upperCase) {
      characterList += uppercaseList;
    }
    if(lowerCase) {
      characterList += lowercaseList;
    }
    if(numbers) {
      characterList += numbersList;
    }
    if(symbols) {
      characterList += symbolsList;
    }
    //console.log(characterList);
    let tempPassword ='';
    const characterListLength = characterList.length;

    for(let i = 0 ; i < passwordlength; i++) {
      const characterIndex = Math.round(Math.random()* characterListLength);
      tempPassword += characterList.charAt(characterIndex); 
    }
    setPassword(tempPassword);
  };

  const copyPassword = async() => {
      const copiedText = await navigator.clipboard.readText();
      if(password.length) {
        navigator.clipboard.writeText(password);
        toast.success(' Password copied to clipboard', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
  };
 

  return (
  <>
   <div className='container'>
      <h2 className='title'>Password Generator</h2>
      <div className='password-wrapper'>
        <div className='password-area'>
          <div className='password'>
            <input type='text' value={password} disabled placeholder='Click on the Generate Password'/>
            <button >
            <img src={copyIcon} alt='copyicon' draggable='false' className='copyIcon' onClick={copyPassword}/>
            </button>  
          </div>
        </div>
      </div>

      <div className="setting">
        <h3>Customize your password</h3>
        <div className="customize">
          <div className="checkboxes">
            <div className="left">
              <div className="checkbox-field">
                <input type="checkbox" name='upper' id='upper'
                 checked={upperCase} 
                 onChange={() => setUpperCase
                 (!upperCase)} />
                <label htmlFor='upper'>Include Upper Case(A-Z)</label>
              </div>
              <div className="checkbox-field">
                <input type="checkbox" name='lower' id='lower'
                checked={lowerCase} 
                onChange={() => setLowerCase
                (!lowerCase)} />
                <label htmlFor='lower'>Include Lower Case(a-z)</label>
              </div>
            </div>
            <div className="right">
              <div className="checkbox-field">
                <input type="checkbox" name='numbers' id='numbers'
                 checked={numbers} 
                 onChange={() => setNumbers
                 (!numbers)} />
                <label htmlFor='numbers'>Include Number(0-9)</label>
              </div>
              <div className="checkbox-field">
                <input type="checkbox" name='symbols' id='symbols' 
                 checked={symbols} 
                 onChange={() => setSymbols
                 (!symbols)}/>
                <label htmlFor='symbols'>Include Symbols(&-#)</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="password-length">
           <h3>Password Lenght</h3>   
           <PasswordStrengthIndicator password={password}/>
          <div className="slider">
          <div className="range">
            <input type="range" min={4} max={20}
             value={passwordlength}
            onChange={(e)=>{
              setPasswordLength(e.target.value)
            }}/>
          </div>
          <p className="rangeValue">{passwordlength}</p>
       </div>
      </div>

      <div className="buttons">
        <button type="button" onClick={copyPassword}>Copy Password</button>
        <button type="button" onClick={generatePassword}>Generate Password</button>
      </div>
      
    </div>
    <ToastContainer />
  </> 
   
  )
}

export default PasswordGenerator;