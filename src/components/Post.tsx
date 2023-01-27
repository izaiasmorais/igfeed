import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

export function Post() {
	return (
		<article
			className="bg-gray-800 p-[2.5rem] rounded-lg leading-[1.6]
		text-gray-300"
		>
			<header className="flex items-center justify-between">
				<div className="flex gap-4 items-center">
					<Avatar src="https://i.imgur.com/RDo1GCc.jpg" />
					<div className="flex flex-col">
						<strong className="text-gra-100 leading-[1.6]">Izaías Lima</strong>
						<span className="text-[0.875rem] text-gray-400 leading-[1.6]">
							Full-stack developer
						</span>
					</div>
				</div>

				<time
					title="03 de dezembro às 11:00"
					dateTime="2022-12-03 11:00:00"
					className="text-[0.875rem] text-gray-400"
				>
					Publicado há 1h
				</time>
			</header>

			<div>
				<div>
					<p className="mt-[1.6rem]">Fala galeraa 👋</p>

					<p className="mt-[1.6rem]">
						Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
						no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
						🚀
					</p>

					<p className="font-bold">
						<a className="block mt-[1.6rem] text-green-300">
							jane.design/doctorcare
						</a>
					</p>

					<p className="flex gap-2 cursor-pointer mt-[1.6rem] font-bold">
						<a className="block text-green-300 hover:text-green-500">
							#novoprojeto
						</a>

						<a href="" className="block text-green-300 hover:text-green-500">
							#nlw
						</a>

						<a href="" className="block text-green-300 hover:text-green-500">
							#rocketseat
						</a>
					</p>
				</div>
			</div>

			<form
				className="commentForm w-full mt-[1.5rem] pt-[1.5rem] border-t
			border-gray-600 transition-all"
			>
				<strong className="leading-relaxed  text-white">
					Deixe seu feedback
				</strong>
				<textarea
					placeholder="Deixe seu comentário"
					className="w-full bg-gray-900 border-0 resize-none p-4 rounded-lg
					h-[6rem] leading-snug mt-4 "
				></textarea>
				<div className="invisible max-h-0">
					<button
						type="submit"
						className="py-4 px-[1.5rem] mt-4 rounded-lg border-0	bg-green-500
					text-white cursor-pointer font-bold hover:bg-green-300
					transition-colors "
					>
						Publicar
					</button>
				</div>
			</form>

			<div className="mt-5">
				<Comment />
				<Comment />
				<Comment />
			</div>
		</article>
	);
}
