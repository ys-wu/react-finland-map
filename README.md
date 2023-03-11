`npm i google-map-react`

Create a Google API key according to the [documentation](https://developers.google.com/maps/documentation/javascript/get-api-key). Create the `env.local` file, and paste your API key to the file: `REACT_APP_GOOGLE_API_KEY=<YOUR_API_KEY>`.

Remove the `<React.StrictMode>` in the `index.js` file.

Data is an Array of Objects which must have `city` as a property. Components you want to render on Google Map should handle some properties of the elements of the data Array. NB! Y You may want to handle `zoom` dynamically in the component.

If you data looks like this:
```javascript
[
  {
    city: "Porvoo_Kilpilahti_satama",
    val: 0.644406392694064,
  },
  {
    city: "Enontekiö_Kilpisjärvi_Saana",
    val: 1.6413622526636226,
  },
]
```
You may want to handle `val` and `zoom`, for example:
```javascript
export default function Circle (props) {
  const { val, zoom } = props.data;
  const diameter = `${ 20 * val * Math.log(zoom) }px`

  const circleStyle ={
    width: diameter,
    height: diameter,
    borderRadius: '50%',
    backgroundColor: 'silver',
    opacity: 0.75,
  };

  return (
    <div style={circleStyle}></div>
  );
}
```
