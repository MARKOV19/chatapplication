import React from 'react';
import Avatar from '@mui/material/Avatar';

interface User {
  id: number;
  name: string;
  profession: string;
  avatar: string | null;
}

interface MessageBubbleProps {
  message: string;
  sender: User;
  receiver: User;
  timestamp: string;
  isSender: boolean; // Ajout d'une prop pour savoir si c'est l'expéditeur
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, sender, receiver, timestamp, isSender }) => {
  return (
    <div style={{ display: 'flex', justifyContent: isSender ? 'flex-end' : 'flex-start', margin: '5px 0' }}>
      {!isSender && (
        <Avatar alt={receiver.name} src={receiver.avatar || ''} style={{ marginRight: '10px' }}>
          {receiver.avatar ? null : receiver.name.charAt(0)} {/* Affiche l'initiale si pas d'avatar */}
        </Avatar>
      )}
      <div style={{ 
          padding: '10px', 
          borderRadius: '10px', 
          backgroundColor: isSender ? '#007bff' : '#28a745', // Bleu pour l'expéditeur, vert pour le destinataire
          color: 'white', 
          maxWidth: '70%', // Limite la largeur du message
          wordWrap: 'break-word' // Permet de couper les mots longs
        }}>
        <p style={{ margin: 0 }}>
          <strong>{isSender ? sender.name : receiver.name}</strong>
          <span style={{ fontSize: '0.8em', color: '#ddd', marginLeft: '5px' }}>({isSender ? sender.profession : receiver.profession})</span>
        </p>
        <p style={{ margin: '5px 0' }}>{message}</p>
        <small>{timestamp}</small>
      </div>
      {isSender && (
        <Avatar alt={sender.name} src={sender.avatar || ''} style={{ marginLeft: '10px' }}>
          {sender.avatar ? null : sender.name.charAt(0)} {/* Affiche l'initiale si pas d'avatar */}
        </Avatar>
      )}
    </div>
  );
};

export default MessageBubble;