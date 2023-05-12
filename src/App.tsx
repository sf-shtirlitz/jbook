import 'bulmaswatch/superhero/bulmaswatch.min.css'
import CodeCell from './components/code-cell';

function App() {
  return (
    <div>
      <CodeCell />
    </div>
  );
}
//sandbox="" means no communication between iFrame and parent window
//sandbox="allow-same-origin" - means communicaiton is allowed
export default App;
