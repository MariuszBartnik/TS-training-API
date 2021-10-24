import { Router } from 'express';
import prisma from '../config/db';

const router = Router();

router.get('/add-users', async (req, res) => {
	await prisma.user.create({
		data: {
			name: 'Payton',
			email: 'pmangham0@nymag.com',
			city: 'Nanxing',
		},
	});

	await prisma.user.create({
		data: {
			name: 'Gnni',
			email: 'gpotticary1@zimbio.com',
			city: 'Huata',
			street: 'Mitchell',
		},
	});

	await prisma.user.create({
		data: {
			name: 'Lyda',
			email: 'lcosta2@free.fr',
			phone: '417-436-7517',
			city: 'Putrajaya',
		},
	});

	await prisma.user.create({
		data: {
			name: 'Kaleena',
			email: 'khentze3@intel.com',
			city: 'Tan Sum',
			street: 'Derek',
		},
	});

	await prisma.user.create({
		data: {
			name: 'Hakim',
			email: 'hlampke5@nasa.gov',
			phone: '781-518-0554',
			city: 'Baxiangshan',
			street: 'Fisk',
		},
	});

	await prisma.user.create({
		data: {
			name: 'Noelani',
			email: 'nkelwick7@si.edu',
			phone: '227-685-3458',
			city: 'Gananoque',
		},
	});
});

router.get('/deleteUser', async (req, res) => {
	await prisma.user.deleteMany({
		where: {
			name: 'Johh',
		},
	});

	res.send('done');
});

router.get('/deletePosts', async (req, res) => {
	await prisma.post.deleteMany({});

	res.send('done');
});

router.get('/addPosts', async (req, res) => {
	const users = await prisma.user.findMany({});
	const ids = users.map((user) => user.id);

	const posts = [
		{
			title: 'Id lobortis convallis tortor risus dapibus augue vel',
			text: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
		},
		{
			title: 'Elit sodales scelerisque mauris',
			text: 'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
		},
		{
			title: 'Lorem vitae mattis nibh ligula',
			text: 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
		},
		{
			title: 'Ultrices aliquet maecenas leo odio condimentum id luctus nec',
			text: 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
		},
		{
			title: 'Rhoncus dui vel sem sed sagittis nam',
			text: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
		},
		{
			title: 'Ut mauris eget massa tempor convallis nulla neque libero convallis',
			text: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
		},
		{
			title: 'Non quam nec dui',
			text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
		},
		{
			title: 'Adipiscing molestie hendrerit at',
			text: 'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
		},
		{
			title: 'Habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam',
			text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
		},
		{
			title: 'Montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum',
			text: 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
		},
		{
			title: 'Feugiat non pretium quis lectus',
			text: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
		},
		{
			title: 'Mus vivamus vestibulum sagittis natoque penatibus',
			text: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
		},
		{
			title: 'Nisl duis ac nibh fusce lacus',
			text: 'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
		},
		{
			title: 'Dui vel sem sed sagittis nam congue risus semper',
			text: 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
		},
		{
			title: 'Ipsum primis in faucibus orci luctus',
			text: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
		},
		{
			title: 'Aliquam convallis nunc proin at turpis',
			text: 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
		},
		{
			title: 'Diam cras pellentesque volutpat dui',
			text: 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
		},
		{
			title: 'Leo odio condimentum id luctus nec molestie sed justo',
			text: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		},
		{
			title: 'Eu massa donec dapibus duis at velit eu est',
			text: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
		},
		{
			title: 'Odio condimentum id luctus nec molestie',
			text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
		},
		{
			title: 'Quis libero nullam sit amet turpis',
			text: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
		},
		{
			title: 'Ullamcorper purus sit amet nulla quisque arcu',
			text: 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
		},
		{
			title: 'Quam sollicitudin vitae consectetuer eget',
			text: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
		},
		{
			title: 'Quam pede lobortis ligula sit amet eleifend pede libero quis',
			text: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
		},
		{
			title: 'Sed vel enim sit amet nunc viverra dapibus nulla suscipit',
			text: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
		},
		{
			title: 'Magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit',
			text: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
		},
		{
			title: 'Neque vestibulum eget vulputate ut ultrices vel',
			text: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
		},
		{
			title: 'Quis justo maecenas rhoncus aliquam lacus',
			text: 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
		},
		{
			title: 'Condimentum id luctus nec molestie sed justo pellentesque viverra pede',
			text: 'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
		},
		{
			title: 'Posuere cubilia magna vestibulum aliquet',
			text: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
		},
	];

	const task = ids.map(async (id, idx) => {
		await prisma.post.create({
			data: {
				...posts[idx * 5],
				author: {
					connect: {
						id,
					},
				},
			},
		});
		await prisma.post.create({
			data: {
				...posts[idx * 5 + 1],
				author: {
					connect: {
						id,
					},
				},
			},
		});
		await prisma.post.create({
			data: {
				...posts[idx * 5 + 2],
				author: {
					connect: {
						id,
					},
				},
			},
		});
		await prisma.post.create({
			data: {
				...posts[idx * 5 + 3],
				author: {
					connect: {
						id,
					},
				},
			},
		});
		await prisma.post.create({
			data: {
				...posts[idx * 5 + 3],
				author: {
					connect: {
						id,
					},
				},
			},
		});
	});

	res.send('done');
});

export default router;
