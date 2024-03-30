import PostHeader from "../../../components/PostHeader";
import SimpleCard from "../../../components/SimpleCard";
import "./index.css";

function ControlledVsUncontrolledComponents() {
 function demonstration() {
  console.log("Dê um exemplo prático da demontração");
 }

 return (
  <div>
   <PostHeader
    title="Componentes controlados e não controlados"
    description="Descreva o recurso"
   />

   <div id="page-content">
    <div>
     <h2 className="section-title">Anotações</h2>

     <SimpleCard>
      <span>descreva o recurso de maneira mais extendida</span>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">Sintaxe</h2>
      <code className="mb-1">console.log(&quot;descreva a sintaxe&quot;);</code>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">Lista</h2>
      <ul>
       <li>adicione algo</li>
      </ul>
     </SimpleCard>
    </div>
    <div>
     <h2 className="section-title">Demonstrações práticas</h2>

     <SimpleCard>
      <h2 className="second-title">Titulo da demonstração</h2>
      <p className="mb-1">Descrição da demonstração</p>
      <button onClick={() => demonstration()}>
       Descreva o que o botão faz
      </button>
     </SimpleCard>
    </div>
   </div>
  </div>
 );
}

export default ControlledVsUncontrolledComponents;
