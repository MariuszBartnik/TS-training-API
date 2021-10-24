import { Request, Response } from 'express';
import prisma from '../config/db';

const userController = {
	getUsers: async (req: Request, res: Response) => {
		const users = await prisma.user.findMany({
			select: {
				id: true,
				name: true,
				createdAt: true,
				posts: {
					select: {
						id: true,
						title: true,
					},
				},
			},
		});

		if (users) {
			res.json(users);
		}
	},

	getUser: async (req: Request, res: Response) => {
		const user = await prisma.user.findUnique({
			where: {
				id: req.params.id,
			},
			select: {
				id: true,
				name: true,
				createdAt: true,
				posts: {
					select: {
						id: true,
						title: true,
					},
				},
			},
		});

		if (user) {
			res.json(user);
		}
	},

	getProfiles: async (req: Request, res: Response) => {
		const profiles = await prisma.user.findMany({
			select: {
				id: true,
				name: true,
				createdAt: true,
				email: true,
				phone: true,
				posts: {
					select: {
						id: true,
						title: true,
					},
				},
			},
		});

		if (profiles) {
			res.json(profiles);
		}
	},

	getProfile: async (req: Request, res: Response) => {
		const profile = await prisma.user.findUnique({
			where: {
				id: req.params.id,
			},
			select: {
				id: true,
				name: true,
				createdAt: true,
				email: true,
				phone: true,
				posts: {
					select: {
						id: true,
						title: true,
					},
				},
			},
		});

		res.json(profile);
	},

	getProfileDetails: async (req: Request, res: Response) => {
		const profileDetails = await prisma.user.findUnique({
			where: {
				id: req.params.id,
			},
			include: {
				posts: {
					select: {
						id: true,
						title: true,
					},
				},
			},
		});

		if (profileDetails) {
			res.json(profileDetails);
		}
	},
};

export default userController;
