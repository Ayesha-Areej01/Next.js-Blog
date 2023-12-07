import {CardWithForm} from '@/components/card'
import Image from 'next/image'
import Link from 'next/link'
import {Montserrat} from 'next/font/google'

const mont = Montserrat({
  subsets: ['latin'],
  weight: '700'
})
export default function Blogs() {
  return (
    
      <section className='flex justify-center shadow-lg min-h-screen'>
       <div className='w-11/12 m-4 bg-white'>
        <h1 className={`${mont.className} rounded-sm text-center mt-3 font-bold text-3xl`}>
          Our Featured Blogs
        </h1>
        <div className='flex flex-wrap mt-20 items-center justify-center gap-4'>
          <CardWithForm
           title={'First Blog'}
           description={'Artificial Intelligence'} />
          <CardWithForm 
          title={'Second Blog'} 
          description={'Effects of AI'} />
          <CardWithForm 
          title={'Third Blog'} 
          description={'Web Developement'} />
          <CardWithForm 
          title={'Fourth Blog'} 
          description={'Technology'} />
          <CardWithForm 
          title={'Fifth Blog'} 
          description={'AI and changing World'} />
          <CardWithForm 
          title={'Sixth Blog'} 
          description={'AI for Web developement'} />
        </div>
       </div>
       </section>
  )
}

