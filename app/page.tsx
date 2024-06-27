import { createClient } from "@/utils/supabase/server";
import CreatorCard from "@/components/CreatorCard";
import { dataStructure } from "./Add/actions";

export default async function Home() {
  const supabase = createClient()
  const { data, error } = await supabase.from('creators').select("*");
    if (error) {
      console.error('Error fetching creators:', error);
      return;
    }
    console.log(data);
  //const creator : dataStructure = {
  //  name: "mrBeast",
  //  image: "image",
  //  description: "descripdejowefkhjebtion",
  //  youtube: "youtube.com",
  //  twitter: "twitter.com",
  //  instagram: "instagram.com"
  //}
  return (
    <>
    {
      <div className="justify-center items-center flex space-x-24 flex-wrap mx-10">
        {
          data?.map((creator: any) => (
            <CreatorCard creator={creator} />
            ))
        }
      </div>
    
    //<div className="w-full">
    //  <CreatorCard creator = {creator}/>
    //</div>
    }
    </>
    
  );
}
