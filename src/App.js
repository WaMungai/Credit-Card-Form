import React,{useState} from "react"
import {format} from "date-fns"
import bgMobile from "./images/bg-main-mobile.png"
import bgDesktop from "./images/bg-main-desktop.png"
import logo from "./images/card-logo.svg"
import tick from "./images/icon-complete.svg"


function App() {
  const [confirmed,setConfirmed] = useState(false);
  const [name,setName] = useState("");
  const [cardNumber,setCardNumber] = useState("");
  const [date,setDate] = useState("01/23");
  const [cvc,setCvc] = useState("")
 
  return (
    <>
      <section>
      <div className="absolute -z-10 w-full">
        <picture>
          <source media="(min-width:768px" srcSet={bgDesktop}></source>
          <img src={bgMobile} alt="" className="w-full md:w-1/3" />
        </picture>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
        <div className="mt-10 mx-5 grid grid-cols-1">
          <article className="front-card p-5 flex flex-col justify-between" >
            <img src={logo} alt="" className="w-20 lg:w-28" />
            <div>
              <h2 className="text-white text-xl lg:text-3xl mb-6 tracking-widest">
                {cardNumber}
              </h2>
              <ul className="flex items-center justify-between">
                <li className="text-white uppercase text-base lg:text-xl tracking-widest">
                  {name}
                </li>
                <li className="text-white text-base lg:text-xl tracking-widest">
                  {format(new Date(date), "MM/yy")}
                </li>
              </ul>
            </div>
          </article>
        </div>
        <article className="back-card relative lg:ml-20">
          <p className="absolute right-10 text-lg lg:text-xl text-white tracking-widest ">
            {cvc}
          </p>
        </article>
      </div>
      <div className="pt-8 px-5 pb-20">
        {!confirmed &&(
          <form className="flex flex-col justify-center gap-8 max-w-lg lg:h-scren">
            <div>
              <label htmlFor="cardholder_name">Cardholder Name</label>
            </div>
          </form>
        )}
      </div>
      
      
    </section>
    </>
  
  );
}

export default App;
