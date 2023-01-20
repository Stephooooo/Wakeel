import './App.css';
import StepOne from './stepOne';
import StepZero from './stepZero';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StepTwo from './stepTwo';
import StepThree from './stepThree';
import Final from './final';



function App() {
  return (
    <div>

    <BrowserRouter>
    <div className='container'>
      <Routes>
        <Route exact path="/" element= <StepZero />
        />
          <Route exact path="/stepOne" element={<StepOne />} />
          <Route exact path="/stepTwo" element={<StepTwo />} />
          <Route exact path="/stepThree" element={<StepThree/>} />
          <Route exact path="/final" element={<Final/>} />
        

      </Routes>
      </div>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
