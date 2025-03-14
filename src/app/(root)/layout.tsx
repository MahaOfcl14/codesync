import React from 'react'
import StreamClientProvider from "@/components/providers/StreamClientProvider"

function layout({children}:{children: React.ReactNode}) {
  return (
   <StreamClientProvider>layout</StreamClientProvider>
  )
}

export default layout