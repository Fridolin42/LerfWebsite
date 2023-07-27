<script setup>
</script>

<template>
  <main>
    <div class="shadowContainer" id="whatsLerf">
      <h1>Was ist Lerf?</h1>
      <p>Gute frage. Im Prinzip ist es wie TicToc.</p>
      <p>Aber das gibt es doch schon!</p>
      <p>Aber Lerf ist nicht für Videos oder Photos, sondern für <b>Spiele</b></p>
      <p>Wow, für Spiele, das geht?</p>
      <p>Probiere es doch aus und instaliere dir die App oder nutze die Browserversion.</p>
    </div>
    <div class="shadowContainer">
      <h2>Beispiel gefällig?</h2>
      //TODO: Anzeigen
    </div>
  </main>
</template>

<style>
.shadowContainer {
  border: 5px solid darkgray;
  padding: 5px;
  box-shadow: 5px 5px 3px gray;
  margin-bottom: 30px;
}

#whatsLerf > *:nth-child(2n+1) {
  border: 1px solid gray;
  border-radius: 15px 0 15px 15px;
  background: rgba(0, 128, 0, 0.3);
  padding: 5px;
  text-align: right;
}

#whatsLerf *:nth-child(2n) {
  border: 1px solid gray;
  border-radius: 0 15px 15px 15px;
  background: rgba(128, 128, 128, 0.3);
  padding: 5px;
  text-align: left;
}

h1 {
  text-align: center !important;
}
</style>