import './App.css';
import Map from './Map';

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const zoom = 11;

const componentFactory = (city, lat, lng, text) => {
  const Component = ({ text }) => {
    return <div>{text}</div>
  }

  return <Component  key={ city } lat={ lat } lng= { lng } text = { text } /> 
};

const data = [
  {
    city: "city1",
    text: "My Marker",
  },
  {
    city: "city2",
    text: "My Marker 2",
  },
];

function App() {
  return (
    <div className="App">
      <Map
        apiKey={ apiKey }
        zoom={ zoom }
        componentFactory={ componentFactory }
        data={ data }
      />
    </div>
  );
}

export default App;
