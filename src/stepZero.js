import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link} from "react-router-dom";


function StepZero() {
  return (

    <div className='h-screen w-screen bg-black'>
    <div className= 'pt-[200px] columns-1 space-y-6 lg:columns-2 '>
    <div>
    <img src='../img/obi-wan.gif' alt='obiwan' className='object-scale-down  '/>
    </div>
    <div className='text-[20px] text-red-300 pt-5 '> Let me tell you a story <span> <Link to="/stepOne"> <AiOutlineArrowRight size="2.7rem" className='hover:animate-bounce mt-10 text-red-300'/>  </Link></span>
    
    </div>

    </div>
    </div>
      
  )
}

export default StepZero