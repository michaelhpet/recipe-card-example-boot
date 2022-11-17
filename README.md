# Print recipe card with react-to-pdf

This is a very quick example of how one might create a recipe card using [react-to-pdf](https://npmjs.com/package/react-to-pdf)

The workflow is simple.

- We create a `RecipeCard` component in two variations. The first is a preview recipe card that can be shown to the user before printing, and it goes in line with the layout. The other is the high fidelity component of the recipe card with the correct A4 dimensions, `796.8px by 1123.2px` and no layout constraints, just pixel-perfect A4. These two variations are exactly similar in UI, just their dimensions are different.

  > These variations were created as different components in this example but can effectively be created as just one component and differentiated using props or classNames.

- We use the `react-to-pdf` library to render a button which onClick event will trigger a callback from `react-to-pdf` to print a specified component (with a target ref, `ref`).

  ```JavaScript
  <ReactToPdf
      targetRef={ref}
      filename='recipe.pdf'>
      {({ toPdf }) => (
        <button onClick={toPdf}>
          Print
        </button>
      )}
  </ReactToPdf>
  ```

  > The `ReactToPdf` wrapper is imported from the `react-to-pdf` library. It passes a context object to its child node. This context object is destructured to get the `toPdf` function which was then passed as the `onClick` event handler for the underlying `button`. See the `react-to-pdf` [docs](https://npmjs.com/package/react-to-pdf) to learn more.

- Remember that `ReactToPdf` is targeting a component using a ref. So, we have a `RecipeCard` component owning that ref.

  ```JavaScript
  // A preview of recipe card with responsive dimension
  <RecipeCard />

  // This div is just the recipe card wrapper in order to pass ref easily. We style it to hide it from the UI.

  // Inside, we have a printable recipe card with precise A4 dimensions.
  <div ref={ref}>
    <RecipeCardPrintable />
  </div>
  ```

## Live link

[https://sosos](https://vercel.com)
