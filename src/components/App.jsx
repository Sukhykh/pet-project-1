import '../assets/scss/_App.scss';
import backgroundPng from '../assets/img/background.png'
import backgroundWebp from '../assets/img/background.webp'

import React from 'react';

function App() {
  const [year, setYear] = React.useState('')
  const [advice, setAdvice] = React.useState('')

  function getAdviceValue() {
    const url = 'https://api.adviceslip.com/advice'

    fetch(url)
      .then(resp => {
      return resp.json()
      })
      .then(resp => {        
        setAdvice(resp.slip.advice)
      })
  }

  function getDateValue() {
    const date = new Date;
    setYear(date.getFullYear())
  }

  React.useEffect(() => {
    getDateValue()
    getAdviceValue()
  }, []);


  return (
    <div className="app__wrapper">
      <div className="app__container">
        <div className="app__background-wrapper">
          <picture>
            <source
              srcSet={backgroundWebp}
              type="image/webp" />
            <img className="app__background-img"
              width="1024"
              height="1024"
              src={backgroundPng} alt="backgroundImg" />
          </picture>
        </div>
        <div className="app__content-wrapper">          
          <div className="app__content-container">
            <h1 className="app__content-title">Adviser</h1>
            <div className="app__content-advice">{advice}</div>
            <button className="app__content-btn" onClick={getAdviceValue}>Give me some advice!</button>
          </div>
          <div className="app__copyright">
            <div className="app__copyright-creator">© Created by Kostiantyn Sukhykh</div>
            <div className="app__copyright-year">Kyiv, {year}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
