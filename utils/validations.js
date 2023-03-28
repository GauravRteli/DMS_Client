export function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
export function validateName(name){
    if(name == "") return false;
    else return true;
}
export function validatePhoneNo(number){
    if(number.length !== 10) return false;
    else return true;
}