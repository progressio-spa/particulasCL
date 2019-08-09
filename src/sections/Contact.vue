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
                        <div class="contact-info">
                            <div class="contact-items">
                                <img class="contact-logos" src="../assets/correo.png"> contacto@particulas.cl
                            </div>
                            <div class="contact-items">
                                <img class="contact-logos" src="../assets/ubicacion.png">
                                La Concepción 191
                                <br>
                                Oficina 601
                                <br>
                                Providencia, Santiago, Chile
                            </div>

                        </div>
                        <br>
                        <div class="minimap-pos">
                            <img class="minimap" src="../assets/minimap.png" height="600    " width="600    ">
                        </div>

                    </div>
                </div>
                <div class="column is-half" id="right">
                    <div class="form-container">
                        <div class="field">
                            <label class="label title-color">Nombre</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Nombre Entero">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label title-color">Email</label>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="email" placeholder="Email input" value="">
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
                                <button class="button is-link  title-color"
                                    style="background-color: #12C2F2;">Enviar</button>
                            </div>
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

    .form-container {
        height: 90%;
        width: 90%;
        display: flex;
        flex-direction: column;
        padding-top: 3vh;
        padding-left: 2vw;
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

    .contact-info{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 2%;
    }

    .color {
        position: absolute;
        width: 650px;
        height: 500px;
        background-color: #31C1F7;
        left: 67px;
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
        padding-top: 4%;
    }

    .minimap{
        width: 70%;
    }

    .minimap-pos{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contact-logos{
        color: #FFFFFF;
        width: 42px;
        height: 32.51px;
    }

    @media (max-width: 1024px) {
        #columns-body {
            height: 620px;
        }
        .color {
            position: initial;
            width: 100%;
            height: 550px;
            background-color: #31C1F7;
            left: 0px;
        }
        #left{
            padding:25px;
        }
        .minimap{
            padding-top: 40%;
        }
    
    }

    @media (max-width:  767px) {
        #columns-body {
            height: 1000px;
        }
        .color {
            position: initial;
            width: 100%;
            height: 350px;
            background-color: #31C1F7;
            left: 0px;
        }
        #left{
            padding:25px;
        }
        .minimap{
            padding-top: 5%;
        }
    }


</style>