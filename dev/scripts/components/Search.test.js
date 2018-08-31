import Search from './Search';
import React from 'react';


describe('constructor', () => {
	it('should set state to default', () => {
		const component = new Search();
		expect(component.state).toEqual({
			query: '',
			results: []
		});
	});	
	
	it('should call ref', () => {
		const createRefSpy = jest.spyOn(React, 'createRef').mockReturnValue('hello');
		const component = new Search();
		expect(createRefSpy).toHaveBeenCalled();
		expect(component.searchRef).toEqual('hello');
	});
});

describe('handleInputChange', () => {
	it('should call setState', () => {
		const component = new Search();
		const setStateSpy = jest.spyOn(component, 'setState');
		//need to mock call this function
		component.searchRef = { current: {value: '' } };
		component.state = {};
		component.handleInputChange();
		expect(setStateSpy).toHaveBeenCalled();
	})
});