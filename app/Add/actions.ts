"use server"
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export interface dataStructure {
    name: string,
    image: string,
    description: string,
    youtube: string,
    twitter: string,
    instagram: string
}

export async function handleSubmit(formData: FormData) {
    const supabase = createClient()
    const inputInfo : dataStructure = {
        name: formData.get("name") as string,
        image: formData.get("image") as string,
        description: formData.get("description") as string,
        youtube: formData.get("youtube") as string,
        twitter: formData.get("twitter") as string,
        instagram: formData.get("instagram") as string,
    };
    console.log(inputInfo)

    const {data : any, error}  = await supabase
    .from('creators')
    .insert([
    {
        name: inputInfo.name, 
        image: inputInfo.image, 
        description: inputInfo.description, 
        youtube: inputInfo.youtube,
        twitter: inputInfo.twitter,
        instagram: inputInfo.instagram,
    }
    ]).select();

    if (error) {
        console.error('Error inserting data:', error);
        return;
    }
    
    redirect("/");
}
