/*
//map using d3+ (color the countries)
var sample_data = [
    {"year": "1992 - 2014", "country": "aschn", "name": "China", "tags": "birth country; undergraduate", "color": "#ABDDA4"},
    {"year": "2014", "country": "eudeu", "name": "Germany", "tags": "conference", "color": "#ABDDA4"},
    {"year": "2014 - 2017", "country": "nausa", "name": "United States", "tags": "graduate", "color": "#ABDDA4"},
    {"year": "2016", "country": "nabhs", "name": "Bahamas", "tags": "travel", "color": "#ABDDA4"},
    {"year": "2017", "country": "sachl", "name": "Chile", "tags": "research", "color": "#ABDDA4"}
];

var visualization = d3plus.viz()
    .container("#svg_map")        // container DIV to hold the visualization
    .data(sample_data)            // data to use with the visualization
    .coords({
        "mute": ["anata"],
        "value": "http://d3plus.org/topojson/countries.json"
    }) // pass topojson coordinates
    .type("geo_map")              // visualization type
    .id("country")                // key for which our data is unique on
    .text("name")                 // key to use for display text
    .color("color")               // key for coloring countries
    .tooltip(["year", "tags"])              // keys to place in tooltip
    .draw();                      // finally, draw the visualization!
*/

//using datamaps (d3) http://datamaps.github.io
var basic_choropleth = new Datamap({
  element: document.getElementById("svg_map"),
  projection: 'mercator',
  fills: {
    defaultFill: "#000000",
    above1000: "#b2dbad",
    between500and1000: "#0c3d06",
    under500: "#0c3d06"
  },
  data: {
    CHN: { fillKey: "between500and1000", NumberOfTimes: "11" },
    DEU: { fillKey: "above1000", NumberOfTimes: "2014" },
    USA: { fillKey: "above1000", NumberOfTimes: "2014 - 2017" },
    BHS: { fillKey: "under500", NumberOfTimes: "2016" },
    CHL: { fillKey: "under500", NumberOfTimes: "2017" }
  },
  geographyConfig: {
    popupTemplate: function(geo, data) {
        return ['<div class="hoverinfo"><strong>',
                'Country: ' + geo.properties.name,
                '<br> Number Of Times: ' + "data.year",
                '</strong></div>'].join('');
    }
  }
});
var legend = d3.select("#svg_map").append("svg").attr("id", "legend");
legend.append("rect").attr("x", "150").attr("y", "10").attr("width", "20").attr("height", "20").attr("fill", "#b2dbad");
legend.append("text").attr("x", "175").attr("y", "24").attr("font-size", "12px").text("Above 1000");
legend.append("rect").attr("x", "280").attr("y", "10").attr("width", "20").attr("height", "20").attr("fill", "#0c3d06");
legend.append("text").attr("x", "305").attr("y", "24").attr("font-size", "12px").text("between 500 and 1000");
legend.append("rect").attr("x", "475").attr("y", "10").attr("width", "20").attr("height", "20").attr("fill", "#0c3d06");
legend.append("text").attr("x", "500").attr("y", "24").attr("font-size", "12px").text("under 500");
