import React from 'react'

class SessionForm extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({},this.state);
    this.props.processForm(user);
  }

  update(field){
    return (e) => {
      this.setState({
        [field]: e.target.value});
    };
  }

  renderErrors(){
    return(
    <ul>
      {this.props.errors.map((error,i)=>{
        <li key={i}>{error}</li>
      })}
    </ul>
    
    )}

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        Welcome to BenchBnB!
        <br />
        Please {this.props.formType} or {this.props.navLink}
        {this.renderErrors()}
         <label>
           Username:
           <input type="text" value={this.state.username} onChange={this.update('username')}/>
         </label>
        <label>
          Password:
           <input type="password" value={this.state.password} onChange={this.update('password')}/>
        </label>
        <input type='submit' value={this.props.formType} />
      </form>
    )}
}

export default SessionForm