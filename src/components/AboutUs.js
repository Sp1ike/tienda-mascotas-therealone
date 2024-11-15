// src/components/AboutUs.js
import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about-us" style={styles.section}>
      <h2>¿Quiénes somos?</h2>
      <p>
      Partimos como un grupo de personas interesadas en ayudar, pero con un toque diferente al sólo hecho de alimentar y reubicar mascotas. Queríamos darle una ESPERANZA concreta de salvación, rehabilitación y protección indefinida. Derribamos barreras burocráticas y sociales logrando formar esta ONG que comenzó apadrinando una agrupación comunal de la comuna de Cerro Navia, ACDA, de la cual éramos parte desde el año 2012, y con la experiencia adquirida pudimos abarcar otras comunas como La Reina, La Pintana y Peñalolén por ahora.
      </p>
      Estamos mentalizad@s y trabajamos a diario, no sólo en salvar vidas de mascotas, sino que en educar, informar, contagiar y concientizar a la población para que en un futuro próximo todos puedan realizar la labor que hoy en día desarrollan un@s poc@s y para ello, dependemos de ti.
      <p>
      Nuestro trabajo fundamentalmente está en terreno; en las calles de la capital y rincones de las comunas que hace años vemos y monitoreamos, sin embargo, las manos se hacen pocas y lamentablemente quedan much@s en el camino sin ayuda.
      </p>
      Hoy tenemos bajo nuestro cuidado alrededor de 100 mascotas, entre perr@s y gat@s, que esperan por una familia que los apadrine-amadrine, cuide y/o adopte.
      <p>
      Cabe destacar que NO tenemos refugio, dependemos exclusivamente de hogar temporales o transitorios que nos abren un espacio en sus casas y corazones para integrar a un@ recién rescatad@ y a medida que se concretan adopciones podemos seguir salvando vidas.
      </p>
      Aquí encontrarás variadas formas de ser parte de este proyecto y darle ESPERANZA a much@s animalit@s en peligro y sin hogar.
      <p>
      Nuestro equipo está comprometido con la satisfacción de nuestros clientes y con la salud de sus mascotas. ¡Gracias por visitarnos y confiar en nosotros!
      </p>
    </section>
  );
};

const styles = {
  section: {
    padding: '40px',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
    margin: '20px 0',
    borderRadius: '8px',
  },
};

export default AboutUs;
