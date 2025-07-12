import { Button } from "@/components/ui/button"
import { Cabecalho } from "./_components/cabecalho"
import  {Sobre} from "./_components/sobre"
import { Carrossel } from "./_components/carrossel"
import { Testemunhos } from "./_components/testemunhos"
import { Rodape } from "./_components/rodape"

export default function Home(){

  return(
    <main className="">
      <Cabecalho/> 
      <Sobre/>
      <Carrossel/>
      <Testemunhos/>
      <Rodape/>
      
    </main>
  )
}