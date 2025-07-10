import { Check, MapPin } from 'lucide-react'
import sobre1Image from '../../../public/about-1.png'
import sobre2Image from '../../../public/about-2.png'
import Image from 'next/image'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

export function Sobre(){
    return(
        <section className="bg-[#FDf6ec] py-16">
            <div className="container mx-auto px-4 ">

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

             


                <div className='relative'>

                <div className='relative w-full h-[400px] rounded-3xl overflow-hidden'>
                    <Image
                    src={sobre1Image}
                    alt='Imagem de cachoro e gato'
                    fill
                    priority
                    quality={100}
                    className='object-cover hover:scale-110 duration-500'
                    />
                </div>

                 <div className='absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white'>
                    <Image
                    src={sobre2Image}
                    alt='Imagem de cachoro e gato'
                    fill
                    priority
                    quality={100}
                    className=''
                    />
                </div>



                </div>

                <div className='space-y-6 mt-10 '>
                    <h2 className='text-4xl font-bold '>SOBRE</h2>
                    <p className='text-justify'>
                        Ótimo que você chegou até o passo do Mi Unlock Tool! O problema do código de verificação por SMS que nunca chega é comum, especialmente com números de fora da China, como Angola, Brasil, etc. Aqui vão as causas prováveis e como resolver:
                    </p>

                    <ul className='space-y-4'>
                        <li className='flex items-center gap-2s'>
                            <Check className='text-red-500'/>
                            Aberto deste 2020
                        </li>

                        <li className='flex items-center gap-2s'>
                            <Check className='text-red-500'/>
                            Equipe com mais de 20 médicos
                        </li>

                        <li className='flex items-center gap-2s'>
                            <Check className='text-red-500'/>
                            Qualidade é a nossa prioridade
                        </li>

                       <div className='flex gap-2'>
                         <a href="#" className='bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-2xl'>
                            <WhatsappLogo className='w-5 h-5 text-white'/>
                            Contacto via WhatsApp
                        </a>

                        <a href="#" className='flex items-center justify-center w-fit gap-2 px-4 py-2'>
                            <MapPin className='w-5 h-5 text-black'/>
                            Endereço da loja
                        </a>
                       </div>


                    </ul>



                </div>
                
               </div>
            </div>
            
        </section>
    )
}