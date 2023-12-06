import { PageLayout } from '../../../layouts/PageLayout/PageLayout';
import { WorkerButton } from '../../../components/shared/WorkerButton/WorkerButton';
import styles from './RegPage.module.scss';
import { Link } from 'react-router-dom';

export const RegPage = () => {
	return (
		<PageLayout>
			<form className={styles.auth}>
				<h2 className={styles.auth__title}>Welcome to the team!</h2>
				<input className={styles.auth__input} type='text' placeholder='Login' />
				<input
					className={styles.auth__input}
					type='text'
					placeholder='Password'
				/>
				<WorkerButton>Sign up</WorkerButton>
				<Link to='/auth'>Do you have an account? Login</Link>
			</form>
		</PageLayout>
	);
};
