//Creating payload for createbeneficiary post rquest
export const createBeneficiariesPayload = (paymentMethod, bankCountryCode, accountName, accountNumber, swiftCode, bsb, aba) => {
    var payload = {
        bank_country_code: bankCountryCode,
        account_name: accountName,
        account_number: accountNumber,
        payment_methods:paymentMethod

    }

 //creating generic request bddy
    const requestBody = {
        "beneficiary": {
            "additional_info": {
                "personal_email": "john.walker@gmail.com"
            },
            "address": {
                "city": "Seattle",
                "country_code": "US",
                "postcode": "98104",
                "state": "Washington",
                "street_address": "412 5th Avenue"
            },
            "bank_details": {
                "account_currency": "USD",
                "bank_name": "JP Morgan Chase Bank",
                "local_clearing_system": "ACH",
            },
            "company_name": "ABC University",
            "entity_type": "COMPANY"
        },
        "nickname": "ABC University"
       
    };

//Defining payment method,either proper value can be supplied from the values function in utils->random or it can be empty    
    if( (paymentMethod || paymentMethod  === '')){
        requestBody["payment_methods"]= [paymentMethod ] 
}
//Defining bankCountryCode,either proper value can be supplied from the values function in utils->random or it can be empty
    if( (bankCountryCode || bankCountryCode  === '')){
         requestBody.beneficiary.bank_details["bank_country_code"]= bankCountryCode 
}
//Defining accountName,either proper value can be supplied from the accountname function in utils->random or it can be empty
    if( (accountName || accountName  === '')){
        requestBody.beneficiary.bank_details["account_name"]= accountName 
}
//Defining bankCountryCode,either proper value can be supplied from the account number function in utils->random or it can be empty
    if( (accountNumber || accountNumber  === '')){
        requestBody.beneficiary.bank_details["account_number"]= accountNumber
}

//Adding business_registration_number in the request in case of bank_country_code === 'CN' as it is mandatory
    if (payload.bank_country_code === 'CN') {
        requestBody.beneficiary.additional_info['business_registration_number'] = 'IT593003';
    }

//Adding bsb tag and value from the values funtion in utils->random.js in the request or it can have empty values
    if (bsb || bsb === '' ) {
        requestBody.beneficiary.bank_details['account_routing_type1'] = 'bsb';
        requestBody.beneficiary.bank_details['account_routing_value1'] = bsb;
    } 
//Adding aba tag and value from the values funtion in utils->random.js in the request or it can have empty values
    else if (aba || aba === '') {
        requestBody.beneficiary.bank_details['account_routing_type1'] = 'aba';
        requestBody.beneficiary.bank_details['account_routing_value1'] = aba;
    }

//Adding swift tag and value from the values funtion in utils->random.js in the request or it can have empty values
    if (swiftCode || swiftCode === '') {
        requestBody.beneficiary.bank_details['swift_code'] = swiftCode;
    }
    return requestBody;
}