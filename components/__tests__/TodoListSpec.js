import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import TodoList from '../TodoList'

describe("TodoList", () => {
  test('renders todolist', () => {
    render(<TodoList/>);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
  }) 
})
 