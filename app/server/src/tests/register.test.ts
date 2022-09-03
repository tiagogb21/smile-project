import * as sinon from "sinon";
import * as chai from "chai";
import { before } from "mocha";
// @ts-ignore
import chaiHttp = require("chai-http");

import { app } from "../app";
import model from "../database/models/user.model";
import { clientInfo } from "./register.constant";

chai.use(chaiHttp);

const { expect } = chai;

const sandbox = require("sinon").createSandbox();

describe("Teste de Cadastro (Register)", () => {
  before(() => {
    sandbox.stub(model, "findOne");
  });

  after(() => {
    sandbox.restore();
  });

  it("Quando, os dados estiverem corretos, a rota post /register deve retornar um token", async () => {
    const response = await chai
      .request(app)
      .post("/register")
      .send({
        name: clientInfo.username,
        email: clientInfo.email,
        password: clientInfo.password,
        role: clientInfo.role,
      })
      .then((res) => {
        return res;
      });
    console.log(response.body);
    expect(response.body.newUser).to.have.property("token");
  });

  it("Quando o username não tiver sido preenchido, a rota post /register deve retornar uma mensagem de erro", async () => {
    const response = await chai
      .request(app)
      .post("/register")
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

  it("Quando o email não tiver sido preenchido, a rota post /register deve retornar uma mensagem de erro", async () => {
    const response = await chai
      .request(app)
      .post("/register")
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

  it("Quando a senha não tiver sido preenchida, a rota post /register deve retornar uma mensagem de erro", async () => {
    const response = await chai
      .request(app)
      .post("/register")
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
