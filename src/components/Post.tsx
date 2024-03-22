import { ChangeEvent, FormEvent, useState } from "react";
import { PostType } from "../@types/post";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function Post({ author, content, publishedAt }: Omit<PostType, "id">) {
	const [comments, setComments] = useState(["Post muito bacana, hein?!"]);

	const [newCommentText, setNewCommentText] = useState("");

	const publishedDateFormatted = format(
		publishedAt,
		"d 'de' LLLL 'às' HH:mm'h'",
		{
			locale: ptBR,
		}
	);

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});

	function handleCreateNewComment(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		setComments([...comments, newCommentText]);
		setNewCommentText("");
	}

	function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
		event.currentTarget.setCustomValidity("");
		setNewCommentText(event.currentTarget.value);
	}

	function handleNewCommentInvalid(event: ChangeEvent<HTMLTextAreaElement>) {
		event.currentTarget.setCustomValidity("Esse campo é obrigatório!");
	}

	function deleteComment(commentToDelete: string) {
		const commentsWithoutDeletedOne = comments.filter((comment) => {
			return comment !== commentToDelete;
		});

		setComments(commentsWithoutDeletedOne);
	}

	const isNewCommentEmpty = newCommentText.length === 0;

	return (
		<article
			className="bg-gray-800 p-[2.5rem] rounded-lg leading-[1.6]
		text-gray-300"
		>
			<header className="flex items-center justify-between">
				<div className="flex gap-4 items-center">
					<Avatar src={author.avatarUrl} />
					<div className="flex flex-col">
						<strong className="text-gra-100 leading-[1.6]">
							{author.name}
						</strong>
						<span className="text-[0.875rem] text-gray-400 leading-[1.6]">
							{author.role}
						</span>
					</div>
				</div>

				<time
					title={publishedDateFormatted}
					dateTime={publishedAt.toISOString()}
					className="text-[0.875rem] text-gray-400"
				>
					{publishedDateRelativeToNow}
				</time>
			</header>

			<div>
				{content.map((line, index) => {
					if (line.type === "paragraph") {
						return (
							<p key={index} className="mt-[1.6rem]">
								{line.text}
							</p>
						);
					} else if (line.type === "link") {
						return (
							<p key={index} className="font-bold">
								<a className="block mt-[1.6rem] text-green-300" href="">
									{line.text}
								</a>
							</p>
						);
					}
				})}
			</div>

			<form
				className="commentForm w-full mt-[1.5rem] pt-[1.5rem] border-t
			border-gray-600 transition-all"
				onSubmit={handleCreateNewComment}
			>
				<strong className="leading-relaxed  text-white">
					Deixe seu feedback
				</strong>

				<textarea
					placeholder="Deixe seu comentário"
					className="w-full bg-gray-900 border-0 resize-none p-4 rounded-lg
					h-[6rem] leading-snug mt-4 "
					name="comment"
					value={newCommentText}
					onChange={handleNewCommentChange}
					onInvalid={handleNewCommentInvalid}
					required
				/>

				<div className="invisible max-h-0">
					<button
						type="submit"
						className="py-4 px-[1.5rem] mt-4 rounded-lg border-0	bg-green-500
					text-white cursor-pointer font-bold hover:bg-green-300
					transition-colors disabled:opacity-80 disabled:cursor-not-allowed"
						disabled={isNewCommentEmpty}
					>
						Publicar
					</button>
				</div>
			</form>

			<div className="mt-5">
				{comments.map((comment) => (
					<Comment
						key={comment}
						content={comment}
						onDeleteComment={deleteComment}
					/>
				))}
			</div>
		</article>
	);
}
