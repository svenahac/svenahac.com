<script lang="ts">
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <div class="">
    <div id="fist-page" class="m-0 flex flex-col min-h-screen justify-center">
      <h1 class="text-6xl">Sven Ahac</h1>

      <ul class="flex flex-row space-x-5 justify-center">
        <li><a target="_blank" href="https://github.com/svenahac">GitHub</a></li>
        <p>|</p>
        <li><a target="_blank" href="https://www.linkedin.com/in/svenahac/">LinkedIn</a></li>
        <p>|</p>
        <li><a target="_blank" href="mailto:ahacsh@gmail.com">Email</a></li>
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
      <div id="p1" class="mb-20 flex flex-row h-60 space-x-10 justify-center">
        <div class="container border-4 border-white w-100">GitHub Link</div>
        <div class="container w-100">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat nunc vel tortor blandit consectetur. Donec sit amet tellus sit amet purus fringilla rutrum ut at purus. Pellentesque id pulvinar arcu. Fusce lacinia placerat dolor, id varius sapien tristique sit amet. In hac habitasse platea dictumst. Etiam congue commodo velit ut sagittis. Donec mattis magna massa, vitae convallis mauris posuere at. Fusce pulvinar dolor nibh, et luctus neque egestas in. 
          </p>
        </div>
      </div>

      <!-- Second Project -->
      <div id="p2" class="mb-20 flex flex-row h-60 space-x-10 justify-center">
        <div class="container w-100">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat nunc vel tortor blandit consectetur. Donec sit amet tellus sit amet purus fringilla rutrum ut at purus. Pellentesque id pulvinar arcu. Fusce lacinia placerat dolor, id varius sapien tristique sit amet. In hac habitasse platea dictumst. Etiam congue commodo velit ut sagittis. Donec mattis magna massa, vitae convallis mauris posuere at. Fusce pulvinar dolor nibh, et luctus neque egestas in. 
          </p>
        </div>
        <div class="container border-4 border-white w-100">GitHub Link</div>
      </div>

      <!-- Third Project -->
      <div id="p3" class="mb-10 flex flex-row h-60 space-x-10 justify-center">
        <div class="container border-4 border-white w-100">GitHub Link</div>
        <div class="container w-100">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat nunc vel tortor blandit consectetur. Donec sit amet tellus sit amet purus fringilla rutrum ut at purus. Pellentesque id pulvinar arcu. Fusce lacinia placerat dolor, id varius sapien tristique sit amet. In hac habitasse platea dictumst. Etiam congue commodo velit ut sagittis. Donec mattis magna massa, vitae convallis mauris posuere at. Fusce pulvinar dolor nibh, et luctus neque egestas in. 
          </p>
        </div>
      </div>
 
    </div>
  </div>
  
</main>

<style>
  
</style>