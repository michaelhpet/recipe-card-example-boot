export default function RecipeCard() {
  const jollofImage =
    'https://images.unsplash.com/photo-1599354607448-8ad6e92b027a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80';

  return (
    <article className='recipe-card-root'>
      <section className='recipe-card-header'>
        <h1>Jollof Rice</h1>
        <h3>How to prepare jollof rice</h3>
      </section>

      <section className='recipe-card-image'>
        <img src={jollofImage} alt='Image for jollof rice' />
      </section>

      <section className='recipe-card-steps'>
        <h3>Steps</h3>
        <ol>
          <li>Rinse the rice</li>
          <li>Parboil the rice and make stew</li>
          <li>Mix parboiled rice with stew</li>
          <li>Leave to cook</li>
          <li>Serve</li>
        </ol>
      </section>
    </article>
  );
}
