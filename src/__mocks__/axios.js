const mockResponse = {
	data: {
		results: [
			{
				name: {
					first: 'Stefan',
					last: 'Ihle',
				},
				picture: {
					large: 'https://randomuser.me/api/porttraits/men/39.jpg',
				},
				login: {
					username: 'TheGoat',
				},
			},
		],
	},
};

export default {
	get: jest.fn().mockResolvedValue(mockResponse),
};
