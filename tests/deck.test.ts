import { expect } from 'chai';
import { appInstance } from '../app';
import chai from 'chai';
import chaiHttp from 'chai-http';
import {getDeck,allDecks,addDeck,newDeck} from './mocks'

chai.use(chaiHttp);

const {app} = appInstance

describe('/deck',()=>{
    it('GET /:userId/:deckId',async function(){
        const {status,body} = await chai.request(app).get('/deck/1/1')
        expect(status).to.deep.equal(200)
        expect(body).to.deep.equal(getDeck)
    })
    it('GET /:userId', async function(){
        const {status,body} = await chai.request(app).get('/deck/1')
        expect(status).to.deep.equal(200)
        expect(body).to.deep.equal(allDecks)

    })
    it('POST /:userId',async function(){
        const {status,body} = await chai.request(app).post('/deck/1').send(newDeck)
        expect(status).to.deep.equal(201)
        expect(body).to.be.deep.equal(addDeck)

    })

    it('DELETE /:userId/:deckId',async function(){
        const {status} = await chai.request(app).delete('/deck/1/4')
        expect(status).to.deep.equal(200)
    })
})