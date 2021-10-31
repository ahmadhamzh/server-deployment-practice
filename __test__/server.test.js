'use strct'
const {app} = require('../server');
const supertest = require('supertest');
const request = supertest(app);

describe('API server test', ()=>{

    test('test for invaled path',async ()=>{
        const response = await request.get('/not-found')
        expect(response.status).toEqual(404)
    });

    test('test for home rout', async ()=>{
        const response = await request.get('/')
        expect(response.status).toEqual(200)
        expect(response.text).toEqual('this is rout /')
    });

    test('test for /data rout', async ()=>{
        const response = await request.get('/data')
        expect(response.status).toEqual(200)
        expect(typeof response.body).toEqual('object')
    })

    test('test for /bad rout',async ()=>{
        const response = await request.get('/bad')
        expect(response.body.message).toEqual('you made an error')
    })

    test('test for time stamp', async ()=>{
        const response = await request.get('/data')
        expect(response.body.time).toBeDefined
    })

})

