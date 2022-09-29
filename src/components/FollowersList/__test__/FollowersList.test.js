import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockFollowersList = () => {
	return (
		<BrowserRouter>
			<FollowersList />
		</BrowserRouter>
	);
};

describe('FollowerList', () => {
	beforeEach(() => {
		console.log('RAN BEFORE EACH TEST');
	});

	beforeAll(() => {
		console.log('RAN ONCE BEFORE ALL TESTS');
	});

	afterEach(() => {
		console.log('RAN AFTER EACH TEST');
	});

	afterAll(() => {
		console.log('RAN ONCE AFTER ALL TESTS');
	});

	it('should render one follower item', async () => {
		render(<MockFollowersList />);
		const followerDivElement = await screen.findByTestId('follower-item-0');

		expect(followerDivElement).toBeInTheDocument();
	});
	it('should render one follower item2', async () => {
		render(<MockFollowersList />);
		const followerDivElement = await screen.findByTestId('follower-item-0');

		expect(followerDivElement).toBeInTheDocument();
	});
	// it('should render multiple follower items', async () => {
	// 	render(<MockFollowersList />);
	// 	const followerDivElements = await screen.findAllByTestId(/follower-item/i);
	// 	expect(followerDivElements.length).toBe(5);
	// });
});
