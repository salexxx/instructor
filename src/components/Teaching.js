import React from 'react';
import './Teaching.css';
import DemoPhoto from '../images/pedagog.jpg';

function Teaching() {
  return (
    <div className="teach">
      <p className="teach__title">ЧТО ПОЛУЧАЕТ УЧЕНИК</p>
      <p>Прежде всего, лыжный инструктор — это учитель, чья цель — помочь своим ученикам прогрессировать.
      Не зависимо от уровня катания ученик получает квинтессенцию, базу технически правильных приёмов для дальнейшего прогресса.
      Переучиваться и исправлять "закатанные" ошибки всегда сложнее!</p>
    <p>Вы ставите цель и получаете набор навыков и умений для её достижения, не важно, хотите ли вы впервые попробовать прокатиться на горных лыжах, получить новые эмоции, повысить свою автономность, научиться резаному повороту или попробовать внетрассовое катание.</p>    
    <p>Безопасность - очень важный момент! Правильный выбор склона, проверка снаряжения, выбор доступной для ученика методики преподавания и даже физическая защита от летящего вниз неуправляемого "снаряда".</p>
    <p>Простота понимания. Наглядная демонстрация технического приёма и его составляющие элементы простыми словами. Даже спортивные повороты можно разложить на три движения.</p>
    
         <img className="teach__photo" src={DemoPhoto} alt="Demo image"></img>
         <p>А ещё отличное настроение, заряд бодрости и подтянутый живот!</p>   
    </div>
  );
}

export default Teaching;