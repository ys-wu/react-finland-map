import './App.css';
import Map from './Map';

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const zoom = 11;

// const Component = (props) => {
//   const { val } = props.data;

//   return <div>{ val }</div>
// }

const Component = (props) => {
  const { val } = props.data;
  const diameter = `${ 100 * val }px`

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
};

const data = [
  {
    city: "city1",
    val: 1,
  },
  {
    city: "city2",
    val: 2,
  },
];

function App() {
  return (
    <div className="App">
      <Map
        apiKey={ apiKey }
        zoom={ zoom }
        Component={ Component }
        data={ data }
      />
    </div>
  );
}

export default App;
