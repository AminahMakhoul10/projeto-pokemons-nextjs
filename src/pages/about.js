import Image from "next/image"

import styles from '../styles/About.module.css'
export default function About(){
    return(
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Projetinho para a disciplina de Frameworks para front-end</p>
            <Image src="/images/charizard.png" width="300" height="300" alt="Charizard"/>
        </div>
    )
}