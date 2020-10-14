import React, {Component} from 'react';
import Contact from './Contact';


  const ContactList = ({users}) => {
    return (
        users.map(user => (
            <Contact {...user}/>
        ))
    )
};
// const ContactList = () => {
//     return (
//         users.map(profile => (
//             <div className="Contact">
//             <img class='avatar' src={profile.avatar}/>
//             <div className='status'>
//             <h4 className='name'>{profile.name}</h4>
//             <div className={this.state.online ? 'status-online': 'status-offline'}></div>
//                 <p className='status-text' onClick={event => {
//                     const offline = !this.state.online;
//                     this.setState({online:offline})
//                 }}>{this.state.online ? 'Online': 'Offline'} </p>
//             </div>
//         </div>
//         ))

//     )
// }


// class ContactList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       online: false
//     };
//   }
//   render() {
//     return (
//       users.map(profile => (
//         <div className="Contact">
//           <img class='avatar' src={profile.avatar}/>
//             <div className='status'>
//               <h4 className='name'>{profile.name}</h4>
//               <div onClick={event => {
//                   const offline = !this.state.online;
//                   this.setState({online:offline})
//               }} key={profile.name}>
//                 <div className={this.state.online ? 'status-online': 'status-offline'} key={profile.name}></div>
//                 <p className='status-text' >{this.state.online ? 'Online': 'Offline'} </p>
//               </div>
//         </div>
//       </div>
          
//           )))
//       }
//       }
      export default ContactList;