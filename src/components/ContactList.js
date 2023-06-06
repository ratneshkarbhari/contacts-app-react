
import React,{userState,useEffect, useState} from 'react'

import ContactCard from './ContactCard'
import { Link } from 'react-router-dom'

function ContactList(props) {   


    const deleteContactHandler = (id)=>{

        props.getContactId(id)

    }
    
    const renderContactList = props.contacts.map((contact)=>{
        return(
            <ContactCard clickHandler={deleteContactHandler} contact={contact} key={contact.id}/>
        )
    })

    return(
        <div className='ui celled list' style={{marginTop:"5em"}}>
            <h1>Contact List</h1>
            <Link to='/add'>Add Contacts</Link>
            {renderContactList}
        </div>
    )

}

export default ContactList