import '../assets/scss/_App.scss';
import backgroundPng from '../assets/img/background.png'
import backgroundWebp from '../assets/img/background.webp'

import React from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";

function App() {
  const [year, setYear] = React.useState(``);
  const [advice, setAdvice] = React.useState('Say "Hello" to this app!');

  const alanAiKey =`fe9998c5c7ae1d4bf2009e4f66e1bae02e956eca572e1d8b807a3e2338fdd0dc/stage`

  function getAdviceValue() {
    const URL = 'https://api.adviceslip.com/advice'

    fetch(URL)
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

  function addAlanIntoProject() {
    alanBtn({
      key: alanAiKey,      
      bottom: '50px',
      right: '50px',
      zIndex: 10,
      onCommand: ({ command }) => {
        if (command === 'newAdvice') {
          getAdviceValue()             
        }
      }
    });
  }

  React.useEffect(() => {
    addAlanIntoProject()
    getDateValue()    
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
            <div className="app__copyright-year">Kyiv, {year === 2023? year: '2023-'+year}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
