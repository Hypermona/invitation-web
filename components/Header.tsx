import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"
import { HandIcon } from "@radix-ui/react-icons";


type Props = {};

const Header = (props: Props) => {
  return (
    // <header>
    //   <nav className="flex p-5">
    //     <h1 className="text-3xl font-extrabold flex-1">Invi Web</h1>
      // {/* <div className="px-5 pt-2">Templates</div>
      //   <div className="px-5 pt-2">Plugins</div>
      //   <div className="px-5 pt-2">How to Use</div> */}
   
        <div className='bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0'>
       <div className='container flex items-center justify-between'>
     
          <Link href ='/'><HandIcon /></Link>
        <Link className = { buttonVariants()} href ='/sign-in'>
          Sign In
        </Link> 
        </div>
        </div>
      
        


      //  {/* </nav>
      // </header> */}
  );
};

export default Header;
