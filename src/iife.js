var name = 'Tom';
(function() {
    if (typeof name == 'undefined') {
        var name = 'Jack' // let name = 'jack'
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
})();
// goodbye jack