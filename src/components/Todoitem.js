import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Todoitem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '2px solid green ',
            textDecoration:this.props.todo.complete ? 'line-through':'none'
            
        }
        // if (this.props.todo.complete) {
        //     return {
        //         textDecoration:'line-through'
        //     }
        // } else {
        //     return {
        //         textDecoration:'none'
        //     }
        // }
    }
    // markComplete=(e)=> {
    //     console.log(this.props);
    // }
    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}
//proptypes.....
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired
}
const btnStyle = {
    backgroundColor: 'crimson',
    color: 'white',
    border: 'none',
    padding: '5px 8px',
    cursor: 'pointer',
    float:'right'
}
export default Todoitem

