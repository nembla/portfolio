<template>
  <div class="bseeTitle">Bachelor of Science in Electrical Engineering</div>
  <div class="bseeLeft">
    <div class="bseeCol bseeCol1">
      <div class="bseeColTitle"></div>
    </div>
    <div class="bseeCol bseeCol2">
      <div class="bseeColTitle">
        I began my journey into the world of technology and engineering when I
        enrolled into Kennesaw State University's Electrical Engineering
        program. Throughout the program, I gained valuable skills through
        courses, networked with professors and other students, and finished the
        degree with a 3.5/4.0 GPA.
      </div>
      <div class="bseeColTitle">
        Engineering courses I took while at KSU include: <br />
        <ul class="courseList">
          <li>C++ Programming for Engineers</li>
          <li>Embedded Systems</li>
          <li>Probability & Statistics</li>
          <li>Control Systems</li>
          <li>Calculus III</li>
          <li>Electromagnetics & Microwave Applications</li>
        </ul>
      </div>
      <div class="bseeColTitle">
        While working on the above coursework and extracurricular activites, I
        dedicated myself to learning Python and began learning Web Development
        at this time.
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.bseeLeft {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 3em;
  margin-left: 10vw;
  margin-right: 10vw;
  font-size: 1.2em;
}

.bseeCol {
  display: flex;
  flex-direction: column;
  border: 1px black solid;
  min-height: 60vh;
  min-width: 220px;
  transition: 350ms;
  margin-bottom: 10vh;
}

.bseeColTitle {
  text-align: left;
  margin: 25px;
  margin-bottom: 0px;
  margin-top: 10px;
}

.bseeCol1 {
  max-width: 40vw;
  background-image: url("https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  flex-grow: 1;
  border-radius: 8px;
}

.bseeCol2 {
  max-width: 50vw;
  border: 0;
}

.bseeTitle {
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  justify-content: center;
  font-size: 2.5em;
}

.courseList {
  margin-left: 40px;
  margin-top: 5px;
}
</style>