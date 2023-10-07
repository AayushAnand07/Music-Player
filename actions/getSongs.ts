import { createServerComponentClient } from "@/node_modules/@supabase/auth-helpers-nextjs/dist/index";
import { cookies, headers } from "@/node_modules/next/headers";
import { Song } from "@/types";

const getSongs = async (): Promise<Song[]> =>{
 const supabase = createServerComponentClient({
    
     cookies:cookies
 });
 const{data, error}= await supabase.from('songs').select('*')
 .order('created_at',{ascending:false});

 if(error){
     console.log(error);
 }
 return (data as any)|| []
};

export default getSongs;