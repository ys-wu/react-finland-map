import './App.css';
import Map from './Map';

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const zoom = 11;

const Component = ({ city, val }) => {
    return <div key={ city }>{ val }</div>
  }

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
