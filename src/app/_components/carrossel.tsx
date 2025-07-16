"use client"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react"


const services =[
    {
        title:"Venda de Medicamentos",
        descricao:"Oferecemos uma ampla linha de medicamentos com orientação profissional para garantir o uso seguro e eficaz. Aqui, você encontra desde os produtos mais comuns até os de uso controlado, sempre com atendimento responsável.",
        duracao:"5 min",
        price:"$50",
        icon: <Scissors/>,
        linkText:" Olá vi no Site Sobre o Banho e Gostaria de mais Informações",

    },
    {
        title:"Entrega em Domicílio",
        descricao:"Comodidade para quem não pode sair de casa. Solicite seus produtos por telefone, WhatsApp ou pelo site e receba com segurança e rapidez no conforto do seu lar.",
        duracao:"1h",
        price:"$500",
        icon: <Syringe/>,
        linkText:" Olá vi no Site Sobre o Banho e Gostaria de mais Informações",

    },
    {
        title:"Higiene, Beleza e Bem-estar",
        descricao:"Além de medicamentos, oferecemos produtos de cuidado pessoal, dermocosméticos, suplementos e itens naturais para quem busca qualidade de vida e autoestima.",
        duracao:"2h",
        price:"$505",
        icon: <CarTaxiFront/>,
        linkText:" Olá vi no Site Sobre o Banho e Gostaria de mais Informações",

    },
    {
        title:"Aplicação de Injetáveis",
        descricao:"Ambiente preparado e profissional qualificado para a aplicação segura de medicamentos injetáveis, conforme prescrição médica.",
        duracao:"1h",
        price:"$485",
        icon: <Hotel/>,
        linkText:" Olá vi no Site Sobre o Banho e Gostaria de mais Informações",

    },
   

]

export function Carrossel(){
    const [emblaRef, emblaApi] = useEmblaCarousel({

        loop:false,
        align: "start",
        slidesToScroll: 1,
        breakpoints :{
            "(main-wdth: 768px)" : {slidesToScroll:3 }
        }

    })

    function scrollPrev(){
        emblaApi?.scrollPrev();
    }

    function scrollNext(){
        emblaApi?.scrollNext();
    }



    return(
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">

                <h2 className="text-4xl font-bold mb-12">SERVIÇOS</h2>

                <div className="relative">
                    <div data-aos="fade-up"
     data-aos-anchor-placement="center-center" 
     className="overflow-hidden " ref={emblaRef}>
                        <div className="flex">
                            {
                                services.map((item, index) =>(
                                    <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                        <article className="bg-[#082905] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                            <div className="flex-1 flex items-start justify-between">
                                                
                                                <div className="_flex gap-3">
                                                   <span className="text-3xl">{item.icon}</span> 
                                                   <div>
                                                    <h3 className="font-bold text-2xl mb-1 my-4">{item.title}</h3>
                                                    <p className="text-gray-400 text-sm select-none">
                                                        {item.descricao}
                                                    </p>
                                                   </div>
                                                </div>

                                            </div>

                                            <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                                                <div className="  flex items-center gap-2 text-sm ">
                                                    <Clock className="w-4 h-4"/>
                                                    <span>{item.duracao}</span>

                                                    <a 
                                                    target="_blank"
                                                    href={'https://wa.me/949310165?text=Gostaria de obter mais informações sobre ${item.title}'} className="flex items-center justify-center gap-2 hover:bg-red-500 duration-300 px-4 py-1 rounded-md">
                                                        <WhatsappLogo className="w-5 h-5"/> 
                                                        Entrar em contacto
                                                    </a>

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