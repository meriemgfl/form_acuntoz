import { useState } from 'react'


//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import MyForm from './forms/MyForm'
import MyForm1 from './forms/MyForm1'
import MyForm2 from './forms/MyForm2'
import FormNavigation from './forms/FormNavigation'
import FormPage from './pages/FormPage'
import MyHeader from './components/MyHeader'



function App() {
  const [count, setCount] = useState(1)
  const nextCount=() => setCount((prev)=>prev + 1)
  const prevCount=() => setCount((prev)=>prev - 1)

  return (
  
    <>  
        <MyHeader count={count}/>
        {count === 1 && <MyForm nextCount={nextCount} />}
        {count === 2 && <MyForm1 nextStep={nextCount} prevCount={prevCount} />}
        {count === 3 && <MyForm2 prevCount={prevCount} />}

    
    
   
     </>

    

        
      
    
);
};

export default App;
