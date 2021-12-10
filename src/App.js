import React,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';

// import Home from './Home';
// import Statefunctional from './Statefunctional';
//  import Stateclass from './Stateclass';
//  import Propsfunction from './Propsfunction';
//  import Propsclass from './Propsclass';
//  import Inputvalueget from './Inputvalueget';
//  import Hideshow from './Hideshow';
//  import Formfields from './Formfields';
// import Conditionalrendering from './Conditionalrendering';
// import Formvalidation from './Formvalidation';
// import PassfunProps from './PassfunProps';
// import ConstractorLifeCycle from './ConstractorLifeCycle';
// import RenderLifeCycle from './RenderLifeCycle';
// import CompoDidMount from './CompoDidMount';
// import CompoDidUpdate from './CompoDidUpdate';
// import ShouldCompoUpdate from './ShouldCompoUpdate';
// import CompoWillUnmount from './CompoWillUnmount';
// import UseStateHooks from './UseStateHooks';
// import UseEffectHook from './UseEffectHook';
// import StyleType from './StyleType';
// import BootstrapComponent from './BootstrapComponent';
// import HandleArray from './HandleArray';
// import NestedArrayList from './NestedArrayList';
// import BootstrapModal from './BootstrapModal';
import FormValidLibrary from './FormValidLibrary'


function App() {

  // {/* This is Function PassfunProps */}
  // function getData(){
  //   alert("Hello App function.");
  // }


// This is render life cycle method state
// const[name, setName] = useState("Pavan");


  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* <Statefunctional /> */}
        {/* <Stateclass /> */}
        <div className="container">
          {/* <Propsfunction name="Pavan" email="pavan@glasier.in" src={logo}/> */}
          {/* <Propsclass name="Pavan" email="pavan@glasier.in" src={logo} /> */}
          {/* <Inputvalueget name="Pavan" email="pavan@glasier.in" src={logo} /> */}

          {/* <Hideshow  /> */}
          {/* <Formfields  /> */}

          {/* <Conditionalrendering  /> */}
          {/* <Formvalidation  /> */}
        
          {/* <PassfunProps data={getData} /> */}

          {/* <ConstractorLifeCycle  /> */}

          {/* <RenderLifeCycle name={name} /> */}
          {/* <button className="clickBtn" onClick={()=>setName("Kumar")}>Update</button> */}
          
          {/* <CompoDidMount /> */}

          {/* <CompoDidUpdate /> */}

          {/* <ShouldCompoUpdate /> */}

          {/* <CompoWillUnmount /> */}

          {/* <UseStateHooks /> */}

          {/* <UseEffectHook /> */}

          {/* <StyleType /> */}

          {/* <BootstrapComponent /> */}

          {/* <HandleArray /> */}

          {/* <NestedArrayList /> */}
          
          {/* <BootstrapModal /> */}

          <FormValidLibrary />

        </div>
        

      {/* </header> */}
    </div>
  );
}



export default App;

