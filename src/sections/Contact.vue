<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="columns" id="columns-header">
                <div class="column is-full">
                    <div class="header">
                        <p class="title">Contacto</p>
                    </div>
                </div>
            </div>
            <div class="columns" id="columns-body" style="background-color: #4E88DD;">
                <div class="column is-half" id="left">
                    <div class="color">
                        <div class="contact-items">
                            <img class="contact-logos" src="../assets/telefono.png"> 555-92134563
                        </div>

                        <div class="contact-items">
                            <img class="contact-logos" src="../assets/correo.png"> nombre@email.com

                        </div>

                        <div class="contact-items">
                            <img class="contact-logos" src="../assets/ubicacion.png">
                            Sevierville, TN 37876
                            <br>
                            56 Stillwater Street 
                            <br>
                            West Fargo, ND 58078
                        </div>

                        <div class="minimap-pos">
                            <img class="minimap" src="../assets/minimap.png">
                        </div>

                    </div>
                </div>
                <div class="column is-half" id="right">
                    
                    <div class="field">
                      <label class="label title-color">Nombre</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Nombre Entero">
                      </div>
                    </div>

                    <div class="field">
                      <label class="label title-color">Email</label>
                      <div class="control has-icons-left has-icons-right">
                        <input class="input" type="email" placeholder="Email input" value="hello@">
                        <span class="icon is-small is-left">
                          <i class="fas fa-envelope"></i>
                        </span>
                      </div>
                    </div>

                    <div class="field">
                      <label class="label title-color">Teléfono</label>
                      <div class="control has-icons-left has-icons-right">
                        <input class="input" type="phoneNumber" placeholder="Phone Number" value="+56 9 ">
                        <span class="icon is-small is-left">
                          <i class="fas fa-phone"></i>
                        </span>
                      </div>
                    </div>

                    <div class="field">
                      <label class="label title-color">Asunto</label>
                      <div class="control has-icons-left has-icons-right">
                        <input class="input" type="phoneNumber" placeholder="Asunto" value="">
                      </div>
                    </div>

                    <div class="field">
                      <label class="label title-color">Mensaje</label>
                      <div class="control">
                        <textarea class="textarea" placeholder="Escriba acá su mensaje"></textarea>
                      </div>
                    </div>


                    <div class="field is-grouped">
                      <div class="control">
                        <button class="button is-link  title-color" style="background-color: #12C2F2;">Enviar</button>
                      </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .hero-body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        background-color: #F8F9FA;
        padding-left: 8vw;
        padding-right: 8vw;
        padding-top: 5%;
    }

    .container {
        height: 600px;
        width: auto;
        display: grid;
        padding: 0;
    }

    #columns-body {
        width: 100%;
        height: 600px;
    }

    .title {
        color: #47525E;
    }

    .header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding-bottom: 5vh;
    }

    .description{
        color: #8190A5;
        padding-bottom: 2vh;
        text-align: justify;
    }

    .aboutUs-body{
        height:100%;
        color: #8190A5;
        text-align: justify;
    }

    #left{
        padding-left:0;
    }

    #right{
        padding-right:0;
    }


    .color {
        width: 100%;
        height: 100%;
        background-color: #31C1F7;
    }

    #columns-header {
        display: block;
    }

    .title-color{
        color: white;
    }

    .contact-items{
        color: #FFFFFF;
        height: 10%;
        text-align: center;
        padding-top: 10%;
    }

    .minimap{
        padding-top: 30%;
        height: 30%;
        width: 80%;
    }

    .minimap-pos{
        text-align: center;
    }

    .contact-logos{
        color: #FFFFFF;
        width: 42px;
        height: 32.51px;
    }


</style>