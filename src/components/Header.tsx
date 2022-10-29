import React from 'react'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='fixed m-auto bottom-0 left-0 z-50 flex items-center justify-center hidden'>
      <ul className='px-4 flex'>
        <a href="" className='relative flex items-center justify-center p-2 '>
          <img src="/img/etsy.png" alt=""  className='relative w-[40px] h-[40px]'/>
        </a>
        <a href="" className='relative flex items-center justify-center p-2 '>
          <img src="/img/instagram.png" alt="" className='relative w-[40px] h-[40px]'/>
        </a>
      </ul>

    </header>
  )
}