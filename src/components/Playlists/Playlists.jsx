import {React, useEffect} from 'react'
import { useStateProvider } from '../../utils/StateProvider'
import axios from "axios"
export default function Playlists() {
    const [{token,dispatch}] = useStateProvider();
    useEffect(()=> {
        const getPlayListData = async () => {
            const response = await axios.get('https://api.spotify.com/v1/me/playlists', 
            {
                headers: {
                    Authorization:"Bearer "+token,
                    "Content-Type": "application/json",
                },
            })
        const {items} = response.data
        const playlists = items.map(({name, id})=>{
            return{
                name, id
            };
        } )
        console.log(playlists);
        };
        getPlayListData();
    }, [token,dispatch])
  return (
    <div>
      Playlists
    </div>
  )
}
