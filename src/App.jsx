import { createRef } from 'react';
import './App.css';
import RecipeCard from './components/RecipeCard';
import ReactToPdf from 'react-to-pdf';
import RecipeCardPrintable from './components/RecipeCardPrintable';

function App() {
  const ref = createRef();

  // PDF options
  const options = {
    orientation: 'portrait',
    unit: 'in',
    format: [8.3, 11.7],
  };

  return (
    <div className='App'>
      <main className='container'>
        <div className='container-header'>
          <h1>Recipe card</h1>

          {/* React to PDF wraps a button and uses its click event to create a PDF of the component with ref */}
          <ReactToPdf
            targetRef={ref}
            filename='recipe-card.pdf'
            options={options}>
            {({ toPdf }) => (
              <button className='print-recipe-button' onClick={toPdf}>
                Print
              </button>
            )}
          </ReactToPdf>
        </div>

        {/* A preview of recipe card with responsive dimension */}
        <RecipeCard />

        {/* This div is just the recipe card wrapper in order to pass ref easily. We style it to hide it from the UI. See App.css:55 */}
        <div className='recipe-card-wrapper' ref={ref}>
          {/* Printable recipe card with precise A4 dimensions, 796.8px by 1123.2px. This is what we really want to print, the previous one was for show */}
          <RecipeCardPrintable />
        </div>
      </main>
    </div>
  );
}

export default App;
