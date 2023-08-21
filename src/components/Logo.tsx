import logoFidelcly from '@/images/logos/fidelclyLogo.svg'
import nameFidelcly from '@/images/logos/fidelclyName.svg'
import Image from 'next/image'

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <div className='inline-flex gap-4'>
      <Image src={logoFidelcly} alt="FidelCly" width={40} height={40} />
      <Image src={nameFidelcly} alt="FidelCly" width={110} height={200} />
    </div>
  )
}
