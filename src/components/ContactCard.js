import user from '../images/user.png'

function ContactCard({contact,clickHandler}) {



  return (
    <div className='item' >
        <img className='ui avatar image' src={user} />
        <div className='content'>
            <div className='header'>
            {contact.name}
            </div>
        </div>
        <p>{contact.email}</p>
        <button className='ui button red' onClick={()=>clickHandler(contact.id)}>delete</button> 
    </div>
  )
}

export default ContactCard