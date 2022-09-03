import * as sinon from "sinon";
import * as chai from "chai";
import { before } from "mocha";
// @ts-ignore
import chaiHttp = require("chai-http");

import { app } from "../app";
import model from "../database/models/user.model";
import clientInfo from "./client.constant";

chai.use(chaiHttp);

const { expect } = chai;

const sandbox = require("sinon").createSandbox();

describe("Teste de Cadastro (client)", () => {
  before(() => {
    sandbox.stub(model, "findOne");
  });

  after(() => {
    sandbox.restore();
  });

  it("Quando, os dados estiverem corretos, a rota post /client deve retornar uma mensagem de sucesso", async () => {
    const response = await chai
      .request(app)
      .post("/client")
      .send({
        clientName: clientInfo.clientName,
        genre: clientInfo.genre,
        birthday: clientInfo.birthday,
        naturalness: clientInfo.naturalness,
        profession: clientInfo.profession,
        maritalStatus: clientInfo.maritalStatus,
        cellphone: clientInfo.cellphone,
        email: clientInfo.email,
      })
      .then((res) => {
        return res;
      });
    console.log(response.body);
    expect(response.body.newUser).to.have.property("token");
  });

  it("Quando o username não tiver sido preenchido, a rota post /client deve retornar uma mensagem de erro", async () => {
    const response = await chai
      .request(app)
      .post("/client")
      .send({
        email: "fake@gmail.com",
        role: "client",
        password: "secret_fake",
      })
      .then((res) => res);

    expect(response.body).to.deep.equal({
      message: "All fields must be filled",
    });
  });

  it("Quando o email não tiver sido preenchido, a rota post /client deve retornar uma mensagem de erro", async () => {
    const response = await chai
      .request(app)
      .post("/client")
      .send({
        username: "fake",
        role: "client",
        password: "secret_fake",
      })
      .then((res) => res);

    expect(response.body).to.deep.equal({
      message: "All fields must be filled",
    });
  });

  it("Quando a senha não tiver sido preenchida, a rota post /client deve retornar uma mensagem de erro", async () => {
    const response = await chai
      .request(app)
      .post("/client")
      .send({
        username: "fake",
        email: "fake@fake.com",
        role: "client",
      })
      .then((res) => res);

    expect(response.body).to.deep.equal({
      message: "All fields must be filled",
    });
  });
});
