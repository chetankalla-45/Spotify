import { createContext, useEffect, useRef, useState } from "react";
import axios from 'axios'

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef()

    const url = 'https://spotify-tr43.onrender.com'

    const [songsData, setSongsData] = useState([]);
    const [albumsData, setAlbumsData] = useState([]);
    
    const [track, setTrack] = useState(null)   // FIXED: was useState([]) — an empty array is truthy, so Player.jsx tried to render track.image / track.desc before data loaded, crashing the whole app
    const [playerStatus, setPlayerStatus] = useState(false)
    const [time, setTime] = useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second: 0,
            minute: 0
        }
    })
    
    const play = () => {
        audioRef.current.play();
        setPlayerStatus(true)
    }
    const pause=()=>{
        audioRef.current.pause();
        setPlayerStatus(false);
    }

    const playWithId = async (id) =>{
        await songsData.map((item)=>{
            if(id === item._id){
                setTrack(item);
            }
        })
        await audioRef.current.play();
        setPlayerStatus(true);
    }

    const previous = async () => {
        songsData.map(async (item, index)=>{
            if(track && track._id === item._id && index>0){
                await setTrack(songsData[index-1]);
                await audioRef.current.play();
                setPlayerStatus(true);
            }
        })
    }

    const next = async () => {
        songsData.map(async (item, index)=>{
            if(track && track._id === item._id && index<songsData.length-1){
                await setTrack(songsData[index+1]);
                await audioRef.current.play();
                setPlayerStatus(true);
            }
        })
    }

    const seekSong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration)
    }

    const getSongsData = async () => {
        try{
            const responce = await axios.get(`${url}/api/song/list`);
            if(responce.data.success){
                setSongsData(responce.data.songs);
                setTrack(responce.data.songs[0] || null);
            } else {
                console.log("Backend returned failure for songs:", responce.data);
            }
        }catch(err){
            console.log("getSongsData error:", err);
        }
    }

    const getAlbumsData = async () => {
        try{
            const response = await axios.get(`${url}/api/album/list`);
            if(response.data.success){
                setAlbumsData(response.data.albums);
            } else {
                console.log("Backend returned failure for albums:", response.data);
            }
        }catch(err){
            console.log("getAlbumsData error:", err);
        }
    }
    
    useEffect(()=>{
        setTimeout(()=>{
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%";
                setTime({
                currentTime:{
                    second:Math.floor(audioRef.current.currentTime % 60),
                    minute:Math.floor(audioRef.current.currentTime / 60)
                },
                totalTime:{
                    second:Math.floor(audioRef.current.duration % 60),
                    minute:Math.floor(audioRef.current.duration / 60)
                }
            })
        }
        },1000)
    },[audioRef])

    useEffect(()=>{
        getSongsData();
        getAlbumsData();
    },[])

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track, setTrack,
        playerStatus, setPlayerStatus,
        time, setTime,
        play, pause,
        playWithId,
        previous,next,
        seekSong,
        songsData,albumsData,
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;