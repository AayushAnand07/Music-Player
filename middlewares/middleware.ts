import { createMiddlewareClient } from "@/node_modules/@supabase/auth-helpers-nextjs/dist/index";
import { NextRequest, NextResponse } from "@/node_modules/next/server";

export async function middleware(req:NextRequest){
    const res=NextResponse.next()
    const supabase=createMiddlewareClient({
        req,res
    });
    await supabase.auth.getSession();
    return res;
}