import style from '../About/About.module.css'



const About = () => {
    return (
      <div className={style.aboutContainer}>
        <div className={style.aboutContent}>
          <img
            src="https://img.freepik.com/vector-premium/diseno-ilustracion-vector-personaje-avatar-hombre-joven_24877-18514.jpg?w=1060" 
            alt="Mi Foto"
            className={style.aboutImage}
          />
          <div className={style.aboutText}>
            <h2 className={style.aboutTextH2}>Sobre mi</h2>
            <p className={style.aboutTextP}>
              ¡Hola! Soy Javier Arangue, y esta es mi primer aplicacion web creada. Utilicé tecnologías emocionantes como React, Redux, Node.js, Express y Sequelize para construir esta aplicación. Estoy emocionado de aprender y crecer en el fascinante mundo del desarrollo web. ¡Bienvenido a mi espacio digital!
            </p>
          </div>
        </div>
      </div>
    );
  };
  
export default About;