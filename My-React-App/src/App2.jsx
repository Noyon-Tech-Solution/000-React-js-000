import React from "react";
// import Hooks_useState from './Component2/Hooks_useState/Hooks_useState'
// import Update_useState from './Component2/Hooks_Update_useState/Udate_useS
// import Event_Bubbling from './Component2/Event_Bubbling/Event_Bubbling'
// import From from './Component2/Form/From'
// import Child from "./Component2/State_Lefting/Child";
// import Toggle from "./Component2/Toggle/Toggle";
// import UseEffect from "./Component2/Hooks/UseEffect/UseEffect";
// import FetchDataUseEffect from "./Component2/Hooks/FetchingData_useEffect/FetchDataUseEffect";
import Formik from "./Component2/Form/Formik";

// 05 How to Send Data Parents to Child React.Js
// const data = "I am from Parents";

export default function App2() {
  // 05 How to Send Data Child to Parents React.Js
  // const handlerChildData = (e) => {
  //   console.log(e);
  // };

  return (
    <div>
      {/*  01 How to use Hooks_useState in React.Js */}
      {/* <Hooks_useState /> */}

      {/* 02 How to use Update_Hooks_useState in React.Js */}
      {/* <Update_useState /> */}

      {/* 03 How to use Event Bubbling / Stop Propagation in React.Js */}
      {/* <Event_Bubbling /> */}

      {/* 04 How to Access of From Value in React.Js */}
      {/* <From /> */}

      {/* 05 How to Send Data Child To Parents  & Parents to Child React.Js */}
      {/* <Child data={data} onChildData={handlerChildData} /> */}

      {/* 06 How to use Toggle in React.Js */}
      {/* <Toggle /> */}

      {/*  07 How to use useEffect in React.Js */}
      {/* <UseEffect /> */}

      {/*  07 How to Fetching Data on useEffect in React.Js */}
      {/* <FetchDataUseEffect /> */}

      {/*  08 How to Control From Data using formik in React.Js */}
      <Formik />
    </div>
  );
}