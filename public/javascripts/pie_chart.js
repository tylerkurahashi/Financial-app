// Mock Data
let food = document.getElementsByClassName('sum_food')[0].innerText
console.log(food)
let lifestyle = document.getElementsByClassName('sum_lifestyle')[0].innerText
let daily = document.getElementsByClassName('sum_daily')[0].innerText
let other = document.getElementsByClassName('sum_others')[0].innerText

let data = [
    {
     value: Number(food),
     color:"#F7464A",
     highlight: "#FF5A5E",
     label: "Food"
    },
    {
     value: Number(lifestyle),
     color: "#46BFBD",
     highlight: "#5AD3D1",
     label: "Lifestyle"
    },
    {
     value: Number(daily),
     color: "#FDB45C",
     highlight: "#FFC870",
     label: "Daily"
    },
    {
    value:Number(other),
    color: "blue",
    highlight: "#FD4853",
    label: "Others"
    }
   ];

   data.sort(function(a,b) {
       return b.value-a.value
   })
   
   var myChart = new Chart(document.getElementById("mycanvas").getContext("2d")).Doughnut(data);