import React from 'react';
import Image from 'next/image';
import logo from '../../../public/logo container.svg';
import avatar from '../../../public/avatar-round.svg';

const Navbar = () => {
  return (
    <div className='h-16 min-w-full bg-[#F2F0E9] flex justify-center '>
      <div className='max-w-7xl w-full flex justify-between lg:mx-8'>
        <Image src={logo} width={48} height={48} alt='logo' />
        <Image src={avatar} width={32} height={32} alt='profile' />
      </div>
    </div>
  )
}

export default Navbar