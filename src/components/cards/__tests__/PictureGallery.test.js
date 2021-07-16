import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import PictureGallery from '../PictureGallery';
import { mockPictures } from '../../../mocks/PictureMocks';

test('picture gallery renders 3 pictures properly with default props', () => {
  render(<PictureGallery 
    pictures={mockPictures}
  />);
  const pics = screen.getAllByRole('img');
  expect(pics).toHaveLength(3);
})

test('picture gallery supports selecting pictures', () => {
  const handleSelect = jest.fn();
  render(<PictureGallery 
    pictures={mockPictures}
    isSelectable={true}
    handleSelect={handleSelect}
  />);
  const first_pic = screen.getAllByTestId('gallery-picture');
  fireEvent.mouseUp(first_pic[0]);
  const btn = screen.getByRole('button', {name: 'Select'});
  fireEvent.click(btn);
  expect(handleSelect).toHaveBeenCalledTimes(1);
})

test('picture gallery doesn\'t allow submit when not selected', () => {
  jest.spyOn(window, 'alert').mockImplementation(() => {})
  render(<PictureGallery 
    pictures={mockPictures}
    isSelectable={true}
  />);
  const btn = screen.getByRole('button', {name: 'Select'});
  fireEvent.click(btn);
  expect(window.alert).toHaveBeenCalledTimes(1);
})