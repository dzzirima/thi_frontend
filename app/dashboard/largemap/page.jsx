import dynamic from 'next/dynamic'
import { useMemo } from 'react'

export default function LargeMap() {
    const Map = useMemo(() => dynamic(
      () => import('@/app/ui/map/large_map'),
      { 
        loading: () => <p>A map is loading</p>,
        ssr: false
      }
    ), [])
  
    return (
      <Map />
    )
  }