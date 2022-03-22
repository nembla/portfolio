import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// import fontawesome core
import { library } from "@fortawesome/fontawesome-svg-core";

// import specific icons
import { faGraduationCap, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { github } from "@fortawesome/free-brands-svg-icons";

// import icon component
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// add icons to library
library.add(faPhone);
library.add(faGraduationCap);
// library.add(github);

createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
