<template>
    <div class="grid">
        <div class="sidebar"></div>
        <div>
            <h3>Contact Us!</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
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
}</style>