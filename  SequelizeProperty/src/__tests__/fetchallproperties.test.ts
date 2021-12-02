import request from 'supertest'
import app from '../app'

describe('Property API', () => {
    it('should show all properties', async () => {
        const res = await request(app).get('/viewallproperties')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('properties')
    })
});