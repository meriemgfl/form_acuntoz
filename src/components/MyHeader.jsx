import { useState } from 'react';
import '../index.css';

function MyHeader(){

    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        'General Information',
        'Duration & Budget',
        'Supporting Documents',
      ];

    return (

<>  

<div className="w-[60vw] ml-auto mr-[5vw] bg-gray-100 p-4 rounded-t-lg">
<h1 className="text-center text-2xl font-bold mb-4">Tender Creation Form</h1>
 

    <div className="flex justify-between  mx-auto w-[100%]">

    {steps.map ((step, index) => (
        <div key={index} className="relative w-full text-center">
        <div className='flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-3 after:flex-1 after:border-t after:border-gray-200 after:ms-3 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600'>
        <div 
              className={`w-4 h-4 mx-auto flex items-center justify-center rounded-full 
                ${activeStep === index ? 'bg-black text-white' : 'border border-yellow-600 bg-white text-yellow-600'}`}>
              
            </div>
            </div>

            
            
            


       
            <p className={`mt-2 ${activeStep === index ? 'text-yellow-600 font-semibold' : 'text-gray-600'}`}>
              {step}
            </p>

            {activeStep === index && (
              <div className="h-1 w-full bg-yellow-600 mt-1 mx-auto" />
            )}
          </div>
        ))}
      </div>
    </div>
    </>
    );
};

export default MyHeader;
