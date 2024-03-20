import Image from 'next/image'

export default function Logo() {
  return (
   <div className='flex- justify-center- items-center- h-screen-'>
     <Image
      src="/logo.png              "
      width={150}
      height={150}
      alt="Picture of the author"
      />
   </div>
  )
}
