"use client"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import 'boxicons/css/boxicons.min.css';
import { useRouter } from "next/navigation";


const CreatorCard = ({ creator }: { creator: any}) => {
    const router = useRouter();
    const goToPage = () => {
        router.push(`/creator/${creator.id}`);
    }
    
    const goToEdit = () => {
        router.push(`/creator/${creator.id}/edit`);
    }

    return (
        <>
            <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ">
                    <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                    {creator.name}
                    </CardItem>
                    <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                    {creator.description}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                    <img
                        src={creator.image}
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                    </CardItem>
                    <div className="flex justify-between items-center mt-10">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href={creator.youtube}
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    > 
                    <i className='bx bx-lg bxl-youtube' style={{ color: '#fb0000' }}></i>
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href={creator.twitter}
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    > 
                    <i className='bx bx-lg bxl-twitter' style = {{color: '#0000FG'}}></i>
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href={creator.instagram}
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    > 
                    <i className='bx bx-lg bxl-instagram' style={{ color: '#800080' }}></i>
                    </CardItem>
                    <form>
                    <CardItem
                        translateZ={20}
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        <button onClick={goToPage}>More details</button>
                    </CardItem>
                    </form>
                    <form >
                    <CardItem
                        translateZ={20}
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        <button onClick={goToEdit} >Edit</button>
                    </CardItem>
                    </form>
                    
                    </div>
                </CardBody>
            </CardContainer>
        </>
    )
}

export default CreatorCard;