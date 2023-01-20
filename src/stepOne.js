import React from 'react';
import { Link} from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";


function StepOne() {
  return (
    <div className='h-screen w-screen bg-black'>
    <div className='pt-[200px] space-y-4 columns-1 lg:columns-2 '>
    <div>
    <img src='../img/confession.webp' alt='confession' className='object-scale-down  '/>
    </div>
    <div className='text-[20px] text-red-300 pt-5 '> I have a confession <span> <Link to="/stepTwo"> <AiOutlineArrowRight size="2.7rem" className='hover:animate-bounce mt-10 text-red-300'/>  </Link></span>
    </div>
    
    </div>
    
    </div>
  )
}

export default StepOne