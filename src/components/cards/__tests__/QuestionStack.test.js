import React from 'react';
import { render, screen } from '@testing-library/react';
import QuestionStack from '../QuestionStack';
import { mockQuestions } from '../../../mocks/QuestionMocks';

test('question stack renders correctly only 5 questions with default props', () => {
  render(<QuestionStack 
    questions={mockQuestions}
    isFavoritible={true}
    mode='deep'/>);
  const qn_1 = screen.getByText('What’s something you’ve been debating or uncertain about?');
  const qn_2 = screen.getByText('What do you enjoy (or want to do) outside of work?');
  const qn_3 = screen.getByText('What was a time when you made somebody upset?');
  const qn_4 = screen.queryByText('Which picture best captures "the future", in your opinion?');
  const qn_5 = screen.getByText('What\'s something you will never understand about others?');
  const qn_6 = screen.queryByText('Do you prefer Coke or Pepsi?');
  expect(qn_1).toBeInTheDocument();
  expect(qn_2).toBeInTheDocument();
  expect(qn_3).toBeInTheDocument();
  expect(qn_4).toBeNull();
  expect(qn_5).toBeInTheDocument();
  expect(qn_6).toBeNull();
})

test('question stack renders picture card when its in front', () => {
  render(<QuestionStack 
    questions={mockQuestions.slice(3)}
    isFavoritible={true}
    mode='deep'/>);
  const qn_pic = screen.queryAllByTestId('picture-card');
  const qn_active = qn_pic[0];
  const qn_inactive = qn_pic[1];
  const qn_load = screen.queryAllByText('Loading question...');
  expect(qn_active.classList.contains('active')).toBe(true);
  expect(qn_active.classList.contains('inactive')).toBe(false);
  expect(qn_inactive.classList.contains('active')).toBe(false);
  expect(qn_inactive.classList.contains('inactive')).toBe(true);
  expect(qn_load).toHaveLength(2);
})