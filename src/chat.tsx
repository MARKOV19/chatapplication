import React, { useState } from 'react';
import MessageBubble from './messagebubble';
import Picker from 'emoji-picker-react'; // Assurez-vous d'installer le package emoji-picker-react

interface Message {
  text: string;
  senderId: number; // ID de l'expéditeur
  receiverId: number; // ID du destinataire
  timestamp: string; // Ajout de la propriété timestamp
}

interface User {
  id: number;
  name: string;
  profession: string;
  avatar: string | null; // URL de l'avatar ou null si pas d'avatar
}

const users: User[] = [
  { id: 4, name: 'Alice', profession: 'Engineering', avatar: 'https://example.com/alice.jpg' },
  { id: 2, name: 'Bob', profession: 'Product', avatar: 'https://example.com/bob.jpg' },
  { id: 3, name: 'Charlie', profession: 'Engineering', avatar: null }, 
  // Pas d'avatar, affichera les initiales
  { id: 1, name: 'titus', profession: 'dev', avatar: null },
];

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Salut, comment ça va ?', senderId:3,  receiverId: 3, timestamp: new Date().toLocaleTimeString() },
    { text: 'Ça va bien, merci ! Et toi ?', senderId: 2, receiverId: 2, timestamp: new Date().toLocaleTimeString() },
    { text: 'yo les bro !', senderId: 4, receiverId: 4, timestamp: new Date().toLocaleTimeString() },
  ]);
  
  const [inputText, setInputText] = useState<string>('');
  const [showPicker, setShowPicker] = useState<boolean>(false);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputText.trim()) {
      const newMessage: Message = {
        text: inputText,
        senderId: 1, // ID de l'utilisateur qui envoie le message
        receiverId: 2, // ID du destinataire
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  const handleEmojiClick = (emoji: any) => {
    setInputText((prevText) => prevText + emoji.emoji); // Ajoute l'emoji au texte d'entrée
    setShowPicker(false); // Ferme le sélecteur d'emoji après sélection
  };

  return (
    <div className="chat-container" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="messages-wrapper" style={{borderTop:'solid .1rem   #F2F2F7',borderBottom:'solid .1rem #F2F2F7'}}>
        {messages.map((msg, index) => {
          const sender = users.find(user => user.id === msg.senderId); // Trouver l'utilisateur correspondant
          const receiver = users.find(user => user.id === msg.receiverId); // Trouver le destinataire correspondant
          const isSender = msg.senderId === 1; // Remplacez 1 par l'ID de l'utilisateur actuel

          return (
            <MessageBubble 
              key={index} 
              message={msg.text} 
              sender={sender!} 
              receiver={receiver!} 
              timestamp={msg.timestamp} 
              isSender={isSender} // Passez la prop isSender
            />
          );
        })}
      </div>

      <form onSubmit={handleSendMessage} style={{ display: 'flex', marginTop: '10px' }}>
      <button type="button" onClick={() => setShowPicker(!showPicker)} className='EM'style={{backgroundColor:'transparent', border:'none'}}>
          😊
        </button>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Tapez votre message..."
          style={{ flex: 1, padding: '10px',outline:'none',
             borderRadius: '5px', border: 'none' }}
        />
        <button type="submit" className='EN' style={{backgroundColor:'transparent', border:'none'}}>
        <span className="material-symbols-outlined text-[#0056b3] ">send</span>
        </button>
      </form>
      {showPicker && <Picker onEmojiClick={handleEmojiClick} />}
    </div>
 
  );
};

export default Chat;