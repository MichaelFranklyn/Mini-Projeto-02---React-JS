import './footer.css'
import nextIcon from '../../assets/next.svg'
import pauseIcon from '../../assets/pause.svg'
import stopIcon from '../../assets/stop.svg'
import previousIcon from '../../assets/previous.svg'
import playIcon from '../../assets/play.svg'
import { useRef } from 'react'

export default function Footer({ audioRef, currentMusic, iconBtn, setIconBtn, changeMusic }) {
    let intervalProgress = null
    const progresRef = useRef(null);

    function playPause() {

        intervalProgress = setInterval(() => {
            if (audioRef.current.paused) {
                clearInterval(intervalProgress);
            }

            const duration = audioRef.current.duration / 60
            const currentProgres = ((audioRef.current.currentTime / 60) * 100) / duration

            progresRef.current.style.width = `${currentProgres}%`
        }, 1000);

        if (audioRef.current.paused) {
            audioRef.current.play();
            setIconBtn('pause');
            return;
        }

        audioRef.current.pause()
        setIconBtn('play')
    }

    return (
        <footer>
            <div className='info_music'>
                <h2>{currentMusic.title}</h2>
                <strong>{currentMusic.artist}</strong>
            </div>
            <div className='container_player'>
                <div className='container_bts'>
                    <img
                        src={stopIcon}
                        className='botoes'
                        alt='botao' />
                    <img
                        src={previousIcon}
                        className='botoes'
                        alt='botao'
                        onClick={() => changeMusic('previous')} />
                    <img
                        src={iconBtn === 'pause' ? pauseIcon : playIcon}
                        className='botaoPause'
                        alt='botao'
                        onClick={() => playPause()} />
                    <img
                        src={nextIcon}
                        className='botoes'
                        alt='botao'
                        onClick={() => changeMusic('next')} />
                </div>
                <div className='container_barra'>
                    <strong className='start'>0</strong>
                    <div className='container_line'>
                        <div className='progress_line'></div>
                        <div
                            className='progress_line_color'
                            ref={progresRef}
                        ></div>
                    </div>
                    <strong className='end'>3:45</strong>
                </div>
            </div>
            <div className='empty'>

            </div>
        </footer>
    )
}