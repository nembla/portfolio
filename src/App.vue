<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
    rel="stylesheet"
  />
  <div id="nav">
    <div class="navleft">
      <router-link to="/">Nemanja Blagojevic</router-link>
    </div>
    <div class="navright">
      <router-link to="/experience">Experience</router-link>
      <router-link to="/projects">Projects</router-link>
      <a href="/files/nemblaResume.pdf" download target="_blank">Resume</a>
    </div>
  </div>
  <router-view />
</template>
<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #171717;
  height: 100vh;
  padding: 0;
  margin: 0;
}

@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
html,
body {
  font-family: "Roboto", sans-serif;
}

#app {
  font-family: "Roboto", sans-serif;
}

#nav {
  padding: 20px 10px;
  display: flex;
  background-color: white;
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: 2px 4px 12px 1px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.navleft {
  text-align: center;
  min-width: 20%;
  color: white;
  font-size: 1.4em;
  align-items: center;
}

.navright {
  display: flex;
  margin-left: auto;
  min-width: 35%;
  margin-top: 0.25em;
  justify-content: end;
  text-align: center;
}

#nav a {
  margin: auto;
  font-weight: bold;
  color: #171717;
  margin: 0% 3%;
  text-decoration: none;
  transition: 100ms;
  align-items: center;
  text-align: center;
}

.navright a.router-link-exact-active {
  color: #748cab;
}

.navDec:hover {
  text-decoration: underline;
}
</style>
