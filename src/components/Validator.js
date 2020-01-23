import React, { useState, useEffect } from 'react';
import InputFields from './InputFields';

export default function Validator () {
  const [ password, setPassword ] = useState('');
  const [ charCount, setCharCount ] = useState(false);

  useEffect(() => {
    //get email
  }, []);

  useEffect(() => {
    validateCharCount();
  }, [password]);

  function validateCharCount () {
    if (password.length >= 8 && password.length <= 72) {
      setCharCount(true);
    } else {
      setCharCount(false);
    }
  }

  return (
    <div>
      <InputFields password={password} setPassword={setPassword}/>
      <ul>
        <li id="test-character-count" className={charCount ? "line-through" : "no-line"}>8-72 Characters</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}