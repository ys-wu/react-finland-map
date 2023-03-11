import './App.css';
import Map from './Map';
import Circle from './components/Circle';
import { fakeData } from './data/fakeData';

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const initStatus = {
  zoom: 6,
  center: {
    lat: 65.50,
    lng: 24.75,
  },
}

function App() {
  return (
    <div className="App">
      <Map
        apiKey={ apiKey }
        initStatus={ initStatus }
        Component={ Circle }
        data={ fakeData }
      />
    </div>
  );
}

export default App;
