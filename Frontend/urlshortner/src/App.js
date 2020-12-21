import React, { useRef, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './App.css';
import Axios from 'axios'

function App() {
  const [input, setInput] = useState('')
  const [show, setShow] = useState('')
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);
  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
  };




  function axious(){
    Axios({
      method: 'post',
      url: 'http://localhost:5000/test',
      data: {
        url: input,
      }
    })
    .then(function (response) {
      setShow(response.data.shortUrl)
      console.log(response.data.shortUrl);
    });

  }
  return (
    <div className="App">
    <h2> Url Shortner </h2>
    <input id="submitId" placeholder="Enter the link to shorten"onChange = {(e)=>setInput(e.target.value)} />
    <button onClick = {axious}>Submit</button>
    <section>
    <div>

    <form>
    <input id="copyId"
    ref={textAreaRef}
    value={show}
    />
    {
      document.queryCommandSupported('copy') &&
      <div>
      <button id="buttonCopy"onClick={copyToClipboard}>Copy</button>
      {copySuccess}
      </div>
    }
    </form>
    </div>
    </section>

    </div>
  );
}

export default App;
