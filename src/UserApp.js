import React, { Component } from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';


class UserApp extends Component {
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] });
    }

    render() {
        const { characters } = this.state;
        return (
            
            <div className="container">
                <header></header>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <footer></footer>
            </div>
        );
    }
}


export default UserApp;