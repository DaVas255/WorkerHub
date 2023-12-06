import styles from './WorkerButton.module.scss';

export const WorkerButton = ({ children }) => {
	return <button className={styles.workerButton}>{children}</button>;
};
