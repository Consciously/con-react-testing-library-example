import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => {
	return (
		<BrowserRouter>
			<Todo />
		</BrowserRouter>
	);
};

const addTask = tasks => {
	const inputElement = screen.getByPlaceholderText(/Add a new task here.../);
	const buttonElement = screen.getByRole('button', { name: /Add/i });
	tasks.forEach(task => {
		fireEvent.change(inputElement, {
			target: { value: task },
		});
		fireEvent.click(buttonElement);
	});
};

describe('Todo', () => {
	it('should render same text passed into title prop', () => {
		render(<MockTodo />);
		addTask(['Go Grocery Shopping']);
		const divElement = screen.getByText(/Go Grocery Shopping/i);
		expect(divElement).toBeInTheDocument();
	});

	it('should render multiple items', () => {
		render(<MockTodo />);
		addTask(['Go Grocery Shopping', 'Pet my cat', 'Wash my hands']);
		const divElements = screen.getAllByTestId('task-container');

		expect(divElements.length).toBe(3);
	});

	it('task should not have completed class when initially rendered', () => {
		render(<MockTodo />);
		addTask(['Go Grocery Shopping']);
		const divElement = screen.getByText(/Go Grocery Shopping/i);
		expect(divElement).not.toHaveClass('todo-item-active');
	});
	it('task should have completed class when clicked', () => {
		render(<MockTodo />);
		addTask(['Go Grocery Shopping']);
		const divElement = screen.getByText(/Go Grocery Shopping/i);
		fireEvent.click(divElement);
		expect(divElement).toHaveClass('todo-item-active');
	});
});
