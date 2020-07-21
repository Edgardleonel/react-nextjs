import React, {useState, useEffect} from 'react';

function Home() {
const [posts, setPosts] = useState([]);


function handleTopo() {
  if(window.scrollY > 200) {
    console.log('open');
  } else {
    console.log('close');
  }
}

useEffect(() => {
  let subscribe = true;
  console.log('DidMount')
  if(subscribe) {
    window.addEventListener('scroll', handleTopo)
  }
  return () => {
    subscribe = false;
    console.log('WillUnMount')
    window.removeEventListener('scroll', handleTopo)
  }
}, [])


const fetchAPI = async () => {
  const res = await fetch("https://api.github.com/orgs/rocketseat/repos")
  const data = await res.json();
  setPosts(data);
} 

useEffect(() => {
  fetchAPI();
}, []);

  return (
    <>
    {posts.map(repo => (
        <h1 key={repo.id}>{repo.name}</h1>
      ))}
        <h1>Hello World</h1>
    </>
);
}

export default Home;