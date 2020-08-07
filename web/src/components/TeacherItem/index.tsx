import React from 'react';

import api from '../../services/api';

import whatsppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem:
React.FunctionComponent<TeacherItemProps> = ({ teacher }) => {
  
  function createNewConnetion() {
    api.post('connections', {
      user_id: teacher.id,
    });
  }
  
  return (
  <article className="teacher-item">
    <header>
      <img src={ teacher.avatar } alt=""/>
      <div>
        <strong>{ teacher.name }</strong>
        <span>{ teacher.subject }</span>
      </div>
    </header>

    <p>{ teacher.bio }</p>

    <footer>
      <p>
        Preço/Hora
        <strong>R$ { teacher.cost }</strong>
      </p>
      <a onClick={ createNewConnetion } href={`https://wa.me/${teacher.whatsapp}`} target="_blank" rel="noopener noreferrer" >
        <img src={ whatsppIcon } alt="Whatsapp"/>
        Entrar em contato
      </a>
    </footer>

  </article>

  );
}

export default TeacherItem;