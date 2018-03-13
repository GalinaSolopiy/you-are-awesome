// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (property) => {return property;};

const createNotEnumerableProperty = (property) => {

    Object.defineProperty(Object.prototype, property, {

        numerable: false,
        set: (value) => { property = value },
        get: () => {return property }
})
        return property;
};

const createProtoMagicObject = () => {

    var result = () => {};
    result.__proto__ = new Function();
    ressult.prototype = result.__proto__;

    return result;
};

     var i = 0;
    Function.__proto__.valueOf = () => {
     return i;
}

const incrementor = () => {

        ++i;

    return incrementor;
};

var test = 0;

const asyncIncrementor = () => {

    return promise = new Promise((resolve) => { resolve(++test);
})
};

const createIncrementer = () => {

    var ind = 0;
    function* felom(){
        var ind = 0;
        while(ind <= 2)
            yield ++ind;
    }
    return felom();
};

// return same argument not earlier than in one second, and not later, than in two

const returnBackInSecond = (parametr) => {

    return new Promise(resolve => {

        setTimeout(() => {
        resolve(parametr);

    }, 1000);
});
};

const getDeepPropertiesCount = (object) => {

    var result = 0;

    (function search(object) {
        for (var element in object) {

            if (!isEmpty(element)) {
                result++;
                search(object[element]);
            }
        }

    })(object);
    return result;
};

isEmpty = function(object) {
    for (var key in object) {
        if (object.hasOwnProperty(key))
            return false;
    }
    return true;
}


const createSerializedObject = () => {

    return new Number;
};

const sortByProto = (array) => {

    array.sort(objectSort);

    return array;
};

    objectSort = function(pre, next) {
    return pre - next;
}


exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;