import mood from "../data.json"

function App() {
  const moods = mood.map((data, key) => {

    return <li key={key} className="flex items-center justify-between mb-10">
      <div className="flex items-center gap-5">
        <img decoding="async" src={data.icon} alt={data.category} className="size-5" />
        <span className={`font-semibold 
        ${data.category == "Reaction" ? "text-Primary-lightRed" : ""} 
        ${data.category == "Memory" ? "text-Primary-orangeyYellow" : ""} 
        ${data.category == "Verbal" ? "text-Primary-greenTeal" : ""} 
        ${data.category == "Visual" ? "text-Primary-cobaltBlue" : ""}`}>{data.category}</span>
      </div>
      <div className="flex gap-2">
        <p className="font-semibold">{data.score}</p>
        <p className="text-neutral-400">/</p>
        <p className="text-neutral-400">100</p>
      </div>
    </li>

  })

  return (
    <>
      <section>
        <div className="w-full min-h-screen bg-white flex flex-col md:justify-center items-center">
          <div className="flex flex-col md:flex-row 
                w-full md:w-[700px]
                rounded-3xl
                md:shadow-[0_0_40px_10px_rgba(38,70,255,0.20)]">
            <div className="grow md:w-[350px] bg-Gradient-persianBlue/80 bg-gradient-to-t from-Gradient-lightRoyalBlue rounded-b-3xl md:rounded-3xl text-center p-10">
              <p className="text-center text-Neutral-lightLavender text-sm md:text-lg font-semibold">Your Result</p>
              <div className="mx-auto size-32 rounded-full bg-gradient-to-b from-Gradient-persianBlue/100 flex items-center justify-center flex-col my-7 gap-2">
                <p className="text-center text-5xl text-white font-bold">76</p>
                <p className="text-Neutral-lightLavender text-xs md:text-base">of 100</p>
              </div>
              <h1 className="text-center text-Neutral-white font-semibold tracking-wide text-xl mb-5">Great</h1>
              <p className="text-center text-Neutral-lightLavender text-base md:text-lg">You scored higher than 65% of the people who have taken these tests.</p>
            </div>
            <div className="grow md:w-[350px] px-10 py-5">
              <h2 className="text-Neutral-darkGrayBlue text-lg font-bold mb-10">Summary</h2>
              <ul>
                {moods}
              </ul>
              <button type="button" className="w-full py-4 bg-Neutral-darkGrayBlue rounded-full text-white font-bold mt-5 hover:bg-gradient-to-t hover:from-Gradient-lightRoyalBlue hover:to-Gradient-violetBlue outline-none">Continue</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
