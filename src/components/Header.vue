<template>
    <header>
        <div class="navbuttons">
            <router-link to="/">
                <div class="navbutton">Home</div>
            </router-link>
            <router-link to="/contactus">
                <div class="navbutton">Contact Us</div>
            </router-link>
        </div>
        <img id="useraccountIcon" class="icon" src="../assets/user_Isabelle1.png" alt="Big icon">
    </header>
</template>

<script>
export default {
    name: 'AppHeader',
}
</script>


<style scoped>
header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-image: url(../assets/bg_grainy_gradient.png);
    background-size: 100%;
    border-radius: 35px;
    border: 6px solid rgba(255, 255, 255, 0.658);
}

.icon {
    max-width: 100%;
    height: 120px;
    border-radius: 50%;
    border: 5px solid rgba(255, 255, 255, 0.358);
    margin-top: 3px;
    margin-bottom: 10;

}


#useraccountIcon {
    cursor: pointer;
}

h1 {
    color: #333;
    margin: 0;
}

.navbutton {
    padding: 10px 15px;
    border-radius: 20%;
    border: 6px solid rgba(255, 255, 255, 0.258);
    margin: 20px;
    text-decoration: none;
    text-align: center;
    display: inline;
    color: black;
}
</style>
