// Worked with Elijah B
// installed yargs, chalk@4.1.2

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { fetchCityData } from "./fetchCityData.js";

let cityData = {
  Columbia: { temp: 80, condition: "sunny" },
  Chicago: { temp: 65, condition: "cloudy" },
  Nashville: { temp: 75, condition: "rainy" },
  Springfield: { temp: 73, condition: "hail" },
};

// commmand line will look like "node app.js --city london"
// use yargs to parse a --city argument

const argv = yargs(hideBin(process.argv))
  .option("city", {
    alias: "c",
    describe: "city name",
    type: "string",
    demandOption: true,
  })
  .help().argv;

fetchCityData(argv.city, cityData);

// I deleted the node_modules folder, which caused my code to throw a 'module not found' error. I then used npm install which reinstalled the whole folder. It is still greyed out due to gitignore.

// The current dependencies are chalk and yargs.

// Node modules holds all the dependencies. You can see chalk and yargs in the folder. You can also see a lot of different code in the files which makes the module work properly.

// Node modules should not be included in version control due to its size. There are a lot of files which can slow down operations.

// npm install reads the package.json file to see what dependencies are required. It then installs those dependencies. This is important due to new collaborators being able to quickly install the same dependencies, so they can quickly assist with the code rather than spending too much time in setup.
