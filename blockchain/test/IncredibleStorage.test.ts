import { ethers } from "hardhat";
import {expect} from "chai";
describe("IncredibleStorage", () => {
    it("should have a default value of 42", async () => {
        const awesomeUInt = 42;

        const [owner,otherAccount] = await ethers.getSigners();

        const IncredibleStorage = await ethers.getContractFactory("IncredibleStorage");

        const incredibleStorage = await IncredibleStorage.deploy(awesomeUInt);
        expect(await incredibleStorage.get()).to.equal(awesomeUInt);
    })

});