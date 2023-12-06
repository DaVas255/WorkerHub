import { WorkerButton } from '../../../components/shared/WorkerButton/WorkerButton';
import { PageLayout } from '../../../layouts/PageLayout/PageLayout';
import styles from './AuthPage.module.scss';
import { Link } from 'react-router-dom';

export const AuthPage = () => {
	return (
		<PageLayout>
			<form className={styles.auth}>
				<h2 className={styles.auth__title}>Welcome back home!</h2>
				<input className={styles.auth__input} type='text' placeholder='Login' />
				<input
					className={styles.auth__input}
					type='text'
					placeholder='Password'
				/>
				<Link to='*'>
					<WorkerButton className={styles.auth__button}>Login</WorkerButton>
				</Link>
				<Link to='/reg'>SIGN UP</Link>
			</form>
		</PageLayout>
	);
};
