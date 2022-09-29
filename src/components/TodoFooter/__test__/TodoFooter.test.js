import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from '../TodoFooter';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
	return (
		<BrowserRouter>
			<TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
		</BrowserRouter>
	);
};

it('should render the correct amount of incomplete tasks', () => {
	render(<MockTodoFooter numberOfIncompleteTasks={5} />);
	const paragraphElement = screen.getByText(/5 tasks left/i);
	expect(paragraphElement).toBeInTheDocument();
});

it('should render "task" when the number of incomplete tasks is one', () => {
	render(<MockTodoFooter numberOfIncompleteTasks={1} />);
	const paragraphElement = screen.getByText(/1 task left/i);
	expect(paragraphElement).toBeInTheDocument();
});

it('should render "task" when the number of incomplete tasks is one2', () => {
	render(<MockTodoFooter numberOfIncompleteTasks={1} />);
	const paragraphElement = screen.getByText(/1 task left/i);
	expect(paragraphElement).toBeTruthy();
});

it('should render "task" when the number of incomplete tasks is one3', () => {
	render(<MockTodoFooter numberOfIncompleteTasks={1} />);
	const paragraphElement = screen.getByText(/1 task left/i);
	expect(paragraphElement).toBeVisible();
});

it('should render "task" when the number of incomplete tasks is one4', () => {
	render(<MockTodoFooter numberOfIncompleteTasks={1} />);
	const paragraphElement = screen.getByText(/1 task left/i);
	expect(paragraphElement).toContainHTML('p');
});

it('should render "task" when the number of incomplete tasks is one5', () => {
	render(<MockTodoFooter numberOfIncompleteTasks={1} />);
	const paragraphElement = screen.getByRole('paragraph');
	expect(paragraphElement).toHaveTextContent('1 task left');
});

it('should render "task" when the number of incomplete tasks is one6', () => {
	render(<MockTodoFooter numberOfIncompleteTasks={1} />);
	const paragraphElement = screen.getByRole('paragraph');
	expect(paragraphElement).not.toBeFalsy();
});

it('should render "task" when the number of incomplete tasks is one7', () => {
	render(<MockTodoFooter numberOfIncompleteTasks={1} />);
	const paragraphElement = screen.getByRole('paragraph');
	expect(paragraphElement.textContent).toBe('1 task left');
});
