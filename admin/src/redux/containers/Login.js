import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../Actions/action'
import { Redirect } from 'react-router-dom'


class Login extends Component {
    state = {
        email: '',
        password: '',
        error: null,
        data:[]
    }

    componentDidMount() {
        // Simple GET request using fetch   
        fetch('http://127.0.0.1:8000/Roles')
            .then(response => response.json())
            .then(data => console.log(data));
    }
    dataList(){
        this.state.data && this.state.data.map((k,item)=>{
            console.log('hhhh',item);
            return(
                <div>{item.email}</div>
            )
        })
    }

    handleOnchange = e => this.setState({ [e.target.name]: e.target.value });
    handleSubmit = e => {
        this.setState({ error: null });
        e.preventDefault();
        if (this.state.email === '' && this.state.password === '') {
            this.setState({ error: "Please fill email and password" });
        } else{
            this.props.login(this.state.email, this.state.password)
        }
        
    }
    render() {
        const { error } = this.state;
        let pageRedirect;
        if (this.props.redirect) {
            pageRedirect = <Redirect to='/UsersPage' />
        }
        
        return (
            <div className="container">
                {pageRedirect}
                <div className="col-lg-5 mx-auto mt-5">
                    <div className="card card-body shadow-sm">
                        <h4 className="text-center">Login</h4>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input onChange={this.handleOnchange} name='email' type="email" placeholder="Email" className="form-control" />
                            </div>
                            <div className="form-group mt-2">
                                <input onChange={this.handleOnchange} name="password" type="password" placeholder="Password" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-sm btn-primary mt-2">Login</button>
                            {
                                (error !== null || this.props.errors !== null) && (
                                    <div className="alert alert-danger mt-2">
                                        <p className="m-0">{error} {this.props.errors} </p>
                                    </div>
                                )
                            }
                        </form>
                        <div>{this.dataList()}</div>
                    </div>
                </div>
                
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth.auth,
    redirect: state.auth.redirect,
    errors: state.auth.error

})
const mapDispatchToProps = (dispatch) => ({
    login: (email, password) => dispatch(login(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
