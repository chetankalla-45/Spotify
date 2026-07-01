import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { assets } from '../frontend-assets/assets'
import { PlayerContext } from '../context/PlayerContext'
import { useState } from 'react'
import { useEffect } from 'react'

const Displayalbum = ({album}) => {

    const {id} = useParams()
    const [albumData, setAlbumData] = useState("");
    const {playWithId, albumsData, songsData} = useContext(PlayerContext)

    useEffect(()=>{
        albumsData.map((item)=>{
            if(item._id===id){
                setAlbumData(item);
            }
        })
    },[])


  return albumData ? (
    <>
      <Navbar/>
      {/* <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img className='w-48 rounded' src={albumData.image} alt="" />
        <div className='flex flex-col'>
            <p>Playlist</p>
            <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
            <h4>{albumData.desc}</h4>
            <p className='mt-1'>
                <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
                <b>Spotify</b>
                • 1,323,134 likes
                • <b>50 songs,</b>
                about 2 hr 30 min
            </p>
        </div>
      </div> */}

        <div className='mt-10 p-6 rounded-2xl bg-gradient-to-b from-green-700/40 via-[#121212] to-[#121212] flex gap-8 flex-col md:flex-row md:items-end shadow-2xl'>

            <img 
                className='w-48 h-48 object-cover rounded-xl shadow-lg hover:scale-105 transition duration-300' 
                src={albumData.image} 
                alt="" 
            />

            <div className='flex flex-col gap-2'>

                <p className='text-sm uppercase tracking-wider text-gray-300 font-semibold'>
                Playlist
                </p>

                <h2 className='text-5xl font-extrabold mb-2 md:text-7xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent'>
                {albumData.name}
                </h2>

                <h4 className='text-gray-300 max-w-xl text-sm md:text-base'>
                {albumData.desc}
                </h4>

                <p className='mt-3 flex items-center gap-2 text-gray-300 text-sm'>
                <img 
                    className='w-5 h-5' 
                    src={assets.spotify_logo} 
                    alt="" 
                />

                <b className='text-white'>Spotify</b>

                <span>•</span>

                <span>1,323,134 likes</span>

                <span>•</span>

                <span>
                    <b className='text-white'>50 songs</b>, about 2 hr 30 min
                </span>
                </p>

            </div>

        </div>

        <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
            <p><b className='mr-4'>#</b>Title</p>
            <p>Album</p>
            <p className='hidden sm:block'>Date Added</p>
            <img className='m-auto w-4' src={assets.clock_icon} alt="" />
        </div>

        <hr />
        {
            songsData.filter((item) => item.album===album.name).map((item,index)=>(
                <div onClick={()=>playWithId(item._id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                    <p className='text-white'>
                        <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                        <img className='inline w-10 mr-5' src={item.image} alt="" />
                        {item.name}
                    </p>
                    <p className='text-[15px]'>{albumData.name}</p>
                    <p className='test-[15px] hidden sm:block'>5 days ago</p>
                    <p className='text-[15px] text-center'>{item.duration}</p>
                </div>
            ))
        }

    </>
  ) : null
}

export default Displayalbum
