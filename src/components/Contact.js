import React from 'react';
import './Contact.css';

const name = 'Aurelien Lamarre';
const avatar = "https://avatars0.githubusercontent.com/u/71284692?s=400&amp;u=ee09697483eb96f514ecbb655630c98b56997037&amp;v=4";
const online = true;

function Contact() {
    return(
        <div className="Contact">
            <img class='avatar' src={avatar}/>
            <div className='status'>
            <h4 className='name'>{name}</h4>
            <div>
                <div className='status-online'></div>
                <p className='status-text'>{online ? 'Online': 'Offline'}</p>
            </div>
            </div>
        </div>
    )
}

export default Contact;