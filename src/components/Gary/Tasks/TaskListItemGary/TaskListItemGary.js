import React from 'react';
import styles from './TaskListItemGary.module.css'

export default function TaskListItemGary ({text, importance, done, onClose, onStatusChange}) {
    return (
        <li className={`${styles.item} ${done ? styles.done : ''}`} onClick={onStatusChange}>
          <div className={`${styles.indicator} ${styles[importance]}`}></div>
          <span className={done ? styles[done] : ''}>{text}</span>
          <button onClick={onClose}>X</button>
        </li>
    )
}