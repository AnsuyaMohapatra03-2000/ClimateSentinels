
var map = L.map('map', {
    center: [4.2105, 101.9758],
    zoom: 5,
    maxBounds: [[-11.087886, 95.152344], [26.115986, 130.517578]],
    minZoom: 4,
    maxZoom: 10,
    worldCopyJump: false
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const countries = {
    "Indonesia": { lat: -0.7893, lon: 113.9213, disasters: {"Earthquake": 136, "Flood": 247, "Landslide": 64, "Volcanic Activity": 61, "Storm": 14
}},
"Philippines": { lat: 12.8797, lon: 121.7740, disasters: {
    "Earthquake": 40, "Flood": 156, "Landslide": 31, "Volcanic Activity": 29, "Storm": 377
}},
"Cambodia": { lat: 12.5657, lon: 104.9910, disasters: {
    "Earthquake": 0, "Flood": 21, "Landslide": 0, "Volcanic Activity": 0, "Storm": 6
}},
"Laos": { lat: 19.8563, lon: 102.4955, disasters: {
    "Earthquake": 0, "Flood": 28, "Landslide": 0, "Volcanic Activity": 0, "Storm": 11
}},
"Myanmar": { lat: 21.9162, lon: 95.9560, disasters: {
    "Earthquake": 10, "Flood": 36, "Landslide": 10, "Volcanic Activity": 0, "Storm": 21
}},
"Malaysia": { lat: 4.2105, lon: 101.9758, disasters: {
    "Earthquake": 2, "Flood": 65, "Landslide": 4, "Volcanic Activity": 0, "Storm": 8
}},
"Thailand": { lat: 15.8700, lon: 100.9925, disasters: {
    "Earthquake": 4, "Flood": 87, "Landslide": 3, "Volcanic Activity": 0, "Storm": 42
}},
"Timor-Leste": { lat: -8.8742, lon: 125.7275, disasters: {
    "Earthquake": 1, "Flood": 6, "Landslide": 0, "Volcanic Activity": 0, "Storm": 2
}},
"Vietnam": { lat: 14.0583, lon: 108.2772, disasters: {
    "Earthquake": 0, "Flood": 96, "Landslide": 6, "Volcanic Activity": 0, "Storm": 127
}}
};

// Function to create pie chart with adjusted canvas size
// function createPieChart(data, title) {
//     var ctx = document.createElement('canvas');
//     ctx.width = 500;  // Adjusted canvas width
//     ctx.height = 500; // Adjusted canvas height
//     document.body.appendChild(ctx);

//     var chart = new Chart(ctx.getContext('2d'), {
//         type: 'pie',
//         data: {
//             labels: Object.keys(data),
//             datasets: [{
//                 data: Object.values(data),
//                 backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
//                 borderColor: 'white',
//                 borderWidth: 2
//             }]
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: true, // Maintain the chart's aspect ratio
//             title: { display: true, text: title },
//             legend: { position: 'top', labels: { boxWidth: 10, padding: 5 } }, // Adjust legend settings
//             layout: {
//                 padding: {
//                     left: 5,
//                     right: 5,
//                     top: 5,
//                     bottom: 5
//                 }
//             }
//         }
//     });
//     return ctx;
// }

function createPieChart(data, title) {
    // Create a canvas with the desired dimensions
    var ctx = document.createElement('canvas');
    ctx.width = 1000;  // Adjust canvas width here
    ctx.height = 1000; // Adjust canvas height here
    document.body.appendChild(ctx); // Append it to the body (or a specific container if needed)

    var chart = new Chart(ctx.getContext('2d'), {
        type: 'pie',
        data: {
            labels: Object.keys(data),
            datasets: [{
                data: Object.values(data),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                borderColor: 'white',
                borderWidth: 2
            }]
        },
        options: {
            responsive: false,  // Set to false to use custom dimensions
            maintainAspectRatio: false, // Set to false to allow non-square dimensions
            title: { display: true, text: title },
            legend: { position: 'top', labels: { boxWidth: 10, padding: 5 } },
            layout: {
                padding: {
                    left: 5,
                    right: 5,
                    top: 5,
                    bottom: 5
                }
            }
        }
    });
    return ctx;
}


// Place markers and bind popup with pie charts
Object.keys(countries).forEach(function (key) {
    var country = countries[key];
    var marker = L.marker([country.lat, country.lon]).addTo(map);
    marker.on('click', function () {
        var chart = createPieChart(country.disasters, key);
        marker.bindPopup(chart, { minWidth: 300, maxWidth: 300 }).openPopup(); // Adjusted popup width
    });
});
