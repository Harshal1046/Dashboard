window.onload = function () {

// Total Visitors (Chart 1)
    var chart= new CanvasJS.Chart("chartContainer1", {
        animationEnabled: true,
        exportEnabled: true,
        theme:"theme2",
        title:{
            text: "Generico"
        },


        axisX: {
            lineThickness: 2,
            interval:2
        },

        axisY:{
            interval:1
        },

        data: [

        {
        type: "line",
        showInLegend:true,
        legendText:"Customers",
        toolTipContent: "{x} <br> Visitors:{y}",
        dataPoints: [

                    { x: 1, y: 0 },
                    { x: 2, y: 0 },
                    { x: 3, y: 1 },
                    { x: 4, y: 1 },
                    { x: 5, y: 2 },
                    { x: 6, y: 4 },
                    { x: 7, y: 3 },
                    { x: 8, y: 3 },
                    { x: 9, y: 5 },
                    { x: 10, y: 5 },
                    { x: 11, y: 2 },
                    { x: 12, y: 2 },
                    { x: 13, y: 2 },
                    { x: 14, y: 0 },
                    { x: 15, y: 0 },
                    { x: 16, y: 0 },
                    { x: 17, y: 2 },
                    { x: 18, y: 2 }
                ]
            }
        ]
    });
chart.render();





// Total Customers (Chart 2)
    var chart= new CanvasJS.Chart("chartContainer2", {
        animationEnabled: true,
        exportEnabled: true,
        theme:"theme2",
        title:{
            text: "Generico"
        },


        axisX: {
            lineThickness: 2,
            interval:2
        },

        axisY:{
            interval:1
        },

        data: [

        {
        type: "line",
        showInLegend:true,
        legendText:"Visitors",
        toolTipContent: "{x} <br> Visitors:{y}",
        dataPoints: [

                    { x: 1, y: 0 },
                    { x: 2, y: 0 },
                    { x: 3, y: 1 },
                    { x: 4, y: 1 },
                    { x: 5, y: 2 },
                    { x: 6, y: 4 },
                    { x: 7, y: 1 },
                    { x: 8, y: 1 },
                    { x: 9, y: 1 },
                    { x: 10, y: 2 },
                    { x: 11, y: 2 },
                    { x: 12, y: 1 },
                    { x: 13, y: 2 },
                    { x: 14, y: 0 },
                    { x: 15, y: 1 },
                    { x: 16, y: 0 },
                    { x: 17, y: 2 },
                    { x: 18, y: 2 }
                ]
            }
        ]
   });
chart.render();







// Male/Female Customers Ratio (Chart 3)
var chart = new CanvasJS.Chart("chartContainer3",
    {
        animationEnabled: true,
        exportEnabled: true,
        theme:"theme1",
        title: {
            text: "Generico",
    },

    data: [
    {
        type: "doughnut",
        showInLegend: true,
        toolTipContent: "{indexLabel} - #percent %",
        legendText: "{indexLabel} : {y}",
        dataPoints: [
            { y: 29, indexLabel: "Male" },
            { y: 13, indexLabel: "Female" },
        ]
    },
    ]
});

//To Draw Chart
chart.render();




// Male/Female Visitors Ratio (Chart 4)
var chart = new CanvasJS.Chart("chartContainer4",
    {
        animationEnabled: true,
        exportEnabled: true,
        theme:"theme2",
        title: {
            text: "Generico",
    },

    data: [
    {
        type: "doughnut",
        showInLegend: true,
        toolTipContent: "{indexLabel} - #percent %",
        legendText: "{indexLabel} : {y}",
        dataPoints: [
            { y: 43, indexLabel: "Male" },
            { y: 26, indexLabel: "Female" },
        ]
    },
    ]
});

//To Draw Chart
chart.render();




//Age Histogram (Chart 5)
var chart = new CanvasJS.Chart("chartContainer5",
    {
    animationEnabled: true,
    exportEnabled: true,
    theme:"theme2",
    title:{
        text: "Generico"
    },

    axisX: {
        title: "Histogram",
        tickThickness: 0
    },

    axisX2: {
        title: "Histogram",
        tickThickness: 0
    },

    axisY: {
        title: "Data",
        lineThickness: 0
    },

    axisY2: {
        title: "Data",
        lineThickness: 0,
        tickThickness: 0
    },


    //To Hide/Unhide Data
    legend: {
        cursor: "pointer",
        itemclick: function (e) {
            //console.log("legend click: " + e.dataPointIndex);
            //console.log(e);
            if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            } else {
                e.dataSeries.visible = true;
            }

            e.chart.render();
        }
    },

    data: [{
        type: "column",
        axisXType:"secondary",
        showInLegend:true,
        legendText:"Histogram",
        toolTipContent: "Histogram : {y}",
        dataPoints: [
            { x: 0, y: 17 },
            { x: 2, y: 27 },
            { x: 4, y: 25},
            { x: 6, y: 20 },
            { x: 8, y: 26 },
            { x: 10, y: 34 },
            { x: 12, y: 28 },
            { x: 14, y: 19 },
            { x: 16, y: 14 },
            { x: 18, y: 7}
        ]
    },

        {
        type: "scatter",
        axisYType:"secondary",
        showInLegend:true,
        legendText:"Data",
        toolTipContent: "Data <br> x:{x} <br> y:{y}",
        dataPoints: [
                    { x: 1, y: 10 },
                    { x: 2, y: 20 },
                    { x: 3, y: 12 },
                    { x: 4, y: 15 },
                    { x: 5, y: 21 },
                    { x: 6, y: 43 },
                    { x: 7, y: 19 },
                    { x: 8, y: 13 },
                    { x: 9, y: 11 },
                    { x: 10, y: 27 },
                    { x: 11, y: 23 },
                    { x: 12, y: 12 },
                    { x: 13, y: 29 },
                    { x: 14, y: 20 },
                    { x: 15, y: 17 },
                    { x: 16, y: 30 },
                    { x: 17, y: 21 },
                    { x: 18, y: 20 },
                ]
            }
        ]
    });

    chart.render();





