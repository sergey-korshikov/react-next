import MainContainer from './../components/MainContainer';

const index = () => {
	const title = "Главная страница";

	return (
		<MainContainer keywords={'main page'} title={title}>
			<h1>{title}</h1>
		</MainContainer>
	)
}

export default index;
