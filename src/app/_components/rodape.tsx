import goden from '../../../public/golden.png'
import royal from '../../../public/royal.png'
import primier from '../../../public/primier.png'
import whiskas from '../../../public/whiskas.png'
import natural from '../../../public/natural.png'
import Image from 'next/image'
import { TiktokLogo, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { FacebookLogoIcon } from '@phosphor-icons/react'
import { CopyrightIcon, Facebook, Instagram } from 'lucide-react'


const marcas=[
    {nome:"Golden", logo:goden},
    {nome:"Royal Canin", logo:royal},
    {nome:"Primier", logo:primier},
    {nome:"Whiskas", logo:whiskas},
    {nome:"Formula Natural", logo:natural},
    {nome:"Royal Canin", logo:royal},
]



export function Rodape(){
    return (
        <section className='bg-[#249c22] text-white py-16'>
            <div className='container mx-auto px-4'>

                <div className='border-b border-white/20 pb-8'>
                    <h4 className='text-3xl font-semibold mb-8 text-center '>Parceiros</h4>

                    <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
                        {marcas.map((item, index)=>(
                            <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center'>
                                <Image
                                src={item.logo}
                                alt={item.nome}
                                width={100}
                                height={50}
                                quality={100}
                                style={
                                    {width:"auto", height:"auto"}
                                }
                                className='object-contain'
                                />

                            </div>
                        ))}

                    </div>


                </div>

                <footer>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8'>
                    <div className=''>
                        <h3 className='text-sm font-semibold mb-2'>FARMACORP Dev</h3>
                        <p className='mb-2'>Cuidamos de ti como mais ninguem faz, hoje e sempre.</p>
                        <a href="#" className='bg-green-500 px-2 rounded-md  flex items-center justify-center w-fit gap-1'> <WhatsappLogo className='w-4 h-4'/> Fale connosco</a>
                    </div>

                     <div className=''>
                        <h3 className='text-sm font-semibold mb-2'>Conactos</h3>
                            <p>Rua domingos do Ó, 123</p>
                            <p>Sumbe, Cuanza Sul</p>
                            <p>Tel: (+244) 949310165 </p>
                            <p>Email: farmacorp@gmail.com</p>
                        </div>

                     <div className=''>
                        <h3 className='text-sm font-semibold mb-2'>Redes sociais</h3>
                        <div className='flex gap-1 items-center'>
                        <a href="#"><Facebook className=''/></a>
                        <a href="#"><Instagram className=''/></a>
                        <a href="#"><TiktokLogo className='w-6 h-6'/></a>
                        </div>
                    </div>

                    
                    

                    </div>
                    

                    <p className=' flex text-center items-center justify-center'> <CopyrightIcon className='w-3 h-3'/>2025 Fausto Cananga - Todos os direitos reservados</p>
                    


                </footer>



            </div>
        </section>
    )
}