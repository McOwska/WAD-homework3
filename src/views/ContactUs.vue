<template>
    <div class="grid">
        <div class="sidebar"></div>
        <div>
            <h3>Contact Us!</h3>
            <p> Hi! We are Phil, Whitney and Tiffany! <br><br>
            <img src="../assets/the_3_devs_headshot.png"><br><br>
            We are very happy to assist You in any way we can. If you have any questions about our small application, please don't hesitate to write and ask!
            <br><br><br><br>
            phil.whit.tiff@email.com
            </p>
            </div>
        <div class="sidebar"></div>
    </div>
</template>

<script>
export default {
    name: "ContactUs",
}
</script>
<style scoped>
h3 {
    text-align: center;
    color: rgb(8, 110, 110);
}

.template {
    background-image: url(../assets/NSwitch_AnimalCrossingNewHorizons_bg_grass.jpg);
}

.grid {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 2vh 8vw;
    margin: 10px auto;
}

.sidebar {
    padding: 20px;
    background-image: url(../assets/AC_wallpaper.jpg);
    background-size: 100%;
    background-repeat: round;
    border-radius: 10px;
    border: 8px solid rgba(255, 255, 255, 0.358);
}

p {
    text-align: center;
    background-color: rgba(250, 235, 215, 0.527);
    padding: 45px;
    padding-bottom: 15px;
    border-radius: 35px;
  }

img {
    align-content: center;
    max-width: 300px;
    border-radius: 50%;
    border: 40px, color(antiquewhite);
    
}
</style>