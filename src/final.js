import React from 'react';
import { Link} from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";


function Final() {
  return (
    <div className='h-screen w-screen bg-black'>
    <div className='pt-[100px] space-y-4 columns-1 lg:columns-2 '>
   
    <div > 
    <h1 className='text-[20px] lg:text-[28px] text-red-300 pt-5 pl-5 '> Wakeel, my love. I love you so much. <br/> I miss you so much. <br/> I pray that you will be alright always and I will do anything to make sure that you have the peace that you deserve. I'm sending you 1 gazilion Kisses, Hugs and Licks. I win haha.  </h1>   
    </div>
    <br/>
    

    <div> 
    <img src='../img/hug.gif' alt='confession' className='h-60 w-60 lg:h-80 lg:w-80 '/>  
    <h1 className= "text-[20px] text-red-300"> The end unless you wanna <span> <Link to="/" className='text-[20px] text-white  border-b-2 border-red-300
    '> Read the Story again hehe </Link></span> </h1>
    
    </div>
    


    
    </div>
    
    </div>
  )
}

export default Final