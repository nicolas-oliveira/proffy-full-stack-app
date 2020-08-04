import React from 'react';

import whatsppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
  <article className="teacher-item">
    <header>
      <img src="https://avatars0.githubusercontent.com/u/45501748?s=460&u=db3365b62d412a1a7f7156f78f89a4f1436f50db&v=4" alt=""/>
      <div>
        <strong>Nicolas Oliveira</strong>
        <span>Química</span>
      </div>
    </header>

    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br/> 
      
      Consectetur eaque, iste pariatur amet possimus ipsam ab quisquam, quis molestiae corrupti eligendi aut distinctio! Cupiditate at voluptatibus quia totam doloribus distinctio!
    </p>

    <footer>
      <p>
        Preço/Hora
        <strong>R$ 100,00</strong>
      </p>
      <button type="button">
        <img src={ whatsppIcon } alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>

  </article>

  );
}

export default TeacherItem;