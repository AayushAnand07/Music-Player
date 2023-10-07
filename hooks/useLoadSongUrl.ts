import { useSupabaseClient } from "@/node_modules/@supabase/auth-helpers-react/dist/index";
import { Song } from "@/types";


const useLoadSong=(song:Song)=>{
    const supabaseClient=useSupabaseClient();

   
  if (!song) {
    return '';
  }

    const {data:songData}=supabaseClient
    .storage
    .from('songs')
    .getPublicUrl(song.song_path)
    
    return songData.publicUrl;
};

export default useLoadSong