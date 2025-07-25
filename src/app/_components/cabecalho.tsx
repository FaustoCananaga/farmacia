
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import dogImage from '../../../public/hero-dog.png'
import cruz from '../../../public/cruz.png'
import Image from 'next/image'

export function Cabecalho(){

    return(
      <section className="bg-[#249c22] text-white relative overflow-x-hidden ">

        <div>
          <Image
          src={dogImage}
          alt='Imagem do cachoro'
          fill
          sizes='100w'
          priority
          className='object-cover opacity-60 lg:hidden'
          
          />
        </div>

        <div className='absolute inset-0 bg-black opacity-40 md:hidden'></div>
          
          <div className="container mx-auto pt-16 pb-16 md:pb-0  px-4 relative">

            <article className='grid grid-cols-1 lg:grid-cols-2 gap-8 relative '>
 

              <div className='space-y-6'>
                <h1 data-aos="fade-down" className="text-3xl md:text-4xl lg:text-5xl font-bold">Cuidar da sua saúde é a nossa prioridade</h1>
                <p data-aos="fade-right" className="lg:text-lg">Tudo o que você precisa, da farmácia até sua casa, com segurança, confiança e atendimento humanizado.</p>
             
             
              
                  <a 
                  data-aos="fade-up"
                  data-aos-duration="3000"

                  href={'https://wa.me/949310165?text=Gostaria de obter mais informações'}
                  target='_blank'
                  className="bg-amber-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2" >
                    <WhatsappLogo className='w-5 h-5'/>
                    Contacto via whatsApp</a>
            

              <div className="mt-8">
                  <p className="text-sm mb-4"> <b className="bg-black text-white px-2 py-1 rounded-md mr-1">5% </b> de desconta na sua primeira compra</p>
                
               <div className='flex mt-8'>
                    <div className='ml-8 w-10 h-10 hidden lg:block'>
                        <Image
                          src={cruz}
                          alt='Foto de uma cruz'
                          className='object-fill'
                          quality={100}
                          priority
                          /> 
                      </div>

                </div>
                
                </div>

              
              
              </div>


              <div className='hidden md:block h-full relative'>

                <Image
                src={dogImage}
                alt='Foto do Dog'
                className='object-contain'
                fill
                sizes="(max-width: 768px) 0vw, 50vw"
                quality={100}
                priority
                />

                
        
        
              </div>

            </article>


          </div>
      </section>
    )

}