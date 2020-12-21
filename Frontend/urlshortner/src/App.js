import logo from './logo.svg';
import React, {useState} from 'react';

import './App.css';
import Axios from 'axios'

function App() {
  const [input, setInput] = useState('')
  const [show, setShow] = useState('')

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
    <input onChange = {(e)=>setInput(e.target.value)} />
    <button onClick = {axious}>Submit</button>
    <a href={show}>{show} </a>

    </div>
  );
}

export default App;
