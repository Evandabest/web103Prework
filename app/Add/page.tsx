"use server"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { handleSubmit } from "./actions";


const add = () => {
    return (
        <>
            <form className="flex flex-col items-center justify-center mt-10 space-y-10">
                <Input name="name" className="w-96" placeholder="Creator Name" />
                <Input name="image" className="w-96" placeholder="Image Link" />
                <Input name="description" className="w-96" placeholder="Description" />
                <Input name="youtube" className="w-96" placeholder="YouTube Link" />
                <Input name="twitter" className="w-96" placeholder="Twitter Link" />
                <Input name="instagram" className="w-96" placeholder="Instagram Link" />
                <Button type="submit" formAction={handleSubmit}>Add Creator</Button>
            </form>
        </>
    );
}

export default add;