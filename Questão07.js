function estaEntre(num1, min, max, entre) {
    if (entre == true) {

        if (num1 >= min && num1 <= max) {
            return true
        }else {
            return false
        }
    }else {

        if (num1 > min && num1 < max) {
            return true
        }else {
            return false
        }
    }
}

console.log(estaEntre(10, 10, 30, true))