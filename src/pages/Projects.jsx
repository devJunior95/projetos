import { useState } from 'react';

import styles from "./Projects.module.css";

const Projects = () => {

    const [projects, setProjects] = useState([
        {name: "Movies Lib",
        description: "Projeto inspirado e guiado pelo tutorial do canal 'Hora de Codar', o 'Movies Lib' é uma plataforma que utiliza a API do TMDB para fornecer uma experiência de busca e descoberta de filmes. Com recursos implementados através do React Router, o projeto ofereceu uma oportunidade prática para aprofundar-se na integração de APIs, manipulação de rotas e apresentação de informações de forma estruturada. Embora tenha sido uma construção guiada, o processo enriqueceu meu entendimento em componentes React e práticas de desenvolvimento web, contribuindo para meu crescimento profissional na área",
    },
    ])

    return ( 
        <div>
            <h1 className={styles.title}>Projetos</h1>
            <div className={styles.cards_container}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.card_container}>
                    <div className={styles.card}>
                        
                    </div>
                    <h2>{project.name}</h2>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Projects;