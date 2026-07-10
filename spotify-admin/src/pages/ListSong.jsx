import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { url } from '../App';
import { toast } from 'react-toastify';

const ListSong = () => {

    const [data, setData] = useState([]);

    const fetchSong = async () => {

        try{
            const responce = await axios.get(`${url}/api/song/list`);
            if(responce.data.success){
                setData(responce.data.songs)
            }
        }catch(err){
            toast.error("Error occured")
        }

    }

    const RemoveSong = async (id) => {
        try{
            const responce = await axios.post(`${url}/api/song/remove`,{id})

            if(responce.data.success){
                toast.success(responce.data.message);
                await fetchSong();
            }
        }catch(err){
            toast.error("Error occured")
        }
    }

    useEffect(()=>{
        fetchSong();
    },[])

  return (
    <div>
      <p>All songs list</p>
      <br />
      <div>
        <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100'>
            <b>Image</b>
            <b>Name</b>
            <b>Album</b>
            <b>Duration</b>
            <b>Action</b>
        </div>
        {data.map((item,index)=>{
            return(
                <div key={index} className='grid grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 '>
                    <img src={item.image} className='w-12 ' alt="" />
                    <p>{item.name}</p>
                    <p>{item.album}</p>
                    <p>{item.duration}</p>
                    <p className='cursor-pointer' onClick={()=>RemoveSong(item._id)}>x</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default ListSong