import React from "react";
import styles from './main.module.css';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            smiles: [
                { name: "👦🏻", count: 0 },
                { name: "👨🏾‍🦲", count: 0 },
                { name: "👩🏼", count: 0 },
            ],
            showResults: false
        };
    }

    handleVote = (index) => {
        const newSmiles = [...this.state.smiles];
        newSmiles[index].count++;
        this.setState({ smiles: newSmiles });
    };

    getWinners = () => {
        const winners = this.state.smiles.filter(smile => smile.count === Math.max(...this.state.smiles.map(smile => smile.count))).map(smile => smile.name);
        return winners.length ? winners : ["немає"];
    };

    toggleShowResults = () => {
        this.setState(prevState => ({ showResults: !prevState.showResults }));
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
                    <button className={styles.btnResults} onClick={this.toggleShowResults}>Показати результати</button>
                    {this.state.showResults && (
                        <div className={styles.winnersBlock}>
                            Найбільше голосів:
                            <br/>
                            <div className={styles.winners}>
                                {this.state.smiles.some(smile => smile.count !== 0) ?
                                    this.getWinners().map((winner, index) => (
                                        <div key={index}>{winner}</div>
                                    )) :
                                    <div>❔</div>
                                }
                            </div>

                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Main;


