<script>
    import Project from '$lib/Project.svelte';
    import projects from '$lib/projects.json';
</script>
  
  <h1>{projects.length} Projects</h1>
  <p>Here is a showcase of my projects.</p>
  
  <!-- Projects grid container -->
  <div class="projects">
      {#each projects as p}
        <article>
            <h2>{p.title}</h2>
            <img src={p.image} alt="Project image for {p.title}">
            <p>{p.description}</p>
        </article>
      {/each}
  </div>
  
  <style>
    .projects {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Responsive grid layout */
      gap: 1.5em;
    }
  
    article {
      border: 1px solid #ddd;
      padding: 1em;
      border-radius: 8px;
      background-color: #f9f9f9;
      text-align: center;
    }
  
    article img {
      width: 100px;
      height: 100px;
      margin: 0.5em 0;
    }
  
    article h2 {
      margin: 0.5em 0;
    }
  
    article p {
      font-size: 0.9em;
      color: #666;
    }
  
    /* Dark theme styles */
    @media (prefers-color-scheme: dark) {
      body {
        background-color: #121212;
        color: #E0E0E0;
      }
  
      article {
        background-color: #222;
        border-color: rgba(255, 255, 255, 0.1);
      }
  
      article p {
        color: #ccc;
      }
    }
  </style>
  