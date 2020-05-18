import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}
// beforeAll(() => {
//   global.fetch = jest.fn(); // mocking `fetch()` API
// });

test('finds returned data from server', () => {
  let wrapper = shallow(<App/>);
  const posterName = 'https://m.media-amazon.com/images/M/MV5BMTQzMDEyODYwNF5BMl5BanBnXkFtZTgwOTcxMDgwMjE@._V1_SX300.jpg';
  const fetchMock = jest.fn();
  const oldFetch = global.fetch;
  global.fetch = fetchMock
  fetch.mockImplementation (() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve({
          poster : posterName
        });
      }
    });
  });

  await flushPromises()

  wrapper.update()

  expect(fetchMock).toHaveBeenCalledWith("localhost:3001/movies")
  expect(wrapper.state('name')).toBe(posterName)

  global.fetch = oldFetch
  
})

/*
let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
let response = await fetch(url);

let commits = await response.json(); // read response body and parse as JSON

alert(commits[0].author.login);
*/