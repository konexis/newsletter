import {useState} from 'react'
import axios from 'axios';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const sendEmail = () =>{
    const[email, setEmail] = useState('')
    const[state, setState] = useState('IDLE')
    const[errorMessage, setErrorMessage] = useState(null)

    const subscribe = async() =>{
        setState('LOADING');
        setErrorMessage(null);
        try{
            const response = await axios.post("/api/newsletter", {email});
            setState('SUCCESS')
        } catch(e){
            setErrorMessage(e.response.data.error);
            setState('ERROR')
        }
    };

    return (
        <div className={styles.container}>
      <Head>
        <title>Cadastre seu E-mail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Receba as melhores dicas de estudo para concurso público!
        </h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Cadastre seu melhor e-mail
                  <input name="email" id="email"  type="text" value={email} 
            onChange={(e) => setEmail(e.target.value)}/>
            &rarr; <button onClick={subscribe} > Enviar</button></h3>
            
          </div>

        </div>
      </main>
    </div>


    )

}

export default sendEmail;