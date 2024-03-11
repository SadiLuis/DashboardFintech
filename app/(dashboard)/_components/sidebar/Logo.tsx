import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image src="personfintech.svg" alt='person' width={250} height={250} className='hover:opacity-50'/>
      </Link>
    </div>
  )
}

export default Logo