import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import InputFields from './InputFields';

export default function Validator () {
  const [ charCount, setCharCount ] = useState(false);
  const [ email, setEmail ] = useState(false);
  const [ lowercase, setLowercase ] = useState(false);
  const [ number, setNumber ] = useState(false);
  const [ password, setPassword ] = useState('');
  const [ uppercase, setUppercase ] = useState(false);
  const [ userEmail, setUserEmail ] = useState([]);

  useEffect(() => {
    Axios.get('http://www.mocky.io/v2/5de6c328370000a21d0925f2')
      .then(({ data }) => {
        let dataObject = JSON.parse(data.split('\n').join('').replace(/ /g, '').replace(/{/g, '{"').replace(/:/g, '":').replace(/,/g, ',"'));
        let emailName = dataObject.user.email.split('@')[0];
        let badWords = emailName.replace(/[^0-9a-zA-Z]/g, '.').split('.');

        setUserEmail(badWords);
      });
  }, []);

  useEffect(() => {
    validateCharCount();
    validateUppercase();
    validateLowercase();
    validateNumber();
    validateEmail();
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

  function validateEmail() {
    let hasWord = userEmail.reduce((acc, word) => {
      let wordSearch = new RegExp(word, 'i');
      
      if (acc) return true;

      return wordSearch.test(password);
    }, false);

    setEmail(hasWord);
  }

  return (
    <div>
      <InputFields password={password} setPassword={setPassword}/>
      <ul>
        <li id="test-character-count" className={charCount ? "line-through" : "no-line"}>8-72 Characters</li>
        <li id="test-uppercase" className={uppercase ? "line-through" : "no-line"}>1 Uppercase Character</li>
        <li id="test-lowercase" className={lowercase ? "line-through" : "no-line"}>1 Lowercase Character</li>
        <li id="test-number" className={number ? "line-through" : "no-line"}>1 Number</li>
        <li id="test-email" className={!email ? "line-through" : "no-line"}>Should Not Match Your Email Address</li>
      </ul>
    </div>
  )
}