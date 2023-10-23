import { expect } from 'chai';
import { appInstance } from '../app';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { cards,addCard } from './mocks';

chai.use(chaiHttp);

const {app} = appInstance

describe('/card',() =>{
    it('GET /:userId',async function(){
        const {status,body} = await chai.request(app).get('/card/1')
        expect(status).to.be.equal(200)
        expect(body).to.be.deep.equal(cards)
    })
    it('POST /:userId', async function(){
        const {status,body} = await chai.request(app).post('/card/1').send(addCard)
        expect(status).to.be.deep.equal(201)
        expect(body).to.be.deep.equal({...addCard,id:13,userId:1})
    })
    it('DELETE /:userId/:cardId', async function(){
        const {status} = await chai.request(app).delete('/card/1/13')
        expect(status).to.be.deep.equal(200)
    })
})