import React, { useState, useEffect } from 'react';

export default function Validator () {
  const [ password, setPassword ] = useState('');
  const [ isShown, setIsShown ] = useState(false);
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
      <p id="password-title">Password</p>
      <div id="input-container">
        <input
          id="password-input"
          aria-label="Insert Password"
          aria-required="true"
          type={isShown ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div id="toggle-container">
          <input
            id="password-toggle"
            aria-label="Show Password"
            type="checkbox"
            checked={isShown}
            onChange={() => setIsShown(!isShown)}
          />
          <p id="toggle-title">Show</p>
        </div>
      </div>
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