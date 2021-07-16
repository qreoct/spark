import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SoloInput from '../SoloInput';
import { mockQuestions, mockQuestionWithPic } from '../../../mocks/QuestionMocks';
import { text } from '@fortawesome/fontawesome-svg-core';

test('soloinput renders question', () => {
  const displayToast = jest.fn();
  const submitHandler = jest.fn();
  render(<SoloInput 
    data={mockQuestions[0]}
    displayToast={displayToast}
    submitHandler={submitHandler}
  />)
  const qn_1 = screen.getByText('What’s something you’ve been debating or uncertain about?');
  const favourites = screen.queryByTitle('Add to favourites');
  const share = screen.queryByTitle('Share');
  const textbox = screen.getByRole('textbox');
  
  expect(qn_1).toBeInTheDocument();
  expect(favourites).toBeInTheDocument();
  expect(share).toBeInTheDocument();
  expect(textbox).toBeInTheDocument();
})

test('soloinput interacting with button and reflection', () => {
  const displayToast = jest.fn();
  const submitHandler = jest.fn();
  render(<SoloInput 
    data={mockQuestions[0]}
    displayToast={displayToast}
    submitHandler={submitHandler}
  />)

  const textbox = screen.getByRole('textbox');
  const btn = screen.getByRole('button', {name: 'Save'});
  
  fireEvent.click(btn);
  expect(displayToast).toBeCalledTimes(1);
  expect(submitHandler).toBeCalledTimes(0);
  fireEvent.change(textbox, {target: {value: 'some text'}});
  fireEvent.click(btn);
  expect(displayToast).toBeCalledTimes(2);
  expect(submitHandler).toBeCalledTimes(1);
})

test('soloinput renders picture card', async () => {
  const displayToast = jest.fn();
  const submitHandler = jest.fn();
  render(<SoloInput 
    data={mockQuestionWithPic}
    displayToast={displayToast}
    submitHandler={submitHandler}
  />)
  const pic = await screen.findByTestId('gallery-picture');
  expect(pic).toBeInTheDocument();
})

test('soloinput interacting with picture and reflection', async () => {
  const displayToast = jest.fn();
  const submitHandler = jest.fn();
  render(<SoloInput 
    data={mockQuestionWithPic}
    displayToast={displayToast}
    submitHandler={submitHandler}
  />)
  const pic = await screen.findByTestId('gallery-picture');
  const btn = screen.getByRole('button', {name: 'Select'});
  const textbox = screen.queryByRole('textbox');
  expect(textbox).toBeNull();
  expect(pic).toBeInTheDocument();
  fireEvent.mouseUp(pic);
  fireEvent.click(btn);

  const reflection = screen.queryByRole('textbox');
  expect(reflection).toBeInTheDocument();
  const save_btn = screen.getByRole('button', {name: 'Save'});
  
  fireEvent.click(save_btn);
  expect(displayToast).toBeCalledTimes(1);
  expect(submitHandler).toBeCalledTimes(0);
  fireEvent.change(reflection, {target: {value: 'some text'}});
  fireEvent.click(save_btn);
  expect(displayToast).toBeCalledTimes(2);
  expect(submitHandler).toBeCalledTimes(1);

})