import { useState } from "react";
import bgStart from "./assets/icon-star.svg";
import bgIllustration from "./assets/illustration-thank-you.svg";

function App() {

  const [selected, getSelected] = useState([]);
  const [showThanks, getShowThanks] = useState(false);

  const handleClick = (e) => {
    getSelected(e.target.textContent);
  }

  return (
    <>
      <section>
        <div className="w-full min-h-screen bg-Gray-950 p-5 flex flex-col items-center justify-center ">
          {
            showThanks ?
              <Thanks getShowThanks={getShowThanks} selected={selected} />
              :
              <div className="w-full h-full bg-Gray-900 rounded-xl p-8 md:w-[400px]">
                <div className="bg-Gray-950/50 w-max rounded-full p-3 mb-5">
                  <img decoding="async" src={bgStart} alt="" />
                </div>
                <div className="w-full mb-3">
                  <h1 className="text-White text-2xl mb-3">How did we do?</h1>
                  <p className="text-Gray-500 font-light text-xs/5">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                </div>
                <div className="flex items-center justify-between gap-2 mb-5">
                  {
                    [1, 2, 3, 4, 5].map((item) => {
                      return <div key={item} onClick={handleClick}
                        className={`size-12 hover:bg-Orange-500 text-sm cursor-pointer select-none hover:text-Gray-950 rounded-full text-Gray-500 bg-Gray-950/50 text-center flex items-center justify-center active:bg-Orange-500 ${selected == item ? "bg-white text-black" : ""}`}>{item}</div>
                    })
                  }
                </div>
                <button type="button" onClick={() => getShowThanks(true)} className="bg-Orange-500 hover:bg-White transition uppercase text-sm font-semibold tracking-wide w-full py-2 rounded-full">
                  Submit
                </button>
              </div>
          }
        </div>
      </section>
    </>
  )
}
const Thanks = ({ getShowThanks, selected }) => {

  return <div className="w-full h-full bg-Gray-900 rounded-xl p-8 md:w-[400px]">
    <div className="flex items-center justify-center">
      <img src={bgIllustration} alt="" className="text-center" />
    </div>
    <div className="w-max mx-auto my-10">
      {Number(selected)
      ? <p className="bg-gray-700 text-Orange-500 p-2 rounded-full text-sm text-center inline-block">You selected {selected} out of 5</p> 
      : <p className="bg-gray-700 text-Orange-500 p-2 rounded-full text-sm text-center inline-block">Select a number</p>}
    </div>
    <h2 className="text-White text-center text-2xl mb-3">Thank you!</h2>
    <p className="text-Gray-500 text-sm text-center mb-3"> We appreciate you taking the time to give a rating. If you ever need more support,
      don’t hesitate to get in touch!</p>
    <button type="button" onClick={() => getShowThanks(false)} className="bg-Orange-500 hover:bg-White transition uppercase text-sm font-semibold tracking-wide w-full py-2 rounded-full">
      Go back
    </button>
  </div>
}

export default App
