
export function accountNumbercreation(length) {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

export function accountNamecreation(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}


export function values(expression) {
    switch(expression) {
        case 'SWIFTCODE_US_6':
            return 'PMFAUS66';

        case 'SWIFTCODE_US_11':
            return 'PMFAUS66HKG';

        case 'SWIFTCODE_US_Invalid':
            return 'PMFAUS66HKG12';

        case 'SWIFTCODE_AU_6':
            return 'AAYBAU2S';

        case 'SWIFTCODE_AU_11':     
            return 'AMPBAU2SRET';

        case 'SWIFTCODE_AU_Invalid':
            return 'PMFAUS66HKG1212';

        case 'SWIFTCODE_CN_6':
            return 'BKCHCNBJ';

        case 'SWIFTCODE_CN_11_invalid':
            return 'BKCHCNBJXXX';

        case 'bsb_valid':
            return '033547';

        case 'bsb_invalid':
            return '0335471';

        case 'aba_invalid':
            return '313140';

        case 'aba_valid':
            return '021000021';

        case "Payment_methods-SWIFT":
            return "SWIFT";

        case "Payment_methods-SWIFT1":
             return "swift";

        case "Payment_methods-LOCAL":
            return "LOCAL";

        case "Payment_methods-LOCAL1":
             return "LOCAL1"; 

        case "Payment_methods-Invalid":
            return "TEST";

        case "bank_country_code_US":
            return "US"; 

        case "bank_country_code_AU":
            return "AU";

        case "bank_country_code_CN":
            return "CN"; 

        case "bank_country_code_invalid":
            return "MN";
        

	}
}

