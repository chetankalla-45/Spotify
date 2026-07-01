import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { url } from '../App';
import { toast } from 'react-toastify';

const ListAlbum = () => {

    const [data, setData] = useState([]);

    const fetchAlbums = async ()  => {
        try{
            const responce = await axios.get(`${url}/api/album/list`);

            if(responce.data.success){
                setData(responce.data.albums);
            }

        }catch(err){
            toast.error("error occured")
        }
    }

    const removeAlbum = async (id) => {
        try{
            const responce = await axios.post(`${url}/api/album/remove`,{id});
            if(responce.data.success){
                toast.success(responce.data.message);
                await fetchAlbums();
            }
        }catch(error){
            toast.error("Error occured")
        }
    }

    useEffect(()=>{
        fetchAlbums();
    },[])



  return (
    <div>
      <p>All Albums List</p>
      <br />
      <div>
        <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100'>
            <b>Image</b>
            <b>Name</b>
            <b>Description</b>
            <b>Album Colour</b>
            <b>Action</b>
        </div>
        {data.map((item,index)=>{
            return(
                <div key={index} className='grid grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 '>
                    <img src={item.image} className='w-12 ' alt="" />
                    <p>{item.name}</p>
                    <p>{item.desc}</p>
                    <input type="color" value={item.bgColor} />
                    <p className='cursor-pointer' onClick={()=>removeAlbum(item._id)} >x</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default ListAlbum
