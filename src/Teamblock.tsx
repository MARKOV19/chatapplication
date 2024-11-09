import React from 'react';
import './teamblock.css'; // Fichier CSS pour les styles

interface Member {
  name: string;
  avatar: string; // URL de l'avatar
}

interface TeamBlockProps {
  teamName: string;
  lastSeen: number; // Dernière connexion en minutes
  members: Member[];
}

const TeamBlock: React.FC<TeamBlockProps> = ({ teamName, lastSeen, members }) => {
  return (
    <div className="team-block">
      <div className="members">
        {members.map((member, index) => (
          <div key={index} className="member">
            {/* Rendre chaque membre avec son avatar */}
            <img src={member.avatar} alt={`Avatar de ${member.name}`} />
          </div>
        ))}
      </div>
      <div className="team-info">
        <span className="team-name">{teamName}</span>
        <span className="last-seen">Dernière connexion il y a {lastSeen} minutes</span>
      </div>
      <div className="actions">
        {/* Bouton ou icône pour plus d'actions */}
        <button>...</button>
      </div>
    </div>
  );
}

export default TeamBlock;