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
        The more relevant research was conducted in the second half of the term.
        The goal was to replicate what we completed above (the circuit design of
        the charge pump), with the same power reflection and behavioural
        results, but using machine learning to design the matching network. The
        matching network, in this case, was in an L-shape and had one capacitor
        and one inductor. This means that for our model we have two variables
        that need to be selected and then the output computed. In this project,
        I gained some understanding of how machine learning mdoels worked, as
        well as how Python libraries such as Pandas, NumPy, Sklearn, and
        Matplotlib worked. Although this work was never published like the
        project above, the source code may be found on my
        <a href="https://github.com/nemanjaone/wptai" target="_blank"
          >GitHub page</a
        >.
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
  margin-top: 10px;
}

.researchCol1 {
  max-width: 40vw;
  background-image: url("https://images.unsplash.com/photo-1572224104781-f0c8369cae20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80");
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