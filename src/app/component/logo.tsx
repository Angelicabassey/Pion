import Image from 'next/image'

export default function Logo() {
  return (
   <div className=''>
     <Image
      src="/logo.png"
      width={150}
      height={150}
      alt="Picture of the author"
      />
   </div>
  )
}
