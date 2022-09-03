import * as sinon from "sinon";
import * as chai from "chai";
import { before } from "mocha";
// @ts-ignore
import chaiHttp = require("chai-http");

import { app } from "../app";
import model from "../database/models/user.model";
import { adminMochLogin, adminInfo, token } from "./user.constant";

chai.use(chaiHttp);

const { expect } = chai;

describe("Teste de login", () => {
  before(() => {
    sinon.stub(model, "findOne").resolves(adminInfo as unknown as model);
  });

  after(() => {
    (model.findOne as sinon.SinonStub).restore();
  });

  it("A rota post /login deve retornar o token", async () => {
    const response = await chai
      .request(app)
      .post("/login")
      .send({
        email: adminMochLogin.email,
        password: adminMochLogin.password,
      })
      .then((res) => {
        return res;
      });

    expect(response.body).to.have.property("token");
  });

  it("A rota post /login deve retornar uma mensagem de erro", async () => {
    const response = await chai
      .request(app)
      .post("/login")
      .send({
        email: "fake@fake.com",
        password: "secret_fake",
      })
      .then((res) => res);

    expect(response.body).to.deep.equal({
      message: "Incorrect email or password",
    });
  });

  it("A rota get /login/validate deve retornar a role", async () => {
    const response = await chai
      .request(app)
      .get("/login/validate")
      .set("Authorization", token)
      .then((res) => res);
    expect(response.body.data.role).to.deep.equal("admin");
  });

  it("A rota get /login/validate deve retornar um erro", async () => {
    const response = await chai
      .request(app)
      .get("/login/validate")
      .set("Authorization", "Não passa!")
      .then((res) => res);

    expect(response.status).to.equal(401);
    expect(response.body).to.deep.equal({
      message: "Token must be a valid token",
    });
  });
});
