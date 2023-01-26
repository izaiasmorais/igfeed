import logoImg from "../assets/ignite-logo.svg";

export function Header() {
	return (
		<div
			className="w-full h-[100px] flex items-center justify-center
    bg-gray-800 gap-2"
		>
			<img src={logoImg} alt="Ignite Logo" className="h-15 w-15" />
			<h1 className="text-2xl font-bold text-gray-100">Ignite Feed</h1>
		</div>
	);
}
