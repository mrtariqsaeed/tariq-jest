const request = require('request');
const getEmps = require('./emps.js');

jest.mock('request');


describe('testing the emps module', () => {
    it('Test the function output', async () => {
        const emps = [
            {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
        ];

        const resp = {data: emps};

        request.get.mockResolvedValue(resp)

        const response = await getEmps();
        expect(response).not.toBeUndefined();
        expect(response).toBe(resp)
    })
})
