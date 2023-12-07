import Image from 'next/image';
import Link from 'next/link';
import Blogs from '@/components/Blogs';
import Hero from '@/components/Hero';


export default function Home() {
  return (
    <main>
      <Hero/>
      {/*card*/}
      <Blogs/>
      {/*Footer*/}
      <footer>
        <div className="flex justify-center items-center h-16 bg-gray-700 text-white">
         <p>
         Copyright &copy; 2023 Blog Site, Inc. All rights reserved.
         </p>
        </div>
        </footer>
    </main>
  )
}
