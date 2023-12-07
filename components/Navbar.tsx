import { AvatarUser } from "./AvatarUser";
import Menu from "./Menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
    export default function Navbar() {
      return (
        <header className="grid grid-cols-[auto,auto] md:grid-cols-[auto,auto,auto] justify-between item-center px-3 py-1 border-b">
          <div className="flex justify-center gap-x-3">
         <div>
              <Sheet>
                <SheetTrigger>
                  <HamburgerMenuIcon className="h-10 w-10 text-gray-300 bg-gray-950 py-1 rounded-md md:hidden" />
                </SheetTrigger>
                <SheetContent side="bottom"></SheetContent>
                <SheetContent side={"left"} className='w-46 sm:w-64'>
                  <div className="flex flex-col gap-y-4">

                    <Link href={"/Signup"} className="text-lg font-medium">Home</Link>

                    <Link href={"/Signup"} className="text-lg font-medium">Profile</Link>

                    <Link href={"/Signup"} className="text-lg font-medium">Blogs</Link>

                    <Link href={"/Signup"} className="text-lg font-medium">Create</Link>

                  </div>
                </SheetContent>
              </Sheet>
            </div><AvatarUser />
          </div>
          <div className="hidden md:flex items-center justify-center gap-x-3">
          <Menu />
           </div>    
        </header>
      )
    }