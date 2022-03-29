import Card from './Card'
import "./Card.css";

function App() {
    return ( 
    <>
      <Card title="Title 1" subtitle="Sub Title 1" description="Hello world 1!" backgroundColor="red" width="250px"/>
      <Card title="Title 2" subtitle="Sub Title 2" description="Hello world 2!" backgroundColor="orange" width="250px"/>
      <Card title="Title 3" subtitle="Sub Title 3" description="Hello world 3!" backgroundColor="yellow" width="250px"/>
      <Card title="Title 4" subtitle="Sub Title 4" description="Hello world 4!" backgroundColor="green" width="250px"/>
    </>
  );
}

export default App;