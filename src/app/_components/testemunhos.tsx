"use client"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock, Import } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react"
import autor1 from '../../../public/tutor1.png'
import autor2 from '../../../public/tutor2.jpg'
import Image from "next/image"


const testemunhas =[
    {
       
        mensagem:"Em 10 de Dezembro de 1956, um grupo de patriotas angolanos deu a conhecer o Manifesto do amplo Movimento Popular de Libertação de Angola (MPLA).",
        autor:"Fausto Cananga",
        cargo:"CEO",
        image: autor1,

    },
    {
       
        mensagem:"Se quiser, posso te orientar passo a passo conforme o tipo de pasta ou arquivo que você quer visualizar ou recuperar (por exemplo: fotos, documentos, pastas do iCloud, etc.). Basta me dizer o que exatamente desapareceu ou foi ocultado.",
        autor:"Josefina Ernesto",
        cargo:"Gestora de Trafego",
        image: autor2,

    },
    {
       
        mensagem:"Apelando para a constituição, em todo o país, de muitas organizações independentes entre si, de modo a poderem resistir melhor e iludir a vigilância das forças coloniais de repressão ocupantes. Esta é a data oficial da sua fundação.",
        autor:"Mateus dos Santos",
        cargo:"Ferreiro",
        image: autor2,

    },


    
   

]

export function Testemunhos(){
    const [emblaRef, emblaApi] = useEmblaCarousel({

        loop:true,
    })

    function scrollPrev(){
        emblaApi?.scrollPrev();
    }

    function scrollNext(){
        emblaApi?.scrollNext();
    }



    return(
        <section className="bg-amber-300 py-16">
            <div className="container mx-auto px-4">

                <h2 className="text-4xl font-bold mb-12 text-center">Depoimentos</h2>

                <div className="relative max-w-4xl mx-auto">
                    <div 
                    data-aos="zoom-out-up"
                     className="overflow-hidden " ref={emblaRef}>
                        <div className="flex">
                            {
                                testemunhas.map((item, index) =>(
                                    <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                                        <article className="bg-[#081120] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                            
                                            <div className=" flex flex-col items-center text-center space-y-4">
                                                <div className="relative w-24 h-24">
                                                    <Image 
                                                    src={item.image}
                                                    alt={item.autor}
                                                    fill
                                                    sizes="96px"
                                                    className="object-cover rounded-full"
                                                    />
                                                </div>

                                                <p className="text-gray-200 px-10 text-justify">{item.mensagem}</p>

                                                <div>
                                                    <p className="font-bold">{item.autor}</p>
                                                <p className="text-gray-200">{item.cargo}</p>
                                                </div>

                                            </div>

                                        </article>

                                    </div>
                                )

                            )
                            }

                        </div>

                    </div>

                    <button className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 
                    -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                    onClick={scrollPrev}>
                    
                    <ChevronLeft/>

                    </button>

                    <button className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 
                    -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                    onClick={scrollNext}>
                    
                    <ChevronRight/>
                    
                    </button>


                </div>



            </div>
        </section>
    )
}