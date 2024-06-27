"use server"
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { dataStructure } from "@/app/Add/actions";

export async function handleSubmit(formData: FormData, id: string) {
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
    .update([
    {
        name: inputInfo.name, 
        image: inputInfo.image, 
        description: inputInfo.description, 
        youtube: inputInfo.youtube,
        twitter: inputInfo.twitter,
        instagram: inputInfo.instagram,
    }
    ]).eq('id', id);

    if (error) {
        console.error('Error inserting data:', error);
        return;
    }
    
    redirect("/");
}
