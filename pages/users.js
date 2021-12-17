import Link from "next/link"
// import { useEffect, useState } from "react"
import MainContainer from './../components/MainContainer';

function Users({users}) {
	// const [users, setUsers] = useState([
	// 	{id: 1, name: 'petya'},
	// 	{id: 2, name: 'vasya'},
	// ]);

	// react method - no ssr
	// useEffect(async () => {
	// 	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	// 	const data = await response.json();
	// 	setUsers(data);
	// }, []);

	const title = "Пользователи";

	return (
		<MainContainer keywords={'users page'} title={title}>
			<h1>{title}</h1>
			<ul>
				{users.map(user =>
					<li key={user.id}>
						<Link href={`/users/${user.id}`}>
							<a>{user.name}</a>
						</Link>
					</li>
				)}
			</ul>
		</MainContainer>
	);
};

export default Users;

export async function getStaticProps(context) {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const users = await response.json();

	return {
		props: {users}, // will be passed to the page component as props
	}
}