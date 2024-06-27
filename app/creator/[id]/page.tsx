import { createClient } from "@/utils/supabase/server";
import 'boxicons/css/boxicons.min.css';

const displayPage = async ({params : {id}} : {params: {id: string}}) => {
    const supabase = createClient();
    const {data, error} = await supabase.from("creators").select("*").eq("id", id).single();

    return (
        <>
          <div className="flex flex-row mt-10 w-full">
            <img className="w-96 h-96 ml-44 my-10 mb-20" src={data.image} alt="thumbnail" />
            <div className="flex flex-col ml-10">
                <h1 className="text-white mt-12 text-5xl text-bold">{data.name}</h1>
                <p className="text-white text-lg">{data.description}</p>
                <i className='bx bx-lg bxl-youtube' style={{ color: '#fb0000' }}></i>
                <i className='bx bx-lg bxl-twitter' style = {{color: '#0000FG'}}></i>
                <i className='bx bx-lg bxl-instagram' style={{ color: '#800080' }}></i>
            </div>
            </div>
        </>
    )
}

export default displayPage;