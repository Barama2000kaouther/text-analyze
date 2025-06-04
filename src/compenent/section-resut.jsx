import { useState } from "react";

function Section2(prop) {

  const sentence = prop.text1;
  const space1 = prop.space1;
  // const sentence="d;hdfqjdfk kqzjrj.kdskqjre djkqsjfk."; 
  const [letter, setletter] = useState(0);
  function countnumberofword() {
    let sentence1 = sentence.replace(/[.,!?;:]/g, ' ');
    let listword = sentence1.trim().split(/\s+/);
    let numword = listword.length;
    if (sentence === "") {
      return 0;
    }
    return numword;
  }

  function count_nbw_excldspace() {
   let sentence1=sentence.replace(/\s/g,'');
   return sentence1.length;
  }
  function count_nbw(){
    return sentence.length;
  }
  function countnumberofsentence() {
    let listword = sentence.trim().split(/\./);
    let numword = listword.length;
    if (sentence === "") {
      return 0;
    }
    return numword;
  }
  return (<section className="mt-8 flex flex-row gap-x-8 max-sm:flex-col max-sm:gap-y-4">
    <div className="basis-1/3 bg-purple-400 rounded-sm py-2 px-3 ">
      <p className="font-sans text-6xl  font-medium"> {space1? count_nbw_excldspace():count_nbw()}</p>
      <h3 className="mt-2 font-sans text-xl">Total character</h3>
    </div>
    <div className="basis-1/3 bg-orange-400 rounded-sm py-2 px-3 ">
      <p className="font-sans text-6xl  font-medium">{countnumberofword()}</p>
      <h3 className="mt-2 font-sans text-xl">Word count</h3>
    </div>
    <div className="basis-1/3 bg-red-400 rounded-sm py-2 px-3 ">
      <p className="font-sans text-6xl font-medium">{countnumberofsentence()}</p>
      <h3 className="mt-2 font-sans text-xl">Sentence Count</h3>
    </div>
  </section>)
}
export default Section2