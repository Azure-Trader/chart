document.addEventListener('DOMContentLoaded', function() {
    var chart = document.getElementById('chart');

    data.forEach(function (candle, index) {
        var candleElement = document.createElement('div');
        candleElement.className = 'candle';
        candleElement.style.left = (index * 10) + 'px';

        var body = document.createElement('div');
        body.className = 'body' + (parseFloat(candle['Close']) > parseFloat(candle['Open']) ? '' : ' fall');
        body.style.height = Math.abs(parseFloat(candle['Close']) - parseFloat(candle['Open'])) + 'px';
        body.style.top = Math.min(parseFloat(candle['Close']), parseFloat(candle['Open'])) + 'px';

        var wick = document.createElement('div');
        wick.className = 'wick';
        wick.style.height = (parseFloat(candle['High']) - parseFloat(candle['Low'])) + 'px';
        wick.style.top = parseFloat(candle['Low']) + 'px';

        candleElement.appendChild(body);
        candleElement.appendChild(wick);
        chart.appendChild(candleElement);
    });
});
