"use client"

import { useSessionContext, useSupabaseClient } from "@/node_modules/@supabase/auth-helpers-react/dist/index"
import {Auth}  from "@supabase/auth-ui-react";

import { useRouter } from "@/node_modules/next/navigation";
import Modal from "./Modal"
import { ThemeSupa } from "@/node_modules/@supabase/auth-ui-shared/dist/index";
import useAuthModal from "@/hooks/useAuthModal";
import { useEffect } from "react";


const AuthModal=()=>{
    const supabaseClient=useSupabaseClient();
    const router=useRouter();
    const {session}= useSessionContext();
    const {onClose , isOpen}= useAuthModal();

    useEffect(()=>{
  if(session){
      router.refresh();
      onClose();
  }
    },[session,router,onClose])

    const onChange=(open:boolean)=>{
        if(!open){
            onClose();
        }
    }
    return (
        <Modal title="Welcome Back" 
        description="Login to your account"
        isOpen={isOpen} onChange={onChange}>



             <Auth theme="dark"
             magicLink
             providers={["google"]}
             supabaseClient= {supabaseClient}
             appearance={{theme:ThemeSupa,
            variables:{
                default:{
                    colors:{
                        brand:'#40404',
                        brandAccent:'#22c55e'
                    }
                }
            }
            
            }}
             />
        </Modal>
    )
}

export default AuthModal;