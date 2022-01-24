
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (typeof(matrix)==='undefined'){
        return [];
    }    
    if(matrix.length==1){
        return straight_1(matrix);
    }
    if(matrix.length==2){
        var a = straight_1(matrix);
        var b = reverse_1(matrix);
        var c = a.concat(b);
        return c;
    }
    if(matrix.length==3){
        var a = straight_1(matrix);
        var b = reverse_1(matrix);
        var c = straight_2(matrix);
        var f = a.concat(b);
        var e = f.concat(c);
        return e;
    }
    if(matrix.length==4){
        var a = straight_1(matrix);
        var b = reverse_1(matrix);
        var c = straight_2(matrix);
        var d = reverse_2(matrix);
        var f = a.concat(b);
        var e = f.concat(c);
        var h = e.concat(d);
        return h;
    }
    return [];
}

function straight_1(a){
    var s = a[0];
    var arr = [];
    for (let i=0; i<s.length; i++){
        arr.push(s[i]);
    }
    arr.join('');
    return arr;
}
function reverse_1(a){
    var s = a[1];
    var arr = [];
    for (let i=s.length - 1; i>=0; i--){
        arr.push(s[i]);
    }
    arr.join('');
    return arr;
}
function straight_2(a){
    var s = a[2];
    var arr = [];
    for (let i=0; i<s.length; i++){
        arr.push(s[i]);
    }
    arr.join('');
    return arr;
}
function reverse_2(a){
    var s = a[3];
    var arr = [];
    for (let i=s.length - 1; i>=0; i--){
        arr.push(s[i]);
    }
    arr.join('');
    return arr;
}
