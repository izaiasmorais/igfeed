import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Comment() {
	return (
		<div className="flex gap-2">
			<Avatar src="https://i.imgur.com/RDo1GCc.jpg" hasBorder={false} />

			<div className="flex-1">
				<div className="bg-gray-700 p-4">
					<header className="flex items-start justify-between">
						<div className="flex flex-col">
							<strong className="text-sm leading-6">Diego Fernandes</strong>
							<time className="text-xs leading-6 text-gray-400">
								Cerca de 1h atrás
							</time>
						</div>

						<button
							title="Deletar comentário"
							className="bg-transparent text-gray-400 leading-0 rounded-[2px]
							hover:text-red-500 transition-colors"
						>
							<Trash size={24} />
						</button>
					</header>

					<p className="mt-4 text-gray-100">
						Muito bom, Izaías, parabéns!! 👏👏
					</p>
				</div>

				<footer className="my-4">
					<button
						className="bg-transparent border-0 text-gray-400 cursor-pointer
					flex items-center hover:text-green-300 font-semibold"
					>
						<ThumbsUp className="mr-[0.75rem]" />
						Aplaudir <span className="mx-1">•</span> 20
					</button>
				</footer>
			</div>
		</div>
	);
}
