import * as React from "react"
import Image from "next/image"
import image from '@/assets/bgImg.jpg'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CardWithForm(props:{
    title:string;
    description:string;
}) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
        src= 'https://th.bing.com/th/id/OIP.iVSCm8FOQ7svWa8eLncxTAHaEF?rs=1&pid=ImgDetMain'
        alt='Post Image'
        width={700}
        height={700}
        />
      <CardDescription className='flex item-center justify-center font-bold'>{props.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
         <Button>Read More</Button>
      </CardFooter>
    </Card>
  )
}

