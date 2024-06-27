"use server"
import { createClient } from "@/utils/supabase/server";
import 'boxicons/css/boxicons.min.css';
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

const displayPage = async ({params : {id}} : {params: {id: string}}) => {
    const supabase = createClient();
    const {data, error} = await supabase.from("creators").select("*").eq("id", id).single();

    const goToEdit = async (formData: FormData) => {
        "use server"
        redirect(`/creator/${id}/edit`);
    }

    const deleteCard = async (formData: FormData) => {
        "use server"
        const supabase = createClient();
        const {data : any, error} = await supabase.from("creators").delete().eq("id", id);
        if (error) {
            console.error('Error deleting data:', error);
            return;
        }
        redirect("/");
    }

    return (
        <>
        <div className="flex flex-col w-full">
          <div className="flex flex-row mt-10 w-full">
            <img className="w-96 h-96 ml-44 my-10 mb-20 border-2 border-white shadow-lg shadow-white" src={data.image} alt="thumbnail" />
            <div className="flex flex-col item ml-10 w-1/2 mb-10">
                <h1 className="text-white mt-12 ml-10 text-5xl text-bold">{data.name}</h1>
                <p className="text-white text-lg ml-10 mt-4">{data.description}</p>
                <div className="flex flex-row mt-10 justify-evenly rounded-md">
                    {data.youtube ? (
                    <LinkPreview url={data.youtube} className="px-4 py-2 bg-white rounded-xl text-xs font-normal dark:text-white">
                        <i className='bx bx-lg bxl-youtube' style={{ color: '#fb0000' }}></i>
                    </LinkPreview>
                    ) : null}
                    {data.twitter ? (
                    <LinkPreview url={data.twitter} className="px-4 py-2 bg-white rounded-xl text-xs font-normal dark:text-white" >
                        <i className='bx bx-lg bxl-twitter' style = {{color: '#0000FF'}}></i>
                    </LinkPreview>
                    ) : null}
                    {data.instagram ? (
                    <LinkPreview url={data.instagram} className="px-4 py-2 bg-white rounded-xl text-xs font-normal dark:text-white" >
                        <i className='bx bx-lg bxl-instagram' style={{ color: '#800080' }}></i>
                    </LinkPreview>
                    ) : null}
                </div>
            </div>
            </div>
            <div className="flex flex-row mt-30 mb-20 items-center justify-center">
                <form>
                    <Button type="submit" formAction={goToEdit} className="p-10 text-4xl ml-20 bg-white text-black">Edit</Button>
                    <Button type="submit" formAction={deleteCard} className="p-10 text-4xl ml-20 bg-red-400 text-black">Delete</Button>
                </form>
            </div>
        </div>
        </>
    )
}

export default displayPage;