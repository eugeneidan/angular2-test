/* tslint:disable:no-unused-variable */

import { 
	beforeEach, beforeEachProviders, 
	describe, xdescribe, 
	expect, it, xit, 
	async, inject 
} from '@angular/core/testing';
import {Todo} from './todo';

describe('Todo', () => {
  
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
  	let todo = new Todo()
  	todo.title = 'hello';
  	todo.complete = true;
  	expect(todo.title).toEqual('hello');
  	expect(todo.complete).toEqual(true);
	});
});
