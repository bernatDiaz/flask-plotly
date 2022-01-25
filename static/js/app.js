function buildChart() {

    var colorlist = ['#FF3333','#4CFF33', '#3371FF']
    // Fetch the sample data for the plots
    var url = `/data/`;
    d3.json(url).then(function(response) {
        const sepal_length = response.sepal_length;
        const sepal_width = response.sepal_width;
        const petal_length = response.petal_length;
        const petal_width = response.petal_width;
        const labels = response.class;
  
    /*=========Build a bubble plot ==============*/
        var trace = {
            x: sepal_length,
            y: sepal_width,
            text: labels,
            marker:{
                size: petal_width.map(function(x){
                    return x * 20;
                }),
                color: petal_length,
                colorscale: "Portland"
            },
            mode: "markers"
        };
        var data = [trace];
        var layout = {
            title: "Iris Data set",
            xaxis:{title:"Sepal Length"},
            yaxis:{title:"Sepal Width"},
            showlegend: false,
            autoscale: true,
            margin: { t: 0 },
            hovermode: "closest",
        };
        Plotly.newPlot('bubble', data, layout, {responsive: true});
    });
}
buildChart()