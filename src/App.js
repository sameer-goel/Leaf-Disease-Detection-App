import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import LabelsIdentification from "./LabelsIdentification";
import { ArrowRight, FileImage, Upload, GearFill, FileEarmarkRichtext} from 'react-bootstrap-icons';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Amplify from "aws-amplify";
// import { AmazonAIPredictionsProvider } from "@aws-amplify/predictions";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);
// Amplify.addPluggable(new AmazonAIPredictionsProvider());

const HowItWorks = () => {
  return (
    <>
    <div className="LandingPageContent">
      <FileImage color="royalblue" size={96} />
      <ArrowRight className="Arrow" color="royalblue" size={96} />
      <Upload color="royalblue" size={96} />
      <ArrowRight className="Arrow" color="royalblue" size={96} />
      <GearFill color="royalblue" size={96} />
      <ArrowRight className="Arrow" color="royalblue" size={96} />
      <FileEarmarkRichtext color="royalblue" size={96} />
    </div>
    <div className="LandingPageText">
      <h3>How it works</h3>
      <ol>
        <li>Leaf Image is clicked by user</li>
        <li>Image is then uplaoded to an Amazon S3</li>
        <li>Amazon Rekognition ML model makes prediction</li>
        <li>Provides results of plant leaf diseases to the user</li>
      </ol>
    </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/HowItWorks">
            <Header />
            <HowItWorks />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <LabelsIdentification />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;