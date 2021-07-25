import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import QuestionCard from '../QuestionCard';
import { mockQuestions } from '../../../mocks/QuestionMocks';

describe('QuestionCard component', () => {
  
  test('renders with default props', () => {
    render(<QuestionCard 
      data={mockQuestions[0]}
      color='quartz'
      mode='story'/>);
    const qn = screen.getByText(/What’s something you’ve been debating or uncertain about?/);
    const favourites = screen.queryByTitle('Add to favourites');
    const share = screen.queryByTitle('Share');
    expect(qn).toBeInTheDocument();
    expect(favourites).toBeInTheDocument();
    expect(share).toBeInTheDocument();
  })

  test('renders placeholder div without data', () => {
    const initial = {};
    render(<QuestionCard data={initial} />);
    const qn = screen.queryByRole('div')
    expect(qn).toBeNull();
  })

  test('correctly doesn\'t render favourites when flag is set', () => {
    render(<QuestionCard 
      data={mockQuestions[0]}
      isFavoritible={false}
      color='quartz'
      mode='story'/>);
    const qn = screen.getByText(/What’s something you’ve been debating or uncertain about?/);
    const favourites = screen.queryByTitle('Add to favourites');
    const share = screen.queryByTitle('Share');
    expect(qn).toBeInTheDocument();
    expect(favourites).toBeNull();
    expect(share).toBeNull();
  })

  test('correctly shows alternate phrasing in story mode', () => {
    render(<QuestionCard 
      data={mockQuestions[8]}
      isFavoritible={false}
      color='quartz'
      mode='story'/>);
    const qn_normal = screen.queryByText('On a scale of 1-10, how messy do you think my room is? Explain.');
    const qn_alt = screen.queryByText('Alt Question!');
    expect(qn_normal).toBeNull();
    expect(qn_alt).toBeInTheDocument();
  })

  test('correctly uses this/that field in this-or-that mode', () => {
    render(<QuestionCard 
      data={mockQuestions[5]}
      isFavoritible={true}
      color='quartz'
      mode='this-or-that'/>);
    const qn_this = screen.queryByText('Coke', {exact: false});
    const qn_that = screen.queryByText('Pepsi', {exact: false});
    const qn_full = screen.queryByText('Do you prefer Coke or Pepsi?')
    expect(qn_this).toBeInTheDocument();
    expect(qn_that).toBeInTheDocument();
    expect(qn_full).toBeNull();
  })

  test('click on fav functionality', () => {
    const mockToast = jest.fn();
    render(<QuestionCard 
      data={mockQuestions[5]}
      isFavoritible={true}
      color='quartz'
      mode='this-or-that'
      displayToast={mockToast}/>);
    const favourites = screen.queryByTitle('Add to favourites');
    fireEvent.click(favourites);
    fireEvent.click(favourites);
    expect(mockToast).toHaveBeenCalledTimes(2);    
  })
})