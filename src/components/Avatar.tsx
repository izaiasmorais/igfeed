interface AvatarProps {
	src: string;
	hasBorder: boolean;
}

export function Avatar({ src, hasBorder = true }: AvatarProps) {
	const hasBorderStyles =
		hasBorder && "outline outline-[2px] outline-green-300 box-[initial]";

	return (
		<img
			src={src}
			alt="Izaías Lima"
			className={`w-[4rem] h-[4rem] rounded-lg border-[4px] border-solid
          border-gray-800 ${hasBorderStyles}`}
		/>
	);
}
