import Navebar from "./component/Navebar";

import React, { Component } from "react";
import News from "./component/News";
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
 state={
  progress:0
 }
 setProgress=(progress)=>{
  this.setState({progress:progress})
 }
  render() {
 
    return (
      <>
        <Main>
          <Navebar />
          <LoadingBar height={"3px"}
        color='#f11946'
        progress={this.state.progress}
        
      />
          <Routes>
          <Route
              exact
              path="/"
              key="/"
              element={<News setProgres={this.setProgress}  country="in" category="business" />}
            />
            <Route
              exact
              path="/business"
             
              element={<News setProgres={this.setProgress}   key="business" country="in" category="business" />}
            />
            <Route
              exact
              path="/entertainment"
             
              element={<News setProgres={this.setProgress}   key="entertainment" country="in" category="entertainment" />}
            />
            <Route
              exact
              path="/general"
             
              element={<News setProgres={this.setProgress}   key="general" country="in" category="general" />}
            />
            <Route
              exact
              path="/health"
              
              element={<News setProgres={this.setProgress}  key="health" country="in" category="health" />}
            />
            <Route
              exact
              path="/science"
              
              element={<News setProgres={this.setProgress}  key="science" country="in" category="science" />}
            />
            <Route
              exact
              path="/sports"
              
              element={<News setProgres={this.setProgress}  key="sports" country="in" category="sports" />}
            />
            <Route
              exact
              path="/entertainment"
              
              element={<News setProgres={this.setProgress}  key="entertainment" country="in" category="entertainment" />}
            />
             <Route
              exact
              path="/technology"
              
              element={<News setProgres={this.setProgress}  key="technology" country="in" category="technology" />}
            />
          
          </Routes>
       
        </Main>
      </>
    );
  }
}
