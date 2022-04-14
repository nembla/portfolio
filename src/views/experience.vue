<template>
  <div class="experience">Experience</div>
  <div class="panels">
    <div class="col bsee">
      <div class="colTitle">B.S. Electrical Engineering</div>
    </div>
    <div class="col research">
      <div class="colTitle">Undergraduate Research</div>
    </div>
    <div class="col rheem">
      <div class="colTitle">Electronic Controls Engineer <br /></div>
    </div>
    <div class="col webdev">
      <div class="colTitle">Web Development</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.experience {
  display: flex;
  flex-direction: row;
  flex-grow: 2;
  margin-top: 2.5em;
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
  flex-grow: 2;
  border: 1px black solid;
  margin: 0 2em;
  min-height: 60vh;
  transition: 350ms;
}

.col:hover {
  border: 2px black solid;
  opacity: 1;
  font-size: 2.5em;
  transform: scale(1.1);
  cursor: pointer;
  color: white;
}

.colTitle {
  margin: auto 0;
}

.bsee {
  background-image: url("https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  opacity: 0.8;
  background-size: cover;
}

.research {
  background-image: url("https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  opacity: 0.8;
  background-size: cover;
}

.rheem {
  background-image: url("https://images.pexels.com/photos/3850910/pexels-photo-3850910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  opacity: 0.8;
  background-size: cover;
}

.webdev {
  background-image: url("https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  opacity: 0.8;
  background-size: cover;
}
</style>