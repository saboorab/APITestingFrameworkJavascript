import { assert, expect } from 'chai'
import supertest from 'supertest';
import { generateToken } from '../helper/token';
import { createBeneficiariesPayload } from '../resources/payload';
import { BASE_URI, CREATE_BENEFICIARIES } from '../services/endpoints';
import { accountNamecreation } from '../utils/random';
import { accountNumbercreation } from '../utils/random';
import { values } from '../utils/random';
import chai from 'chai';


const request = supertest(BASE_URI)
let TOKEN;


before("should generate token", async () => {
    TOKEN = await generateToken()
})


describe("'Postive API Test', function()", () => {

    it("LOCAL, US, valid accountName(length(2,10)), valid accountNumber(length(1,17)), aba code with length(9)", async () => {

        let accountName = accountNamecreation(2);
        let accountNumber = accountNumbercreation(10);
        let PaymenMethod = values("Payment_methods-LOCAL");
        let bankCountryCode = values("bank_country_code_US");
        let aba = values("aba_valid")
        let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, null, null, aba);
        const response = await request.post(CREATE_BENEFICIARIES)
            .set('content-type', 'application/json')
            .set("Authorization", `Bearer ${TOKEN}`)
            .set('headers', '[object Object]')
            .send(payload)
        expect(response.statusCode).to.equal(201)
        expect(response.body.beneficiary_id).is.not.null
    })

    it("SWIFT, AU, valid accountName(length(2,10)), valid accountNumber(length(6,9)), bsb code with length(6), swiftCode(length(8)", async () => {
        let accountName = accountNamecreation(2);
        let accountNumber = accountNumbercreation(parseInt(9));
        let PaymenMethod = values("Payment_methods-SWIFT");
        let bankCountryCode = values("bank_country_code_AU");
        let bsb = values("bsb_valid")
        let swiftcode = values("SWIFTCODE_AU_6")
        let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, swiftcode, bsb, null);
        const response = await request.post(CREATE_BENEFICIARIES)
            .set('content-type', 'application/json')
            .set("Authorization", `Bearer ${TOKEN}`)
            .set('headers', '[object Object]')
            .send(payload)
        expect(response.statusCode).to.equal(201)
        expect(response.body.beneficiary_id).is.not.null
    })

    it("SWIFT, CN, valid accountName(length(2, 10)), valid accountNumber(length(8, 20)),swiftCode(length(8)", async () => {
        let accountName = accountNamecreation(8);
        let accountNumber = accountNumbercreation(10);
        let PaymenMethod = values("Payment_methods-SWIFT");
        let bankCountryCode = values("bank_country_code_CN");
        let swiftcode = values("SWIFTCODE_CN_6")
        let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, swiftcode, null, null);
        const response = await request.post(CREATE_BENEFICIARIES)
            .set('content-type', 'application/json')
            .set("Authorization", `Bearer ${TOKEN}`)
            .set('headers', '[object Object]')
            .send(payload)
        expect(response.statusCode).to.equal(201)
        expect(response.body.beneficiary_id).is.not.null

    })

    it("SWIFT, US, valid accountName(length(2, 10)), valid accountNumber(length(1, 17)), aba code with length(9), swiftCode(length(8))", async () => {

        let accountName = accountNamecreation(2);
        let accountNumber = accountNumbercreation(10);
        let PaymenMethod = values("Payment_methods-SWIFT");
        let bankCountryCode = values("bank_country_code_US");
        let swiftcode = values("SWIFTCODE_US_6")
        let aba = values("aba_valid")
        let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, swiftcode, null, aba);
        const response = await request.post(CREATE_BENEFICIARIES)
            .set('content-type', 'application/json')
            .set("Authorization", `Bearer ${TOKEN}`)
            .set('headers', '[object Object]')
            .send(payload)
        expect(response.statusCode).to.equal(201)
        expect(response.body.beneficiary_id).is.not.null
    })

    it("SWIFT, US, valid accountName(length(2, 10)), valid accountNumber(length(1, 17)), aba code with length(9), swiftCode(length(11)))", async () => {
        let accountName = accountNamecreation(2);
        let accountNumber = accountNumbercreation(10);
        let PaymenMethod = values("Payment_methods-SWIFT");
        let bankCountryCode = values("bank_country_code_US");
        let swiftcode = values("SWIFTCODE_US_11")
        let aba = values("aba_valid")
        let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, swiftcode, null, aba);
        const response = await request.post(CREATE_BENEFICIARIES)
            .set('content-type', 'application/json')
            .set("Authorization", `Bearer ${TOKEN}`)
            .set('headers', '[object Object]')
            .send(payload)
        expect(response.statusCode).to.equal(201)
        expect(response.body.beneficiary_id).is.not.null
    })

    it("SWIFT, AU, valid accountName(length(2, 10)), valid accountNumber(length(6, 9)), bsb code with length(6), swiftCode(length(11))", async () => {
        let accountName = accountNamecreation(2);
        let accountNumber = accountNumbercreation('09');
        let PaymenMethod = values("Payment_methods-SWIFT");
        let bankCountryCode = values("bank_country_code_AU");
        let bsb = values("bsb_valid")
        let swiftcode = values("SWIFTCODE_AU_11")
        let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, swiftcode, bsb, null);
        const response = await request.post(CREATE_BENEFICIARIES)
            .set('content-type', 'application/json')
            .set("Authorization", `Bearer ${TOKEN}`)
            .set('headers', '[object Object]')
            .send(payload)
        expect(response.statusCode).to.equal(201)
        expect(response.body.beneficiary_id).is.not.null
    })

    it("SWIFT, CN, valid accountName(length(2, 10)), valid accountNumber(length(8, 20)), swiftCode(length(11))", async () => {
        let accountName = accountNamecreation(8);
        let accountNumber = accountNumbercreation(10);
        let PaymenMethod = values("Payment_methods-SWIFT");
        let bankCountryCode = values("bank_country_code_CN");
        let swiftcode = values("SWIFTCODE_CN_6")
        let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, swiftcode, null, null);
        const response = await request.post(CREATE_BENEFICIARIES)
            .set('content-type', 'application/json')
            .set("Authorization", `Bearer ${TOKEN}`)
            .set('headers', '[object Object]')
            .send(payload)
        expect(response.statusCode).to.equal(201)
        expect(response.body.beneficiary_id).is.not.null


    })
})

