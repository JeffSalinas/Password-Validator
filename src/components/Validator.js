import React, { useState, useEffect } from 'react';
import InputFields from './InputFields';

export default function Validator () {
  const [ password, setPassword ] = useState('');
  const [ charCount, setCharCount ] = useState(false);
  const [ uppercase, setUppercase ] = useState(false);
  const [ lowercase, setLowercase ] = useState(false);
  const [ number, setNumber ] = useState(false);

  useEffect(() => {
    //get email
  }, []);

  useEffect(() => {
    validateCharCount();
    validateUppercase();
    validateLowercase();
    validateNumber();
  }, [password]);

  function validateCharCount() {
    setCharCount(password.length >= 8 && password.length <= 72);
  }

  function validateUppercase() {
    let isCapital = /[A-Z]/;

    setUppercase(isCapital.test(password));
  }

  function validateLowercase() {
    let isLower = /[a-z]/;

    setLowercase(isLower.test(password));
  }

  function validateNumber() {
    let isNumber = /[0-9]/;

    setNumber(isNumber.test(password));
  }

  return (
    <div>
      <InputFields password={password} setPassword={setPassword}/>
      <ul>
        <li id="test-character-count" className={charCount ? "line-through" : "no-line"}>8-72 Characters</li>
        <li id="test-uppercase" className={uppercase ? "line-through" : "no-line"}>1 Uppercase Character</li>
        <li id="test-lowercase" className={lowercase ? "line-through" : "no-line"}>1 Lowercase Character</li>
        <li id="test-number" className={number ? "line-through" : "no-line"}>1 Number</li>
        <li></li>
      </ul>
    </div>
  )
}