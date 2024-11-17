import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaCalculator } from "react-icons/fa6";
import { LuHistory } from "react-icons/lu";
import { FaBackspace } from "react-icons/fa";

import "./App.css";

function App() {
  const [No, setNo] = useState("");
  const [result, setresult] = useState("");

  const HandleChange = (e) => {
    setNo(e.target.value);
  };
  const HandleDivision = () => {};
  const HandleMod = () => {};
  const HandleBackSpace = () => {};
  const HandleClear = () => {};
  const HandleOne = () => {};
  const HandleTwo = () => {};
  const HandleThree = () => {};
  const HandleFour = () => {};
  const HandleFive = () => {};
  const HandleSix = () => {};
  const HandleSeven = () => {};
  const HandleEight = () => {};
  const HandleNine = () => {};
  const HandleZero = () => {};
  const HandlePlus = () => {};
  const HandleSubtract = () => {};
  const HandleMultiply = () => {};
  const HandleEquals = () => {};
  const HandleDot = () => {};

  return (
    <>
      <div className="2xl:container  flex h-screen w-screen items-center justify-center  xl:h-screen xl:w-5/6 lg:h-auto lg:w-3/5 md:h-screen md:w-screen sm:h-auto sm:w-screen  ">
        <div className="2xl:container block 2xl:h-auto 2xl:w-auto  bg-gray-900  rounded-xl shadow-2xl   2xl:p-2  xl:h-auto xl:w-auto lg:p-2 lg:h-auto lg:w-[500px] xl:p-2 md:h-auto md:w-[500px] md:p-2 h-[450px] w-[300px] p-2">
          <div className="2xl:container flex text-white font-bold   2xl:h-auto 2xl:w-full 2xl:text-4xl 2xl:m-4 align-middle  xl:h-auto xl:w-full xl:text-4xl xl:m-4  xlg:h-auto lg:w-full lg:text-4xl lg:m-4 md:h-auto md:w-[400px] md:text-3xl md:m-3 h-auto w-full text-2xl m-2">
            <IoMdMenu className="2xl:m-1 font-bold " />
            <h1> Simple-Calci</h1>
            <FaCalculator className="2xl:m-1" />
          </div>
          <div className=" 2xl:container border-black 2xl:border-2  block 2xl:h-[150px] 2xl:w-[500px] bg-gray-700  rounded-xl 2xl:p-2   xl:h-[150px] xl:w-[500px] xl:p-2  lg:h-[150px] lg:w-[480px] lg:p-2  md:h-[150px] md:w-[480px] md:p-2  h-[100px] w-[280px] p-2 ">
            <button className="block ">
              <LuHistory className="text-white 2xl:h-5 lg:w-5 lg:h-5 h-3 w-3 " />
            </button>
            <div className="2xl:container relative 2xl:h-full 2xl:w-full  xl:h-full xl:w-full  lg:h-full lg:w-full md:h-full md:w-full bottom-5 right-2.5 h-[100px] w-[280px] ">
              <div className="2xl:container absolute 2xl:bottom-12 2xl:left-[450px] 2xl:h-[60px] 2xl:w-full 2xl:text-xl text-bold text-gray-400   xl:bottom-12 xl:left-[450px] xl:h-[60px] xl:w-full xl:text-xl lg:bottom-12 lg:left-[430px] lg:h-[60px] lg:w-full lg:text-xl md:bottom-12 md:left-[430px] md:h-[60px] md:w-full md:text-xl  bottom-5 left-[250px]  h-[60px]  w-[280px]  text-xl">
                out
              </div>
              <div className="absolute 2xl:bottom-2.5 2xl:right-2.5 2xl:container 2xl:h-[60px] 2xl:w-full  xl:bottom-2.5 xl:right-2.5 xl:h-[60px] xl:w-full lg:bottom-2.5 lg:right-2.5 lg:h-[60px] lg:w-full  md:bottom-4 md:right-[170px] md:h-[60px] md:w-[300px]  bottom-1 left-0   h-auto  w-auto ">
                <input
                  dir="rtl"
                  id="input"
                  value={No}
                  type="text"
                  placeholder="0"
                  onChange={HandleChange}
                  className=" 2xl:absolute font-bold 2xl:pr-3  2xl:h-full 2xl:w-[500px] 2xl:text-2xl rounded-xl bg-transparent text-white   border-2 outline-none xl:pr-3  xl:h-full xl:w-[500px] xl:text-xl lg:pr-3  lg:h-full lg:w-[480px] lg:text-xl md:pr-3  md:h-full md:w-[480px] md:text-xl   h-[40px]  w-[280px]  text-xl "
                />
              </div>
            </div>
          </div>
          <div className="2xl:container grid grid-cols-4 2xl:gap-[5px] border-black border-2  2xl:h-[400px] 2xl:w-[500px]  bg-gray-900  rounded-xl 2xl:p-2 xl:gap-[5px]  xl:h-[400px] xl:w-[500px] xl:p-2 lg:gap-[5px]  lg:h-[400px] lg:w-[480px] lg:p-2 md:gap-[5px]  md:h-[400px] md:w-[490px] md:p-2  gap-[5px]   h-[280px]  w-[280px]  p-2">
            <div className="">
              <button
                onClick={HandleDivision}
                className="bg-gray-700 text-white font-bold items-center 2xl:text-2xl justify-center 2xl:h-full 2xl:w-full rounded-xl hover:bg-gray-600  xl:h-full xl:w-full xl:text-2xl lg:h-full lg:w-full lg:text-2xl md:h-full md:w-full md:text-2xl  h-full  w-full  text-2xl"
              >
                %
              </button>
            </div>
            <div className="">
              <button
                onClick={HandleMod}
                className="bg-gray-700 text-white font-bold items-center 2xl:text-2xl justify-center 2xl:h-full 2xl:w-full rounded-xl hover:bg-gray-600  xl:h-full xl:w-full xl:text-2xl lg:h-full lg:w-full lg:text-2xl md:h-full md:w-full md:text-2xl  h-full  w-full  text-2xl"
              >
                /
              </button>
            </div>
            <div className="">
              <button
                onClick={HandleBackSpace}
                className="bg-gray-700 text-white font-bold items-center 2xl:text-2xl justify-center 2xl:h-full 2xl:w-full rounded-xl hover:bg-gray-600  xl:h-full xl:w-full xl:text-2xl lg:h-full lg:w-full lg:text-2xl md:h-full md:w-full md:text-2xl  h-full  w-full  text-2xl"
              >
                <FaBackspace className="" />
              </button>
            </div>

            <div className="">
              <button
                onClick={HandleClear}
                className="bg-gray-700 text-white font-bold items-center 2xl:text-2xl justify-center 2xl:h-full 2xl:w-full rounded-xl hover:bg-gray-600  xl:h-full xl:w-full xl:text-2xl lg:h-full lg:w-full lg:text-2xl md:h-full md:w-full md:text-2xl  h-full  w-full  text-2xl"
              >
                C
              </button>
            </div>

            <div className="">
              <button
                onClick={HandleOne}
                className="bg-gray-700 text-white font-bold items-center 2xl:text-2xl justify-center 2xl:h-full 2xl:w-full rounded-xl hover:bg-gray-600  xl:h-full xl:w-full xl:text-2xl lg:h-full lg:w-full lg:text-2xl md:h-full md:w-full md:text-2xl  h-full  w-full  text-2xl"
              >
                1
              </button>
            </div>
            <div className="">
              <button
                onClick={HandleTwo}
                className="bg-gray-700 text-white font-bold items-center 2xl:text-2xl justify-center 2xl:h-full 2xl:w-full rounded-xl hover:bg-gray-600  xl:h-full xl:w-full xl:text-2xl lg:h-full lg:w-full lg:text-2xl md:h-full md:w-full md:text-2xl  h-full  w-full  text-2xl"
              >
                2
              </button>
            </div>

            <div className="">
              <button
                onClick={HandleThree}
                className="bg-gray-700 text-white font-bold items-center 2xl:text-2xl justify-center 2xl:h-full 2xl:w-full rounded-xl hover:bg-gray-600  xl:h-full xl:w-full xl:text-2xl lg:h-full lg:w-full lg:text-2xl md:h-full md:w-full md:text-2xl  h-full  w-full  text-2xl"
              >
                3
              </button>
            </div>
            <div className="">
              <button
                onClick={HandlePlus}
                className="bg-gray-700 text-white font-bold items-center 2xl:text-2xl justify-center 2xl:h-full 2xl:w-full rounded-xl hover:bg-gray-600  xl:h-full xl:w-full xl:text-2xl lg:h-full lg:w-full lg:text-2xl md:h-full md:w-full md:text-2xl  h-full  w-full  text-2xl"
              >
                +
              </button>
            </div>

            <div className="">
              <button
                onClick={HandleFour}
                className="bg-gray-700 text-white font-bold items-center 2xl:text-2xl justify-center 2xl:h-full 2xl:w-full rounded-xl hover:bg-gray-600  xl:h-full xl:w-full xl:text-2xl lg:h-full lg:w-full lg:text-2xl md:h-full md:w-full md:text-2xl  h-full  w-full  text-2xl"
              >
                4
              </button>
            </div>
            <div className="">
              <button
                onClick={HandleFive}
                className="bg-gray-700 text-white font-bold items-center 2xl:text-2xl justify-center 2xl:h-full 2xl:w-full rounded-xl hover:bg-gray-600  xl:h-full xl:w-full xl:text-2xl lg:h-full lg:w-full lg:text-2xl md:h-full md:w-full md:text-2xl  h-full  w-full  text-2xl"
              >
                5
              </button>
            </div>
            <div className="">
              <button
                onClick={HandleSix}
                className="bg-gray-700 text-white font-bold items-center 2xl:text-2xl justify-center 2xl:h-full 2xl:w-full rounded-xl hover:bg-gray-600  xl:h-full xl:w-full xl:text-2xl lg:h-full lg:w-full lg:text-2xl md:h-full md:w-full md:text-2xl  h-full  w-full  text-2xl"
              >
                6
              </button>
            </div>
            <div className="">
              <button
                onClick={HandleMultiply}
                className="bg-gray-700 text-white font-bold items-center 2xl:text-2xl justify-center 2xl:h-full 2xl:w-full rounded-xl hover:bg-gray-600  xl:h-full xl:w-full xl:text-2xl lg:h-full lg:w-full lg:text-2xl md:h-full md:w-full md:text-2xl  h-full  w-full  text-2xl"
              >
                X
              </button>
            </div>

            <div className="">
              <button
                onClick={HandleSeven}
                className="bg-gray-700 text-white font-bold items-center 2xl:text-2xl justify-center 2xl:h-full 2xl:w-full rounded-xl hover:bg-gray-600  xl:h-full xl:w-full xl:text-2xl lg:h-full lg:w-full lg:text-2xl md:h-full md:w-full md:text-2xl  h-full  w-full  text-2xl"
              >
                7
              </button>
            </div>
            <div className="">
              <button
                onClick={HandleEight}
                className="bg-gray-700 text-white font-bold items-center 2xl:text-2xl justify-center 2xl:h-full 2xl:w-full rounded-xl hover:bg-gray-600  xl:h-full xl:w-full xl:text-2xl lg:h-full lg:w-full lg:text-2xl md:h-full md:w-full md:text-2xl  h-full  w-full  text-2xl"
              >
                8
              </button>
            </div>
            <div className="">
              <button
                onClick={HandleNine}
                className="bg-gray-700 text-white font-bold items-center 2xl:text-2xl justify-center 2xl:h-full 2xl:w-full rounded-xl hover:bg-gray-600  xl:h-full xl:w-full xl:text-2xl lg:h-full lg:w-full lg:text-2xl md:h-full md:w-full md:text-2xl  h-full  w-full  text-2xl"
              >
                9
              </button>
            </div>
            <div className="">
              <button
                onClick={HandleEquals}
                className="bg-sky-600 text-white font-bold items-center 2xl:text-2xl justify-center 2xl:h-full 2xl:w-full rounded-xl hover:bg-sky-500  xl:h-full xl:w-full xl:text-2xl lg:h-full lg:w-full lg:text-2xl md:h-full md:w-full md:text-2xl  h-full  w-full  text-2xl"
              >
                =
              </button>
            </div>
            <div className="">
              <button
                onClick={HandleZero}
                className="bg-gray-700 text-white font-bold items-center 2xl:text-2xl justify-center 2xl:h-full 2xl:w-full rounded-xl hover:bg-gray-600  xl:h-full xl:w-full xl:text-2xl lg:h-full lg:w-full lg:text-2xl md:h-full md:w-full md:text-2xl  h-full  w-full  text-2xl"
              >
                0
              </button>
            </div>
            <div className="">
              <button
                onClick={HandleDot}
                className="bg-gray-700 text-white font-bold items-center 2xl:text-2xl justify-center 2xl:h-full 2xl:w-full rounded-xl hover:bg-gray-600  xl:h-full xl:w-full xl:text-2xl lg:h-full lg:w-full lg:text-2xl md:h-full md:w-full md:text-2xl  h-full  w-full  text-2xl"
              >
                .
              </button>
            </div>
            <div className="">
              <button
                onClick={HandleSubtract}
                className="bg-gray-700 text-white font-bold items-center 2xl:text-2xl justify-center 2xl:h-full 2xl:w-full rounded-xl hover:bg-gray-600  xl:h-full xl:w-full xl:text-2xl lg:h-full lg:w-full lg:text-2xl md:h-full md:w-full md:text-2xl  h-full  w-full  text-2xl"
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
