var Loader = function () {
    var loader = document.querySelector('.loader-container'),
        meter = document.querySelector('.meter'),
        k, i = 1,
        counter = function () {
            if (i <= 99) {
                meter.innerHTML = "" + i.toString()+"%";
                i++;
            } else {
                window.clearInterval(k);
               setInterval(updatecount,100)
            }
        };
    var titles=["Unzipping...", "Unzipping..", "Unzipping."]
    function updatecount()
    {
        meter.innerHTML = titles[0];
        titles.unshift(titles.pop())
    }
    return {
        init: function (options) {
            options = options || {};
            var time = options.time ? options.time : 0,
                interval = time / 10;

            loader.classList.add('run');
            k = window.setInterval(counter, interval);
            setTimeout(function () {
                loader.classList.add('done');
            }, time);
        },
    }
}();

Loader.init({
    // If you have changed the @time in LESS, update this number to the corresponding value. Measured in miliseconds.
    time: 2000
});
