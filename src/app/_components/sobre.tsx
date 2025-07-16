import { Check, MapPin } from 'lucide-react'
import sobre1Image from '../../../public/about-1.jpg'
import sobre2Image from '../../../public/about-2.jpg'
import Image from 'next/image'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

export function Sobre(){
    return(
        <section className="bg-[#f8f5f3] py-16">
            <div className="container mx-auto px-4 ">

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

             


                <div 
     data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='relative'>

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

                <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
                
                className='space-y-6 mt-10 '>
                    <h2 className='text-4xl font-bold '>SOBRE</h2>
                    <p className='text-justify'>

                        Na <span className='font-bold text-blue-400'>PLUS FRAMA</span> , cuidamos da sua saúde com responsabilidade, proximidade e dedicação. Com uma equipe de profissionais qualificados e atenciosos, oferecemos atendimento personalizado e uma ampla gama de medicamentos, produtos de higiene, dermocosméticos, suplementos e itens para o bem-estar do seu dia a dia.

                        </p>    
                <p> A nossa missão é promover saúde e qualidade de vida.</p>      
                       
                    

                    <ul className='space-y-4'>
                        <li className='flex items-center gap-2s'>
                            ✅ Aberto 24/7 – Atendimento sem interrupções.
                        </li>

                        <li className='flex items-center gap-2s'>
                            ✅ Entrega ao domicílio – Receba seus medicamentos no conforto de sua casa.
                        </li>

                        <li className='flex items-center gap-2s'>
                            ✅ Atendimento humanizado – Tratamos cada cliente com respeito e atenção.
                        </li>

                       <div className='flex gap-2'>
                         <a href="#" className='bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-2xl'>
                            <WhatsappLogo className='w-5 h-5 text-white'/>
                            Contacto via WhatsApp
                        </a>

                        <a href="#" className='flex items-center justify-center w-fit gap-2 px-4 py-2'>
                            <MapPin className='w-5 h-5 text-black'/>
                            Boa esperança, Chingo - Sumbe.
                        </a>
                       </div>


                    </ul>



                </div>
                
               </div>
            </div>
            
        </section>
    )
}