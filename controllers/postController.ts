import { Request, Response } from 'express';
import prisma from '../config/db';

const postController = {
	getPosts: async (req: Request, res: Response) => {
		const posts = await prisma.post.findMany({
			include: {
				author: {
					select: {
						id: true,
						name: true,
					},
				},
			},
		});

		if (posts) {
			res.json(posts);
		}
	},

	getPost: async (req: Request, res: Response) => {
		const post = await prisma.post.findUnique({
			where: {
				id: req.params.id,
			},
			include: {
				author: {
					select: {
						id: true,
						name: true,
					},
				},
			},
		});

		if (post) {
			res.json(post);
		}
	},

	addPost: async (req: Request, res: Response) => {
		const { title, text, authorId } = req.body;

		const newPost = await prisma.post.create({
			data: {
				title,
				text,
				author: {
					connect: {
						id: authorId,
					},
				},
			},
		});

		if (newPost) {
			res.json({ success: true });
		}
	},

	editPost: async (req: Request, res: Response) => {
		const { title, text } = req.body;

		const editedPost = await prisma.post.update({
			where: {
				id: req.params.id,
			},
			data: {
				text,
				title,
			},
		});

		if (editedPost) {
			res.json({ success: true });
		}
	},

	deletePost: async (req: Request, res: Response) => {
		await prisma.post.delete({
			where: {
				id: req.params.id,
			},
		});

		res.json({ success: true });
	},

	getUserPost: async (req: Request, res: Response) => {
		const userPosts = await prisma.post.findMany({
			where: {
				author: {
					id: req.params.id,
				},
			},
			select: {
				id: true,
				title: true,
			},
		});

		if (userPosts) {
			res.json(userPosts);
		}
	},
};

export default postController;
