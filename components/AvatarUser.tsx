import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
  export function AvatarUser() {
    return (
      <Avatar>
        <AvatarImage src={"/A.jpg"} alt="Image">
          </AvatarImage>
        <AvatarFallback className="bg-teal-100">AA</AvatarFallback>
      </Avatar>
    )
  }
  