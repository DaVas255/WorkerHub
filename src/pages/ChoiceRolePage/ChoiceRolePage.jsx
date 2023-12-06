import { PageLayout } from '../../layouts/PageLayout/PageLayout';
import { WorkerButton } from '../../components/shared/WorkerButton/WorkerButton';
import styles from './ChoiceRolePage.module.scss';
import { Link } from 'react-router-dom';

export const ChoiceRolePage = () => {
	return (
		<PageLayout>
			<div className={styles.choice}>
				<Link to='/auth'>
					<WorkerButton>I`m executor</WorkerButton>
				</Link>
				<Link to='/auth'>
					<WorkerButton>I`m customer</WorkerButton>
				</Link>
			</div>
		</PageLayout>
	);
};
