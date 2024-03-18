import Image from 'next/image'

export default function Testimg() {
  return (
   <div className=''>
     <Image
      src="/Ellipse 60.png"
      width={90}
      height={90}
      alt="Picture of the author"
      />
   </div>
  )
}