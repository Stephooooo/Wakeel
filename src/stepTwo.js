import React from 'react'
import { Link} from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";


function StepTwo() {
  return (
    <div> 
    <div className='h-screen w-screen bg-black'>
    <div className='pt-[200px] space-y-4 columns-1 lg:columns-2 '>npm install --save react-router-dom
    <div>
    <img src='../img/quiet.gif' alt='quiet' className='object-scale-down  '/>
    </div>
    <div className='text-[20px] text-red-300 pt-5 '> There's this boy who makes me smile,<br/> makes me laugh and makes me happy <span> <Link to="/stepThree"> <AiOutlineArrowRight size="2.7rem" className='hover:animate-bounce mt-10 text-red-300'/>  </Link></span>
    </div>
    
    </div>
    
    </div>
    </div>
  )
}

export default StepTwo