import imgHead from "./assets/avatar-jessica.jpeg"
function App() {

  return (
    <>
    <section>
      <div className="w-full min-h-screen bg-Grey-900 flex items-center justify-center flex-col p-10">
        <div className="w-full md:w-[500px] h-full bg-Grey-800 px-8 py-10 rounded-xl">
          <div className="w-full">
            <img decoding="async" src={imgHead} alt="" className="size-40 rounded-full m-auto" loading="eager" />
          </div>
          <div className="my-5">
            <h1 className="text-2xl text-White text-center font-semibold tracking-wider mb-2">Jessica Randall</h1>
            <h2 className="text-center text-sm text-Green font-semibold tracking-wider">London, United Kingdom</h2>
          </div>
          <div className="text-center w-full mb-5">
            <p className="text-neutral-300 text-xs text-center">"Front-end developer and avid reader."</p>
          </div>
          <div className="w-full flex flex-col gap-5">
            <a href="#" className="block text-White text-center bg-Grey-700 py-3 w-full rounded-lg font-semibold hover:bg-Green hover:text-Grey-900 transition-all text-base">Github</a>
            <a href="#" className="block text-White text-center bg-Grey-700 py-3 w-full rounded-lg font-semibold hover:bg-Green hover:text-Grey-900 transition-all text-base">Frontend Mentor</a>
            <a href="#" className="block text-White text-center bg-Grey-700 py-3 w-full rounded-lg font-semibold hover:bg-Green hover:text-Grey-900 transition-all text-base">Linkedin</a>
            <a href="#" className="block text-White text-center bg-Grey-700 py-3 w-full rounded-lg font-semibold hover:bg-Green hover:text-Grey-900 transition-all text-base">Twitter</a>
            <a href="#" className="block text-White text-center bg-Grey-700 py-3 w-full rounded-lg font-semibold hover:bg-Green hover:text-Grey-900 transition-all text-base">Instagram</a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default App
