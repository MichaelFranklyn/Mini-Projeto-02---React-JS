import './home.css';
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer';
import Card from '../../components/Card/card'
import { musics } from '../../musics'
import { useState, useRef } from 'react'

function Home() {
  const [iconBtn, setIconBtn] = useState('pause')
  const audioRef = useRef(null)
  const [musicsData] = useState([...musics]);
  const [currentMusic, setCurrentMusic] = useState({ id: 0, title: '', artist: '' });

  function setMusic(music) {
    setIconBtn('play')
    audioRef.current.src = music.url;
    setCurrentMusic(music)
  }

  function changeMusic(option) {
    if(!currentMusic.id) {
      return
    }

    const newMusicId = option === 'next'
      ? currentMusic.id + 1
      : currentMusic.id - 1

    const otherMusic = musicsData.find((music) => music.id === newMusicId)
    
    if(!otherMusic) {
      return
    }

    setMusic(otherMusic)
  }

  return (
    <div className="container">
      <Header />
      <main>
        <h2>The best play list</h2>
        <div className='container_cards'>
          {musicsData.map((music) => (
            <div
              onClick={() => setMusic(music)}
              key={music.id}
            >
              <Card
                music={music}
                title={music.title}
                cover={music.cover}
                description={music.description}
              />
            </div>
          ))}
        </div>
      </main>
      <Footer
        audioRef={audioRef}
        currentMusic={currentMusic}
        iconBtn={iconBtn}
        setIconBtn={setIconBtn}
        changeMusic={changeMusic}
      />

      <audio ref={audioRef} />
    </div>
  );
}

export default Home;
