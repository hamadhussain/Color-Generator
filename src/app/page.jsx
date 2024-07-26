// "use client";
// import M from "./Mode/page";
// import Card from "./Components/Card/page";
// import Calender from "./Components/Calender/page";
// import Command from "./Components/Command/page";
// import { useState } from "react";

// export default function Home() {
//   const [color, setColor] = useState("black");
//   const [bgcolor, setBgColor] = useState("");
//   const [inputc, setIColor] = useState("");
//   const [inputbg, setIBgColor] = useState("");

//   let data = [
//     { color: "pink-400" },
//     { color: "black" },
//     { color: "teal-400" },
//     { color: "blue-400" },
//     { color: "purple-400" },
//     { color: "red-500" },
//     { color: "yellow-400" },
//     { color: "white" },
//   ];

//   const c = (color) => {
//     setColor(color);
//   };

//   const handlechangec = (e) => {
//     setIColor(e);
//     console.log(inputc);
//   };
//   const handlechangeb = (e) => {
//     setIBgColor(e);
//     console.log(inputbg);
//   };
//   const bg = (bgcolor) => {
//     setBgColor(bgcolor);
//   };

//   return (
//     <>
//       <div>
//         <nav className="flex flex-col space-y-6 items-center p-14">
//           <h1 className="text-3xl uppercase">Color-Generator</h1>

//           <div className="flex flex-col">
//             <h1 className="uppercase text-2xl">
//               Choose your color <M />
//             </h1>
//             <br />
//             <div>
//               <div>
//                 <div className="flex items-center space-y-5">
//                   <div className="flex items-center">
//                     <p className={``}>Choose Text Color:</p>
//                     {data.map((bgColor, index) => (
//                       <button
//                         onClick={() => c(bgColor.color)}
//                         key={index}
//                         className={`w-14 h-14 rounded-full bg-${bgColor.color} border-2 border-gray-300 mx-2`}
//                       />
//                     ))}
//                   </div>
//                 </div>
//                 <br />
//                 <div className="flex flex-col justify-center items-center space-y-5">
//                   <div className="flex items-center">
//                     {data.map((bgColor, index) => (
//                       <button
//                         onClick={() => bg(bgColor.color)}
//                         key={index}
//                         className={`w-14 h-14 rounded-full bg-${bgColor.color} border-2 border-gray-300 mx-2`}
//                       />
//                     ))}
//                     <p>Choose Background Color:</p>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <label htmlFor="">Choose Text Color:</label>
//                 <input
//                   type="color"
//                   name=""
//                   value={`#f1f1f1`}
//                   onChange={(e) => handlechangec(e.target.value)}
//                   id=""
//                 />
//                 <label htmlFor="">Choose Background Color:</label>
//                 <input
//                   type="color"
//                   name=""
//                   value={`#f1f1f1`}
//                   onChange={(e) => handlechangeb(e.target.value)}
//                   id=""
//                 />
//               </div>
//             </div>
//           </div>
//         </nav>
//         <div className="grid grid-cols-3 px-24 py-5 justify-center items-center space-y-3">
//           <Card color={color} bg={bgcolor} inputc={inputc} inputbg={inputbg} />
//           <Calender
//             color={color}
//             bg={bgcolor}
//             inputc={inputc}
//             inputbg={inputbg}
//           />
//           <Command
//             color={color}
//             bg={bgcolor}
//             inputc={inputc}
//             inputbg={inputbg}
//           />
//         </div>
//       </div>
//     </>
//   );
// }

"use client";
import M from "./Mode/page";
import Card from "./Components/Card/page";
import Calender from "./Components/Calender/page";
import Command from "./Components/Command/page";
import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState("");
  const [bgcolor, setBgColor] = useState("");
  const [inputc, setIColor] = useState("");
  const [inputbg, setIBgColor] = useState("");

  let data = [
    { color: "pink-400" },
    { color: "black" },
    { color: "teal-400" },
    { color: "blue-400" },
    { color: "purple-400" },
    { color: "red-500" },
    { color: "yellow-400" },
    { color: "white" },
  ];

  const c = (color) => {
    setColor(color);
  };

  const handlechangec = (e) => {
    setIColor(e);
    console.log(inputc);
  };
  const handlechangeb = (e) => {
    setIBgColor(e);
    console.log(inputbg);
  };
  const bg = (bgcolor) => {
    setBgColor(bgcolor);
  };

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-col space-y-6 items-center p-4 sm:p-6 lg:p-14">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase kalnia">
            Color Generator
          </h1>

          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-xl sm:text-2xl lg:text-3xl uppercase">
              Choose your color <M />
            </h1>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex flex-wrap justify-center gap-2">
                <p className="text-base sm:text-lg">Choose Text Color:</p>
                {data.map((bgColor, index) => (
                  <button
                    onClick={() => c(bgColor.color)}
                    key={index}
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-${bgColor.color} border-2 border-gray-300 mx-1`}
                  />
                ))}
              </div>
              <div className="flex flex-wrap items-center space-y-4">
                <p className="text-base sm:text-lg">Choose Background Color:</p>
                {data.map((bgColor, index) => (
                  <button
                    onClick={() => bg(bgColor.color)}
                    key={index}
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-${bgColor.color} border-2 border-gray-300 mx-1`}
                  />
                ))}
              </div>
              <div className="flex  sm:flex-row flex-col space-x-4 items-center space-y-4">
                <label className="text-base sm:text-lg" htmlFor="textColor">Choose Text Color:</label>
                <input
                  id="textColor"
                  type="color"
                  value={`#${inputc}`}
                  onChange={(e) => handlechangec(e.target.value)}
                  className="w-44 h-8 "
                />
                <label className="text-base sm:text-lg" htmlFor="bgColor">Choose Background Color:</label>
                <input
                  id="bgColor"
                  type="color"
                  value={`#${inputbg}`}
                  onChange={(e) => handlechangeb(e.target.value)}
                  className="w-44 h-8 "
                />
              </div>
            </div>
          </div>
        </nav>
        <div
        //  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-6 lg:px-24 py-5"
className=" flex justify-around sm:flex-row flex-col items-center py-12"
>
          <Card color={color} bg={bgcolor} inputc={inputc} inputbg={inputbg} />
          <Calender
            color={color}
            bg={bgcolor}
            inputc={inputc}
            inputbg={inputbg}
          />
          <Command
            color={color}
            bg={bgcolor}
            inputc={inputc}
            inputbg={inputbg}
          />
        </div>
      </div>
    </>
  );
}
