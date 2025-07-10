import { Button } from "@/components/ui/button"
import { Cabecalho } from "./_components/cabecalho"
import  {Sobre} from "./_components/sobre"

export default function Home(){

  return(
    <main className="">
      <Cabecalho/> 
      <Sobre/>
      
    </main>
  )
}