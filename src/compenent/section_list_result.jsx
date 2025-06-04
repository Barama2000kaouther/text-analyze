import { useState, useEffect } from "react";
function Section3(prop) {
  let sentence = prop.text1;
  let alphabet1 = Array.from(Array(26), (_, i) => String.fromCharCode(97 + i));
  const data1 = alphabet1.map((item) => {
    return ({ letter: item, percentage: 0 });
  });

  let [listletter, setlistletter] = useState(data1);

  // function initialstat(alphabet){
  //   let data=alphabet.map((item)=>{
  //      return({letter:item,percentage:10});
  //   });
  //   console.log(data);
  //   return data;
  // } 


  function caluclateper(char) {
    const eData = listletter.find(item => item.letter === char) || { percentage: 0 };
    let per2 = eData.percentage.toString();
    per2 += "%";
    return (per2);
  }

  function total(char) {
    const eData = listletter.find(item => item.letter === char) || { percentage: 0 };
    let per4 = 100 - eData.percentage;
    let per5 = per4.toString();
    per5 += "%";
    return (per5);
  }
  useEffect(() => {
    listletter1(sentence);

  }, [sentence]);

  function listletter1(sentence) {
    let alphabet = Array.from(Array(26), (_, i) => String.fromCharCode(97 + i));

    let data = alphabet.map((char) => {
      let sentence1 = sentence.toLowerCase();
      const regex = new RegExp(char, 'gi');
      const num1 = (sentence1.match(regex) || []).length;
      let numofstring = sentence.length;
      let per1 = ((num1 / numofstring) * 100);
      if (sentence === '') {
        per1 = 0;
      }
      return { letter: char, percentage: per1 };
    });
    setlistletter(data);

  }

  function generatlimiteletter() {
    let list1 = listletter.sort((a, b) => b.percentage - a.percentage);
    let list2 = list1.slice(0, 4);
    return (list2.map((char, index) => {
      let char1 = char.letter;
      let pr = char.percentage;
      return (<div className="flex flex-row " key={index}>
        <div className=" flex flex-row justify-center items-center" style={{ flexBasis: caluclateper(char1) }}>
          <p className="mr-3">{char1}</p>
          <div className="w-[100%] bg-purple-500 h-2 rounded-l-full " ></div>
        </div>
        <div className=" flex flex-row justify-center items-center" style={{ flexBasis: total(char1) }}>
          <div className="w-[100%] bg-gray-200 h-2 rounded-r-full"></div>
          <p className="ml-4">{pr.toFixed(0)}%</p>
        </div>
      </div>)
    }));
  }

  function generateletter() {
    let list1 = listletter.sort((a, b) => b.percentage - a.percentage);
    return (list1.map((char, index) => {
      let char1 = char.letter;
      let pr = char.percentage;
      return (<div className="flex flex-row " key={index}>
        <div className=" flex flex-row justify-center items-center" style={{ flexBasis: caluclateper(char1) }}>
          <p className="mr-3">{char1}</p>
          <div className="w-[100%] bg-purple-500 h-2 rounded-l-full " ></div>
        </div>
        <div className=" flex flex-row justify-center items-center" style={{ flexBasis: total(char1) }}>
          <div className="w-[100%] bg-gray-200 h-2 rounded-r-full"></div>
          <p className="ml-4">{pr.toFixed(0)}%</p>
        </div>
      </div>)
    }));
  }
  let [seemore,setseemore] =useState(true);

  return (
    <section className="mt-8">
      <h1 className="mb-4">Letter Density</h1>
      {seemore ? generatlimiteletter() : generateletter()}
      <button className="button mt-3 mb-16" onClick={() => (setseemore(!seemore))}>See more
        <span className="" style={{ display: seemore ? 'inline-block' : 'none' }} ><i className="fa-solid fa-chevron-down"></i></span>
        <span className=""  style={{ display: seemore ? 'none' : 'inline-block' }}><i className="fa-solid fa-chevron-up "></i></span>
      </button>
    </section>
  )
}
export default Section3