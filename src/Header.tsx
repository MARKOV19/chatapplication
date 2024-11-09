import React from 'react';

import TeamBlock from './Teamblock'


const Header: React.FC = () => {

  const teamMembers = [

    { name: 'Alice', avatar: 'https://example.com/alice.jpg' },

    { name: 'Bob', avatar: 'https://example.com/bob.jpg' },

    { name: 'Charlie', avatar: 'https://example.com/charlie.jpg' },

  ];


  return (

    <div>

      <TeamBlock teamName="Développeurs" lastSeen={5} members={teamMembers} />

    </div>

  );

}


export default Header;