<template id="seccio-noticias">
	<section class="hero is-fullheight">
	  <div class="hero-body">
            <div class="columns" id="columns-header">
                <div class="column is-full">
                    <div class="header">
                        <p class="title">
                            Noticias
                        </p>
                    </div>
                </div>
            </div>

            <div class="tabs is-fullwidth">
              <ul>
                <li>
                  <a @click="tab-=1;">
                    <span class="icon" style="color: white;"><i class="fas fa-angle-left" aria-hidden="true"></i></span>
                    <span style="color: white;">Anterior</span>
                  </a>
                </li>
                <li>
                  <a @click="tab+=1;">
                    <span style="color: white;">Siguiente</span>
                    <span class="icon" style="color: white;"><i class="fas fa-angle-right" aria-hidden="true"></i></span>
                  </a>
                </li>
              </ul>
            </div> 

            <div class="columns" id="columns-body" v-if="set_tab(this.tab, 3) == 0">
                <div class="column is-half" id="left">
                        <p class="title" style="font-size: 120%;">LOREM IPSUM</p>
                        <p style="color: white;">Velit ante sociis aliquet fermentum neque cum mattis tristique est mus elementum, dis non natoque fusce pretium placerat commodo ornare parturient praesent, leo mi sodales curabitur felis dui dignissim vitae varius morbi. Praesent lacus cubilia pulvinar eget volutpat quis duis facilisis, arcu pretium placerat massa tempor class. Blandit sed vel purus vitae viverra tempus nisi enim, taciti ultricies ridiculus dapibus vulputate condimentum auctor mauris non, habitasse magna praesent eu volutpat tristique quisque.</p>
                        <br>
                        <p style="color: white;">Feugiat ridiculus sem pharetra pellentesque iaculis nisl tristique phasellus dis tempor pretium nibh malesuada, turpis sollicitudin ligula morbi id congue volutpat senectus rhoncus sed fusce. Viverra non faucibus vivamus vulputate mus dictum taciti molestie curabitur eleifend montes felis, egestas nascetur sociis potenti ultricies malesuada luctus facilisi turpis ligula. Consequat lobortis montes dictum venenatis tortor viverra penatibus inceptos natoque class, condimentum lacus arcu at libero pretium pharetra sociis. Varius cubilia cum elementum taciti sagittis venenatis himenaeos phasellus, turpis leo dictum nulla parturient cursus accumsan augue sapien, aliquet risus torquent nullam et eleifend duis.</p>
                        <br>
                        <li style="color: white;">Lorem Ipsum</li>
                        <li style="color: white;">Dolor sit amet</li>
                        <li style="color: white;">Consectetur adipiscing elit</li>
                        <li style="color: white;">Nisi fames condimentum</li>
                </div>
                <div class="column is-half" id="right">
                    <img src="../assets/news/certificaciónSICEP.png" alt="test"> 
                </div>
            </div>

            <div class="columns" id="columns-body" v-if="set_tab(this.tab, 3) == 1">
                <div class="column is-half" id="left">
                        <p class="title" style="font-size: 120%;">LOREM IPSUM</p>
                        <p style="color: white;">Vulputate sed cursus dignissim sapien orci dis faucibus vehicula aliquet, suspendisse mus interdum mattis sollicitudin fringilla hac cum venenatis egestas, suscipit fames natoque aliquam laoreet urna morbi tellus. Scelerisque mauris magnis molestie facilisis praesent nunc himenaeos litora, dui gravida imperdiet erat vehicula rutrum aliquet rhoncus conubia, metus viverra netus libero dictumst eros mi. Nibh primis morbi egestas dignissim platea lectus, semper nullam gravida proin turpis, pretium scelerisque ligula nascetur in.</p>
                        <br>
                        <p style="color: white;">Risus nulla eget sollicitudin vitae molestie vestibulum venenatis, eros cursus nec tincidunt cum diam suscipit vulputate, ridiculus euismod iaculis a integer elementum. Suspendisse lectus fames hendrerit commodo natoque enim justo hac dictumst, curae dui tempor velit porta vulputate eget aliquam etiam risus, venenatis dapibus lacus maecenas sodales mus malesuada primis. Tellus nec semper mus phasellus praesent cursus fermentum habitasse parturient, cum ac tempor et rhoncus vel nunc tempus mattis, sociosqu auctor dui nostra fusce dictum libero per. Curabitur ridiculus integer tempor suspendisse volutpat vehicula sed interdum vestibulum, cursus urna nunc lacus metus neque sagittis nulla, ut elementum posuere sapien lacinia aliquam fermentum sociis.</p>
                        <br>
                        <li style="color: white;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li style="color: white;">Fusce sed sodales lobortis libero, enim mi lectus.</li>
                        <li style="color: white;">Quis eget congue sodales justo consequat, tincidunt condimentum taciti.</li>
                </div>
                <div class="column is-half" id="right">
                    <img src="../assets/news/certificaciónSICEP.png" alt="test"> 
                </div>
            </div>

            <div class="columns" id="columns-body" v-if="set_tab(this.tab, 3) == 2">
                <div class="column is-half" id="left">
                        <p class="title" style="font-size: 120%;">LOREM IPSUM</p>
                        <p style="color: white;">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit aptent dictum vulputate tempus, nostra aenean senectus tellus eleifend hendrerit nisl vel leo. Tortor nascetur magna hendrerit nisl augue feugiat varius rutrum facilisis mus aliquet, gravida vulputate est blandit cursus cum dui pellentesque ridiculus. Parturient maecenas rhoncus suspendisse mauris nisl dis tellus sodales dictumst odio justo nascetur, sapien a erat etiam cursus vivamus quis enim feugiat pellentesque sagittis.
                        </p>
                        <br>
                        <p style="color: white;">Tempor himenaeos lacinia luctus vivamus eleifend scelerisque conubia nibh ultrices, lobortis ante duis platea quis potenti rhoncus diam dis fusce, lacus integer faucibus sodales id tincidunt hac nec. Non diam arcu ornare potenti venenatis et, maecenas nisi rhoncus hendrerit sociis ante imperdiet, taciti bibendum platea tempor faucibus. Fusce nullam lobortis netus convallis a sem eros, purus primis nec venenatis egestas neque condimentum, ad viverra senectus mi nibh ultricies.</p>
                        <br>
                        <li style="color: white;">Lorem Ipsum</li>
                        <li style="color: white;">Dolor sit amet</li>
                        <li style="color: white;">Consectetur adipiscing elit</li>
                        <li style="color: white;">Nisi fames condimentum</li>
                </div>
                <div class="column is-half" id="right">
                    <img src="../assets/news/certificaciónSICEP.png" alt="test"> 
                </div>
            </div>
