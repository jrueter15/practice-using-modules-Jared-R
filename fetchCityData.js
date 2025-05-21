import chalk from "chalk";

// use a module to simulate fetching weather data
// display a weather summary in the console

export function fetchCityData(city, cityData) {
  if (cityData[city]) {
    console.log(chalk.red.bold(`\nWeather for ${city}`));
    console.log(
      chalk.green(`Temperature: ${cityData[city].temp} degrees Fahrenheit`)
    );
    console.log(chalk.blue(`The conditions are ${cityData[city].condition}`));
  } else {
    console.log(chalk.yellow("Incorrect city"));
  }
}
