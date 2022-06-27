import React, { Component } from 'react';
import classes from './Categories.module.css';

// к-та для відображення категорій квітів
export class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всі'
                },
                {
                    key: 'rose',
                    name: 'Троянди'
                },
                {
                    key: 'chamomile',
                    name: 'Ромашки (хризантема)'
                },
                {
                    key: 'tulip',
                    name: 'Тюльпани'
                }
            ]
        }
    }

    render() {
        return (
            <div className={classes.categories}>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories
