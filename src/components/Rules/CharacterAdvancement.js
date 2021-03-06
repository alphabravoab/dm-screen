import React from 'react'
import {withStyles} from 'react-jss'
import Header from '../Header'

const style = {
    CharacterAdvancement: {
        width: '30%',
    },
    table: {
        width: '100%',
        "&>:nth-child(1)": {
            backgroundColor: 'orange',
        }
    },
    baseTable: {
        textAlign: 'center',
        "&>:nth-child(n+5):nth-child(-n+8)": {
            backgroundColor: 'orange',
        },
        "&>:nth-child(n+13):nth-child(-n+16)": {
            backgroundColor: 'orange',
        }
    }

}
const CharacterAdvancement = ({classes}) => {
    return (
        <div className={classes.CharacterAdvancement}>
            <Header color="red"> Character advancment</Header>
            <table className={classes.table}>
                <thead><tr><th>XP</th><th>level</th><th>prof bonus</th></tr></thead>
                <tbody className={classes.baseTable}>
                    <tr><td>0</td><td>1</td><td>+2</td></tr>
                    <tr><td>300</td><td>2</td><td>+2</td></tr>
                    <tr><td>900</td><td>3</td><td>+2</td></tr>
                    <tr><td>2700</td><td>4</td><td>+2</td></tr>
                    <tr><td>6500</td><td>5</td><td>+3</td></tr>
                    <tr><td>14000</td><td>6</td><td>+3</td></tr>
                    <tr><td>23000</td><td>7</td><td>+3</td></tr>
                    <tr><td>34000</td><td>8</td><td>+3</td></tr>
                    <tr><td>48000</td><td>9</td><td>+4</td></tr>
                    <tr><td>64000</td><td>10</td><td>+4</td></tr>
                    <tr><td>85000</td><td>11</td><td>+4</td></tr>
                    <tr><td>100000</td><td>12</td><td>+4</td></tr>
                    <tr><td>120000</td><td>13</td><td>+5</td></tr>
                    <tr><td>140000</td><td>14</td><td>+5</td></tr>
                    <tr><td>165000</td><td>15</td><td>+5</td></tr>
                    <tr><td>195000</td><td>16</td><td>+5</td></tr>
                    <tr><td>225000</td><td>17</td><td>+6</td></tr>
                    <tr><td>265000</td><td>18</td><td>+6</td></tr>
                    <tr><td>305000</td><td>19</td><td>+6</td></tr>
                    <tr><td>355000</td><td>20</td><td>+6</td></tr>
                </tbody>
            </table>
        </div>
    )
}

export default withStyles(style)(CharacterAdvancement)
