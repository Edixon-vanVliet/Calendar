import { PageHeader } from 'antd';
import Calendar from './components/calendar';
import Container from './components/container';

function App() {
  return (
    <div>
      <PageHeader style={{ border: '1px solid rgb(235, 237, 240)' }} title={'Calendar App'} />
      <Container>
        <Calendar />
      </Container>
    </div>
  );
}

export default App;
