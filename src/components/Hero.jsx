import React from 'react'
import {logo} from '../assets'
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className="flex justify-between items-center w-full mb-10 ">
        <img src={logo} alt="logo" className='w-28 object-contain'/>
      <button
      onClick={()=> window.open('https://github.com/amanmulani09/BlogBrief')}
       type='button'
       className='black_btn'
       >
        Github</button>
      </nav>
      <h1 className='head_text'> Summarize Articles with <br className='max-md:hidden'/>
      <span className='orange_gradient'>OpeanAI GPT-4</span> </h1>
      <h2 className='desc'>
        simplify your reading with BlogBrief. an Open-source article summarizer that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  )
}

export default Hero