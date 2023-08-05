export type Author = {
	avatarUrl: string;
	name: string;
	role: string;
};

export type ContentItem = {
	type: string;
	text: string;
};

export type PostType = {
	id: number;
	author: Author;
	content: ContentItem[];
	publishedAt: Date;
};
