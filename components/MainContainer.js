import Head from 'next/head';
import CustomLink from './CustomLink';

const MainContainer = ({children, keywords, title}) => {
	keywords = keywords ? ', ' + keywords : '';
	return (
		<>
			<Head>
				<meta keywords={"key1, key3" + keywords}></meta>
				<title>{title}</title>
			</Head>

			<div className="navbar">
				<CustomLink href={'/'} text="Главная"/>
				<CustomLink href={'/users'} text="Пользователи"/>
			</div>

			<div>
				{children}
			</div>

			<style jsx>
				{`
					.navbar {
						background: #7f7f7f;
						padding: 15px;
					}
				`}
			</style>
		</>
	)
}

export default MainContainer;
