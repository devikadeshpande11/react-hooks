import React from 'react';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import './App.css';
import HookCounterForm from './components/HookcounterForm';
import UseStateExample from './components/UseStateExample';
import HookCounterArray from './components/HookCounterArray';
import HookCounterOne from './components/UseEffectHook/HookCounterOne';
import DisplayJSONData from './components/displayJSONData/displayJSONData' ;
import ImageGallery from './components/imageGallery/imageGallery';
import JsonDataAPI from './components/displayJSONData/JsonDataAPI';
import IntervalCounter from './components/UseEffectHook/IntervalCounter';
import AxiosDataAPI from './components/UseEffectHook/AxiosDataAPI';
import AxiosDataID from './components/UseEffectHook/AxiosDataID';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Home from './components/pages/home';
import Contact from './components/pages/contact';
import About from './components/pages/about';
import HookMouse from './components/UseEffectHook/HookMouse';
import HookContainer from './components/UseEffectHook/MouseContainer';


function App() {
  return (
    <div className="App">
      {/* Hooks Examples for Richa 
      <hr/>
      Example using Class components<ClassCounter />
      <hr/> */}
      {/* Example using Functional hooks components<HookCounter />
      <hr/>
      <HookCounterForm/>
      <UseStateExample/>
      <hr/>
      <HookCounterArray/>
      <hr/><hr/>
      UseEffect Examples
      <hr/>
      <HookCounterOne/>
      <hr/>
      <DisplayJSONData/>
     
      <hr/>
      <displayTable/>
      <ImageGallery/>
      ABBB */}
       <displayTable/>
      <Router>
        <div id="nav">
              
              <h5>Use State Examples</h5>
              <div>
                <Link to="/HookCounter">Example using Functional hooks components</Link>
              </div>
              <div>
                <Link to="/HookCounterOne">HookCounterOne</Link>
              </div>
              <div>
                <Link to="/HookCounterForm">HookCounterForm</Link>
              </div>
              <div>
                <Link to="/UseStateExample">UseStateExample</Link>
              </div>
              <div>
                <Link to="/HookCounterArray">HookCounterArray</Link>
              </div>
              <h5>Use Effect Examples</h5>
              <div>
                <Link to="/IntervalCounter">IntervalCounter</Link>
              </div>
              <div>
                <Link to="/HookContainer">HookContainer</Link>
              </div>
              <div>
                <Link to="/JsonDataAPI">JsonDataAPI</Link>
              </div>
              <div>
                <Link to="/DisplayJSONData">DisplayJSONData</Link>
              </div>
              <div>
                <Link to="/ImageGallery">ImageGallery</Link>
              </div>
              <div>
              <Link to="/">About US</Link>
              </div>
              <div>
                <Link to="/Home">Home</Link>
              </div>
              <div>
                <Link to="/Contact">Contact</Link>
              </div>     
              <div>
                <Link to="/AxiosDataAPI">AxiosDataAPI</Link>
              </div>
              <div>
                <Link to="/AxiosDataID">Fetch Data with ID and get title</Link>
              </div>
        </div>
        <div id="section">
        <Switch>
          
        <Route exact path='/' component={About}></Route>
           {/* <Route exact path='/about' component={About}></Route> */}
            <Route exact path='/home' component={Home}></Route>
            <Route exact path='/contact' component={Contact}></Route>
            <Route exact path='/HookCounter' component={HookCounter}></Route>
            <Route exact path='/HookCounterForm' component={HookCounterForm}></Route>
            <Route exact path='/UseStateExample' component={UseStateExample}></Route>
            <Route exact path='/HookCounterArray' component={HookCounterArray}></Route>
            <Route exact path='/HookCounterOne' component={HookCounterOne}></Route>
            <Route exact path='/HookContainer' component={HookContainer}></Route>
            <Route exact path='/DisplayJSONData' component={DisplayJSONData}></Route>
            <Route exact path='/ImageGallery' component={ImageGallery}></Route>
            <Route exact path='/JsonDataAPI' component={JsonDataAPI}></Route>
            <Route exact path='/IntervalCounter' component={IntervalCounter}></Route>
            <Route exact path='/AxiosDataAPI' component={AxiosDataAPI}></Route>
            <Route exact path='/AxiosDataID' component={AxiosDataID}></Route>
        </Switch>
        </div>
        </Router>  

    </div>
  );
}

export default App;
