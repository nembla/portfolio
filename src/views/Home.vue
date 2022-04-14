<template>
  <div class="main">
    <div class="left">
      <div class="profileimg">
        <img
          src="../assets/profilePic.jpeg"
          alt="placeholder profile picture"
        />
      </div>
      <div class="name">
        <p id="myName">Nemanja Blagojevic</p>
        <p id="myTitle">Software Engineer</p>
      </div>
      <br />
      <div class="icons">insert icons lmao</div>
    </div>
    <div class="right">
      <div class="righttitle">Biography</div>
      <div class="rightcontent">
        <p>Hi, I'm Nem, an aspiring software engineer.</p>
        <br />
        <p>
          I am currently working at Rheem Manufacturing as an Electronic
          Controls engineer, as part of the Systems Engineering team. I have a
          Bachelor's degree in Electrical Engineering from Kennesaw State
          University.
        </p>
        <br />
        <p>
          I consider myself a fast learner and I am definitely not afraid to ask
          questions. After working as a Systems Engineer at Rheem Mfg. for a
          year, I understand the importance of asking good questions in team
          meetings, and having clearly defined requirements for products. I am
          accostomed to working in multiple teams simultaneously, with team
          members that have a wide variety of backgrounds.
        </p>
        <br />
        <p>
          I am actively looking for full time web developer positions
          (front-end, back-end, and full-stack engineer). I am interested in
          environments that are conducive to learning, collaborating, and
          growing as a SWE!
        </p>
      </div>
      <div class="rightinfo">
        <div class="rightinfolist">
          <div class="rightinfolisttittle">Interests</div>
          <div class="interests">
            <ul>
              <li>
                Front-End Web Development
                <ul>
                  <li>React</li>
                  <li>Vue.js</li>
                  <li>JavaScript</li>
                  <li>HTML / CSS</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="rightinfolist">
          <div class="rightinfolisttittle"><br /></div>
          <div class="education">
            <ul>
              <li>
                Back-End Web Development
                <ul>
                  <li>MongoDB</li>
                  <li>Express.js</li>
                  <li>Node.js</li>
                  <li>Django</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
html {
  margin: 0;
  padding: 0;
  background-color: #1d2d44;
}

.main {
  min-height: 90vh;
  margin: auto;
  background-color: #1d2d44;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 2em;
}

#myName {
  font-size: 2em;
  margin-bottom: 10px;
}

#myTitle {
  opacity: 50%;
}

.left {
  margin-top: 5%;
  flex: 2;
  padding-left: 10%;
}

.right {
  margin-top: 5%;
  flex: 3;
  margin-right: 10%;
  text-align: left;
}

.righttitle {
  font-size: 3em;
  margin-bottom: 20px;
}

.profileimg img {
  margin-bottom: 4.5%;
  max-width: 40%;
  border-radius: 50%;
}

.rightinfo {
  margin: auto;
  margin-top: 5%;
  display: flex;
  flex-direction: row;
}

.rightinfolist {
  flex: 1;
  text-align: left;
}

.rightinfolisttittle {
  font-size: 1.3em;
}

.interests {
  margin-left: 10%;
  text-align: left;
  margin-bottom: 20%;
}

.interests ul li {
  margin-top: 5px;
}

.education {
  margin-left: 10%;
  text-align: left;
}

.education ul li {
  margin-top: 5px;
}

ul ul {
  margin-left: 20px;
}
</style>
