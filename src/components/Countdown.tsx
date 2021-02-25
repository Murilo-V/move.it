import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';


export function Countdown() {
    const { minutes, seconds, hasFinished, isActive, resetCountdown, startCountdown } = useContext(CountdownContext);
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0'). split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0'). split('');
    

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado <i className='fas fa-check-circle' style={{marginLeft: '10px', color: '#4cd62b'}}></i>
                </button> 
            ) : (
                <>
                    {isActive ? (
                        <button 
                            type="button" 
                            onClick={resetCountdown} 
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                        >
                            Abandonar ciclo <i className='fas fa-times'  style={{marginLeft: '10px'}}></i>
                        </button> 
                    ) : (
                        <button 
                            type="button" 
                            onClick={startCountdown} 
                            className={styles.countdownButton}
                        >
                            Iniciar um ciclo
                        </button>
                    )}
                </>
            )}
        </div>
    );
}