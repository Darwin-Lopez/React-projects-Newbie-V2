import imgBgMovile from "./assets/background-pattern-mobile.svg"
import imgBgDesktop from "./assets/background-pattern-desktop.svg"
import imgIconStart from "./assets/icon-star.svg"
import imgIconMinus from "./assets/icon-minus.svg"
import imgIconPlus from "./assets/icon-plus.svg"
import { useState } from "react"

function App() {

    const [openId, setOpenId] = useState(1);


  const faqs = [
    {
      id: 1,
      question: "What is Frontend Mentor, and how will it help me?",
      aswer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {
      id: 2,
      question: "  Is Frontend Mentor free?",
      aswer: "  Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    },
    {
      id: 3,
      question: "Can I use Frontend Mentor projects in my portfolio?",
      aswer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    },
    {
      id: 4,
      question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      aswer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help  channel where you can ask questions and seek support from other community members."
    },
  ]

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };


  return (
    <>
      <section>
        <div className="w-full min-h-screen bg-Purple-100">
          <img decoding="async" src={imgBgMovile} alt="" className="block md:hidden w-full h-full object-cover object-center z-10" />
          <img decoding="async" src={imgBgDesktop} alt="" className="hidden md:block w-full h-full object-cover object-center z-10" />
          <div className="relative px-5 -translate-y-20 md:-translate-y-40">
            <div className="z-20 bg-white mx-auto w-full md:w-[700px] rounded-xl shadow-xl overflow-hidden">
              <div className="flex items-center gap-5 p-5 rounded-xl overflow-hidden">
                <img src={imgIconStart} alt="" className="size-8" />
                <h1 className="text-Purple-950 font-bold text-3xl">FAQs</h1>
              </div>
              <div className="w-full bg-white">
                {faqs.map(({ id, question, aswer }) => {

                  const isOpen = openId === id;

                  return (
                    <div key={id} className="border-b border-gray-100 last:border-none">
                      <button
                        type="button"
                        onClick={() => toggleAccordion(id)}
                        className="group bg-white p-5 flex items-center justify-between w-full gap-4"
                      >
                        <p className="text-start text-Purple-950 font-semibold text-balance group-hover:text-purple-700 transition">
                          {question}
                        </p>

                        <img src={isOpen ? imgIconMinus : imgIconPlus} alt="" />

                      </button>

                      {isOpen && (
                        <div className="px-5 transition-all">
                          <p className="text-start text-Purple-600">{aswer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
