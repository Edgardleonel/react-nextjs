import React from 'react';


const Header = ({ posts }) => (
    <>
    <h1>Header</h1>
     {posts.map(repo => (
          <h1 key={repo.id}>{repo.name}</h1>
        ))}
    </>
  );
  

export default Header;