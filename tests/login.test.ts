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
describe('/login errors', () => {
    it('/login/register',async function(){
        const {status,body} = await chai.request(app).post('/login/register').send(login);
        expect(status).to.be.deep.equal(401)
        expect(body).to.be.deep.equal({message:'username invalid'})
    })
    it('login',async function(){
        const {status,body} = await chai.request(app).post('/login').send({userName:'a',password:'b'});
        expect(status).to.be.deep.equal(404)
        expect(body).to.be.deep.equal({message:'userName or password invalid'})
    })
});