// Time Histogram (Chart 6)
var chart = new CanvasJS.Chart("chartContainer6",
    {
    animationEnabled: true,
    exportEnabled: true,
    theme:"theme2",
    title:{
            text: "Generico"
        },

    axisX: {
        title: "Histogram",
        tickThickness: 0
    },

    axisX2: {
        title: "Histogram",
        tickThickness: 0
    },

    axisY: {
        title: "Data",
        lineThickness: 0
    },

    axisY2: {
        title: "Data",
        lineThickness: 0,
        tickThickness: 0
    },


      //To Hide/Unhide Data
    legend: {
            cursor: "pointer",
            itemclick: function (e) {
                //console.log("legend click: " + e.dataPointIndex);
                //console.log(e);
                if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                    e.dataSeries.visible = false;
                } else {
                    e.dataSeries.visible = true;
                }

                e.chart.render();
            }
        },
      data: [{

        type: "column",
        axisXType:"secondary",
        showInLegend:true,
        legendText:"Histogram",
        toolTipContent: "Histogram : {y}",
        dataPoints: [
                { x: 2, y: 17 },
                { x: 4, y: 15},
                { x: 6, y: 10 },
                { x: 8, y: 16 },
                { x: 10, y: 19 },
                { x: 12, y: 8 },
                { x: 14, y: 9 },
                { x: 16, y: 14 },
                { x: 18, y: 7}
            ]
        },

        {
        type: "scatter",
        axisYType:"secondary",
        showInLegend:true,
        legendText:"Data",
        toolTipContent: "Data <br> x:{x} <br> y:{y}",
        dataPoints: [
                   { x: 1, y: 10 },
                   { x: 2, y: 20 },
                   { x: 3, y: 12 },
                   { x: 4, y: 15 },
                   { x: 5, y: 21 },
                   { x: 6, y: 43 },
                   { x: 7, y: 19 },
                   { x: 8, y: 13 },
                   { x: 9, y: 11 },
                   { x: 10, y: 27 },
                   { x: 11, y: 23 },
                   { x: 12, y: 12 },
                   { x: 13, y: 29 },
                   { x: 14, y: 20 },
                   { x: 15, y: 17 },
                   { x: 16, y: 30 },
                   { x: 17, y: 21 },
                   { x: 18, y: 20 }
                ]
            }
        ]
    });

    chart.render();




// Age (Chart 7)
var chart = new CanvasJS.Chart("chartContainer7",
    {
        animationEnabled: true,
        exportEnabled: true,
        theme:"theme1",
        title: {
            text: "Generico",
    },

    data: [
    {
        type: "pie",
        showInLegend: true,
        toolTipContent: "{indexLabel} - #percent %",
        radius:80,
        legendText: "{indexLabel} : {y}",
        dataPoints: [
                {indexLabel: '(25-30)', y: 3},
                {indexLabel: '(30-35)', y: 11, exploded: true},
                {indexLabel: '(35-40)', y: 6},
                {indexLabel: '(40-45)', y: 8},
                {indexLabel: '(45-50)', y: 6},
                {indexLabel: '(50-55)', y: 1},
                {indexLabel: '(55-60)', y: 8},
                {indexLabel: '(65-70)', y: 1},
                {indexLabel: '(75-80)', y: 2}
            ]
        },
    ]
});

//To Draw Chart
chart.render();



// Age Wise time Spent (Chart 8)
var chart = new CanvasJS.Chart("chartContainer8",
    {
        animationEnabled: true,
        exportEnabled: true,
        theme:"theme2",
        title: {
            text: "Generico",
    },

    data: [
    {
        type: "pie",
        showInLegend: true,
        toolTipContent: "{indexLabel} - #percent %",
        radius:80,
        legendText: "{indexLabel} : {y}",
        dataPoints: [
                {indexLabel: '(25-30)', y: 100},
                {indexLabel: '(30-35)', y: 230},
                {indexLabel: '(35-40)', y: 420},
                {indexLabel: '(40-45)', y: 530},
                {indexLabel: '(45-50)', y: 640, exploded: true},
                {indexLabel: '(50-55)', y: 180}
            ]
        },
    ]
});

//To Draw Chart
chart.render();



}