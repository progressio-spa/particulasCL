<template>
    <section class="hero is-fullheight" id="contact">
        <div class="hero-body">
            <div class="columns" id="columns-header">
                <div class="column is-full">
                    <div class="header">
                        <p class="title">{{ $t('Contact.title') }}</p>
                    </div>
                </div>
            </div>
            <div
                class="columns"
                id="columns-body"
                style="background-color: #4E88DD;"
            >
                <div class="column is-half" id="left">
                    <div class="color">
                        <div class="contact-info">
                            <div class="contact-items">
                                <img
                                    class="contact-logos"
                                    src="../assets/correo.png"
                                />
                                <br />
                                contacto@particulas.cl
                            </div>
                            <div class="contact-items">
                                <img
                                    class="contact-logo2"
                                    src="../assets/ubicacion.png"
                                />
                                <br />
                                La Concepción 191,
                                {{ $t('Contact.office') }} 601, Providencia,
                                Santiago, Chile <br />Calle Cáncer Número 1111,
                                Urbanización Mercurio, Los Olivos, Lima, Perú.
                                <br />MZ. C. Lote 1, Coop. Viv. Guadalupe, Los
                                Olivos, Lima, Perú. <br />Av. Paseo de la
                                Reforma N° 1116 A. Col. Lomas de Chapultepec. CP
                                11000 CDMX, México.
                            </div>
                        </div>
                        <div class="minimap-pos">
                            <img class="minimap" src="../assets/minimap.png" />
                        </div>
                    </div>
                </div>
                <div class="column is-half" id="right">
                    <div class="form-container">
                        <div class="field">
                            <label class="label title-color">{{
                                $t('Contact.name')
                            }}</label>
                            <div class="control">
                                <input
                                    class="input"
                                    type="text"
                                    :placeholder="$t('Contact.fullname')"
                                />
                            </div>
                        </div>

                        <div class="field">
                            <label class="label title-color">Email</label>
                            <div class="control has-icons-left has-icons-right">
                                <input
                                    class="input"
                                    type="email"
                                    :placeholder="$t('Contact.typeEmail')"
                                    value
                                />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label title-color">{{
                                $t('Contact.phone')
                            }}</label>
                            <div class="control has-icons-left has-icons-right">
                                <input
                                    class="input"
                                    type="phoneNumber"
                                    placeholder="Phone Number"
                                    value="+56 9 "
                                />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-phone"></i>
                                </span>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label title-color">{{
                                $t('Contact.matter')
                            }}</label>
                            <div class="control has-icons-left has-icons-right">
                                <input
                                    class="input"
                                    type="phoneNumber"
                                    :placeholder="$t('Contact.matter')"
                                    value
                                />
                            </div>
                        </div>

                        <div class="field">
                            <label class="label title-color">{{
                                $t('Contact.message')
                            }}</label>
                            <div class="control">
                                <textarea
                                    class="textarea"
                                    :placeholder="$t('Contact.typeMessage')"
                                ></textarea>
                            </div>
                        </div>

                        <div class="field is-grouped">
                            <div class="control">
                                <button
                                    class="button is-link title-color"
                                    style="background-color: #12C2F2;"
                                >
                                    {{ $t('Contact.send') }}
                                </button>
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
    background-color: #f8f9fa;
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
    color: #47525e;
}

.header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 5vh;
}

.description {
    color: #8190a5;
    padding-bottom: 2vh;
    text-align: justify;
}

.aboutUs-body {
    height: 100%;
    color: #8190a5;
    text-align: justify;
}

#left {
    padding-left: 0;
}

#right {
    padding-right: 0;
}

.contact-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 3%;
}

.color {
    position: absolute;
    width: 42%;
    height: 60%;
    margin-top: 1%;
    background-color: #31c1f7;
    left: 5%;
}

#columns-header {
    display: block;
}

.title-color {
    color: white;
}

.contact-items {
    color: #ffffff;
    height: 10%;
    text-align: center;
    padding-top: 2%;
    border: solid red;
}

.minimap {
    max-height: 100%;
}

.minimap-pos {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50%;
}

.contact-logos {
    color: #ffffff;
    width: 42px;
    height: 32.51px;
}
.contact-logo2 {
    color: #ffffff;
    height: 40px;
}

@media (max-width: 1024px) {
    #columns-body {
        height: 100%;
    }
    .color {
        position: initial;
        width: 100%;
        height: 100%;
        background-color: #31c1f7;
        left: 0px;
    }
    #left {
        padding: 25px;
    }
    .contact-items {
        padding: 6%;
    }
}

@media (max-width: 767px) {
    .color {
        position: initial;
        width: 100%;
        height: 100%;
        background-color: #31c1f7;
        left: 0px;
    }
    #left {
        padding: 25px;
    }
    .contact-items {
        padding: 6%;
    }
}
</style>
