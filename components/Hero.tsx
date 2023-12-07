import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import  { Mail } from "lucide-react"
import heroImage from "@/assets/bgImg.jpg"
export default function Hero() {
  return (
    <div className="relative flex items-center justify-center min-h-[600px] ">
      <div className="flex flex-col gap-7 items-center justify-center">
          <h1 className=' text-[40px] text-center font-bold'>
              The Lens Blogs
          </h1>
          <Button className="sm:mx-16 mx-10 ">
              <Mail className="mr-2 h-4 w-4" />
              <Link href={"/Signup"}>Login or SignUp</Link>
          </Button>
          </div>
          <Image
          src={heroImage}
          alt="Blogs"
          className='opacity-60 absolute w-full h-[600px] z-[-1]'/>
           
</div>
 )
 }
          
