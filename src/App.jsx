import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaCalculator } from "react-icons/fa6";
import { LuHistory } from "react-icons/lu";
import { FaBackspace } from "react-icons/fa";

import React from "react";

function App() {
  const [no, setNo] = useState("");
  const [result, setResult] = useState(null);

  
  /* fuction to clear */
  const handleClear = () => {
    setNo("");
    setResult("");
  };

  /* fuction for handle click */
  const HandleClick = (e) => {
    let targetValue = e.target.name;
    setNo(no + targetValue);
  };

  /*  fuction for opearator handle */
  const handleOpratore = (opearator) => {
    let lastchar = no.slice(-1);
    console.log("last char",lastchar);// last character
    let operatorsArray = ["+ ", "- ", "X ", "/ "];

    if (no === "" || operatorsArray.includes(lastchar))
    {
      return;
    }
    setNo((no) => {
      return no + " " + opearator + " ";
    });
    
  };


  /* fuction for calculation handle */
  const calculate = (expression) => {
    const tokens = expression.split(" ");
    let resultValue = parseInt(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i];
      const nextNumber = parseInt(tokens[i + 1]);

      switch (operator) {
        case "%":
          resultValue = resultValue / 100 * nextNumber;
          break;
        case "+":
          resultValue += nextNumber;
          break;
        case "-":
          resultValue -= nextNumber;
          break;
        case "X":
          resultValue *= nextNumber;
          break;
        case "/":
          resultValue /= nextNumber;
          break;
        default:
          resultValue = "Error";
      }
    }
    return resultValue;
  }

  


  /* fuction to backspce */

  const handleback = () => {
    setNo(no.slice(0, -1));

  };
  
  /* fuction to handle eqaul */
  const Handleequal = () => {
    if (no.slice().includes("+ ", "- ", "X ", "/ ")) return;

    setNo("");

    try {
      const resultValue = calculate(no);
      setResult(resultValue);
    } catch (error) {
      setNo("Error");
    }
  };

  return (
    <>
      <div className=" 2xl:container 2xl:h-screen 2xl:w-screen relative flex  items-center justify-center xl:h-screen xl:w-screen lg:h-screen lg:w-screen md:h-screen md:w-screen sm:h-screen sm:w-screen h-screen">
        <div className=" 2xl:container block bg-gray-900 rounded-xl shadow-2xl p-2 2xl:h-[87%] 2xl:w-5/12 xl:h-auto lg:h-auto lg:w-4/5 sm:h-auto sm:max-w-[500px] h-3/7 w-4/5">
          <div className="2xl:container flex relative text-white font-bold items-center 2xl:h-20  justify-between text-2xl 2xl:p-4 xl:p-4 lg:p-4 sm:p-2 p-2">
            <div className="flex relative items-center gap-2">
              <div className="flex ">
                <IoMdMenu className="2xl:size-11 xl:size-10 lg:size-10 md:size-10 sm:size-9 size-8" />
              </div>
              <h1 className="flex 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-xl  ">
                {" "}
                Simple-Calci
              </h1>
            </div>
            <div className="flex ">
              <FaCalculator className="2xl:size-10 xl:size-10 lg:size-9 md:size-8 sm:size-6 size-5" />
            </div>
          </div>
          <div className="2xl:container border-black border-2 bg-gray-700 rounded-xl   ">
            <button className="block ">
              <LuHistory className="text-white 2xl:size-8 m-2 xl:size-8 lg:size-6 md:size-7 sm:size-6 size-7" />
            </button>
            <div className="2xl:container relative 2xl:h-28 xl:h-28 lg:h-28 md:h-28   sm:h-28  h-24 ">
              <div className="  relative block text-2xl  m-2 p-2  text-right text-gray-400">
                {result}
              </div>
              <div className="relative  h-auto w-auto">
                <div
                  dir="ltl"
                  id="input"
                  type="text"
                  name="input"
                  className="font-bold  p-3 md:w-full text-2xl  rounded-xl bg-transparent text-white  outline-none hover:border-2 sm:w-full w-full "
                >
                  {no}
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:container grid grid-cols-4 relative m-1 items-center justify-center">
            <div className="flex  items-center justify-center">
              <button
                className="bg-gray-700 h-[40px] w-[90px]  2xl:w-[120px] 2xl:h-[60px] xl:w-[130px] xl:h-[50px] lg:w-[120px] lg:h-[50px] md:w-[110px] md:h-[40px] sm:w-[88px] sm:h-[40px] m-1 2xl:text-3xl xl:text:3xl lg:text-2xl md:text-2xl sm:text-2xl text-xl rounded-2xl text-white  hover:bg-gray-800 "
                name={"%"}
                value={"%"}
                onClick={(opearator) => handleOpratore("%")}
              >
                %
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-gray-700  h-[40px] w-[90px] 2xl:w-[120px] 2xl:h-[60px] xl:w-[130px] xl:h-[50px] lg:w-[120px] lg:h-[50px] md:w-[110px] md:h-[40px] sm:w-[88px] sm:h-[40px] m-1 2xl:text-3xl xl:text:3xl lg:text-2xl md:text-2xl sm:text-2xl  text-xl rounded-2xl text-white hover:bg-gray-800"
                name={"/"}
                value={"/"}
                onClick={(opearator) => handleOpratore("/")}
              >
                /
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                name={"back"}
                value={"back"}
                className="flex h-[40px] w-[90px] items-center justify-center m-1 bg-gray-700 2xl:w-[120px] 2xl:h-[60px] xl:w-[130px] xl:h-[50px] lg:w-[120px] lg:h-[50px] md:w-[110px] md:h-[40px] sm:w-[88px] sm:h-[40px]  2xl:text-3xl xl:text:3xl lg:text-2xl md:text-2xl sm:text-2xl   rounded-2xl text-white text-3xl hover:bg-gray-800"
                onClick={handleback}
              >
                <FaBackspace />
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                name={"clear"}
                value={"clear"}
                className="bg-gray-700 h-[40px] w-[90px] 2xl:w-[120px] 2xl:h-[60px] xl:w-[130px] xl:h-[50px] lg:w-[120px] lg:h-[50px] md:w-[110px] md:h-[40px] sm:w-[88px] sm:h-[40px] m-1 2xl:text-3xl xl:text:3xl lg:text-2xl md:text-2xl sm:text-2xl   rounded-2xl text-white text-3xl hover:bg-gray-800"
                onClick={handleClear}
              >
                C
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                name={"1"}
                value={"1"}
                className="bg-gray-700 h-[40px] w-[90px] 2xl:w-[120px] 2xl:h-[60px] xl:w-[130px] xl:h-[50px] lg:w-[120px] lg:h-[50px] md:w-[110px] md:h-[40px] sm:w-[88px] sm:h-[40px] m-1 2xl:text-3xl xl:text:3xl lg:text-2xl md:text-2xl sm:text-2xl  rounded-2xl text-white text-3xl hover:bg-gray-800"
                onClick={HandleClick}
              >
                1
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                name={"2"}
                value={"2"}
                className="bg-gray-700 h-[40px] w-[90px] 2xl:w-[120px] 2xl:h-[60px] xl:w-[130px] xl:h-[50px] lg:w-[120px] lg:h-[50px] md:w-[110px] md:h-[40px] sm:w-[88px] sm:h-[40px] m-1 2xl:text-3xl xl:text:3xl lg:text-2xl md:text-2xl sm:text-2xl  rounded-2xl text-white text-3xl hover:bg-gray-800"
                onClick={HandleClick}
              >
                2
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                name={"3"}
                value={"3"}
                className="bg-gray-700 h-[40px] w-[90px] 2xl:w-[120px] 2xl:h-[60px] xl:w-[130px] xl:h-[50px] lg:w-[120px] lg:h-[50px] md:w-[110px] md:h-[40px] sm:w-[88px] sm:h-[40px] m-1 2xl:text-3xl xl:text:3xl lg:text-2xl md:text-2xl sm:text-2xl  rounded-2xl text-white text-3xl hover:bg-gray-800"
                onClick={HandleClick}
              >
                3
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                name={"+"}
                value={"+"}
                className="bg-gray-700 h-[40px] w-[90px] 2xl:w-[120px] 2xl:h-[60px] xl:w-[130px] xl:h-[50px] lg:w-[120px] lg:h-[50px] md:w-[110px] md:h-[40px] sm:w-[88px] sm:h-[40px] m-1 2xl:text-3xl xl:text:3xl lg:text-2xl md:text-2xl sm:text-2xl  rounded-2xl text-white text-3xl hover:bg-gray-800"
                onClick={(opearator) => handleOpratore("+")}
              >
                +
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                name={"4"}
                value={"4"}
                className="bg-gray-700 h-[40px] w-[90px] 2xl:w-[120px] 2xl:h-[60px] xl:w-[130px] xl:h-[50px] lg:w-[120px] lg:h-[50px] md:w-[110px] md:h-[40px] sm:w-[88px] sm:h-[40px] m-1 2xl:text-3xl xl:text:3xl lg:text-2xl md:text-2xl sm:text-2xl  rounded-2xl text-white text-3xl hover:bg-gray-800   "
                onClick={HandleClick}
              >
                4
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                name={"5"}
                value={"5"}
                className="bg-gray-700 h-[40px] w-[90px] 2xl:w-[120px] 2xl:h-[60px] xl:w-[130px] xl:h-[50px] lg:w-[120px] lg:h-[50px] md:w-[110px] md:h-[40px] sm:w-[88px] sm:h-[40px] m-1 2xl:text-3xl xl:text:3xl lg:text-2xl md:text-2xl sm:text-2xl  rounded-2xl text-white text-3xl hover:bg-gray-800"
                onClick={HandleClick}
              >
                5
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                name={"6"}
                value={"6"}
                className="bg-gray-700 h-[40px] w-[90px] 2xl:w-[120px] 2xl:h-[60px] xl:w-[130px] xl:h-[50px] lg:w-[120px] lg:h-[50px] md:w-[110px] md:h-[40px] sm:w-[88px] sm:h-[40px] m-1 2xl:text-3xl xl:text:3xl lg:text-2xl md:text-2xl sm:text-2xl  rounded-2xl text-white text-3xl hover:bg-gray-800"
                onClick={HandleClick}
              >
                6
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                name={"X"}
                value={"X"}
                className="bg-gray-700 h-[40px] w-[90px] 2xl:w-[120px] 2xl:h-[60px] xl:w-[130px] xl:h-[50px] lg:w-[120px] lg:h-[50px] md:w-[110px] md:h-[40px] sm:w-[88px] sm:h-[40px] m-1 2xl:text-3xl xl:text:3xl lg:text-2xl md:text-2xl sm:text-2xl  rounded-2xl text-white text-3xl hover:bg-gray-800"
                onClick={(opearator) => handleOpratore("X")}
              >
                X
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                name={"7"}
                value={"7"}
                className="bg-gray-700 h-[40px] w-[90px] 2xl:w-[120px] 2xl:h-[60px] xl:w-[130px] xl:h-[50px] lg:w-[120px] lg:h-[50px] md:w-[110px] md:h-[40px] sm:w-[88px] sm:h-[40px] m-1 2xl:text-3xl xl:text:3xl lg:text-2xl md:text-2xl sm:text-2xl  rounded-2xl text-white text-3xl hover:bg-gray-800"
                onClick={HandleClick}
              >
                7
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                name={"8"}
                value={"8"}
                className="bg-gray-700 h-[40px] w-[90px] 2xl:w-[120px] 2xl:h-[60px] xl:w-[130px] xl:h-[50px] lg:w-[120px] lg:h-[50px] md:w-[110px] md:h-[40px] sm:w-[88px] sm:h-[40px] m-1 2xl:text-3xl xl:text:3xl lg:text-2xl md:text-2xl sm:text-2xl  rounded-2xl text-white text-3xl hover:bg-gray-800"
                onClick={HandleClick}
              >
                8
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                name={"9"}
                value={"9"}
                className="bg-gray-700  h-[40px] w-[90px] 2xl:h-[60px] xl:w-[130px] xl:h-[50px] lg:w-[120px] lg:h-[50px] md:w-[110px] md:h-[40px] sm:w-[88px] sm:h-[40px] m-1 2xl:text-3xl xl:text:3xl lg:text-2xl md:text-2xl sm:text-2xl  rounded-2xl text-white text-3xl hover:bg-gray-800"
                onClick={HandleClick}
              >
                9
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                name={"-"}
                value={"-"}
                className="bg-gray-700 h-[40px] w-[90px] 2xl:w-[120px] 2xl:h-[60px] xl:w-[130px] xl:h-[50px] lg:w-[120px] lg:h-[50px] md:w-[110px] md:h-[40px] sm:w-[88px] sm:h-[40px] m-1 2xl:text-3xl xl:text:3xl lg:text-2xl md:text-2xl sm:text-2xl  rounded-2xl text-white text-3xl hover:bg-gray-800"
                onClick={(opearator) => handleOpratore("-")}
              >
                -
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                name={"0"}
                value={"0"}
                className="bg-gray-700  h-[40px] w-[90px] 2xl:h-[60px] xl:w-[130px] xl:h-[50px] lg:w-[120px] lg:h-[50px] md:w-[110px] md:h-[40px] sm:w-[88px] sm:h-[40px] m-1 2xl:text-3xl xl:text:3xl lg:text-2xl md:text-2xl sm:text-2xl  rounded-2xl text-white text-3xl hover:bg-gray-800"
                onClick={HandleClick}
              >
                0
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                name={"00"}
                value={"00"}
                className="bg-gray-700 h-[40px] w-[90px] 2xl:w-[120px] 2xl:h-[60px] xl:w-[130px] xl:h-[50px] lg:w-[120px] lg:h-[50px] md:w-[110px] md:h-[40px] sm:w-[88px] sm:h-[40px] m-1 2xl:text-3xl xl:text:3xl lg:text-2xl md:text-2xl sm:text-2xl  rounded-2xl text-white text-3xl hover:bg-gray-800"
                onClick={HandleClick}
              >
                00
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                name={"."}
                value={"."}
                className="bg-gray-700 h-[40px] w-[90px] 2xl:w-[120px] 2xl:h-[60px] xl:w-[130px] xl:h-[50px] lg:w-[120px] lg:h-[50px] md:w-[110px] md:h-[40px] sm:w-[88px] sm:h-[40px] m-1 2xl:text-3xl xl:text:3xl lg:text-2xl md:text-2xl sm:text-2xl  rounded-2xl text-white text-3xl hover:bg-gray-800"
                onClick={(opearator) => handleOpratore(".")}
              >
                .
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                name={"equal"}
                value={"="}
                className="bg-sky-600 h-[40px] w-[90px] 2xl:w-[120px] 2xl:h-[60px] xl:w-[130px] xl:h-[50px] lg:w-[120px] lg:h-[50px] md:w-[110px] md:h-[40px] sm:w-[88px] sm:h-[40px] m-1 2xl:text-3xl xl:text:3xl lg:text-2xl md:text-2xl sm:text-2xl  rounded-2xl text-white text-3xl hover:bg-sky-700"
                onClick={Handleequal}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
