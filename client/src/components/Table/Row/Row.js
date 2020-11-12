import React from 'react';
import classes from './Row.module.css';

const row = (props) => (
    <tr className={classes.Row}>
        <td className={classes.Row} style={{ background:"#003666",color:'white',fontWeight:'bold'}}>{props.inr} </td>
        <td className={classes.Row} style={{ background: "#003666", color: 'white', fontWeight: 'bold'}}>{props.usd} </td>
    </tr>
)

export default row