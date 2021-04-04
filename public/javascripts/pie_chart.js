// Mock Data
let data = [
    {
     value: 300,
     color:"#F7464A",
     highlight: "#FF5A5E",
     label: "Food"
    },
    {
     value: 50,
     color: "#46BFBD",
     highlight: "#5AD3D1",
     label: "Lifestyle"
    },
    {
     value: 100,
     color: "#FDB45C",
     highlight: "#FFC870",
     label: "Others"
    },
    {
    value:100,
    color: "blue",
    highlight: "#FD4853",
    label: "Savings"
    }
   ];
   
   var myChart = new Chart(document.getElementById("mycanvas").getContext("2d")).Doughnut(data);