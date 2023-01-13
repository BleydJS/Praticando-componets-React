// esse é o mais utilizado...primeiro:
// cria um componente
// cria outro componente com o mesmo nome .module.css (convenção)
// rafce
// cria um h2. ou um p. ou um h1.  tira as aspas e coloca bigodes
// cria um import com o nome styles (convenção) ex: import styles from "./MyTitle.module.css"
// dentro dos bigodes coloca ex: {styles.my_title} (o my title é o nome da classe) obs: - é bugado, usa o _ que é melhor
// no MyTitle.module.css vc coloca my_title { e ta tudo certo.}
// nada vai vazar
// n esquecer de chamar ele no app.js <MyTitle/>


import styles from "./MyTitle.module.css"

const MyTitle = () => {
  return (
    <div>

       <h2 className={styles.my_title}>  Esse que é o mais utilizado e mais tecnologico atualmente </h2>

    </div>
  )
}

export default MyTitle