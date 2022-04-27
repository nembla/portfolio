<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div class="experience">Projects</div>

  <div class="project project1">
    <div class="projLeft projComponent">
      <div class="projImage">
        <img
          src="https://images.unsplash.com/photo-1504253163759-c23fccaebb55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt=""
          srcset=""
        />
      </div>
    </div>
    <div class="projRight">
      <div class="projTitle">Cloud.World</div>
      <div class="projComponent projDesc">
        Cloud World is a simple weather app. The app was built using Vue.js. It
        uses OpenWeather API for real time accurate weather data and the Pexels
        API for dynamically searching for and applying a background based on
        user query.
      </div>
      <div class="projComponent projTech">
        Vue.js --- OpenWeather --- Pexels
      </div>
      <div class="projComponent projTech"><i class="fa fa-github"></i></div>
    </div>
  </div>

  <div class="project">
    <div class="projRight">
      <div class="projTitle">Matching Network AI</div>
      <div class="projComponent projDesc">
        Cloud World is a weather app. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Vero voluptas dicta facilis pariatur quo, inventore,
        quaerat voluptatum quos optio veniam magni aliquam dolores voluptatibus
        voluptate sit ipsa, sed vel earum.
      </div>
    </div>
    <div class="projLeft projComponent">
      <div id="cloudWorld" class="projTitle">
        <i class="bi bi-cloud-haze"></i>
      </div>
    </div>
  </div>

  <div class="project project1">
    <div class="projLeft projComponent">
      <div id="cloudWorld" class="projTitle">
        <i class="bi bi-cloud-haze"></i>
      </div>
    </div>
    <div class="projRight">
      <div class="projTitle">PyTranslate</div>
      <div class="projComponent projDesc">
        Cloud World is a weather app. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Vero voluptas dicta facilis pariatur quo, inventore,
        quaerat voluptatum quos optio veniam magni aliquam dolores voluptatibus
        voluptate sit ipsa, sed vel earum.
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.project {
  display: flex;
  margin: auto;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
}

.projComponent {
  margin: auto;
  margin-left: 0.5em;
  margin-right: 0.5em;
  min-width: 20vw;
  max-width: 25vw;
}

.projTitle {
  display: flex;
  justify-content: end;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1.5em;
}

.projDesc {
  border-radius: 8px;
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 5px;
}

.projRight {
}

.project1 {
  padding-right: 100px;
}

.project2 {
}

.projImage img {
  max-width: 30vw;
  border-radius: 8px;
}

.projTech {
  margin: auto;
  text-align: end;
  margin-top: 8px;
}
</style>