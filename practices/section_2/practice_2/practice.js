function count(collection){
    let re = [];
    collection.forEach((element) => {
        let rv = /^([a-z])(?:-*(\d+))?/i.exec(element);
        if (!re[rv[1]]) re[rv[1]] = 0;
        re[rv[1]] += rv[2] ? parseInt(rv[2], 10) : 1;
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
  //在这里写入代码
}

module.exports = count_same_elements;
