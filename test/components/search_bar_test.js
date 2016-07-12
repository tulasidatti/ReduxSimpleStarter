import { renderComponent, expect } from '../test_helper';
import SearchBar from '../../src/containers/search_bar';

describe('SearchBar', () =>{
	let component;

	beforeEach(()=>{
		component = renderComponent(SearchBar);
	});

	it('has correct class', () => {	
		expect(component).to.have.class('input-group');
	});
	it('has a text box', () => {		
		expect(component.find('input')).to.exist;
	});
	it('has a button', () => {		
		expect(component.find('button')).to.exist;
	});
	describe('Entering some text',()=>{
		beforeEach(()=>{
			component.find('input').simulate('change', 'Tampa');
		});
		it('shows text in textbox', () => {		
			expect(component.find('input')).to.have.value('Tampa');
		});
		it('clears input when submitted', () => {	
			component.simulate('submit');	
			expect(component.find('input')).to.have.value('');
		});
	})
	
});