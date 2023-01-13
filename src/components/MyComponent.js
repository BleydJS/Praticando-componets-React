// No app.js tem o H1 "aula de css" esse h1 pode ser resolvido pelo css global da pasta index.css..coisas globais que nunca iram mudar, layout da pagina, margens,botões, todos é melhor
// ser pelo css global que é no index.css...pontos especificos como componente precisam de um tratamento especial..
// no componente primeiro deve ser criado um componente so pra estilização "MyComponent.css" ... e IMPORTADO do "MyComponent.js" para ele...ex: "import "./MyComponent.css""
//pronto, nesse momento o teu componente ja esta linkado com a pagina do css dele...mas nao é so isso...o problema que o css vaza de qualquer jeito globalmente..
// o que deve ser feito é um className UNICO pra pegar na pagina do css...es: <p className="my-comp">Este é do componente</p>
// na pagina MyComponent.css deve ter ao invez de my-comp {} ... deve ter .my-comp {} ..o ponto indica que é uma classe..
// IMPORTANTE: existe um bug no visual studio...normalmente se vc nesse ex colocar p. e dar ENTER ... ele vai pedir pra vc dar o nome da classe, e se vc fizer isso, n vai funcionar.
// vc ja tem que fazer isso antes de dar o ENTER.;ex : p.digitaOnomedaclasse e ENTER..sem espaço e o nome da classe pode ser separado por - 

import "./MyComponent.css"
const MyComponent = () => {
  return (
    <div>

    <h1>My Component</h1>
    <p className="my-comp">Este é do componente</p>   
    
    </div>
  )
}

export default MyComponent