import React from 'react';
import './Contact';

const users = [
    {
      name: 'Robert Reyes',
      avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
      online: false
    },
    {
      name: 'Nellie Caldwell',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      online: true
    },
    {
      name: 'Vernon Mason',
      avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
      online: true
    },
    {
      name: 'Erica Hunt',
      avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
      online: false
    },
    {
      name: 'Juanita Phillips',
      avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
      online: true
    }
  ];

const ContactList = () => {
    return (
        users.map(profile => (
            <div className="Contact">
            <img class='avatar' src={profile.avatar}/>
            <div className='status'>
            <h4 className='name'>{profile.name}</h4>
            <div>
                <div className='status-online'></div>
                <p className='status-text'>{profile.online ? 'Online': 'Offline'}</p>
            </div>
            </div>
        </div>
        ))

    )
}

export default ContactList;