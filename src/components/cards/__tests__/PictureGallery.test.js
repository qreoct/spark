import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import PictureGallery from '../PictureGallery';
import { mockPictures } from '../../../mocks/PictureMocks';

describe('PictureGallery Component', () => {
  test('renders 3 pictures properly with default props', () => {
    render(<PictureGallery 
      pictures={mockPictures}
    />);
    const pics = screen.getAllByRole('img');
    expect(pics).toHaveLength(3);
  })
  
  test('supports user selecting pictures', () => {
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
  
  test('doesn\'t allow submit button to be pressed when picture not selected', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {})
    render(<PictureGallery 
      pictures={mockPictures}
      isSelectable={true}
    />);
    const btn = screen.getByRole('button', {name: 'Select'});
    fireEvent.click(btn);
    expect(window.alert).toHaveBeenCalledTimes(1);
  })

})