import { useState, useEffect } from "react"
import Section2 from "./section-resut";
import Section3 from "./section_list_result";
export function Section1(prop) {
  const [space, setspace] = useState(false);
  const [char_limit, setchar_limit] = useState(false);
  const [text, settext] = useState('');
  function handlechangetext(e) {
    settext(e.target.value);
  }
  let dark1=prop.dark1;
  function handledark(){
    if(!dark1){
      document.querySelector('textarea').classList.remove("dark1");
    }else{
      document.querySelector('textarea').classList.add("dark1");

    }
  }
  useEffect(()=>{
      handledark();
  });
  return (<>
    <section className='mt-10 text-center'>
      <h1 className="font-sans text-center font-bold text-5xl ">Analyze your text in real-time.</h1>
      <textarea onChange={(e) => handlechangetext(e)}
        className="border-1 border-black rounded-sm mt-8 w-[70vw] h-32 shadow-lg pl-4 text-[1.1rem] placeholder:text-gray-600 max-md:w-[90vw] " 
        placeholder="start typing here...(or paste your text)" 
        maxLength={char_limit? 100:undefined}></textarea>
      <div className="mt-2 flex flex-row justify-between items-center max-sm:flex-col max-sm:items-start max-sm:justify-start">
        <div className="flex flex-row max-sm:flex-col max-sm:items-start ">
          <div>
            <input className="" type="checkbox" id="no_space"
              checked={space}
              onChange={() => setspace(!space)}
              value="Exclude_spaces"></input>

            <label htmlFor="no_space">Exclude spaces</label>
          </div>
          <div>
            <input type="checkbox" id="character_limit"
              checked={char_limit}
              onChange={() => setchar_limit(!char_limit)}
              value="set_character_limit" className="ml-2 max-sm:ml-0"></input>

            <label htmlFor="character_limit">Set character limit</label>
          </div>
        </div>
        <div >
          <p className="max-sm:mt-2">Approx.reading time:<span>0</span>minute</p>
        </div>
      </div>
    </section>
    <Section2 text1={text}  space1={space}/>
    <Section3 text1={text} />
  </>
  )
}
