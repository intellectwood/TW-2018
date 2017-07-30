function count(collection){
    let re = [];
    collection.forEach((element) => {
        if(!re[element]) re[element] = 1;
        else re[element]++;
    })
    return re;
}
function output(re){
    let result = [];
    for (var key in re) {
        let tmp = {};
        tmp['key'] = key;
        tmp['count'] = re[key];
        result.push(tmp);
    }
    return result;
}
function count_same_elements(collection) {
    let result = count(collection);
    result = output(result);
    return result;   
}

module.exports = count_same_elements;
