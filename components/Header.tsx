"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";


const Header = () => {
    const router = useRouter();
    const goToAdd = (e: any) => {
        router.push("/Add");
    }
    const goToHome = (e: any) => {
        router.push("/");
    }
    return (
      <>
       <div className="w-screen inset-0 z-0 relative">
        <img 
            className="w-full h-96 object-cover" 
            src="https://w0.peakpx.com/wallpaper/813/335/HD-wallpaper-earth-at-night-from-space-europe-city-lights-continent-satellite-view-earth.jpg"
            alt="Earth at night from space"
        />
        <div className="absolute top-0 left-0 right-0 bottom-24 flex justify-center items-center">
            <h1 className="text-8xl font-bold text-white text-center">CreatorVerse</h1>
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
            <div className="absolute top-30 left-1/3 bottom-24 flex justify-center items-center">
                <Button onClick={goToHome} className="p-8 text-xl">View all creators</Button>
            </div>
            <div className="absolute top-30 right-1/3 bottom-24 flex justify-center items-center">
                <Button onClick={goToAdd} className="p-8 text-xl">Add a creator</Button>
            </div>
        </div>
    </div>
      </>
    );
  }


  export default Header;

  