(function() {
    console.log(fn);
    if (1 === 1) {
        function fn() {}
    }
    console.log(fn);
})();