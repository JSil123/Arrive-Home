import React from 'react';

const UserProfile = ({ name, profilePicture, homeLocation, contactInfo, emergencyContacts }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <img src={profilePicture} alt="Profile" />
        <h3>{name}</h3>
        <p>Home Location: {homeLocation}</p>
        <p>Contact Information: {contactInfo}</p>
        <h4>Emergency Contacts:</h4>
        <ul>
          {emergencyContacts.map(contact => (
            <li key={contact.id}>{contact.name}: {contact.phoneNumber}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
