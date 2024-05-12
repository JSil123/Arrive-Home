// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import './App.css';
import './Map.js'; // Assuming this is where your map component is imported
import alarmSound from './alarmhey.m4a'; // Import the alarm sound file

function App() {
  const [proofProvided, setProofProvided] = useState(false);

  // Simulate sending a text message
  const sendText = () => {
    alert("Text message sent to your friend: 'I am home!'");
  };

  // Simulate capturing a live photo or video
  const captureProof = () => {
    alert("Proof of photo or video captured!");
  };

  // Function to play the alarm sound
  const playAlarm = () => {
    const audio = new Audio(alarmSound);
    audio.play();
  };

  // Simulate triggering the alarm
  const triggerAlarm = () => {
    playAlarm();
    alert("You haven't provided proof! This is your warning until the bells start ringing!");
  };

  // Simulate user arriving home
  const arriveHome = () => {
    sendText();
    setTimeout(() => {
      checkProof();
    }, 5000); // Wait for 5 seconds before checking for proof
  };

  // Simulate checking for proof of arrival
  const checkProof = () => {
    const response = window.confirm("Have you sent proof that you made it home?");
    if (response) {
      setProofProvided(true);
      captureProof();
    } else {
      triggerAlarm();
    }
  };

  // Function to handle sending proof
  const sendProof = () => {
    // Simulate capturing proof (photo or video)
    captureProof();
    // Update proof status
    setProofProvided(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Arrive Home</h1>
        {/* Display button to send proof if proof hasn't been provided */}
        {!proofProvided && <button onClick={sendProof}>Send Proof</button>}
        <button onClick={arriveHome}>I'm Home!</button>
      </header>
    </div>
  );
}

export default App;
