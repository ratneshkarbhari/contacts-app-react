
import React,{userState,useEffect, useState} from 'react'

import ContactCard from './ContactCard'

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
        <div className='ui celled list'>
            {renderContactList}
        </div>
    )

}

export default ContactList