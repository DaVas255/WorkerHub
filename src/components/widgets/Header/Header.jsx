import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

export const Header = () => {
	return (
		<header className={styles.header}>
			<NavLink to='/' className={styles.header__logo}>
				WorkerHub
			</NavLink>
			<nav>
				<ul className={styles.header__directions}>
					<li>
						<NavLink to='/' className={styles.header__link}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to='/orders' className={styles.header__link}>
							Orders
						</NavLink>
					</li>
					<li>
						<NavLink to='/message' className={styles.header__link}>
							Messages
						</NavLink>
					</li>
				</ul>
			</nav>
			<div className={styles.header__login}>
				<NavLink to='/auth'>Login</NavLink>
			</div>
		</header>
	);
};
