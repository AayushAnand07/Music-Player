import { createServerComponentClient } from "@/node_modules/@supabase/auth-helpers-nextjs/dist/index";
import { cookies, headers } from "@/node_modules/next/headers";
import { Song } from "@/types";
import getSongs from "./getSongs";

const getSongsByTitle = async (title:string): Promise<Song[]> =>{
 const supabase = createServerComponentClient({
    
     cookies:cookies
 });

 if(!title){
     const allSongs= await getSongs();
      return allSongs
 }
 const{data, error}= await supabase.from('songs').select('*').ilike('title',`%${title}%`)
 .order('created_at',{ascending:false});

 if(error){
     console.log(error);
 }
 return (data as any)|| []
};

export default getSongsByTitle;