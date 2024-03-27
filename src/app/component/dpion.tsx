import Image from 'next/image'

export default function Logo() {
  return (
   <div>
     <Image
      src="/logo.png"
      width={100}
      height={100}
      alt="Picture of the author"
      />
   </div>
  )
}
