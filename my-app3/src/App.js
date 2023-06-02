import { RedStripe } from './RedStripe'
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css';
// import { BlueStripe } from './BlueStripe'
import { RecoilRoot } from 'recoil'
import { BlueStripe } from './BlueStripe';
import { GreenStripe } from './GreenStripe';

const queryClinet = new QueryClient()

function App() {
  return (
    <div>
      <QueryClientProvider client ={queryClinet}>
        <RedStripe />
        <RecoilRoot/>
        <BlueStripe/>
        <GreenStripe/>
      </QueryClientProvider>
  
    </div>
  );
}

export default App;
