import React, { Component } from "react";
import "../css/style.css";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup,} from 'react-transition-group';
const {"v4": uuidv4} = require('uuid');

class ToDoList extends Component{
    state = {
        items: [
            {id: uuidv4(), name: 'Post 1' },
            {id: uuidv4(), name: 'Post 2' },
            {id: uuidv4(), name: 'Post 3' },
            {id: uuidv4(), name: 'Post 4' },
            {id: uuidv4(), name: 'Post 5' },
            {id: uuidv4(), name: 'Post 6' },
            {id: uuidv4(), name: 'Post 7' }
        ]
    }
    render(){
        const{items} = this.state;
        return(
            <Container>
                <Button color="dark" className="mb-5" onClick={() => 
                    { const name = prompt("Enter Item");
                    if(name){
                        this.setState(state => ({
                            items: [...state.items, {id: uuidv4(), name}]
                        }));
                    }} } >
                    Add Item
                </Button>
                <ListGroup>
                    <TransitionGroup className="todo_list">
                        {items.map(({ id, name }) => (
                            <CSSTransition key = {id} timeout = {500} className="fadeOne">
                                <ListGroupItem>
                                    <Button 
                                    className="remove-btn" 
                                    color="danger" 
                                    size="sm" 
                                    onClick ={() => {
                                        this.setState(state => ({
                                            items: state.items.filter(item => item.id !== id)
                                        }));
                                    }}>
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}
export default ToDoList;
