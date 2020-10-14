import React,{Component} from 'react';
import './Contact.css';

const name = 'Aurelien Lamarre';
const avatar = "https://avatars0.githubusercontent.com/u/71284692?s=400&amp;u=ee09697483eb96f514ecbb655630c98b56997037&amp;v=4";
const online = true;

class Contact extends Component {
    constructor({name,avatar,online}) {
        super({name,avatar,online});
        this.state = { 
            online: false
         };
    }
    render() {
        return (
            <div className="Contact">
            <img class='avatar' src={avatar}/>
            <div className='status'>
            <h4 className='name'>{name}</h4>
            <div onClick={event => {
                  const offline = !this.state.online;
                  this.setState({online:offline})
              }} key={name}>
                <div className={this.state.online ? 'status-online': 'status-offline'} key={name}></div>
                <p className='status-text' >{this.state.online ? 'Online': 'Offline'} </p>
              </div>
            </div>
        </div>
            
        );
    }
}

export default Contact;
