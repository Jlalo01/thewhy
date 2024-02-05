import { useState } from 'react';
import bcrypt from 'bcryptjs';
import './App.css';

function App() {
  const hash = '$2b$13$7K43NXoFtY.ZPzhaBTSTEe0CgLcXkQQ7hxzL1N9DOdRIJKoXjMnja';
  const [pass, setPass] = useState("");
  const [show, setShow] = useState(false);


  function handleSubmit(e){
    e.preventDefault();
    if (bcrypt.compareSync(pass, hash)){setShow(true)}
  }

  return (show) ? (
    <div className='full'>
      <div className='fullLetter'>
        <img className="letter" src="./1.png" alt="something" width={800} />
        <br/>
        <img className="letter" src="./2.png" alt="something" width={800} />
        <br/><br/>
        <img src="./3.png" alt="something" width={800} />
      </div>
    </div>
  ) : (
    <div className="App">
        <form onSubmit={handleSubmit}>
          <label className="password">Password: </label>
          <input type="password" name="password" value={pass} onChange={(e) => setPass(e.target.value)} />
        </form>
        <input type="submit" value="Enter" />
      </div>
  )
}

export default App;
