import React from 'react';

export default function VerifyInput(manufacturer:string, lot:string, date:string,dose:string) {
    //Manufactuer and doesn't need to be checked, aren't from text input
    let valid:boolean = true;
    let lotRegExp:RegExp;
    let dateRegExp = new RegExp('(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.]2[01]');
    let doseRegExp = new RegExp('(first|second)');
    if (manufacturer === 'pfizer' || manufacturer === 'astrazeneca') {
        lotRegExp = new RegExp('^[0-9A-Za-z]{6}$');
    } else if (manufacturer === 'moderna' || manufacturer === 'jandj') {
        lotRegExp = new RegExp('^[0-9A-Za-z]{7}$');
    } else {
        return false
    }

    if(!lotRegExp.test(lot) || !dateRegExp.test(date)) {
        return false
    }
    if(!doseRegExp.test(dose)) {
        return false
    }
    return true;
}