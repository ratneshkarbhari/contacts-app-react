import React from "react";
import { Link } from "react-router-dom";
class AddContact extends React.Component{

    state = {
        "name" : "",
        "email" : ""
    }

    add = (e)=>{
        e.preventDefault()
        if(this.state.name===''||this.state.email===''){
            alert("all fields are mandatory")
        }else{
            this.props.addContactHandler(this.state)
            this.setState({
                name:"","email":""
            })
        }
    }

    render(){
        return(
            <div className="ui main"  style={{marginTop:"5em"}}>

                <h1>Add Contact</h1>
                <Link to='/'>Back to Contacts</Link>

                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="John Doe" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" value={this.state.email} placeholder="jdoe@email.com" 
                        onChange={(e)=>this.setState({email:e.target.value})}
                        />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>

            </div>
        );
    }


}

export default AddContact