import Link from 'next/link';
import styles from '../styles/CustomLink.module.scss';

export default function CustomLink({text, href}) {
	return (
		<Link href={href}>
			<a className={styles.link}>{text}</a>
		</Link>
	)
}
