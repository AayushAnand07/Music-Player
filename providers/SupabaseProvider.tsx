"use client";

import { createClientComponentClient } from "@/node_modules/@supabase/auth-helpers-nextjs/dist/index";
import { SessionContextProvider } from "@/node_modules/@supabase/auth-helpers-react/dist/index";
import {Database} from "@/types_db"
import { useState } from "react";

interface SupabaseProviderProps{
    children:React.ReactNode;
};

const SupabaseProvider:React.FC<SupabaseProviderProps>=({
children
})=>{
 const [supabaseClient]= useState(()=>
 createClientComponentClient<Database>()
 );

 return (
     <SessionContextProvider supabaseClient={supabaseClient}>
         {children}
     </SessionContextProvider>
 )
}

export default SupabaseProvider