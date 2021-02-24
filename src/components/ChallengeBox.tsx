import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

    const hasActiveChallenge = true;

    return (
        <div className={styles.challengeBoxContainer}>
           {hasActiveChallenge ? (
               <div className={styles.challengeActive}>
                   <header>Ganhe 400 xp</header>

                   <main>
                       <img src="icons/body.svg" alt="Body Icon"/>
                       <strong>Novo desafio</strong>
                       <p>Dê uma cambalhota</p>
                   </main>

                   <footer>
                       <button 
                        type="button"
                        className={styles.challengeFailedButton}
                       >
                           Falhei
                        </button>

                       <button 
                        type="button"
                        className={styles.challengeCompletedButton}
                        >
                            Completei
                        </button>
                   </footer>
               </div>
           ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Inicie um ciclo para receber desafios a serem completados</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up Icon"/>
                        Complete-os e ganhe xp para avançar de level.
                    </p>
                </div>
           )}
        </div>
    );
}