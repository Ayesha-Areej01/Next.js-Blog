"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import logo from '@/assets/logo.jpeg'
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Popular Blog",
    href: "#",
    description:
      "All the popular blogs",
  },
  {
    title: "Top Rated Blogs",
    href: "#",
    description:
      "Top Rated by Reknowned Bloggers",
  }
]

export default function Menu() {
  return (
    <NavigationMenu className="gap-x-4">
      <Link href={'/'}>
        <Image src={logo} alt='logo' width={50} height={50} 
        className="rounded-full"/></Link>
      <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        
      <NavigationMenuList>
        <NavigationMenuItem className={navigationMenuTriggerStyle()}>
            <Link href={'/profile'}>Profile</Link>
        </NavigationMenuItem>
         

        <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Create
            </NavigationMenuLink>
          </Link>
        
<NavigationMenuItem>
  <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>Blogs</NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul className="grid w-[400px] gap-x-4 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            {components.map((component) => (
          <ListItem
            key={component.title}
            title={component.title}
            href={component.href}
            >
            {component.description}
            </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
