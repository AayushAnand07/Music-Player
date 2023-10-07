import { useSupabaseClient } from "@/node_modules/@supabase/auth-helpers-react/dist/index"
import { Song } from "@/types";

const useLoadImage=(song:Song)=>{
    const supabaseClient= useSupabaseClient();

    if(!song){
        return null;
    }
    const {data:imageData}=supabaseClient
    .storage
    .from('images')
    .getPublicUrl(song.img_path)

    return imageData.publicUrl;
};
export default useLoadImage;