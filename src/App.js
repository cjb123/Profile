import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import IntroTexts from './components/introTexts';

function App() {
  const [pageCount,setPageCount] = useState(0)
  const [coverOpen, setCoverOpen] = useState()

  const handleclickCover = () => {
       if(coverOpen) {
        setCoverOpen(false)
       } else {
       setCoverOpen(true)
       }
  }

  return (
    <div class="container">
      <div class={`${coverOpen ? 'notebook_animate': ''} notebook`}>
        <div class={`cover ${coverOpen ? 'cover_animation' : coverOpen === false ? 'cover_animation_close': ''}`} onClick={handleclickCover}></div>
        <div class="page one">
          <IntroTexts coverOpen/>
        </div>
        <div class="page two"></div>
        <div class="page three"></div>
      </div>
    </div>
  );
}

export default App;
