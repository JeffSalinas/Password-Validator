import React, { useState, useEffect } from 'react';
import InputFields from './InputFields';

export default function Validator () {
  const [ password, setPassword ] = useState('');
  const [ charCount, setCharCount ] = useState(false);
  const [ uppercase, setUppercase ] = useState(false);

  useEffect(() => {
    //get email
  }, []);

  useEffect(() => {
    validateCharCount();
    validateUpperCase();
  }, [password]);

  function validateCharCount() {
    setCharCount(password.length >= 8 && password.length <= 72);
  }

  function validateUpperCase() {
    let isCapital = /[A-Z]/;

    setUppercase(isCapital.test(password));
  }

  return (
    <div>
      <InputFields password={password} setPassword={setPassword}/>
      <ul>
        <li id="test-character-count" className={charCount ? "line-through" : "no-line"}>8-72 Characters</li>
        <li id="test-uppercase" className={uppercase ? "line-through" : "no-line"}>1 Uppercase Character</li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}