


var {uppercase} = require('./index')

// test(`uppercase 'test' to equal 'TEST'`, async () => {
//     const str = await uppercase('test')
//     expect(str).toBe('TEST')
// })

// test('Error test', () => {
//   return uppercase('').catch(e => {
//     expect(e).toBe('Empty string');
//   })
// })

uppercase = jest.fn();
uppercase.mockReturnValueOnce('Hi').mockReturnValue('test');

test(`Make sure mockking is working`, async () => {
  const call1 = await uppercase('something')
  const call2 = await uppercase('second')
  const call3 = await uppercase('third')

  expect(call1).toBe('Hi');
  expect(call2).toBe('test');
  expect(call3).toBe('test');
  expect(uppercase).toBeCalled()
})
