import { useRouter } from "next/router";
import MainContainer from './../../components/MainContainer';

export default function User({user}) {
	const {query} = useRouter();
	const title = "Пользователь " + query.id;

	return (
		<MainContainer keywords={user.name} title={title}>
			<h1>{title}</h1>
			<div>Имя пользователя - {user.name}</div>
		</MainContainer>
	)
};

export async function getServerSideProps({params}) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
	const user = await response.json();

	return {
		props: {user}, // will be passed to the page component as props
	}
}