<!-- 	        <div class="columns is-mobile">
                <div class="column is-half" id="left">
                    <div class="header">
                        <p class="title">
                            Noticias
                        </p>
                    </div>


                    <div class="aboutUs-body">

                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. hola</h1>
                        <br>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna maximus. Suspendisse sit amet ex vestibulum, semper nunc quis, consequat arcu. Pellentesque feugiat molestie enim a aliquam. 
                        </p>
                    </div>
                </div>
                <div class="column is-half" id="right">
                    <div class="color">

                    </div>
                </div>
            </div> -->
	  </div>
	</section>
</template>


<script>
    export default{

        data(){
            return {
                tab: 0,
            };
        },

        methods: {
            set_tab(number, mod){
                if (number >= 0)
                    return number % mod;

                // return (number * -1) % mod;
                this.tab = mod-1;
                return this.tab % mod;
            }
        }
    }
</script>


<style scoped>

    .hero {
        background: white url('../assets/Degrade.svg');
        background-size: cover;
    }

    .hero-body {
        display: flex;
        flex-direction: column;
        padding-top: 10%;
        padding-left: 8vw;
        padding-right: 8vw;
    }

    #columns-body {
        width: 100%;
        height: 600px;
    }

    .title {
        color: white;
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
        /* border: 1px solid red; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #right img {
        max-height: 100%;
        max-width: 100%;
    }


    .color {
        width: 100%;
        height: 100%;
        background-color: rgb(226, 226, 226);
    }

    #columns-header {
        display: block;
    }

    @media (max-width: 1024px) {
        .hero {
            background: white url('../assets/mobile/BlueMobile.svg');
            background-size: cover;
        }
        #columns-body {
            height: 1000px;
        }
    }

    @media (max-width: 767px) {
        .hero {
            background: white url('../assets/mobile/BlueMobile.svg');
        }

        #columns-body {
            height: 1400px;
        }

        .hero-body {
            padding-top: 10%;
        }
    }

</style>