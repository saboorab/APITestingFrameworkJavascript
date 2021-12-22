export const createBeneficiariesPayload = (paymentMethod, bankCountryCode, accountName, accountNumber, swiftCode, bsb, aba) => {
    var payload = {
        bank_country_code: bankCountryCode,
        account_name: accountName,
        account_number: accountNumber,
        payment_methods:paymentMethod

    }

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

    if( (paymentMethod || paymentMethod  === '')){
        requestBody["payment_methods"]= [paymentMethod ] 
}
//console.log(requestBody.bank_details,benficary.bankCountryCode)
    if( (bankCountryCode || bankCountryCode  === '')){
         requestBody.beneficiary.bank_details["bank_country_code"]= bankCountryCode 
}

    if( (accountName || accountName  === '')){
        requestBody.beneficiary.bank_details["account_name"]= accountName 
}
    if( (accountNumber || accountNumber  === '')){
        requestBody.beneficiary.bank_details["account_number"]= accountNumber
}

    if (payload.bank_country_code === 'CN') {
        requestBody.beneficiary.additional_info['business_registration_number'] = 'IT593003';
    }
    if (bsb || bsb === '' ) {
        requestBody.beneficiary.bank_details['account_routing_type1'] = 'bsb';
        requestBody.beneficiary.bank_details['account_routing_value1'] = bsb;
    } else if (aba || aba === '') {
        requestBody.beneficiary.bank_details['account_routing_type1'] = 'aba';
        requestBody.beneficiary.bank_details['account_routing_value1'] = aba;
    }

    if (swiftCode || swiftCode === '') {
        requestBody.beneficiary.bank_details['swift_code'] = swiftCode;
    }
    return requestBody;
}