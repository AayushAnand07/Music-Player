import { useSessionContext } from "@/node_modules/@supabase/auth-helpers-react/dist/index";
import toast from "@/node_modules/react-hot-toast/dist/index";
import { Song } from "@/types";
import { useEffect, useMemo, useState } from "react"


const useGetSongById=(id?:number)=>{
    const [isLoading,setIsLoading]=useState(false);
    const [song,setSong]=useState<Song|undefined>(undefined)
    const {supabaseClient}=useSessionContext();

    useEffect(()=>{
        if(!id) return;
   
    setIsLoading(true);
    const fetchSong= async ()=>{
        const {data,error}= await supabaseClient
        .from('songs')
        .select('*')
        .eq('id',id)
        .single()

        if(error){
            setIsLoading(false);
            return toast.error(error.message)
        }
        setSong(data as Song)
        setIsLoading(false);
    }
    fetchSong();
},[id,supabaseClient])

return useMemo(()=>({
    isLoading,
    song
}),[isLoading,song])

}

export default useGetSongById;