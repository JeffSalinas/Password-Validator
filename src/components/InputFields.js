import React, { useState } from 'react';

export default function InputFields ({ password, setPassword }) {
  const [ isShown, setIsShown ] = useState(false);

  return (
    <>
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
    </>
  )
}