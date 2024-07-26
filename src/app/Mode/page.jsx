// "use client";

// import {useTheme} from "next-themes";
// import { useEffect, useState } from "react";

// export default function ThemeSwitcher() {
//   const [mounted, setMounted] = useState(false)
//   const { theme, setTheme } = useTheme()

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if(!mounted) return null

//   return (
//     <div className=" text-black">
//       The current theme is: {theme}
//       <button onClick={() => setTheme('light')}>Light Mode</button>
//       <button onClick={() => setTheme('dark')}>Dark Mode</button>
//     </div>
//   )
// };

"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        {/* <DropdownMenuItem onClick={() => setTheme("modern")}>
          System
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
