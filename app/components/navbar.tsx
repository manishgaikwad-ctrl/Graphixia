import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'


const navbar = () => {
  
  return (
    <div style={{
      height:"5%",backgroundColor:"blue"
    }}>
      <Link href="/">Home</Link>
      <Link href="/images">Images</Link>
      <Link href="/about">About Us</Link>
      <Link href="/contact">Contact</Link>
    </div>
  )
}

export default navbar