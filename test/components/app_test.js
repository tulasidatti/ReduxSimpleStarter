import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('shows search bar', () => {
  	 expect(component.find('.input-group')).to.exist;
  });

  it('shows weather List', () => {
  	 expect(component.find('.table')).to.exist;
  });
});
