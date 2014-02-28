function checkLogin() {
    var curuser = WAF.directory.currentUser();
    if (curuser != null) return true;
    else return false;
}

function sleep(milliseconds) {
    console.log('sleep nhe');
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }

}

function formatnum(num, decimals) {
    num = unformatnum(num);
    var numberIn = num + '';
    if (isNaN(numberIn)) {
        return '';
    }
    var pos = numberIn.indexOf('.');
    var sf = "";
    if (pos != -1) {
        if (decimals) {
            sf = numberIn.substr(pos + 1);
            if (Number(sf) > 0) {
                if (sf.length > decimals) {
                    if (Number(sf.substr(decimals, 1)) < 5) {
                        sf = sf.substr(0, decimals);
                        sf = (Number(sf) == 0) ? "" : ("." + sf);
                    }
                    else {
                        sf = "." + sf.substr(0, decimals - 1) + (Number(sf.substr(decimals - 1, 1)) + 1);
                    }
                }
                else {
                    sf = "." + sf;
                }
            }
        }
        numberIn = numberIn.substr(0, pos);
    }
    if (numberIn.length <= 3) return numberIn + sf;
    else {
        var firstDigit = numberIn.substr(0, 1);
        if (firstDigit == '-' || firstDigit == '+') {
            numberIn = numberIn.substr(1);
        }
        else {
            firstDigit = '';
        }
        if (numberIn.length <= 3) return firstDigit + numberIn;

        var arrRet = new Array();
        do {
            arrRet.push(numberIn.substr(numberIn.length - 3, 3));
            numberIn = numberIn.substr(0, numberIn.length - 3);
        } while (numberIn.length > 3);
        if (numberIn.length > 0) arrRet.push(numberIn);

        arrRet.reverse();
        return firstDigit + arrRet.join(',') + sf;
    }
}

function unformatnum(num) {
    var numberIn = num + '';
    if (numberIn === "") return "";
    return numberIn.replace(/,/gi, '');
}