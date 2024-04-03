const num1v = document.getElementById("num1")
const den1v = document.getElementById("den1")
const num2v = document.getElementById("num2")
const den2v = document.getElementById("den2")
const option = document.getElementById("option")
const result = document.getElementById("result")
function convertfractiontostr(fraction) {
    if(fraction[0] > fraction[1]) {
        var full = Math.floor(fraction[0] / fraction[1])
        return `${full} ${fraction[0] - (fraction[1] * full)}/${fraction[1]}`
    } else {
        return `${fraction[0]}/${fraction[1]}`
    }
}
function addfraction(num1, denum1, num2, denum2) {
    const common_denum = denum1 * denum2;

    const result_num = num1 * denum2 + num2 * denum1;

    const gcd_value = gcd(result_num, common_denum);

    const simplified_num = result_num / gcd_value;
    const simplified_denum = common_denum / gcd_value;

    return [simplified_num, simplified_denum];
}
function subtractFraction(num1, denum1, num2, denum2) {
    const common_denum = denum1 * denum2;

    const result_num = num1 * denum2 - num2 * denum1;

    const gcd_value = gcd(result_num, common_denum);

    const simplified_num = result_num / gcd_value;
    const simplified_denum = common_denum / gcd_value;

    return [simplified_num, simplified_denum];
}
function multiplyFraction(num1, denum1, num2, denum2) {
    const result_num = num1 * num2;
    const result_denum = denum1 * denum2;

    const gcd_value = gcd(result_num, result_denum);

    const simplified_num = result_num / gcd_value;
    const simplified_denum = result_denum / gcd_value;

    return [simplified_num, simplified_denum];
}
function divideFraction(num1, denum1, num2, denum2) {
    const result_num = num1 * denum2;
    const result_denum = denum1 * num2;

    const gcd_value = gcd(result_num, result_denum);

    const simplified_num = result_num / gcd_value;
    const simplified_denum = result_denum / gcd_value;

    return [simplified_num, simplified_denum];
}
function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
document.getElementById("calc").onclick = function () {
    switch (option.value) {
        case "add": {
            result.innerText = convertfractiontostr(addfraction(Number(num1v.value), Number(den1v.value),Number(num2v.value),Number(den2v.value)))
            break
        }
        case "subtract": {
            result.innerText = convertfractiontostr(subtractFraction(Number(num1v.value), Number(den1v.value),Number(num2v.value),Number(den2v.value)))
            break
        }
        case "multiply": {
            result.innerText = convertfractiontostr(multiplyFraction(Number(num1v.value), Number(den1v.value),Number(num2v.value),Number(den2v.value)))
            break
        }
        case "divide": {
            result.innerText = convertfractiontostr(divideFraction(Number(num1v.value), Number(den1v.value),Number(num2v.value),Number(den2v.value)))
            break
        }
        default :{
            result.innerText = `Umm how did you do that?`
        }
    }
}