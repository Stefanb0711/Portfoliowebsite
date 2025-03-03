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

            <section id="hero" className="hero section">


                <div style={{marginTop: '100px', marginBottom: '100px',display: 'block'}} className="container">
                    <h1 style={{marginBottom: '100px'}} >Neues</h1>

                    <div className="row gy-4">
                        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h2>Todolist mit ASP.NET, Angular, Mongodb, Graphqhl, Tailwindcss</h2>

                            <a style={{marginTop: '30px'}} href={'https://github.com/Stefanb0711/todolistGraphqlC-Angular.git'}>https://github.com/Stefanb0711/todolistGraphqlC-Angular.git</a>
                            <a href="/portfolio/32"><button style={{width: '200px', marginTop: '50px'}} className="btn btn-get-started">Mehr erfahren</button></a>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img">
                            <img className={"img-fluid"} src={'assets/img/FrontendBackend/TodolistAsp.Net/start.png'}/>

                        </div>
                    </div>

                    <div style={{marginTop: '100px'}} className="row gy-4">
                        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h2>Chatapp mit Angular, Express, und Sockets</h2>

                            <a style={{marginTop: '30px'}} href={'https://github.com/Stefanb0711/chatAppAngular.git'}>https://github.com/Stefanb0711/chatAppAngular.git</a>
                            <a href="/portfolio/25"><button style={{width: '200px', marginTop: '50px'}} className="btn btn-get-started">Mehr erfahren</button></a>
                        </div>

                        <div className="col-lg-6 order-1 order-lg-2 hero-img">
                            <img className={"img-fluid"} src={'/assets/img/FrontendBackend/socialNetworkAngular/startBildChatApp.png'}/>

                        </div>
                    </div>


                </div>

            </section>
        </div>
    );
}

export default Home;
