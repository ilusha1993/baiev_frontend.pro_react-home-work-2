import React from "react";
import styles from './main.module.css';

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            smiles: [
                { name: "👦🏻", count: 0 },
                { name: "👨🏾‍🦲", count: 0 },
                { name: "👩🏼", count: 0 },
            ]
        };

    }

    handleVote = (index) => {
        const newSmiles = [...this.state.smiles];
        newSmiles[index].count++;
        this.setState({ smiles: newSmiles });
    };

    getWinner = () => {
        let maxCount = 0;
        let winnerName = "❔";

        this.state.smiles.forEach(smile => {
            if (smile.count > maxCount) {
                maxCount = smile.count;
                winnerName = smile.name;
            }
        });

        return winnerName;
    };

    render() {
        return (
            <div>
                <div className={styles.wrapper}>
                    <h1>ДЗ 37. Голосовалка за найкращий смайлик</h1>
                    <p>На сторінці відображається список смайликів та лічильник кліків по кожному <br/>
                        Нижче є кнопка “Show Results” яка виводить смайл, що переміг, на підставі кількості голосів</p>
                    <div className={styles.voteBlock}>
                        {this.state.smiles.map((smile, index) => (
                            <div className={styles.smileBloc} key={index}>
                                <span
                                    className={styles.smileName}
                                    onClick={() => this.handleVote(index)}
                                >
                                    {smile.name}</span>
                                <span>Кількість: {smile.count}</span>
                            </div>
                        ))}
                    </div>
                    <div className={styles.winner}>Найбільше голосів: <br/>{this.getWinner()}</div>
                </div>
            </div>
        )
    }
}

export default Main