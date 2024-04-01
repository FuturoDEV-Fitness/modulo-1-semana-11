import PostHeader from "../../../components/PostHeader";
import SimpleCard from "../../../components/SimpleCard";

function Hooks() {
 function generatePassword(length) {
  const charset =
   "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let pass = "";

  for (let i = 0; i < length; i++) {
   pass += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  console.log(pass);
 }

 return (
  <div>
   <PostHeader title="Hooks" description="Descreva o recurso de forma breve" />

   <div id="page-content">
    <div>
     <h2 className="section-title">Built-in React Hooks</h2>

     <SimpleCard>
      <span>Conceito</span>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">Hooks de estado</h2>

      <h2 className="caption">O que é estado</h2>
      <span className="mb-2">...</span>

      <h2 className="caption">Pra que servem os Hooks de estado</h2>
      <span className="mb-2">...</span>

      <span>
       <b>useState</b> ...descreva...
      </span>
      <code className="mb-2">const [index, setIndex] = useState(0)</code>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">Hooks de efeito</h2>

      <span className="mb-2">...</span>

      <code className="mb-2">useEffect(callback, dependências);</code>

      <h2 className="caption">Parâmetros</h2>
      <ul>
       <li>
        <b>callback</b>: ...
       </li>
       <li>
        <b>dependências</b>: ...
       </li>
      </ul>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">Hooks de referência</h2>

      <h2 className="caption">Pra que servem os Hooks de referência</h2>
      <span className="mb-2">...</span>

      <span className="mb-2">
       <b>useRef</b> ... descreva ...
      </span>

      <p>Para criar a referência:</p>
      <code className="mb-2">const inputRef = useRef(null);</code>

      <p>Para usar a referência:</p>
      <code className="mb-2">
       &lt;input type=&quot;text&quot; ref=&#123;inputRef&#125; /&gt;
      </code>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">Outros Hooks</h2>

      <ul>
       <li>
        <b>Hooks de contexto</b>: Para lidar com informações de outros
        componentes.
       </li>
       <li>
        <b>Hooks de desempenho</b>: Para evitar que a aplicação realize
        trabalhos desnecessários.
       </li>
      </ul>
     </SimpleCard>
    </div>

    <div>
     <h2 className="section-title">Hooks customizados</h2>

     <SimpleCard>
      <h2 className="second-title">Conceito</h2>
      <span className="mb-1">...</span>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">Características</h2>

      <ul>
       <li>...</li>
      </ul>
     </SimpleCard>
    </div>

    <div>
     <h2 className="section-title">Demonstrações práticas</h2>

     <SimpleCard>
      <h2 className="second-title">Criando um gerador de valores aleatórios</h2>
      <p className="mb-2">
       O botão abaixo vai gerar uma senha aleatória sempre que você clicar nele.
       Perceba que o componente influenciado pelo valor do estado é atualizado
       sempre que o valor muda.
      </p>

      <button className="mb-1" onClick={() => generatePassword(8)}>
       Gerar senha
      </button>

      <p className="caption">Senha gerada: </p>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">useEffect</h2>
      <p className="mb-1">
       Graças ao useEffect, assim que você entrou na página o contador abaixo
       foi iniciado e indica que você permaneceu nessa página por <b>...</b>{" "}
       segundos
      </p>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">Hook customizados</h2>
      <p className="mb-1">
       Lista de usuários carregada da API JSON Placeholder assim que você entrou
       nesta página usando um hook customizado criado para abstrair a lógica de
       busca de dados.
      </p>

      {/* {isLoading && <p>Carregando usuários...</p>}

      {!isLoading && (
       <ul>
        {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
       </ul>
      )} */}
     </SimpleCard>
    </div>
   </div>
  </div>
 );
}

export default Hooks;
