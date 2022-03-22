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
      <div class="icons"></div>
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
          University, and am pursuing a Master's degree in Computer Science
          (Computing Systems Specialization) with an expected graduation in
          2025.
        </p>
      </div>
      <div class="rightinfo">
        <div class="rightinfolist">
          <div class="rightinfolisttittle">Interests</div>
          <div class="interests">
            <ul>
              <li>Front-End Web Development</li>
              <li>Software Engineering</li>
            </ul>
          </div>
        </div>
        <div class="rightinfolist">
          <div class="rightinfolisttittle">Education</div>
          <div class="education">
            <ul>
              <li>
                <font-awesome-icon :icon="['fas', 'graduation-cap']" />
                MS in Computer Science (2025)
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'graduation-cap']" />
                BS in Electrical Engineering (2020)
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
  text-align: center;
}

.rightinfolisttittle {
  font-size: 1.3em;
}

.interests {
  margin-left: 10%;
  text-align: left;
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
</style>
