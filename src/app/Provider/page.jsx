// "use client";

// import {NextUIProvider} from '@nextui-org/react'
// import {ThemeProvider as NextThemesProvider} from "next-themes";

// export function Providers({children}) {
//   return (
//     <NextUIProvider>
//       <NextThemesProvider attribute="class" defaultTheme="dark">
//         {children}
//       </NextThemesProvider>
//     </NextUIProvider>
//   )
// }

'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
// import { useState } from 'react'

export default function Providers({ children }) {
  // let bgwhitee=white;
  // let [color, setColor] = useState('')

  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute='class'
        defaultTheme='light'
        themes={['light', 'dark']}
        // className={`text-${color} text-pink-400 text-6xl`}
      >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}