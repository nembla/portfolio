<template>
  <div class="experience">Experience</div>
  <div class="panels">
    <div class="col bsee" @click="goToBsee()">
      <div class="colTitle">
        Electrical <br />
        Engineer
      </div>
    </div>
    <div class="col research" @click="goToResearch()">
      <div class="colTitle">
        Undergraduate <br />
        Research
      </div>
    </div>
    <div class="col rheem" @click="goToRheem()">
      <div class="colTitle">
        Systems <br />
        Engineer
      </div>
    </div>
    <!-- <div class="col webdev" @click="goToProjects()">
      <div class="colTitle">
        Web <br />
        Development
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  methods: {
    goToProjects() {
      this.$router.push("/projects");
    },
    goToBsee() {
      this.$router.push("/bsee");
    },
    goToResearch() {
      this.$router.push("/research");
    },
    goToRheem() {
      this.$router.push("/rheem");
    },
  },
  name: "app",
  created() {
    document.title = "Experience";
  },
};
</script>

<style>
.experience {
  display: flex;
  flex-direction: row;
  flex-grow: 2;
  margin-top: 1em;
  justify-content: center;
  font-size: 2.5em;
}

.panels {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 3em;
  margin-right: 10vw;
  margin-left: 10vw;
  font-size: 1.2em;
}

.col {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-radius: 5%;
  margin: 0 2em;
  min-height: 60vh;
  min-width: 220px;
  transition: 350ms;
  color: white;
}

.col:hover {
  /* border: 2px black solid; */
  opacity: 1;
  font-size: 1.3em;
  transform: scale(1.1);
  cursor: pointer;
  color: white;
}

.colTitle {
  margin: auto 0;
}

.bsee {
  background-image: url("https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  opacity: 1;
  background-size: cover;
}

.research {
  background-image: url("https://images.unsplash.com/photo-1572224104781-f0c8369cae20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80");
  opacity: 1;
  background-size: cover;
}

.rheem {
  background: url("https://images.unsplash.com/photo-1616628188506-4ad99d65640e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80");
  opacity: 1;
  background-size: cover;
}

.webdev {
  background-image: url("https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  opacity: 1;
  background-size: cover;
}
</style>