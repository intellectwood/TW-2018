function count(collection){
    let re = [];
    collection.forEach((element) => {
        if(!re[element]) re[element] = 1;
        else re[element]++;
    })
    return re;
}
function formset(re){
    let result = [];
    for (var key in re) {
        let tmp = {};
        tmp['key'] = key;
        tmp['count'] = re[key];
        result.push(tmp);
    }
    return result;
}
function output(set_a, object_b){
    set_a.filter((element) => {
        if (object_b.value.includes(element.key)) element.count -= parseInt(element.count/3);
    })
    return set_a;
}
function create_updated_collection(collection_a, object_b) {
    let result = count(collection_a);
    result = formset(result);   
    result = output(result,object_b);
    return result;
  //在这里写入代码
}

module.exports = create_updated_collection;
