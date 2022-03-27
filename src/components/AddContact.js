import React from "react"  

class AddContact extends React.Component{
    state ={
        name:"",
        title:"",
        location:""
    }
    add =(e) =>{
        e.preventDefault()
        if(this.state.name ==="" || this.state.title ==="" || this.state.location ==="" ){
            alert("fill all the inputs")
        }
        // console.log(this.state)
        this.props.addContactHandler(this.state)
        this.setState({name:"", title:"", location:""})
        //this is use to empty the inputs
        // this.props.history.push("/")
    }
    render(){
        return(
            <div className="ui main">
                <h2>Add contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name"
                         placeholder="Name" value={this.state.name} onChange={(e) => this.setState({name:e.target.value})}/>
                    </div>

                    <div className="field">
                        <label>Title</label>
                        <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={(e) => this.setState({title:e.target.value})}/>
                    </div>

                    <div className="field">
                        <label>Location</label>
                        <input type="text" name="location"
                         placeholder="Location" value={this.state.location} onChange={(e) => this.setState({location:e.target.value})}/>
                    </div>
                    <button className="ui button blue" >Add</button>
                </form>
            </div>
        )
    }
}
export default AddContact