import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./styles/global.css";

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: "https://github.com/izaiasmorais.png",
			name: "Izaías Morais",
			role: "Software Engineer",
		},
		content: [
			{
				type: "paragraph",
				text: "Fala galeraa 👋",
			},
			{
				type: "paragraph",
				text: "Acabei de subir mais um projeto no meu portifa. É um projeto que fizno NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{ type: "link", text: "izaias.dev/linktree" },
		],
		publishedAt: new Date("2023-08-05 20:00:00"),
	},
	{
		id: 2,
		author: {
			avatarUrl: "https://github.com/diego3g.png",
			name: "Diego Fernandes",
			role: "CTO at Rocketseat",
		},
		content: [
			{
				type: "paragraph",
				text: "Fala galeraa 👋",
			},
			{
				type: "paragraph",
				text: "Acabei de subir mais um projeto no meu portifa. É um projeto que fizno NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{ type: "link", text: "diego3g.dev/linktree" },
		],
		publishedAt: new Date("2023-08-05 20:00:00"),
	},
];

function App() {
	return (
		<div className="h-full w-full pb-10 bg-gray-900 text-gray-300 ">
			<Header />

			<div
				className="max-w-[1120px] mx-auto my-2 md:py-0 md:px-1 grid md:grid-cols-main
      gap-8 items-stretch mt-4 grid-cols-1 p-4"
			>
				<Sidebar />
				<main className="grid gap-8">
					{posts.map((post) => {
						return (
							<Post
								key={post.id}
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						);
					})}
				</main>
			</div>
		</div>
	);
}

export default App;
