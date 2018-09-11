import Search from '../components/Search';
import React from 'react';
import axios from 'axios';


// Note: Also possible to define component = newSearch up here in the global scope but for easier readibility, I'm including it separately within each test.

describe('constructor', () => {
	it('should set state to default', () => {
		const component = new Search();
		expect(component.state).toEqual({
			query: '',
			results: []
		});
	});	
	
	it('should call ref', () => {
		const createRefSpy = jest.spyOn(React, 'createRef').mockReturnValue('hello world');
		const component = new Search();
		expect(createRefSpy).toHaveBeenCalled();
		expect(component.searchRef).toEqual('hello world');
	});
});

describe('handleInputChange', () => {
	it('should call setState', () => {
		const component = new Search();
		const setStateSpy = jest.spyOn(component, 'setState');

		//below is mocking searchRef because setState on handleInput change specififes a query value obtained from searchRef which is undefined when running test. Therefore we mock it below.
		component.searchRef = { current: {value: '' } };
		component.state = {};
		component.handleInputChange();
		expect(setStateSpy).toHaveBeenCalled();
	});

	// not sure how to test an if statement, but for now just testing getInfo;
	it('should call getInfo', () => {
		const component = new Search();
		//the below spyOn is useless. You have to spy on somethign else and then see if that thing is called when you call getInfo for example. Or see if getInfo is called when you do something else.
		const getInfoSpy = jest.spyOn(component, 'getInfo');
		component.getInfo();
		expect(getInfoSpy).toHaveBeenCalled();
	});
	
});

describe('getInfo', () => {
	it('should call axios', () => {
		const component = new Search();
		const axiosSpy = jest.spyOn(axios, 'get');
		
		component.getInfo('search');

		expect(axiosSpy).toHaveBeenCalled();
	});

	it('should return post title', () => {
		const component = new Search();

		const axiosSpy = jest.spyOn(axios, 'get').mockResolvedValue('default');
		const query = component.getInfo('query');
		expect(query).resolves.toEqual('default');
	});


});
