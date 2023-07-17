const request = require('supertest')

let blairot

describe('Router TEST', () => {

    beforeEach(() => {
        blairot = require('../server')
    })

    afterEach(()=>{
        blairot.close()
    })

    describe('GET ON /',() => {
        it('Should return 200 status', async() => {
            const response = await request(blairot).get('/')
            expect(response.status).toBe(200)
        })

        it('Should return 501 status', async() => {
            const response = await request(blairot).get('/ehnjek')
            expect(response.status).toBe(501)
        })
    })

    describe('TEST ON /marcel',() => {
        it('Should return 200 status', async() => {
            const response = await request(blairot).get('/marcel/23')
            expect(response.status).toBe(200)
        })

        it('Should return 204 status', async() => {
            const response = await request(blairot).delete('/marcel/5')
            expect(response.status).toBe(204)
        })
    })
})