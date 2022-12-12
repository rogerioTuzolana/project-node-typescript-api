import { SetupServer } from "@src/server";
import supertest, { SuperTest } from "supertest";

beforeAll(()=>{
    const server = new SetupServer();
    server.int();
    global.testRequest = supertest(server.getApp());
});
/*const {resolve} = require('path');
const root = resolve(__dirname,'..');
const rootConfig = require(`${root}/jest.config.js`)

module.exports = {... rootConfig,  ...{
    rootDir: root,
    displayName: 'end2end-tests',
    setupFilesAfterEnv: ["<rootDir>/test/jest-setup.ts"],
    testMatch: ["<rootDir>/test/**//*.test.ts"],
}}*/