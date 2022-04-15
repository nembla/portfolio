<template>
  <div class="researchTitle">Undergraduate Research</div>
  <div class="researchLeft">
    <div class="researchCol researchCol2">
      <div class="researchColTitle">
        In the last year of studies for my undergraduate degree, I was selected
        to work on a research project with one of my professors at KSU. In the
        first semester, the topic was Electromagnetics, specifically Radio
        Frequency to Direct Current conversion, using a 2-stage charge pump
        circuit with a matching network to minimize power reflected. If you are
        interested in more information surrounding this project, please view
        <a
          href="https://www.linkedin.com/in/nblagoje/overlay/1635453887086/single-media-viewer/"
          target="_blank"
          >this</a
        >
        presentation slide!
      </div>
      <div class="researchColTitle">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores minima
        reprehenderit sint, deserunt quia dignissimos incidunt. Accusamus
        similique ipsum esse sequi. Blanditiis maiores laborum dolorem
        aspernatur quo repellat repellendus reiciendis. Nihil tempora doloremque
        quidem eius officia nam facere quo, nobis dolore odit voluptates ut vero
        molestias aliquid. Incidunt sint, explicabo qui culpa, unde illum quod
        necessitatibus velit ut quaerat quibusdam. Dolor neque, animi quia
        adipisci odit consequatur impedit reprehenderit assumenda a laborum sed
        ad iste nulla inventore dignissimos dolores mollitia vel enim
        exercitationem error, esse corrupti. Dolores illo atque ullam? Quia id
        eligendi, possimus ullam modi ab aliquam, quos laudantium laborum
        praesentium explicabo eaque corrupti officia numquam unde, repudiandae
        suscipit. Sunt molestias unde repudiandae consequatur iusto alias ullam
        beatae possimus.
      </div>
    </div>
    <div class="researchCol researchCol1">
      <div class="researchColTitle"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.researchLeft {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 3em;
  margin-left: 10vw;
  margin-right: 10vw;
  font-size: 1.2em;
}

.researchCol {
  display: flex;
  flex-direction: column;
  border: 1px black solid;
  min-height: 60vh;
  min-width: 220px;
  transition: 350ms;
  margin-bottom: 10vh;
}

.researchColTitle {
  text-align: left;
  margin: 25px;
  margin-bottom: 0;
}

.researchCol1 {
  max-width: 40vw;
  background-image: url("https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  opacity: 0.8;
  background-size: cover;
  flex-grow: 1;
}

.researchCol2 {
  max-width: 50vw;
  border: 0;
}

.researchTitle {
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  justify-content: center;
  font-size: 2.5em;
}

a:link {
  color: #0000ee;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: #551a8b;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: #ee0000;
  background-color: transparent;
  text-decoration: underline;
}
</style>