const { writeFileSync, mkdirSync} = require('fs');

require('dotenv').config();

const tarhetPath= './src/environments/environments.ts';

const envFileContent = `
  export const environment = {
    mapbox_key: " ${ process.env['MAPBOX_KEY'] }",
    otra: "PROPIEDAD",
  }
`;

mkdirSync('./src/environments', { recursive: true });

writeFileSync( tarhetPath, envFileContent);
