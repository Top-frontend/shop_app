import 'whatwg-fetch';
import 'es6-promise';

export function get(url) {
    return fetch(url,{
        Accept:'application/json'
    })
}
function toUrlencoded(obj) {
    let ary=[];
    for (let key in obj){
        ary.push(`${key}=${obj[key]}`);
    }
    return ary.join('&');
}
export function post(url,obj) {
    return fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body:toUrlencoded(obj)
    })
}

