import React from 'react';

function Home() {
    return (

        <div>


            <section id="hero" class="hero section dark-background">

                <div class="container">
                    <div class="row gy-4">
                        <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" >
                            <h1>Hallo, ich bin Stefan</h1>
                            <p>Ein leidenschaftlicher Softwareentwickler</p>
                            <div class="d-flex">
                                <a href="/portfolio" class="btn-get-started">Zu meinem Portfolio</a>
                            </div>
                        </div>
                        <div class="col-lg-6 order-1 order-lg-2 hero-img" >
                            <img src="assets/img/profilbildVonMirAusgeschnittenRund.png" class="img-fluid animated" alt=""/>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Home;
