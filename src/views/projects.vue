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
    <div class="projLeft">
      <div class="projTitle projAlt">Vanilla JS Todo Application</div>
      <div class="projComponent projDesc">
        This is a basic CRUD application that allows users to add, delete, edit,
        and clear all todos in the list. <br /><br />
        To be implemented: cache user input so it remains on page refresh.
      </div>
      <div class="projComponent projTech projTech2">
        Vanilla JS --- HTML --- CSS
      </div>
      <div class="projComponent projTech projTech2">
        <a href="https://github.com/nemanjaone/vanilla-js-todo" target="_blank"
          ><i class="fa fa-github gitHub" style="font-size: 24px"></i
        ></a>
      </div>
    </div>
    <div class="projRight projComponent">
      <div class="projImage projImage2">
        <a href="https://nem-todo.herokuapp.com/index.html" target="_blank"
          ><img
            src="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            srcset=""
        /></a>
      </div>
    </div>
  </div>

  <div class="project project1">
    <div class="projLeft projComponent">
      <div class="projImage">
        <a href="https://nem-clouds.herokuapp.com/" target="_blank"
          ><img
            src="https://images.unsplash.com/photo-1504253163759-c23fccaebb55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            srcset=""
        /></a>
      </div>
    </div>
    <div class="projRight">
      <div class="projTitle">Cloud.World <i class="bi bi-cloud-haze"></i></div>
      <div class="projComponent projDesc">
        Cloud World is a simple weather app. The app was built using Vue.js. It
        uses OpenWeather API for real time accurate weather data and the Pexels
        API for dynamically searching for and applying a background based on
        user query (i.e. what location they want to see the weather for).
        <br />
        The user interface also has a hidden feature: by single-clicking on the
        temperature output, the user may dynamically swap between using
        Fahrenheit and Celcius!
      </div>
      <div class="projComponent projTech">
        Vue.js --- OpenWeather --- Pexels
      </div>
      <div class="projComponent projTech">
        <a href="https://github.com/nemanjaone/weatherapp_vue" target="_blank"
          ><i class="fa fa-github gitHub" style="font-size: 24px"></i
        ></a>
      </div>
    </div>
  </div>

  <div class="project project1">
    <div class="projLeft">
      <div class="projTitle projAlt">Wireless Power Transfer // ML</div>
      <div class="projComponent projDesc">
        This project was a created to try and predict the values of a capacitor
        and inductor in L-shaped matching network configuration. Power
        reflection is a big concern on RFIC (Radio Frequency Integrated
        Circuits), so minimizing reflection is important. This was my first
        brush with machine learning (linear regression). Research conducted at
        Kennesaw State University 2019.
      </div>
      <div class="projComponent projTech projTech2">
        Python --- Pandas --- NumPy --- Matplotlib
      </div>
      <div class="projComponent projTech projTech2">
        <a href="https://github.com/nemanjaone/wptai" target="_blank"
          ><i class="fa fa-github gitHub" style="font-size: 24px"></i
        ></a>
      </div>
    </div>
    <div class="projRight projComponent">
      <div class="projImage projImage2">
        <a href="https://github.com/nemanjaone/wptai" target="_blank"
          ><img
            src="https://images.unsplash.com/photo-1586256053828-a36b572ab01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80"
            alt=""
            srcset=""
        /></a>
      </div>
    </div>
  </div>

  <div class="project project1">
    <div class="projLeft projComponent">
      <div class="projImage">
        <a href="https://github.com/nemanjaone/google_trans" target="_blank"
          ><img
            src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80"
            alt=""
            srcset=""
        /></a>
      </div>
    </div>
    <div class="projRight">
      <div class="projTitle">PyTranslate</div>
      <div class="projComponent projDesc">
        Python translate is a desktop application that uses the Google Translate
        API, as well as a UI created with tkinter. The application supports 109
        languages.
      </div>
      <div class="projComponent projTech">
        Python --- Google Translate API --- Tkinter
      </div>
      <div class="projComponent projTech">
        <a href="https://github.com/nemanjaone/google_trans" target="_blank"
          ><i class="fa fa-github gitHub" style="font-size: 24px"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    document.title = "Projects";
  },
};
</script>

<style>
.project {
  display: flex;
  margin: auto;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 7vh;
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
  font-weight: 600;
}

.projDesc {
  border-radius: 8px;
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 5px;
  text-align: start;
}

.projImage img {
  max-height: 38vh;
  max-width: 25vw;
  border-radius: 8px;
  transition-duration: 200ms;
}

.projTech {
  margin: auto;
  text-align: end;
  margin-top: 8px;
  color: gray;
}

.projAlt {
  justify-content: start;
}

.projTech2 {
  text-align: start;
}

.projImage img:hover {
  /* border: 2px black solid; */
  opacity: 1;
  font-size: 1.3em;
  transform: scale(1.03);
  cursor: pointer;
  color: white;
}

.gitHub {
  color: black;
}
</style>