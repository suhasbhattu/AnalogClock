window.onload = function () {
    
    var updateCanvasClock = function () {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");

        var date = new Date();
        var angle;
        var radius = 300;
        var secHandLength = 275, minuteHandLength = 270, hourHandLength = 175;

        // clear everything on canvas, re-draw new elements every second
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);

        addClock();
        addClockCenter();
        addMinuteMarks();
        addSecondMarks();

        updateSeconds();
        updateMinutes();
        updateHours();

        function addClock() {
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 2;
            ctx.stroke();
        }
        function addClockCenter() {
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, 4, 0, Math.PI * 2);
            ctx.lineWidth = 3;
            ctx.fillStyle = '#000';
            ctx.strokeStyle = '#000';
            ctx.stroke();
        }

        function addMinuteMarks() {

            for (var i = 0; i < 12; i++) {
                angle = (i - 3) * (Math.PI * 2) / 12;       // THE ANGLE TO MARK.
                ctx.beginPath();

                var x1 = (canvas.width / 2) + Math.cos(angle) * (radius);
                var y1 = (canvas.height / 2) + Math.sin(angle) * (radius);
                var x2 = (canvas.width / 2) + Math.cos(angle) * (radius - 10);
                var y2 = (canvas.height / 2) + Math.sin(angle) * (radius - 10);

                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.lineWidth = 5;
                ctx.strokeStyle = '#000';
                ctx.stroke();
            }
        }

        function addSecondMarks() {

            for (var i = 0; i < 60; i++) {
                angle = (i - 3) * (Math.PI * 2) / 60;       // THE ANGLE TO MARK.
                ctx.beginPath();

                var x1 = (canvas.width / 2) + Math.cos(angle) * (radius);
                var y1 = (canvas.height / 2) + Math.sin(angle) * (radius);
                var x2 = (canvas.width / 2) + Math.cos(angle) * (radius - 10);
                var y2 = (canvas.height / 2) + Math.sin(angle) * (radius - 10);

                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.lineWidth = 2;
                ctx.strokeStyle = '#000';
                ctx.stroke();
            }
        }

        function updateSeconds() {

            var sec = date.getSeconds();
            angle = ((Math.PI * 2) * (sec / 60)) - ((Math.PI * 2) / 4);
            ctx.lineWidth = 3;              // HAND WIDTH.

            ctx.beginPath();
            // START FROM CENTER OF THE CLOCK.
            ctx.moveTo(canvas.width / 2, canvas.height / 2);   
            // DRAW THE LENGTH.
            ctx.lineTo((canvas.width / 2 + Math.cos(angle) * secHandLength),
                canvas.height / 2 + Math.sin(angle) * secHandLength);

            ctx.strokeStyle = '#F00';        // COLOR OF THE HAND.
            ctx.stroke();
        }

        function updateMinutes() {

            var min = date.getMinutes();
            angle = ((Math.PI * 2) * (min / 60)) - ((Math.PI * 2) / 4);
            ctx.lineWidth = 6;              // HAND WIDTH.

            ctx.beginPath();
            ctx.moveTo(canvas.width / 2, canvas.height / 2);  // START FROM CENTER.
            // DRAW THE LENGTH.
            ctx.lineTo((canvas.width / 2 + Math.cos(angle) * minuteHandLength),      
                canvas.height / 2 + Math.sin(angle) * minuteHandLength);

            ctx.strokeStyle = '#000';  // COLOR OF THE HAND.
            ctx.stroke();
        }

        function updateHours() {

            var hour = date.getHours();
            var min = date.getMinutes();
            angle = ((Math.PI * 2) * ((hour * 5 + (min / 60) * 5) / 60)) - ((Math.PI * 2) / 4);
            ctx.lineWidth = 10;              // HAND WIDTH.

            ctx.beginPath();
            ctx.moveTo(canvas.width / 2, canvas.height / 2);     // START FROM CENTER.
            // DRAW THE LENGTH.
            ctx.lineTo((canvas.width / 2 + Math.cos(angle) * hourHandLength),      
                canvas.height / 2 + Math.sin(angle) * hourHandLength);

            ctx.strokeStyle = '#000';   // COLOR OF THE HAND.
            ctx.stroke();
        }
    };
    
    setInterval(function () {
        updateCanvasClock();
    }, 1000);
};