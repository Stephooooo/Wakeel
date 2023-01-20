import React from 'react';
import { Link} from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";


function StepThree() {
  return (
    <div className='h-screen w-screen bg-black'>
    <div className='pt-[150px] space-y-4 columns-1 lg:columns-2 '>
   
    <div > 
    <h1 className='text-[40px] text-red-300 pt-5 pl-20'> WAKEEL </h1>   
    </div>
    <br/>
    

    <div> 
    <img src='../img/father.gif' alt='confession' className='object-scale-down '/>  <span className='text-red-300 italics text-[8px]'> daddy* hihihi </span>
    <span> <Link to="/final"> <AiOutlineArrowRight size="2.7rem" className='hover:animate-bounce mt-5 text-red-300'/>  </Link></span>
    </div>
    


    
    </div>
    
    </div>
  )
}

export default StepThree