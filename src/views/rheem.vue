<template>
  <div class="rheemTitle">Electronics Controls Engineer - Systems Team</div>
  <div class="rheemLeft">
    <div class="rheemCol rheemCol1">
      <div class="rheemColTitle"></div>
    </div>
    <div class="rheemCol rheemCol2">
      <div class="rheemColTitle">
        My current title is Electronics Controls Engineer - Systems, but simply
        put - I am a Systems Engineer. I have been with Rheem Manufacturing for
        just under one year and in that time I have learned more about the
        engineering process than I could have imagined. Working with Hardware,
        Software, Cloud, Mobile, Quality, Reliability, and Manufacturing teams
        put into perspective how much effort goes into real-world projects.
      </div>
      <div class="rheemColTitle">
        As a Systems engineer in product development, my main duties include
        working with the product management department to generate business
        requirement documents, creating a function specification for our
        controls based on those requests, and running system integration tests
        once we had prototype controls in our hands. I work on three projects
        simultaneously, and a couple of 'back-burner' projects that I very much
        enjoy. These mostly consist of software based projects!
      </div>
      <div class="rheemColTitle">
        Two of the most important projects I would like to highlight include: a
        Vue.js web application that increased accessibility for engineers
        working on system integration tests, and a Python script that uses the
        Selenium library to automate testing! While I cannot show you the source
        code for these projects, I can give a brief overview of what the goals
        for the projects were and generall how they worked:
      </div>
      <div class="rheemColTitle twoway">
        <div class="econet">
          <div class="smallTitle">Remote Test</div>
          This project began when there was a company wide initiative to begin
          remotely testing our controls. We had an existing proprietary
          application that we use to communicate with our controls over a serial
          connection, and this was the candidate that I needed to copy into a
          web application! Using Vue.js, I was able to prototype a web
          application that mimics the look of our exisitng desktop-based
          application.
        </div>
        <div class="selenium">
          <div class="smallTitle">Selenium Automated Test</div>
          For this project, the goal was to control a water heater, connected to
          a third party cloud provider, through a universal communications
          module (UCM). This was to test not only compliance to government
          communications standards for water heaters, but also the strength of
          our dedicated communications port, situated between the controls and
          the UCM. This was my first Selenium project, and I really enjoyed
          working on it!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.rheemLeft {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 3em;
  margin-left: 10vw;
  margin-right: 10vw;
  font-size: 1.2em;
}

.smallTitle {
  text-decoration: underline;
  font-weight: 600;
}

.rheemCol {
  display: flex;
  flex-direction: column;
  border: 1px black solid;
  min-height: 60vh;
  min-width: 220px;
  transition: 350ms;
  margin-bottom: 10vh;
}

.rheemColTitle {
  text-align: left;
  margin: 25px;
  margin-bottom: 0;
}

.rheemCol1 {
  max-width: 40vw;
  background-image: url("https://images.pexels.com/photos/3850910/pexels-photo-3850910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  opacity: 0.8;
  background-size: cover;
  flex-grow: 1;
}

.rheemCol2 {
  max-width: 50vw;
  border: 0;
}

.rheemTitle {
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  justify-content: center;
  font-size: 2.5em;
}

.twoway {
  display: flex;
  flex-direction: row;
}

.econet {
  margin: 25px;
  margin-bottom: 0;
  margin-left: 0;
  flex-grow: 1;
}

.selenium {
  margin: 25px;
  margin-bottom: 0;
  margin-left: 0;
  flex-grow: 1;
}
</style>