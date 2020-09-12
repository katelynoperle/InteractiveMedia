d3.select("#CentreAthletics")
.on("click",function()
    {
    d3.select("#sports")
    .classed("hidden",false);
})

d3.select("#soccer")
.on("click",function()
    {
    d3.select("#banner")
    .text("Correct");
})

d3.select("#lacrosse")
.on("click", function()
    {
    d3.select("#banner")
    .text("False")
})
