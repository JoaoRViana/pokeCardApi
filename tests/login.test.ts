import { expect } from 'chai';
import { appInstance } from '../app';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { login } from './mocks';

chai.use(chaiHttp);

const {app} = appInstance

describe('/login', () => {
    it('/login/register',async function(){
        const {status} = await chai.request(app).post('/login/register').send(login);
        expect(status).to.be.deep.equal(201)
    })
    it('login',async function(){
        const {status} = await chai.request(app).post('/login').send(login);
        expect(status).to.be.deep.equal(200)
    })
});
