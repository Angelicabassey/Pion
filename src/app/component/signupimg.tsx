import Image from 'next/image'

export default function Twitter() {
  return (
   <div className='flex- justify-center- items-center- h-screen-'>
     <Image
      src="/amico.png"
      width={240}
      height={240}
      alt="Picture of the author"
      />
   </div>
  )
}

