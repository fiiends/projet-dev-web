const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");

// Object that stores values of minimum and maximum angle for a value
const rotationValues = [
  { minDegree: 0, maxDegree: 40, value: "Histoire" },
  { minDegree: 41, maxDegree: 80, value: "Géographie" },
  { minDegree: 81, maxDegree: 120, value: "Musique" },
  { minDegree: 121, maxDegree: 160, value: "Cinéma" },
  { minDegree: 161, maxDegree: 200, value: "Littérature" },
  { minDegree: 201, maxDegree: 240, value: "Mythologie" },
  { minDegree: 241, maxDegree: 280, value: "Drapeaux" },
  { minDegree: 281, maxDegree: 320, value: "Sport" },
  { minDegree: 321, maxDegree: 360, value: "Sciences" },
];

// Size of each piece
const data = Array(9).fill(11.11); // 9 segments, each taking ~11.11% of the circle

// Background color for each piece
var pieColors = [
  "#8b35bc", "#b163da", "#8b35bc",
  "#b163da", "#8b35bc", "#b163da",
  "#8b35bc", "#b163da", "#8b35bc",
];

// Create chart
let myChart = new Chart(wheel, {
  // Plugin for displaying text on pie chart
  plugins: [ChartDataLabels],
  // Chart Type Pie
  type: "pie",
  data: {
    // Labels (values which are to be displayed on chart)
    labels: [
      "Histoire", "Géographie", "Musique",
      "Cinéma", "Littérature", "Mythologie",
      "Drapeaux", "Sport", "Sciences",
    ],
    // Settings for dataset/pie
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    // Responsive chart
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      // Hide tooltip and legend
      tooltip: false,
      legend: {
        display: false,
      },
      // Display labels inside pie chart
      datalabels: {
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 16 },
      },
    },
  },
});

// Display value based on the random angle
const valueGenerator = (angleValue) => {
  for (let i of rotationValues) {
    // If the angleValue is between min and max then display it
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      finalValue.innerHTML = `<p>Thème: ${i.value}</p>`;
      spinBtn.disabled = false;
      break;
    }
  }
};

// Spinner count
let count = 0;
// 100 rotations for animation and last rotation for result
let resultValue = 101;

// Start spinning
spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  // Empty final value
  finalValue.innerHTML = `<p>Choix du thème !</p>`;
  // Generate random degrees to stop at
  let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
  // Interval for rotation animation
  let rotationInterval = window.setInterval(() => {
    // Set rotation for piechart
    myChart.options.rotation = myChart.options.rotation + resultValue;
    // Update chart with new value
    myChart.update();
    // If rotation > 360 reset it back to 0
    if (myChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      myChart.options.rotation = 0;
    } else if (count > 15 && myChart.options.rotation == randomDegree) {
      // Adjust the angle to account for the final stopping position
      let adjustedDegree = 360 - (randomDegree % 360);
      valueGenerator(adjustedDegree);
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
    }
  }, 10);
});
