function collect_same_elements(collection_a, collection_b) {
    let result = collection_a.filter(function(element){
        return collection_b.includes(element);
        });
    return result;
}

module.exports = collect_same_elements;
