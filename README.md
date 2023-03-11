`npm i google-map-react`

Create a Google API key according to the [documentation](https://developers.google.com/maps/documentation/javascript/get-api-key). Create the `env.local` file, and paste your API key to the file: `REACT_APP_GOOGLE_API_KEY=<YOUR_API_KEY>`.

Remove the `<React.StrictMode>` in the `index.js` file.

Data is an Array of Objects which must have `city` as a property. Components you want to render on Google Map should handle some properties of the elements of the data Array.
