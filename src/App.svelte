<script lang="ts">
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <div class="">
    <div id="fist-page" class="m-0 flex flex-col min-h-screen justify-center">
      <h1 class="text-6xl mb-5">Sven Ahac</h1>

      <ul class="flex flex-row space-x-5 justify-center">
        <li><a target="_blank" href="https://github.com/svenahac" class="hover:text-lg duration-300">GitHub</a></li>
        <p>|</p>
        <li><a target="_blank" href="https://www.linkedin.com/in/svenahac/" class="hover:text-lg duration-300">LinkedIn</a></li>
        <p>|</p>
        <li><a target="_blank" href="mailto:ahacsh@gmail.com" class="hover:text-lg duration-300">Email</a></li>
      </ul>
    </div>
    <div id="about" class="h-72">
      <h2 class="text-4xl mb-5">About me</h2>
      <p>I am a 21 year old student that is currently studying computer science at UP FAMNIT.</p> 
      <p>I am aspiring to become a web and software developer.</p>
 
    </div>
    <div id="projects" class="m-0 flex flex-col min-h-screen">
      <h2 class="text-4xl mb-10">Projects</h2>

      <!-- First Project -->
      <div id="p1" class="mb-20 flex dsk:flex-row flex-col h-130 dsk:h-60 dsk:space-x-10 justify-center rounded-md">
        <div class="container border-4 border-white mb-10 m-auto dsk:m-0 dsk:w-100 w-4/6 overflow-hidden rounded-md"><a target="_blank" href="https://los.svenahac.com/"><img class="w-full h-full" alt="League of Stats" src="/assets/los.png"></a></div>
        <div class="container dsk:w-100 w-4/6 m-auto dsk:m-0">
          <p>League of Stats is a statistic website for League Of Legends. It supports searching for 3 servers and displays user stats and stats for 5 most recent matches.</p>
          <p>Technologies used: React.js, Typescript, Node.js, CSS</p>
          <ul class="flex flex-row space-x-5 mt-5 justify-center">
            <li><a target="_blank" href="https://github.com/svenahac/league-of-stats" class="hover:text-lg duration-200">GitHub</a></li>
            <p>|</p>
            <li><a target="_blank" href="https://los.svenahac.com/" class="hover:text-lg duration-200">Website</a></li>
          </ul>
        </div>
      </div>

      <!-- Second Project -->
      <div id="p2" class="mb-20 flex dsk:flex-row flex-col-reverse h-130 dsk:h-60 dsk:space-x-10 justify-center rounded-md">
        <div class="container dsk:w-100 w-4/6 m-auto dsk:m-0">
          <p>Memory is a simple javascript card matching game made for a school assigment</p>
          <p>Technologies used: Javascript, HTML, CSS</p>
          <ul class="flex flex-row space-x-5 mt-5 justify-center">
            <li><a target="_blank" href="https://github.com/svenahac/Memory" class="hover:text-lg duration-200">GitHub</a></li>
          </ul>
        </div>
        <div class="container border-4 border-white mb-10 m-auto dsk:m-0 dsk:w-100 w-4/6 overflow-hidden rounded-md"><a target="_blank" href="https://github.com/svenahac/Memory"><img class="w-full h-full" alt="Memory" src="/assets/memory.png"></a></div>
      </div>

      <!-- Third Project -->
      <div id="p3" class="mb-20 flex dsk:flex-row flex-col h-130 dsk:h-60 dsk:space-x-10 justify-center rounded-md">
        <div class="container border-4 border-white mb-10 m-auto dsk:m-0 dsk:w-100 w-4/6 overflow-hidden rounded-md"><a target="_blank" href="https://github.com/svenahac/WordGame"><img class="w-full h-full" alt="Word Search" src="/assets/wordGame.png"></a></div>
        <div class="container dsk:w-100 w-4/6 m-auto dsk:m-0">
          <p>Word Search is a game made with java for a school assigment. In the game you collect points by finding words in the english alphabet. </p>
          <p>Technologies used: Java, Swing GUI</p>
          <ul class="flex flex-row space-x-5 mt-5 justify-center">
            <li><a target="_blank" href="https://github.com/svenahac/WordGame" class="hover:text-lg duration-200">GitHub</a></li>
          </ul>
        </div>
      </div>
 
    </div>
  </div>
  
</main>

<style>
  
</style>