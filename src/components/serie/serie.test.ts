import { screen, fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { SERIES } from '../mocks/series';
import { ProtoSerieStructure } from '../../models/serie';
import { Serie } from './serie';

describe('Given Serie component', () => {
  const deleteMock = jest.fn();
  const updateMock = jest.fn();
  const mockTask: ProtoSerieStructure = SERIES[0];
  let element: Serie;
  beforeEach(() => {
    document.body.innerHTML = '<ul></ul>';
    element = new Serie('ul', mockTask, deleteMock, updateMock);
  });
  test('It should be in the document', () => {
    expect(element).toBeInstanceOf(Serie);
  });
  test('It render the serie in the document', () => {
    const li = screen.getByRole('img');
    expect(li).toBeInTheDocument();
  });
  // test('It should be used the button', () => {
  //   const button = screen.getByTitle('6');
  //   fireEvent.click(button);
  //   expect(deleteMock).toHaveBeenCalled();
  // });
});
