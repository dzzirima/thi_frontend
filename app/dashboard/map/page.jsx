import dynamic from 'next/dynamic'
import { useMemo } from 'react'

export default function MyMap() {
    const Map = useMemo(() => dynamic(
      () => import('@/app/ui/map/map'),
      { 
        loading: () => <p>A map is loading</p>,
        ssr: false
      }
    ), [])
  
    return (
      <Map />
    )
  }