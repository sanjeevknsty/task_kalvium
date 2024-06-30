import './App.css';
import Bottom from './components/bottom';
import Header from './components/header';
import Ide from './components/Ide';
// import Top from './components/top';
import PostRequest from './context/postman/PostRequest';
import { useState } from 'react';
function App() {
  const [choice,setChoice] = useState('javascript')
  const [bottomData, setBottomData] = useState('')
  return (
    <div className="App">
      <PostRequest>
        <Header setChoice = {setChoice} />
        {/* <Top /> */}
        <Ide choice= {choice}  setBottomData={setBottomData}/>
        <Bottom bottomData={bottomData}/>
      </PostRequest >

      </div>
      );
}

      export default App;
