'use client';
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";


export default function ThemeToggle() {
  return (
   <DropdownMenu>
    <DropdownMenuTrigger render={
        <Button variant="outline" size="icon" 
        className="w-10 h-10 rounded-full">
            <SunIcon className="h-[1.4rem] 
            w-[1.4rem] rotate-0 scale-100 
            transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.4rem] w-[1.4rem] 
            rotate-90 scale-0 
            transition-all dark:-rotate-0 dark:scale-100" />
        </Button>
    }>
        
        <span className="sr-only">Toggle theme</span>
   </DropdownMenuTrigger>
   <DropdownMenuContent align="end">
        <DropdownMenuItem>Light</DropdownMenuItem>
        <DropdownMenuItem>Dark</DropdownMenuItem>
        <DropdownMenuItem>System</DropdownMenuItem>
   </DropdownMenuContent>
   </DropdownMenu>
  );
}   