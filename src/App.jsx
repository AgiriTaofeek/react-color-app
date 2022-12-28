import { useState } from 'react';
import SingleColor from './components/SingleColor';
import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#6495ED').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
    try {
      const colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  const cards = list.map((color, i) => {
    // console.log(color.hex);
    return <SingleColor key={i} {...color} index={i} hex={color.hex} />;
  });
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? 'error' : ''}`}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">{cards}</section>
    </>
  );
}

export default App;
