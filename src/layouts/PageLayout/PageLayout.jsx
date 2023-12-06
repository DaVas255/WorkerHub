import { Header } from '../../components/widgets/Header/Header';
import styles from './PageLayout.module.scss';

export const PageLayout = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.layout__main}>{children}</main>
		</div>
	);
};
