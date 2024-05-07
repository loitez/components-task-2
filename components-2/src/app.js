import styles from './app.module.css';
import data from './data.json';
import { useState }	from 'react';

export const App = () => {

	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	function onClickPrevious() {
		setActiveIndex(activeIndex - 1)
	}
	function onClickNext() {
		setActiveIndex(activeIndex + 1)
	}
	function startOver() {
		setActiveIndex(0)
	}

	let isOnFirstBtn = activeIndex === 0;
	let isOnLastBtn = activeIndex === steps.length - 1;

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
						<ul className={styles['steps-list']}>
							{steps.map((step, index) => (
								<li className={styles['steps-item'] + ' ' + (activeIndex >= index ? styles.done : '') + ' ' + (activeIndex === index ? styles.active : '')} key={step.id}>
									<button className={styles['steps-item-button']} onClick={() => setActiveIndex(index)}>{ index+1 }</button>
									{step.title}
								</li>
							))}
						</ul>
						<div className={styles['buttons-container']}>
							<button className={styles.button} onClick={onClickPrevious} disabled={isOnFirstBtn}>Назад</button>
							<button className={styles.button} onClick={isOnLastBtn ? startOver : onClickNext}>
								{activeIndex === steps.length - 1 ? 'Начать сначала' : 'Далее'}
							</button>
						</div>
				</div>
			</div>
		</div>
);
};
