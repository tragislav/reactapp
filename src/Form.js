import React, { Component } from 'react';


class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            firstname: '',
            lastname: '',
            email: '',
            phone: ''
        };
    }
    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }
    onClickUp = () => {
        this.setState((prevState) => {
            return {
                id: prevState.id + 1,
            }
        })
    };

    render() {
        const { firstname, lastname, email, phone } = this.state;
        return (
            
            <form onSubmit={this.onFormSubmit}>
                <div class="block"><label for="firstname">First Name</label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={firstname}
                        onChange={this.handleChange} />
                </div>
                <div class="block"><label for="lastname">Last Name</label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={lastname}
                        onChange={this.handleChange} />
                </div>
                <div class="block">
                    <label for="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                        onChange={this.handleChange} />
                </div>
                <div class="block">
                    <label for="phone">Number Phone</label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={phone}
                        onChange={this.handleChange} />
                </div>
                <div class="block1">
                    <button type="submit" onClick={this.onClickUp}>
                        Add User
                </button>
                </div>
            </form>
        );
    }
}

export default Form;