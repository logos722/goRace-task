import React, { useState, useCallback, useEffect } from 'react';
import { User, Color } from '../types';

interface RatingTableProps {
  users: User[]; // Обратите внимание на изменение имени пропса на "users"
}


const RatingTable: React.FC<RatingTableProps> = ({users}) => {

  const [visibleUsers, setVisibleUsers] = useState(50);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      // Достигнут конец страницы, подгрузите следующих 50 пользователей
      setVisibleUsers((prev) => prev + 50);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Add your logic for lazy loading, click handling, and smooth avatar alignment

  function setActive(e: HTMLDivElement) {
    if (e.classList.contains('active')) {
      e.classList.remove('active')
    } else {
      e.classList.add('active')
    }
  }

  return (
    <div className='user__wrapper'>
      {users.slice(0, visibleUsers).map((item: User, index) => (
      <div onClick={(event: any) => setActive(event.target)} className='user' key={item.name}>
        <div className='user__place'>{index + 1}</div>
        <div className='user__avatar'><img src={require('../img/girl.jpg')} alt="girl face" /></div>
        <div className='user__text-wrapper'>
        <div className='user__text'>{item.name}</div>
        <div className='user__text'>Время: {item.time} | {item.speed} км/ч</div>
        <div className='user__text'>Штрафное время 0</div>
        </div>
      </div>
    ))}
    </div>
  );
};

export default RatingTable;