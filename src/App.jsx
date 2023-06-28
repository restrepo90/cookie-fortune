import phrases from './assets/phrases.json';
import Phrase from './components/Phrase/Phrase';
import Author from './components/Author/Author';
import Button from './components/Button/Button';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';
import image7 from './images/image7.jpg';
import { getRandomNumber } from './utils/getRandom';
import { useState } from 'react';
import './App.css';
import Box from './components/Box/Box';

function App() {
  const backgrounds = [image1, image2, image3, image4, image5, image6, image7];

  const getRandomPhrase = () => phrases[getRandomNumber(phrases.length - 1)];
  const getRandomBackground = () => backgrounds[getRandomNumber(backgrounds.length - 1)];

  const [phraseObject, setPhraseObject] = useState(getRandomPhrase());
  const [background, setBackground] = useState(getRandomBackground());

  const changePhrase = () => {
    let newPhrase = getRandomPhrase();
    let newBackground = getRandomBackground();

    while (newPhrase.phrase === phraseObject.phrase) {
      newPhrase = getRandomPhrase();
    }

    while (newBackground === background) {
      newBackground = getRandomBackground();
    }

    setPhraseObject(newPhrase);
    setBackground(newBackground);
  };

  const containerStyle = {
    backgroundImage: `url(${background})`,
  };

  return (
    <div className="main-items" style={containerStyle}>
      <h1>Phrases of fortune</h1>
      <div className="box-container">
        <Box/>
          <div className="box-content">
            <Phrase phrase={phraseObject.phrase} />
            <Author author={phraseObject.author} />
          </div>
      </div>
      <div>
        <Button handlerClick={changePhrase} />
      </div>
    </div>
  );
  
  
}  

export default App;
