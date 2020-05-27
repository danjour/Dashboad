import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import SmallCard from './components/SmallCard'
import Header from './components/Header'

function App() {
  return (
    <>
    <Header/>
    <div className="App">
      
      <Card nome="Facebook" icon="https://img.icons8.com/color/48/000000/facebook.png" numero="1987" color="#3B5998">

      </Card>
      <Card nome="Twitter"  icon="https://img.icons8.com/fluent/48/000000/twitter.png" numero="1987"color="#00acee">

      </Card>
      <Card nome="Instagram" icon="https://img.icons8.com/nolan/40/instagram-new.png" numero="11k"className="Instagram">
      
      </Card>
      <Card nome="YouTube" icon="https://img.icons8.com/fluent/48/000000/youtube-play.png" numero="8239" color="#F00">

      </Card>
      <SmallCard nome="Page Views" icon="https://img.icons8.com/color/48/000000/facebook.png" color="#F00">

      </SmallCard>
      <SmallCard nome="Likes" icon="https://img.icons8.com/color/48/000000/facebook.png" color="#F00">

      </SmallCard>
      <SmallCard nome="Likes" icon="https://img.icons8.com/nolan/40/instagram-new.png" color="#F00">

      </SmallCard>
      <SmallCard nome="Profile Views" icon="https://img.icons8.com/nolan/40/instagram-new.png" color="#F00">

      </SmallCard>
      <SmallCard nome="Retweets" icon="https://img.icons8.com/fluent/48/000000/twitter.png" color="#F00">

      </SmallCard>
      <SmallCard nome="Likes" icon="https://img.icons8.com/fluent/48/000000/twitter.png" color="#F00">

      </SmallCard>
      <SmallCard nome="Likes" icon="https://img.icons8.com/fluent/48/000000/youtube-play.png" color="#F00">

      </SmallCard>
      <SmallCard nome="Total Views"  icon="https://img.icons8.com/fluent/48/000000/youtube-play.png" color="#F00">

      </SmallCard>
      
    </div>
    </>
  );
}

export default App;
