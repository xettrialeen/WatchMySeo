

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     chrome.tabs.query(
//       {
//         active: true,
//         lastFocusedWindow: true,
//       },
//       function (tabs) {
//         sendResponse({});

      
//         return true;
//     }
//   );
// });




// var options = {
//     series: [{
//     name: 'series1',
//     data: [31, 40, 28, 51, 42, 109, 100],  dropShadow: {
//         enabled: true,
//         top: 0,
//         left: 0,
//         blur: 3,
//         opacity: 0.5
//       }
//   }, {
//     name: 'series2',
//     data: [11, 32, 45, 32, 34, 52, 41]
//   }],
//     chart: {
//     height: 350,
//     type: 'area'
//   },
//   dataLabels: {
//     enabled: false
//   },
//   stroke: {
//     curve: 'smooth'
//   },
//   xaxis: {
//     type: 'datetime',
//     categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
//   },
//   tooltip: {
//     x: {
//       format: 'dd/MM/yy HH:mm'
//     },
//   },
//   fill: {
//     colors: ['#F44336', '#E91E63', '#9C27B0']
//   },

//   };

//   var chart = new ApexCharts(document.querySelector("#chart"), options);
//   chart.render();