// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import './App.css';
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

  // Function to handle arrival notification
  const handleArrivalNotification = () => {
    // Simulate sending arrival notification to a designated contact
    const user = "Jenn"; // Replace with actual user name or identifier
    const contact = "Spike"; // Replace with actual contact name or identifier
    fetch('/arrival-notification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, contact }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to send arrival notification');
      }
      console.log('Arrival notification sent successfully');
    })
    .catch(error => {
      console.error('Error sending arrival notification:', error.message);
    });
  };

  useEffect(() => {
    // Call the arrival notification function when component mounts (simulate user arriving home)
    handleArrivalNotification();
  }, []); // Empty dependency array ensures this effect runs only once when component mounts

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