describe("Negative API Test', function()", () => {
    context('Empty Value of parameters', function () {
        it("Lack of  payment_method parameter", async () => {
            let accountName = accountNamecreation(2);
            let accountNumber = accountNumbercreation(10);
            let PaymenMethod = values("Payment_methods-LOCAL");
            let bankCountryCode = values("bank_country_code_US");
            let aba = values("aba_valid")
            let payload = createBeneficiariesPayload(null, bankCountryCode, accountName, accountNumber, null, null, aba);
            const response = await request.post(CREATE_BENEFICIARIES)
                .set('content-type', 'application/json')
                .set("Authorization", `Bearer ${TOKEN}`)
                .set('headers', '[object Object]')
                .send(payload)
            expect(response.statusCode).to.equal(400)
            expect(response.body.code).to.equal("field_required")
            console.log(response.statusCode, "payment_method parameter is mandatory")


        })
        it("bank_country_code is required", async () => {
            let accountName = accountNamecreation(2);
            let accountNumber = accountNumbercreation(10);
            let PaymenMethod = values("Payment_methods-LOCAL");
            let bankCountryCode = values("bank_country_code_US");
            let aba = values("aba_valid")
            let payload = createBeneficiariesPayload(PaymenMethod, null, accountName, accountNumber, null, null, aba);
            const response = await request.post(CREATE_BENEFICIARIES)
                .set('content-type', 'application/json')
                .set("Authorization", `Bearer ${TOKEN}`)
                .set('headers', '[object Object]')
                .send(payload)
            expect(response.statusCode).to.equal(400)
            expect(response.body.code).to.equal("field_required")
            console.log(response.statusCode, "bank_country_code is mandatory")


        })
        it("Account_Name is required", async () => {
            let accountName = accountNamecreation(2);
            let accountNumber = accountNumbercreation(10);
            let PaymenMethod = values("Payment_methods-LOCAL");
            let bankCountryCode = values("bank_country_code_US");
            let aba = values("aba_valid")
            let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, null, accountNumber, null, null, aba);
            const response = await request.post(CREATE_BENEFICIARIES)
                .set('content-type', 'application/json')
                .set("Authorization", `Bearer ${TOKEN}`)
                .set('headers', '[object Object]')
                .send(payload)
            expect(response.statusCode).to.equal(400)
            expect(response.body.code).to.equal("payment_schema_validation_failed")
            console.log(response.statusCode, "Account_Name parameter is mandatory")
        })
        it("Account_Number is required", async () => {
            let accountName = accountNamecreation(2);
            let accountNumber = accountNumbercreation(10);
            let PaymenMethod = values("Payment_methods-LOCAL");
            let bankCountryCode = values("bank_country_code_US");
            let aba = values("aba_valid")
            let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, null, null, null, aba);
            const response = await request.post(CREATE_BENEFICIARIES)
                .set('content-type', 'application/json')
                .set("Authorization", `Bearer ${TOKEN}`)
                .set('headers', '[object Object]')
                .send(payload)
            expect(response.statusCode).to.equal(400)
            expect(response.body.code).to.equal("payment_schema_validation_failed")
            console.log(response.statusCode, "account_Number parameter is mandatory")
        })



        it('SWIFT code is required - US', async () => {

            let accountName = accountNamecreation(2);
            let accountNumber = accountNumbercreation(10);
            let PaymenMethod = values("Payment_methods-SWIFT");
            let bankCountryCode = values("bank_country_code_US");
            let aba = values("aba_valid")
            let swiftcode = values("SWIFTCODE_US_6")
            let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, null, null, aba);
            const response = await request.post(CREATE_BENEFICIARIES)
                .set('content-type', 'application/json')
                .set("Authorization", `Bearer ${TOKEN}`)
                .set('headers', '[object Object]')
                .send(payload)
            expect(response.statusCode).to.equal(400)
            expect(response.body.code).to.equal("payment_schema_validation_failed")
            console.log(response.statusCode, "swift code is mandatory when payment method is SWIFT in case of US")
        })

        it('SWIFT code is required - AU', async () => {

            let accountName = accountNamecreation(2);
            let accountNumber = accountNumbercreation(10);
            let PaymenMethod = values("Payment_methods-SWIFT");
            let bankCountryCode = values("bank_country_code_AU");
            let bsb = values("bsb_valid")
            let swiftcode = values("SWIFTCODE_AU_6")
            let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, null, bsb, null);
            const response = await request.post(CREATE_BENEFICIARIES)
                .set('content-type', 'application/json')
                .set("Authorization", `Bearer ${TOKEN}`)
                .set('headers', '[object Object]')
                .send(payload)


            expect(response.statusCode).to.equal(400)
            expect(response.body.code).to.equal("payment_schema_validation_failed")
            console.log(response.statusCode, "swift code is mandatory when payment method is SWIFT in case of AU")
        })


        it('"SWift code is required - CN"', async () => {


            let accountName = accountNamecreation(2);
            let accountNumber = accountNumbercreation(10);
            let PaymenMethod = values("Payment_methods-SWIFT");
            let bankCountryCode = values("bank_country_code_CN");
            let swiftcode = values("SWIFTCODE_CN_6")
            let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, null, null, null);
            const response = await request.post(CREATE_BENEFICIARIES)
                .set('content-type', 'application/json')
                .set("Authorization", `Bearer ${TOKEN}`)
                .set('headers', '[object Object]')
                .send(payload)


            expect(response.statusCode).to.equal(400)
            expect(response.body.code).to.equal("payment_schema_validation_failed")
            console.log(response.statusCode, "swift code is mandatory when payment method is SWIFT in case of CN")

        })


        it('"Lack of aba when bank_country_code is US"', async () => {
            let accountName = accountNamecreation(2);
            let accountNumber = accountNumbercreation(10);
            let PaymenMethod = values("Payment_methods-SWIFT");
            let bankCountryCode = values("bank_country_code_US");
            let aba = values("aba_valid")
            let swiftcode = values("SWIFTCODE_US_6")
            let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, swiftcode, null, null);
            const response = await request.post(CREATE_BENEFICIARIES)
                .set('content-type', 'application/json')
                .set("Authorization", `Bearer ${TOKEN}`)
                .set('headers', '[object Object]')



            expect(response.statusCode).to.equal(400)
            expect(response.body.code).to.equal("invalid_argument")
            console.log(response.statusCode, "aba is mandatory when bank_country_code is US")
        })

        it('"Lack of bsb when bank_country_code is AU"', async () => {

            let accountName = accountNamecreation(2);
            let accountNumber = accountNumbercreation(10);
            let PaymenMethod = values("Payment_methods-SWIFT");
            let bankCountryCode = values("bank_country_code_AU");
            let bsb = values("bsb_valid")
            let swiftcode = values("SWIFTCODE_AU_6")
            let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, swiftcode, null, null);
            const response = await request.post(CREATE_BENEFICIARIES)
                .set('content-type', 'application/json')
                .set("Authorization", `Bearer ${TOKEN}`)
                .set('headers', '[object Object]')
            expect(response.statusCode).to.equal(400)
            expect(response.body.code).to.equal("invalid_argument")
            console.log(response.statusCode, "bsb is mandatory when bank_country_code is AU")
        })

    })


    context('Empty Value of parameters', function () {
        it("payment_method parameter should not be empty", async () => {

            let accountName = accountNamecreation(2);
            let accountNumber = accountNumbercreation(10);
            let PaymenMethod = values("Payment_methods-LOCAL");
            let bankCountryCode = values("bank_country_code_US");
            let aba = values("aba_valid")
            let payload = createBeneficiariesPayload("", bankCountryCode, accountName, accountNumber, null, null, aba);
            const response = await request.post(CREATE_BENEFICIARIES)
                .set('content-type', 'application/json')
                .set("Authorization", `Bearer ${TOKEN}`)
                .set('headers', '[object Object]')
                .send(payload)

            expect(response.statusCode).to.equal(400)
            expect(response.body.code).to.equal("invalid_argument")
            console.log(response.statusCode, "payment_method parameter value should not be empty")

        })


        it('"bank_country_code parameter should not be empty"', async () => {

            let accountName = accountNamecreation(2);
            let accountNumber = accountNumbercreation(10);
            let PaymenMethod = values("Payment_methods-LOCAL");
            let bankCountryCode = values("bank_country_code_US");
            let aba = values("aba_valid")
            let payload = createBeneficiariesPayload(PaymenMethod, "", accountName, accountNumber, null, null, aba);
            const response = await request.post(CREATE_BENEFICIARIES)
                .set('content-type', 'application/json')
                .set("Authorization", `Bearer ${TOKEN}`)
                .set('headers', '[object Object]')
                .send(payload)

            expect(response.statusCode).to.equal(400)
            expect(response.body.code).to.equal("invalid_argument")
            console.log(response.statusCode, "bank_country_code parameter value should not be empty")


        })

        it('"account_name parameter value should not be empty"', async () => {

            let accountName = accountNamecreation(2);
            let accountNumber = accountNumbercreation(10);
            let PaymenMethod = values("Payment_methods-LOCAL");
            let bankCountryCode = values("bank_country_code_US");
            let aba = values("aba_valid")
            let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, "", accountNumber, null, null, aba);
            const response = await request.post(CREATE_BENEFICIARIES)
                .set('content-type', 'application/json')
                .set("Authorization", `Bearer ${TOKEN}`)
                .set('headers', '[object Object]')
                .send(payload)

            expect(response.statusCode).to.equal(400)
            expect(response.body.code).to.equal("payment_schema_validation_failed")
            console.log(response.statusCode, "account_name parameter value should not be empty")


        })

        it('"account_number should not be empty"', async () => {

            let accountName = accountNamecreation(2);
            let accountNumber = accountNumbercreation(10);
            let PaymenMethod = values("Payment_methods-LOCAL");
            let bankCountryCode = values("bank_country_code_US");
            let aba = values("aba_valid")
            let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, "", null, null, aba);
            const response = await request.post(CREATE_BENEFICIARIES)
                .set('content-type', 'application/json')
                .set("Authorization", `Bearer ${TOKEN}`)
                .set('headers', '[object Object]')
                .send(payload)

            expect(response.statusCode).to.equal(400)
            expect(response.body.code).to.equal("payment_schema_validation_failed")
            console.log(response.statusCode, "account_number parameter value should not be empty")
        })






        it('"Swift code should not be empty"', async () => {

            let accountName = accountNamecreation(2);
            let accountNumber = accountNumbercreation(10);
            let PaymenMethod = values("Payment_methods-SWIFT");
            let bankCountryCode = values("bank_country_code_US");
            let aba = values("aba_valid")
            let swiftcode = values("SWIFTCODE_US_6")
            let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, "", null, aba);
            const response = await request.post(CREATE_BENEFICIARIES)
                .set('content-type', 'application/json')
                .set("Authorization", `Bearer ${TOKEN}`)
                .set('headers', '[object Object]')
                .send(payload)

            expect(response.statusCode).to.equal(400)
            expect(response.body.code).to.equal("payment_schema_validation_failed")
            console.log(response.statusCode, "swift code parameter value is not provided")
        })



        it('"aba number should not empty when country is US - local"', async () => {
            let accountName = accountNamecreation(2);
            let accountNumber = accountNumbercreation(10);
            let PaymenMethod = values("Payment_methods-SWIFT");
            let bankCountryCode = values("bank_country_code_US");
            let aba = values("aba_valid")
            let swiftcode = values("SWIFTCODE_US_6")
            let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, swiftcode, null, "");
            const response = await request.post(CREATE_BENEFICIARIES)
                .set('content-type', 'application/json')
                .set("Authorization", `Bearer ${TOKEN}`)
                .set('headers', '[object Object]')
                .send(payload)

            expect(response.statusCode).to.equal(400)
            expect(response.body.code).to.equal("payment_schema_validation_failed")
            console.log(response.statusCode, "aba number parameter value is not provided")
        })



        it('bsb Paramtere value should be provided when bank_country_code is AU""', async () => {
            let accountName = accountNamecreation(2);
            let accountNumber = accountNumbercreation(10);
            let PaymenMethod = values("Payment_methods-SWIFT");
            let bankCountryCode = values("bank_country_code_AU");
            let bsb = values("bsb_valid")
            let swiftcode = values("SWIFTCODE_AU_6")
            let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, swiftcode, "", null);
            const response = await request.post(CREATE_BENEFICIARIES)
                .set('content-type', 'application/json')
                .set("Authorization", `Bearer ${TOKEN}`)
                .set('headers', '[object Object]')
            expect(response.statusCode).to.equal(400)
            expect(response.body.code).to.equal("invalid_argument")
            console.log(response.statusCode, "bsb parameter value is mandatory when bank_country_code is AU")
        })

    })



    context('Invalid value of parameters', function () {
        it("invalid value of payment_method, neither LOCAL or SWIFT", async () => {
            let accountName = accountNamecreation(2);
            let accountNumber = accountNumbercreation(10);
            let PaymenMethod = values("Payment_methods-Invalid");
            let bankCountryCode = values("bank_country_code_US");
            let aba = values("aba_valid")
            let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, null, null, aba);
            const response = await request.post(CREATE_BENEFICIARIES)
                .set('content-type', 'application/json')
                .set("Authorization", `Bearer ${TOKEN}`)
                .set('headers', '[object Object]')
                .send(payload)
            expect(response.statusCode).to.equal(400)
            expect(response.body.code).to.equal("invalid_argument")
            console.log(response.statusCode, "payment_method: mandatory, value should be either LOCAL or SWIFT,current value is TEST")

        })
        it("invalid value of payment_method, SWIFT", async () => {
            let accountName = accountNamecreation(2);
            let accountNumber = accountNumbercreation(10);
            let PaymenMethod = values("Payment_methods-SWIFT1");
            let bankCountryCode = values("bank_country_code_US");
            let aba = values("aba_valid")
            let swiftcode = values("SWIFTCODE_US_6")
            let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, swiftcode, null, aba);
            const response = await request.post(CREATE_BENEFICIARIES)
                .set('content-type', 'application/json')
                .set("Authorization", `Bearer ${TOKEN}`)
                .set('headers', '[object Object]')
                .send(payload)
            expect(response.statusCode).to.equal(400)
            expect(response.body.code).to.equal("invalid_argument")
            console.log(response.statusCode, "payment_method: mandatory, value should be either LOCAL or SWIFT,current value is swift")
        })
        it("invalid value of payment_method, LOCAL", async () => {
            let accountName = accountNamecreation(2);
            let accountNumber = accountNumbercreation(10);
            let PaymenMethod = values("Payment_methods-LOCAL1");
            let bankCountryCode = values("bank_country_code_US");
            let aba = values("aba_valid")
            let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, null, null, aba);
            const response = await request.post(CREATE_BENEFICIARIES)
                .set('content-type', 'application/json')
                .set("Authorization", `Bearer ${TOKEN}`)
                .set('headers', '[object Object]')
                .send(payload)
            expect(response.statusCode).to.equal(400)
            expect(response.body.code).to.equal("invalid_argument")
            console.log(response.statusCode, "payment_method: mandatory, value should be either LOCAL or SWIFT,current value is LOCAL1")
        })

        it("invalid value of bank_country_code, neither 'US' or 'AU', nor 'CN' in case of SWIFT", async () => {
            let accountName = accountNamecreation(2);
            let accountNumber = accountNumbercreation(10);
            let PaymenMethod = values("Payment_methods-SWIFT");
            let bankCountryCode = values("bank_country_code_invalid");
            let swiftcode = values("SWIFTCODE_US_6")
            let aba = values("aba_valid")
            let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, swiftcode, null, aba);
            const response = await request.post(CREATE_BENEFICIARIES)
                .set('content-type', 'application/json')
                .set("Authorization", `Bearer ${TOKEN}`)
                .set('headers', '[object Object]')
                .send(payload)
            expect(response.statusCode).to.equal(400)
            expect(response.body.code).to.equal("payment_schema_validation_failed")
            console.log(response.statusCode, "bank_country_code: mandatory, can be one of US, AU, CN,current value is MN")

        })

        it("invalid value of bank_country_code, neither 'US' or 'AU', nor 'CN' in case of LOCAL", async () => {
            let accountName = accountNamecreation(2);
            let accountNumber = accountNumbercreation(10);
            let PaymenMethod = values("Payment_methods-LOCAL");
            let bankCountryCode = values("bank_country_code_invalid");
            let aba = values("aba_valid")
            let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, null, null);
            const response = await request.post(CREATE_BENEFICIARIES)
                .set('content-type', 'application/json')
                .set("Authorization", `Bearer ${TOKEN}`)
                .set('headers', '[object Object]')
                .send(payload)
            expect(response.statusCode).to.equal(400)
            expect(response.body.code).to.equal("payment_schema_validation_failed")
            console.log(response.statusCode, "bank_country_code: mandatory, can be one of US, AU, CN,current value is MN")
        })
        it("invalid value of swift_code when payment_method is 'SWIFT'", async () => {
            let accountName = accountNamecreation(2);
            let accountNumber = accountNumbercreation(10);
            let PaymenMethod = values("Payment_methods-SWIFT");
            let bankCountryCode = values("bank_country_code_CN");
            let swiftcode = values("SWIFTCODE_CN_11_invalid")
            let aba = values("aba_valid")
            let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, swiftcode, null, null);
            const response = await request.post(CREATE_BENEFICIARIES)
                .set('content-type', 'application/json')
                .set("Authorization", `Bearer ${TOKEN}`)
                .set('headers', '[object Object]')
                .send(payload)
            expect(response.statusCode).to.equal(400)
            expect(response.body.code).to.equal("payment_schema_validation_failed")
            console.log(response.statusCode, "Please enter valid swift code, current swift code is BKCHCNBJXXX")
        })
        context('Invalid length of parameters', function () {
            it("Invalid length of account_name, less than 2", async () => {
                let accountName = accountNamecreation(1);
                let accountNumber = accountNumbercreation(10);
                let PaymenMethod = values("Payment_methods-LOCAL");
                let bankCountryCode = values("bank_country_code_US");
                let aba = values("aba_valid")
                let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, null, null, aba);
                const response = await request.post(CREATE_BENEFICIARIES)
                    .set('content-type', 'application/json')
                    .set("Authorization", `Bearer ${TOKEN}`)
                    .set('headers', '[object Object]')
                    .send(payload)
                expect(response.statusCode).to.equal(400)
                expect(response.body.code).to.equal("payment_schema_validation_failed")
                console.log(response.statusCode, "Account Name lenght must be between 2 to 10 character,current length is 1 ")


            })

            it("Invalid length of account_name, more than 10", async () => {
                let accountName = accountNamecreation(11);
                let accountNumber = accountNumbercreation(10);
                let PaymenMethod = values("Payment_methods-LOCAL");
                let bankCountryCode = values("bank_country_code_US");
                let aba = values("aba_valid")
                let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, null, null, aba);
                const response = await request.post(CREATE_BENEFICIARIES)
                    .set('content-type', 'application/json')
                    .set("Authorization", `Bearer ${TOKEN}`)
                    .set('headers', '[object Object]')
                    .send(payload)
                expect(response.statusCode).to.equal(400)
                expect(response.body.code).to.equal("payment_schema_validation_failed")
                console.log(response.statusCode, "Account Name lenght must be between 2 to 10 character,current length is 11 ")

            })
            it("Invalid length of account_number when bank_country_code is US, more than 17", async () => {
                let accountName = accountNamecreation(5);
                let accountNumber = accountNumbercreation(18);
                let PaymenMethod = values("Payment_methods-LOCAL");
                let bankCountryCode = values("bank_country_code_US");
                let aba = values("aba_valid")
                let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, null, null, aba);
                const response = await request.post(CREATE_BENEFICIARIES)
                    .set('content-type', 'application/json')
                    .set("Authorization", `Bearer ${TOKEN}`)
                    .set('headers', '[object Object]')
                    .send(payload)

                expect(response.statusCode).to.equal(400)
                expect(response.body.code).to.equal("payment_schema_validation_failed")
                console.log(response.statusCode, "for US, account number is 1-17 character long,current length is 18 ")

            })

            it("Invalid length of account_number when bank_country_code is AU, less than 6", async () => {
                let accountName = accountNamecreation(5);
                let accountNumber = accountNumbercreation(5);
                let PaymenMethod = values("Payment_methods-SWIFT");
                let bankCountryCode = values("bank_country_code_AU");
                let bsb = values("bsb_valid")
                let swiftcode = values("SWIFTCODE_AU_6")
                let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, swiftcode, bsb, null);
                const response = await request.post(CREATE_BENEFICIARIES)
                    .set('content-type', 'application/json')
                    .set("Authorization", `Bearer ${TOKEN}`)
                    .set('headers', '[object Object]')
                    .send(payload)
                expect(response.statusCode).to.equal(400)
                expect(response.body.code).to.equal("payment_schema_validation_failed")
                console.log(response.statusCode, "for AU, account number is 6-9 character long,current length is 05 ")
            })

            it("Invalid length of account_number when bank_country_code is AU, more than 9", async () => {
                let accountName = accountNamecreation(5);
                let accountNumber = accountNumbercreation(10);
                let PaymenMethod = values("Payment_methods-SWIFT");
                let bankCountryCode = values("bank_country_code_AU");
                let bsb = values("bsb_valid")
                let swiftcode = values("SWIFTCODE_AU_6")
                let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, swiftcode, bsb, null);
                const response = await request.post(CREATE_BENEFICIARIES)
                    .set('content-type', 'application/json')
                    .set("Authorization", `Bearer ${TOKEN}`)
                    .set('headers', '[object Object]')
                    .send(payload)

                expect(response.statusCode).to.equal(400)
                expect(response.body.code).to.equal("payment_schema_validation_failed")
                console.log(response.statusCode, "for AU, account number is 6-9 character long,current length is 10 ")
            })


            it("Invalid length of account_number when bank_country_code is CN, less than 8", async () => {
                let accountName = accountNamecreation(5);
                let accountNumber = accountNumbercreation(7);
                let PaymenMethod = values("Payment_methods-SWIFT");
                let bankCountryCode = values("bank_country_code_CN");
                let swiftcode = values("SWIFTCODE_CN_6")
                let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, swiftcode, null, null);
                const response = await request.post(CREATE_BENEFICIARIES)
                    .set('content-type', 'application/json')
                    .set("Authorization", `Bearer ${TOKEN}`)
                    .set('headers', '[object Object]')
                    .send(payload)

                expect(response.statusCode).to.equal(400)
                expect(response.body.code).to.equal("payment_schema_validation_failed")
                console.log(response.statusCode, "for CN, account number is 8-20 character long,current length is 7 ")
            })

            it("Invalid length of account_number when bank_country_code is CN, greater than 20", async () => {
                let accountName = accountNamecreation(5);
                let accountNumber = accountNumbercreation(21);
                let PaymenMethod = values("Payment_methods-SWIFT");
                let bankCountryCode = values("bank_country_code_CN");
                let swiftcode = values("SWIFTCODE_CN_6")
                let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, swiftcode, null, null);
                const response = await request.post(CREATE_BENEFICIARIES)
                    .set('content-type', 'application/json')
                    .set("Authorization", `Bearer ${TOKEN}`)
                    .set('headers', '[object Object]')
                    .send(payload)


                expect(response.statusCode).to.equal(400)
                expect(response.body.code).to.equal("payment_schema_validation_failed")
                console.log(response.statusCode, "for CN, account number is 8-20 character long,current length is 21 ")
            })

            it("Invalid length of swift_code(neither 8 or 11)", async () => {
                let accountName = accountNamecreation(5);
                let accountNumber = accountNumbercreation(20);
                let PaymenMethod = values("Payment_methods-SWIFT");
                let bankCountryCode = values("bank_country_code_CN");
                let swiftcode = values("SWIFTCODE_CN_invalid")
                let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, swiftcode, null, null);
                const response = await request.post(CREATE_BENEFICIARIES)
                    .set('content-type', 'application/json')
                    .set("Authorization", `Bearer ${TOKEN}`)
                    .set('headers', '[object Object]')
                    .send(payload)
                expect(response.statusCode).to.equal(400)
                expect(response.body.code).to.equal("payment_schema_validation_failed")
                console.log(response.statusCode, "swift code should be either 8 or 11 characters,current length is 13 ")
            })

            it("Invalid length of bsb(not 6) when bank_country_code is 'AU'", async () => {
                let accountName = accountNamecreation(5);
                let accountNumber = accountNumbercreation(10);
                let PaymenMethod = values("Payment_methods-SWIFT");
                let bankCountryCode = values("bank_country_code_AU");
                let bsb = values("bsb_invalid")
                let swiftcode = values("SWIFTCODE_AU_6")
                let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, swiftcode, bsb, null);
                const response = await request.post(CREATE_BENEFICIARIES)
                    .set('content-type', 'application/json')
                    .set("Authorization", `Bearer ${TOKEN}`)
                    .set('headers', '[object Object]')
                    .send(payload)
                expect(response.statusCode).to.equal(400)
                expect(response.body.code).to.equal("payment_schema_validation_failed")
                console.log(response.statusCode, "for AU, bsb is 6 character long,current length is 7 ")
            })

            it("Invalid length of aba(not 9) when bank_country_code is 'US'", async () => {
                let accountName = accountNamecreation(5);
                let accountNumber = accountNumbercreation(10);
                let PaymenMethod = values("Payment_methods-SWIFT");
                let bankCountryCode = values("bank_country_code_US");
                let aba = values("aba_invalid")
                let swiftcode = values("SWIFTCODE_US_6")
                let payload = createBeneficiariesPayload(PaymenMethod, bankCountryCode, accountName, accountNumber, swiftcode, null, aba);
                const response = await request.post(CREATE_BENEFICIARIES)
                    .set('content-type', 'application/json')
                    .set("Authorization", `Bearer ${TOKEN}`)
                    .set('headers', '[object Object]')
                    .send(payload)
                expect(response.statusCode).to.equal(400)
                expect(response.body.code).to.equal("payment_schema_validation_failed")
                console.log(response.statusCode, "for US, aba is 9 character long,current length is 6 ")
            })
        })










    })
})
