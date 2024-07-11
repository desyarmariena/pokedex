import React from 'react'
import {FishOff} from 'lucide-react'

export default function NotFound({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col items-center my-16 text-muted-foreground">
      <FishOff width={60} height={60} />
      <p className="my-2 text-lg">Pokemon not found.</p>

      {children}
    </div>
  )
}
