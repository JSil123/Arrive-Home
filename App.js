import React, { useState, useEffect } from 'react';
import './App.css';
import alarmSound from './alarmhey.m4a'; // Import the alarm sound file

function App() {
  const [proofProvided, setProofProvided] = useState(false);

  // Function to simulate sending a text message
  const sendText = () => {
    alert("Text message sent to your friend: 'I am home!'");
  };

  // Function to simulate capturing a live photo or video
  const captureProof = () => {
    alert("Live photo or video captured!");
  };

  // Function to play the alarm sound
  const playAlarm = () => {
    const audio = new Audio(alarmSound);
    audio.play();
  };

  // Function to display custom confirmation message for proof of arrival
  const confirmProof = () => {
    const response = window.confirm("Send proof that you are home?");
    if (response) {
      setProofProvided(true);
      captureProof();
    } else {
      triggerAlarm();
    }
  };

  // Simulate triggering the alarm
  const triggerAlarm = () => {
    playAlarm();
    alert("You haven't provided proof of arrival!");
  };

  // Simulate user arriving home
  const arriveHome = () => {
    sendText();
    setTimeout(() => {
      confirmProof();
    }, 5000); // Wait for 5 seconds before checking for proof
  };

  return (
    <div className="App">
      <div className="main-container">
        <h1 className="header">Arrive Home</h1>
        <button className="button" onClick={arriveHome}>I'm Home!</button>
      </div>
    </div>
  );
}

export default App;
