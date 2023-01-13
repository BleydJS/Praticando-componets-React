import './App.css';
import MyComponent from './components/MyComponent';
import {useState} from "react"
import MyTitle from './components/MyTitle';
function App() {

 const n = 18                      // inline dinamico
 const [name]=useState ("Bleyd")  // inline dinamico
 const title = true              // classe dinamica

  return (
    <div className="App">
        {/*Esse é global*/}    {/*explicação no componente*/}
      <h1>Aula de css</h1>


      {/*Esse é do componente*/}
        <MyComponent />


      {/*inline css*/}
      <p style= {{color:"pink",padding:"25px",borderTop:"2px solid red"}}> {/*o correto é border-top, mas aqui o js vai entender como -(menos), logo aqui é com CamelCase*/}
        Essa é inline e deve ser EVITADA e utilizado so em situações bem especificas.</p>  


        {/*inline dinamico*/}
        <p style={n > 10 ? ({color:"red"}):({color:"pink"})}>Esse é o dinamico, da pra brincar mais com ele</p> {/*agora da pra te entender o pq no inline de cima tem {{}}*/}

        <p style={name === "Bleyd" ? ({backgroundColor:"black",color:"green"}) : (null)}>Teste nome</p>


        {/*classe dinamica*/}
        <p className={title ? "red-title" : "yellow-title"}>Essa é classe dinâmica e mais usada nos projetos atuais.</p> {/*O title ? é a mesma coisa de title === true , é escrito desse jeito porque se não ia ser redundancia...essa classe dinâmica serve para dependendo do valor de uma variavel uma classe especifica é ativa, nao poluindo o código..obs: estão em index.css..ela vai ser usada no primeiro projeto*/}

        {/*css modulos*/}
        <MyTitle/>   {/*esse que é o melhor e mais utilizado...aqui chama o componente */}

    </div>
  );
}

export default App;
