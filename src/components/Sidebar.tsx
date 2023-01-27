import { PencilSimpleLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Sidebar() {
	return (
		<aside className="bg-gray-800 w-full rounded-lg overflow-hidden max-h-[291px]">
			<img
				className="w-full object-cover h-[72px]"
				src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
			/>

			<div className="flex flex-col items-center mt-[-2rem]">
				<Avatar src="https://i.imgur.com/RDo1GCc.jpg" />
				<strong className="mt-4 text-gray-100 leading-6">Izaías Lima</strong>
				<span className="text-sm text-gray-400 leading-6">
					Full-stack developer
				</span>
			</div>

			<footer
				className="border-t-[1px] border-gray-600 mt-[1.5rem] p-6 pt-6 flex
			items-center justify-center"
			>
				<a
					href="#"
					className="w-[200px] bg-transparent color-green-500 border-solid rounded-lg
          h-[50px] py-0 px-[1.5rem] border-[1px] border-green-300 text-green-300
          flex items-center justify-center gap-2 text-base font-bold"
				>
					<PencilSimpleLine size={24} />
					Editar seu perfil
				</a>
			</footer>
		</aside>
	);
}
