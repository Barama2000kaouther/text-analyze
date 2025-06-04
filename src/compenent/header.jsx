import { useState, useEffect } from "react"
import { Section1 } from "./section_text_aria";
function Header() {
  const [dark, setdark] = useState(false);
  useEffect(() => {
    document.body.classList.remove('dark');
  },[]);
  function handleclick() {
    setdark(d => !d);
    if (!dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
   
  }

  return (
  <><header className="flex flex-row items-center justify-between mt-4">
    <div className="flex flex-row justify-center items-baseline">
      <i className="fa-solid fa-circle-half-stroke text-2xl"></i>
      <h1 className="font-sans text-2xl ml-4 font-medium">character Counter</h1>
    </div>
    <div className="">
      <button className="text-white" style={{ display: dark ? "inline-block" : "none" }} onClick={handleclick}><i className="fa-solid fa-sun hidden" ></i></button>
      <button style={{ display: dark ? "none" : "inline-block" }} onClick={handleclick}><i className="fa-solid fa-moon text-2xl" ></i></button>
    </div>
  </header>
  <main>
  <Section1 dark1={dark}/>
  </main>
  </>
)

}
export default Header