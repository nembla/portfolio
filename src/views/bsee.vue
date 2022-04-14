<template>
  <div class="bseeTitle">Bachelor of Science in Electrical Engineering</div>
  <div class="bseeLeft">
    <div class="bseeCol bseeCol1">
      <div class="bseeColTitle"></div>
    </div>
    <div class="bseeCol bseeCol2">
      <div class="bseeColTitle">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eveniet
        quis debitis eligendi temporibus voluptatibus ut quaerat maxime
        doloribus tempora voluptate doloremque, sint voluptatum voluptas. Facere
        illo inventore quod totam. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Aspernatur praesentium eos voluptate, corporis veniam
        culpa aperiam amet cumque possimus laboriosam expedita consequatur
        consequuntur id ab voluptas eius, itaque sunt vitae? Quia nobis deserunt
        fuga repudiandae sint facilis sunt. Architecto, ea. Tempora error ipsum
        aliquid harum, ullam, dolorem voluptatem quae illo quidem quibusdam et,
        doloribus fugiat aperiam quam repudiandae iusto recusandae. Obcaecati
        accusamus voluptas et sit molestiae fugiat necessitatibus iusto ratione
        quibusdam sunt quas perferendis quam similique, placeat adipisci
        laudantium, deserunt, molestias natus qui repellendus deleniti.
        Similique laboriosam accusamus non! Illum.
      </div>
      <div class="bseeColTitle">
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
      <div class="bseeColTitle">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
        reiciendis quod eum fugit, doloribus facilis impedit quia reprehenderit
        repellendus, dicta est sunt temporibus laboriosam adipisci. Dicta
        molestias praesentium cupiditate corporis? Maiores facere aperiam ex
        reprehenderit ipsa neque perspiciatis corporis eum, illum voluptatum
        eius sed delectus perferendis, dolores dolorem ad eveniet laboriosam
        consectetur accusantium assumenda! Quam similique eaque sit voluptas
        magnam?
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
  margin-bottom: 0;
}

.bseeCol1 {
  max-width: 40vw;
  background-image: url("https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  opacity: 0.8;
  background-size: cover;
  flex-grow: 1;
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
</style>