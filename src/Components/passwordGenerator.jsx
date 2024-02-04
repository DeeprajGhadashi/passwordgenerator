import React from 'react'
import './passwordGenerator.css';
import copyIcon from '../assets/copyIcon.svg';



function PasswordGenerator() {
  return (
    
    <div className='container'>
      <h2 className='title'>Password Generator</h2>
      <div className='password-wrapper'>
        <div className='password-area'>
          <div className='password'>
            <input type='text' disabled placeholder='Click on the Generate Password'/>
            <button >
            <img src={copyIcon} alt='copyicon' draggable='false' className='copyIcon'/>
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
                <input type="checkbox" name='upper' id='upper' />
                <label htmlFor='upper'>Include Upper Case(A-Z)</label>
              </div>
              <div className="checkbox-field">
                <input type="checkbox" name='lower' id='lower' />
                <label htmlFor='lower'>Include Lower Case(a-z)</label>
              </div>
            </div>
            <div className="right">
              <div className="checkbox-field">
                <input type="checkbox" name='numbers' id='numbers' />
                <label htmlFor='numbers'>Include Number(0-9)</label>
              </div>
              <div className="checkbox-field">
                <input type="checkbox" name='symbols' id='symbols' />
                <label htmlFor='symbols'>Include Symbols(&-#)</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="password-length">
           <h3>Password Lenght</h3>
          
          <div className="slider">
          <div className="range">
            <input type="range" min={10} max={40}/>
          </div>
          <p className="rangeValue">20</p>
       </div>
      </div>

      <div className="buttons">
        <button type="button">Copy Password</button>
        <button type="button">Generate Password</button>
      </div>
      
    </div>
  )
}

export default PasswordGenerator;