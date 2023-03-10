/*import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

document.body.style.backgroundImage = "url('gradient3.jpg')";
document.body.style.backgroundAttachment = "fixed";

console.log(process.env.REACT_APP_NEWS_API_KEY)


export default class App extends Component {

  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API_KEY;


  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }


  render() {
    return (
      <>
        <div>
          <Router>
            <Navbar />
            <LoadingBar
              height={3}
              color='#f11946'
              progress={this.state.progress}
            />

            <Routes>
              <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} country="in" key="general" category="general" />}></Route>
              <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} country="in" key="business" category="business" />}></Route>
              <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} country="in" key="entertainment" category="entertainment" />}></Route>
              <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} country="in" key="sports" category="sports" />}></Route>
              <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} country="in" key="health" category="health" />}></Route>
              <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} country="in" key="science" category="science" />}></Route>
              <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} country="in" key="technology" category="technology" />}></Route>
            </Routes>
          </Router>
        </div>
      </>

    )
  }
}*/