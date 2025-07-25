"use client"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock, Import } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react"
import autor1 from '../../../public/tutor1.jpg'
import autor2 from '../../../public/tutor2.jpg'
import Image from "next/image"


const testemunhas =[
    {
       
        mensagem:"💬 “Sempre fui muito bem atendida. A equipe é atenciosa e os produtos chegam rápido. Recomendo de olhos fechados!”",
        autor:"Carla Domingos",
        cargo:"Enfermeira no Hospital São Lucas",
        image: autor1,

    },
    {
       
        mensagem:"💬 “A Plus Farma se tornou minha farmácia de confiança. Além dos preços justos, têm uma linha completa de suplementos que uso no dia a dia.”",
        autor:" Sandra Lopes",
        cargo:"Professora de Educação Infantil",
        image: autor2,

    },
    {
       
        mensagem:"💬 “Como mãe, sei o quanto é importante contar com uma farmácia que realmente se importa. E a Plus Marma nunca me deixou na mão.”",
        autor:"Dona Emília Tavares",
        cargo:"Aposentada",
        image: autor2,

    },
     {
       
        mensagem:"💬 “Precisei de ajuda com uma receita controlada e fui tratado com muito respeito e profissionalismo. Excelente serviço.”",
        autor:" Dr. André Vicente",
        cargo:"Advogado",
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
        <section className="bg-[#ffffff] py-16">
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