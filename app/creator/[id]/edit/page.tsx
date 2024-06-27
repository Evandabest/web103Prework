"use server"
import { createClient } from "@/utils/supabase/server"
import { dataStructure } from "@/app/Add/actions"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation";


const details = async ({params : {id}} : {params: {id: string}}) => {
    const supabase = createClient()

    const {data, error} = await supabase.from("creators").select("*").eq("id", id).single()

    const handleSubmit = async (formData: FormData) => {
        "use server"
        const supabase = createClient()
        const inputInfo : dataStructure = {
            name: formData.get("name") as string,
            image: formData.get("image") as string,
            description: formData.get("description") as string,
            youtube: formData.get("youtube") as string,
            twitter: formData.get("twitter") as string,
            instagram: formData.get("instagram") as string,
        };

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
            time: new Date().toISOString()
        }
        ]).eq('id', id);

        if (error) {
            console.error('Error inserting data:', error);
            return;
        }
        
        redirect("/");
    }
    

    return (
        <>
            <form className="flex flex-col items-center justify-center mt-10 space-y-10">
                <Input name="name" className="w-96" defaultValue={data.name} placeholder="Creator Name" />
                <Input name="image" className="w-96" defaultValue={data.image} placeholder="Image Link" />
                <Input name="description" className="w-96" defaultValue={data.description} placeholder="Description" />
                <Input name="youtube" className="w-96" defaultValue={data.youtube} placeholder="YouTube Link" />
                <Input name="twitter" className="w-96" defaultValue={data.twitter} placeholder="Twitter Link" />
                <Input name="instagram" className="w-96" defaultValue={data.instagram} placeholder="Instagram Link" />
                <Button type="submit" formAction={handleSubmit}>Update Creator</Button>
            </form>
        </>
    )

}

export default details;