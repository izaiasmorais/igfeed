import { ThumbsUp, Trash } from "phosphor-react";

export function Comment() {
	return (
		<div>
			<img
				src="https://i.imgur.com/RDo1GCc.jpg"
				alt=""
				className="w-[3rem] h-[3rem] rounded-lg border-[4px] border-solid
          border-gray-800 "
			/>

			<div className="flex-1">
				<div className="bg-gray-700 p-4">
					<header className="flex items-center justify-between">
						<div className="flex flex-col">
							<strong className="text-sm leading-6">Diego Fernandes</strong>
							<time className="text-xs leading-6 text-gray-400">
								Cerca de 1h atrás
							</time>
						</div>

						<button title="Deletar comentário">
							<Trash size={20} />
						</button>
					</header>

					<p>Muito bom, Izaías, parabéns!!</p>
				</div>

				<footer>
					<button>
						<ThumbsUp />
						Aplaudir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
