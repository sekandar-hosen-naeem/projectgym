import react from "react";
import Weblayout from "../layout/Weblayout"

function Home() {
    return (
        <Weblayout>
            
            <div class="header-carousel owl-carousel overflow-hidden bg-dark">
                <div class="header-carousel-item hero-section">
                    <div class="hero-bg-half-1"></div>
                    <div class="carousel-caption">
                        <div class="container">
                            <div class="row g-4 align-items-center">
                                <div class="col-lg-7 animated fadeInLeft">
                                    <div class="text-sm-center text-md-start">
                                        <h4 class="text-primary text-uppercase fw-bold mb-4">Wellcome to our fitness Center</h4>
                                        <h1 class="display-1 text-white mb-4">The best gym center is now in your city</h1>
                                        <p class="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...
                                        </p>
                                        <div class="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                                            <a class="btn btn-dark py-3 px-4 px-md-5 me-2" href="#"><i class="fas fa-play-circle me-2"></i> <span>Watch Video</span></a>
                                            <a class="btn btn-primary py-3 px-4 px-md-5 ms-2" href="#"><span>Learn More</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-carousel-item hero-section">
                    <div class="hero-bg-half-2"></div>
                    <div class="carousel-caption">
                        <div class="container">
                            <div class="row g-4 align-items-center">
                                <div class="col-lg-7 animated fadeInLeft">
                                    <div class="text-sm-center text-md-start">
                                        <h4 class="text-primary text-uppercase fw-bold mb-4">Wellcome to our fitness Center</h4>
                                        <h1 class="display-2 text-white mb-4">Stay healthy by exercising at the best gym center</h1>
                                        <p class="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...
                                        </p>
                                        <div class="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                                            <a class="btn btn-dark py-3 px-4 px-md-5 me-2" href="#"><i class="fas fa-play-circle me-2"></i> <span>Watch Video</span></a>
                                            <a class="btn btn-primary py-3 px-4 px-md-5 ms-2" href="#"><span>Learn More</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid about pt-5">
                <div class="container pt-5">
                    <div class="row g-5">
                        <div class="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
                            <div class="about-content h-100">
                                <h4 class="text-primary">About Fitness Center</h4>
                                <h1 class="display-4 text-white mb-4">We are the best at fulfilling your potential and achieving your goals.</h1>
                                <p class="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. In impedit accusantium autem quaerat natus nesciunt veritatis fugiat dolor eaque fuga.</p>
                                <div class="tab-class pb-4">
                                    <ul class="nav d-flex mb-2">
                                        <li class="nav-item mb-3">
                                            <a class="d-flex py-2 active" data-bs-toggle="pill" href="#tab-1">
                                                <span style={{ width: '150px' }}>Our Mission</span>
                                            </a>
                                        </li>
                                        <li class="nav-item mb-3">
                                            <a class="d-flex py-2 mx-3" data-bs-toggle="pill" href="#tab-2">
                                                <span style={{ width: '150px' }}>Our Vision</span>
                                            </a>
                                        </li>
                                        <li class="nav-item mb-3">
                                            <a class="d-flex py-2" data-bs-toggle="pill" href="#tab-3">
                                                <span style={{ width: '150px' }}>Our Goal</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="tab-content">
                                        <div id="tab-1" class="tab-pane fade show p-0 active">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="d-flex align-items-center border-top border-bottom py-4">
                                                        <span class="fas fa-rocket text-white fa-4x me-4"></span>
                                                        <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="tab-2" class="tab-pane fade show p-0">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="d-flex align-items-center border-top border-bottom py-4">
                                                        <span class="fas fa-rocket text-white fa-4x me-4"></span>
                                                        <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="tab-3" class="tab-pane fade show p-0">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="d-flex align-items-center border-top border-bottom py-4">
                                                        <span class="fas fa-rocket text-white fa-4x me-4"></span>
                                                        <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row g-4 align-items-center">
                                    <div class="col-sm-6">
                                        <a href="#" class="btn btn-primary py-3 px-5"> <span>Make Appointment</span></a>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="d-flex flex-shrink-0 ps-4">
                                            <a href="#" className="btn btn-light btn-lg-square position-relative wow tada" data-wow-delay=".9s">
                                                <i className="fa fa-phone-alt fa-2x"></i>
                                                <div className="position-absolute" style={{ top: '5px', right: '5px' }}>
                                                    <span><i className="fa fa-comment-dots text-dark"></i></span>
                                                </div>
                                            </a>
                                            <div class="d-flex flex-column ms-3">
                                                <span>Call to Our Experts</span>
                                                <a href="tel:+ 0123 456 7890"><span class="text-white">Free: + 0123 456 7890</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="about-img h-100">
                                <div className="about-img-inner d-flex h-100">
                                    <img src="assets/img/about-2.png" className="img-fluid w-100" style={{ objectFit: 'cover' }} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid goal pt-5">
                <div class="container pt-5">
                    <div class="row g-5">
                        <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
                            <div class="goal-content">
                                <h4 class="text-primary">Fitness Goal</h4>
                                <h1 class="display-4 mb-4">Complete your possibilities, Achieve Your Fitness Goals.</h1>
                                <div class="goal-item d-flex p-4">
                                    <div class="d-flex me-4">
                                        <div class="bg-primary d-inline p-3" style={{ width: '80px', height: '80px' }}>
                                            <img src="assets/img/icon-1.png" class="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4>Free Fitness Training</h4>
                                        <p class="text-white mb-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore est harum</p>
                                    </div>
                                </div>
                                <div class="goal-item d-flex p-4 mb-4">
                                    <div class="d-flex me-4">
                                        <div class="bg-primary d-inline p-3" style={{ width: '80px', height: '80px' }}>
                                            <img src="assets/img/icon-6.png" class="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4>Cardio and Strength</h4>
                                        <p class="text-white mb-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore est harum</p>
                                    </div>
                                </div>
                                <div class="ms-1">
                                    <a href="#" class="btn btn-primary py-3 px-5 ms-2"> <span>Read Details</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
                            <div className="h-100">
                                <img src="assets/img/fitness-goal-banner.png" className="img-fluid h-100" style={{ objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid feature bg-light py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
                        <h4 className="text-primary"> Why choose us?</h4>
                        <h1 className="display-4 mb-4">Out Our Highlights Below</h1>
                        <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                        </p>
                    </div>
                    <div class="feature-carousel owl-carousel">
                        <div class="feature-item wow fadeInUp" data-wow-delay="0.2s">
                            <div class="feature-img">
                                <img src="assets/img/feature-1.jpg" class="img-fluid w-100" alt="" />
                            </div>
                            <div class="feature-content p-4">
                                <h4 class="mb-3">Work Your Butt Off</h4>
                                <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati voluptatum,
                                </p>
                                <a href="#" class="btn btn-primary py-2 px-4"> <span>Read More</span></a>
                            </div>
                        </div>
                        <div class="feature-item wow fadeInUp" data-wow-delay="0.4s">
                            <div class="feature-img">
                                <img src="assets/img/feature-2.jpg" class="img-fluid w-100" alt="" />
                            </div>
                            <div class="feature-content p-4">
                                <h4 class="mb-3">Get In The groove</h4>
                                <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati voluptatum,
                                </p>
                                <a href="#" class="btn btn-primary py-2 px-4"> <span>Read More</span></a>
                            </div>
                        </div>
                        <div class="feature-item wow fadeInUp" data-wow-delay="0.6s">
                            <div class="feature-img">
                                <img src="assets/img/feature-3.jpg" class="img-fluid w-100" alt="" />
                            </div>
                            <div class="feature-content p-4">
                                <h4 class="mb-3">It's more Than A Game</h4>
                                <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati voluptatum,
                                </p>
                                <a href="#" class="btn btn-primary py-2 px-4"> <span>Read More</span></a>
                            </div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-img">
                                <img src="assets/img/feature-4.jpg" class="img-fluid w-100" alt="" />
                            </div>
                            <div class="feature-content p-4">
                                <h4 class="mb-3">Get Fit Don't Quit</h4>
                                <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati voluptatum,
                                </p>
                                <a href="#" class="btn btn-primary py-2 px-4"> <span>Read More</span></a>
                            </div>
                        </div>
                    </div>
                    <div class="feature-shaps"></div>
                </div>
            </div>

            <div className="container-fluid courses overflow-hidden py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
                        <h4 className="text-primary"> Our Courses</h4>
                        <h1 className="display-4 text-white mb-4">Out Our Highlights Below</h1>
                        <p className="text-white mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                        </p>
                    </div>
                    <div class="row gy-4 gx-0 justify-content-center">
                        <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                            <div class="courses-item">
                                <div class="courses-item-inner p-4">
                                    <div class="d-flex justify-content-between mb-4">
                                        <div class="courses-icon-img p-3">
                                            <img src="assets/img/icon-1.png" class="img-fluid" alt="" />
                                        </div>
                                        <div className="data-info d-flex flex-column">
                                            <div className="courses-trainer d-flex align-items-center mb-1">
                                                <div className="me-2" style={{ width: '25px', height: '25px' }}>
                                                    <img src="assets/img/testimonial-3.jpg" className="img-fluid" alt="" />
                                                </div>
                                                <p class="mb-0">Paul Flavius</p>
                                            </div>
                                            <div class="courses-date">
                                                <p class="mb-1">Date: Saturday</p>
                                                <p class="mb-0">Time: 06.00 - 07.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" class="d-inline-block h4 mb-3"> Gym Fitness class</a>
                                    <p class="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque tempora illo placeat.
                                    </p>
                                    <a href="#" class="btn btn-primary py-2 px-4"> <span>Read More</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                            <div class="courses-item">
                                <div class="courses-item-inner p-4">
                                    <div class="d-flex justify-content-between mb-4">
                                        <div class="courses-icon-img p-3">
                                            <img src="assets/img/icon-2.png" class="img-fluid" alt="" />
                                        </div>
                                        <div className="data-info d-flex flex-column">
                                            <div className="courses-trainer d-flex align-items-center mb-1">
                                                <div className="me-2" style={{ width: '25px', height: '25px' }}>
                                                    <img src="assets/img/testimonial-3.jpg" className="img-fluid" alt="" />
                                                </div>
                                                <p class="mb-0">Paul Flavius</p>
                                            </div>
                                            <div class="courses-date">
                                                <p class="mb-1">Date: Saturday</p>
                                                <p class="mb-0">Time: 06.00 - 07.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" class="d-inline-block h4 mb-3"> Power Lifting class</a>
                                    <p class="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque tempora illo placeat.
                                    </p>
                                    <a href="#" class="btn btn-primary py-2 px-4"> <span>Read More</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                            <div class="courses-item">
                                <div class="courses-item-inner p-4">
                                    <div class="d-flex justify-content-between mb-4">
                                        <div class="courses-icon-img p-3">
                                            <img src="assets/img/icon-3.png" class="img-fluid" alt="" />
                                        </div>
                                        <div className="data-info d-flex flex-column">
                                            <div className="courses-trainer d-flex align-items-center mb-1">
                                                <div className="me-2" style={{ width: '25px', height: '25px' }}>
                                                    <img src="assets/img/testimonial-3.jpg" className="img-fluid" alt="" />
                                                </div>
                                                <p class="mb-0">Paul Flavius</p>
                                            </div>
                                            <div class="courses-date">
                                                <p class="mb-1">Date: Saturday</p>
                                                <p class="mb-0">Time: 06.00 - 07.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" class="d-inline-block h4 mb-3"> Body Building class</a>
                                    <p class="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque tempora illo placeat.
                                    </p>
                                    <a href="#" class="btn btn-primary py-2 px-4"> <span>Read More</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                            <div class="courses-item">
                                <div class="courses-item-inner p-4">
                                    <div class="d-flex justify-content-between mb-4">
                                        <div class="courses-icon-img p-3">
                                            <img src="assets/img/icon-4.png" class="img-fluid" alt="" />
                                        </div>
                                        <div className="data-info d-flex flex-column">
                                            <div className="courses-trainer d-flex align-items-center mb-1">
                                                <div className="me-2" style={{ width: '25px', height: '25px' }}>
                                                    <img src="assets/img/testimonial-3.jpg" className="img-fluid" alt="" />
                                                </div>
                                                <p class="mb-0">Paul Flavius</p>
                                            </div>
                                            <div class="courses-date">
                                                <p class="mb-1">Date: Saturday</p>
                                                <p class="mb-0">Time: 06.00 - 07.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" class="d-inline-block h4 mb-3"> Aerobics & Skipping class</a>

                                    <p class="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque tempora illo placeat.
                                    </p>
                                    <a href="#" class="btn btn-primary py-2 px-4"> <span>Read More</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                            <div class="courses-item">
                                <div class="courses-item-inner p-4">
                                    <div class="d-flex justify-content-between mb-4">
                                        <div class="courses-icon-img p-3">
                                            <img src="assets/img/icon-5.png" class="img-fluid" alt="" />
                                        </div>
                                        <div className="data-info d-flex flex-column">
                                            <div className="courses-trainer d-flex align-items-center mb-1">
                                                <div className="me-2" style={{ width: '25px', height: '25px' }}>
                                                    <img src="img/testimonial-3.jpg" className="img-fluid" alt="" />
                                                </div>
                                                <p class="mb-0">Paul Flavius</p>
                                            </div>
                                            <div class="courses-date">
                                                <p class="mb-1">Date: Saturday</p>
                                                <p class="mb-0">Time: 06.00 - 07.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" class="d-inline-block h4 mb-3"> Boxing class</a>
                                    <p class="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque tempora illo placeat.
                                    </p>
                                    <a href="#" class="btn btn-primary py-2 px-4"> <span>Read More</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                            <div class="courses-item">
                                <div class="courses-item-inner p-4">
                                    <div class="d-flex justify-content-between mb-4">
                                        <div class="courses-icon-img p-3">
                                            <img src="assets/img/icon-6.png" class="img-fluid" alt="" />
                                        </div>
                                        <div className="data-info d-flex flex-column">
                                            <div className="courses-trainer d-flex align-items-center mb-1">
                                                <div className="me-2" style={{ width: '25px', height: '25px' }}>
                                                    <img src="assets/img/testimonial-3.jpg" className="img-fluid" alt="" />
                                                </div>
                                                <p class="mb-0">Paul Flavius</p>
                                            </div>
                                            <div class="courses-date">
                                                <p class="mb-1">Date: Saturday</p>
                                                <p class="mb-0">Time: 06.00 - 07.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" class="d-inline-block h4 mb-3"> Cardio class</a>
                                    <p class="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque tempora illo placeat.
                                    </p>
                                    <a href="#" class="btn btn-primary py-2 px-4"> <span>Read More</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
                            <a href="#" class="btn btn-primary py-3 px-5"> <span>More Courses</span></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid blog py-5">
                <div class="container py-5">
                    <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
                        <h4 class="text-primary">  Our Blogs</h4>
                        <h1 class="display-4 mb-4">Check out our latest stories</h1>
                        <p class="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                        </p>
                    </div>
                    <div class="blog-carousel owl-carousel">
                        <div class="blog-item wow fadeInUp" data-wow-delay="0.2s">
                            <div class="blog-img p-4 pb-0">
                                <a href="#">
                                    <img src="assets/img/feature-4.jpg" class="img-fluid w-100" alt="" />
                                </a>
                            </div>
                            <div class="blog-content p-4">
                                <div class="blog-comment d-flex justify-content-between py-2 px-3 mb-4">
                                    <div class="small"><span class="fa fa-user text-primary me-2"></span> Martin.C</div>
                                    <div class="small"><span class="fa fa-calendar text-primary me-2"></span> 30 Dec 2025</div>
                                </div>
                                <a href="#" class="h4 d-inline-block mb-3">Full Body Home Workout</a>
                                <p class="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.</p>
                                <a href="#" class="btn btn-dark py-2 px-4 ms-2"> <span class="me-2">Read More</span>  <i class="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div class="blog-item wow fadeInUp" data-wow-delay="0.4s">
                            <div class="blog-img p-4 pb-0">
                                <a href="#">
                                    <img src="assets/img/feature-3.jpg" class="img-fluid w-100" alt="" />
                                </a>
                            </div>
                            <div class="blog-content p-4">
                                <div class="blog-comment d-flex justify-content-between py-2 px-3 mb-4">
                                    <div class="small"><span class="fa fa-user text-primary me-2"></span> Martin.C</div>
                                    <div class="small"><span class="fa fa-calendar text-primary me-2"></span> 30 Dec 2025</div>
                                </div>
                                <a href="#" class="h4 d-inline-block mb-3">31-Day Fitness Calendar</a>
                                <p class="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.</p>
                                <a href="#" class="btn btn-dark py-2 px-4 ms-2"> <span class="me-2">Read More</span>  <i class="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div class="blog-item wow fadeInUp" data-wow-delay="0.6s">
                            <div class="blog-img p-4 pb-0">
                                <a href="#">
                                    <img src="assets/img/feature-2.jpg" class="img-fluid w-100" alt="" />
                                </a>
                            </div>
                            <div class="blog-content p-4">
                                <div class="blog-comment d-flex justify-content-between py-2 px-3 mb-4">
                                    <div class="small"><span class="fa fa-user text-primary me-2"></span> Martin.C</div>
                                    <div class="small"><span class="fa fa-calendar text-primary me-2"></span> 30 Dec 2025</div>
                                </div>
                                <a href="#" class="h4 d-inline-block mb-3">At Home Ab Workout</a>
                                <p class="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.</p>
                                <a href="#" class="btn btn-dark py-2 px-4 ms-2"> <span class="me-2">Read More</span>  <i class="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div class="blog-item">
                            <div class="blog-img p-4 pb-0">
                                <a href="#">
                                    <img src="assets/img/feature-1.jpg" class="img-fluid w-100" alt="" />
                                </a>
                            </div>
                            <div class="blog-content p-4">
                                <div class="blog-comment d-flex justify-content-between py-2 px-3 mb-4">
                                    <div class="small"><span class="fa fa-user text-primary me-2"></span> Martin.C</div>
                                    <div class="small"><span class="fa fa-calendar text-primary me-2"></span> 30 Dec 2025</div>
                                </div>
                                <a href="#" class="h4 d-inline-block mb-3">Full Body Home Workout</a>
                                <p class="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.</p>
                                <a href="#" class="btn btn-dark py-2 px-4 ms-2"> <span class="me-2">Read More</span>  <i class="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid explore py-5 wow zoomIn" data-wow-delay="0.2s">
                <div class="container py-5 text-center">
                    <h1 class="display-1 text-white mb-0"> Explore Fitness Center</h1>
                    <a class="btn btn-primary py-3 px-4 px-md-5 me-2" href="https://www.youtube.com/embed/DWRcNpR6Kdc"><i class="fas fa-play-circle me-2"></i> <span>Watch Video</span></a>
                </div>
            </div>

            <div class="container-fluid team py-5">
                <div class="container py-5">
                    <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
                        <h4 class="text-primary">Our Trainer</h4>
                        <h1 class="display-4 mb-4">Meet Our Amazing Team</h1>
                        <p class="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                        </p>
                    </div>
                    <div class="row gy-5 gy-lg-4 gx-4">
                        <div class="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.2s">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src="assets/img/team-1.jpg" class="img-fluid w-100" alt="Image" />
                                    <div class="team-icon">
                                        <a href="#" class="btn btn-primary btn-sm-square"><i class="fab fa-facebook-f"></i></a>
                                        <a href="#" class="btn btn-primary btn-sm-square"><i class="fab fa-twitter"></i></a>
                                        <a href="#" class="btn btn-primary btn-sm-square"><i class="fab fa-instagram"></i></a>
                                        <a href="#" class="btn btn-primary btn-sm-square"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div class="team-content">
                                    <h4>Trainer Name</h4>
                                    <p class="mb-0">Profession</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.4s">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src="assets/img/team-2.jpg" class="img-fluid w-100" alt="Image" />
                                    <div class="team-icon">
                                        <a href="#" class="btn btn-primary btn-sm-square"><i class="fab fa-facebook-f"></i></a>
                                        <a href="#" class="btn btn-primary btn-sm-square"><i class="fab fa-twitter"></i></a>
                                        <a href="#" class="btn btn-primary btn-sm-square"><i class="fab fa-instagram"></i></a>
                                        <a href="#" class="btn btn-primary btn-sm-square"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div class="team-content">
                                    <h4>Trainer Name</h4>
                                    <p class="mb-0">Profession</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.6s">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src="assets/img/team-3.jpg" class="img-fluid w-100" alt="Image" />
                                    <div class="team-icon">
                                        <a href="#" class="btn btn-primary btn-sm-square"><i class="fab fa-facebook-f"></i></a>
                                        <a href="#" class="btn btn-primary btn-sm-square"><i class="fab fa-twitter"></i></a>
                                        <a href="#" class="btn btn-primary btn-sm-square"><i class="fab fa-instagram"></i></a>
                                        <a href="#" class="btn btn-primary btn-sm-square"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div class="team-content">
                                    <h4>Trainer Name</h4>
                                    <p class="mb-0">Profession</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.8s">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src="assets/img/team-4.jpg" class="img-fluid w-100" alt="Image" />
                                    <div class="team-icon">
                                        <a href="#" class="btn btn-primary btn-sm-square"><i class="fab fa-facebook-f"></i></a>
                                        <a href="#" class="btn btn-primary btn-sm-square"><i class="fab fa-twitter"></i></a>
                                        <a href="#" class="btn btn-primary btn-sm-square"><i class="fab fa-instagram"></i></a>
                                        <a href="#" class="btn btn-primary btn-sm-square"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div class="team-content">
                                    <h4>Trainer Name</h4>
                                    <p class="mb-0">Profession</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid testimonial bg-dark py-5" style={{ marginBottom: '90px' }}>
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
                        <h4 className="text-primary">Testimonial</h4>
                        <h1 className="display-4 text-white">What Our Customers Are Saying</h1>
                    </div>
                    <div className="testimonial-carousel owl-carousel wow fadeInUp" data-wow-delay="0.2s">
                        <div className="testimonial-item mx-auto" style={{ maxWidth: '900px' }}>
                            <span class="fa fa-quote-left fa-3x quote-icon"></span>
                            <div class="testimonial-img mb-4">
                                <img src="assets/img/testimonial-1.jpg" class="img-fluid" alt="Image" />
                            </div>
                            <p class="fs-4 text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi deleniti ratione similique eaque blanditiis fugit voluptas ex officiis expedita repellat doloribus veniam delectus tempore, laudantium, aliquam ad? Rem, accusantium?
                            </p>
                            <div class="d-block">
                                <h4 class="text-white">Client Name</h4>
                                <p class="m-0 pb-3">Profession</p>
                                <div class="d-flex">
                                    <i class="fas fa-star text-primary"></i>
                                    <i class="fas fa-star text-primary"></i>
                                    <i class="fas fa-star text-primary"></i>
                                    <i class="fas fa-star text-primary"></i>
                                    <i class="fas fa-star text-white"></i>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item mx-auto" style={{ maxWidth: '900px' }}>
                            <span className="fa fa-quote-left fa-3x quote-icon"></span>
                            <div className="testimonial-img mb-4">
                                <img src="assets/img/testimonial-2.jpg" className="img-fluid" alt="Image" />
                            </div>
                            <p class="fs-4 text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi deleniti ratione similique eaque blanditiis fugit voluptas ex officiis expedita repellat doloribus veniam delectus tempore, laudantium, aliquam ad? Rem, accusantium?
                            </p>
                            <div class="d-block">
                                <h4 class="text-white">Client Name</h4>
                                <p class="m-0 pb-3">Profession</p>
                                <div class="d-flex">
                                    <i class="fas fa-star text-primary"></i>
                                    <i class="fas fa-star text-primary"></i>
                                    <i class="fas fa-star text-primary"></i>
                                    <i class="fas fa-star text-primary"></i>
                                    <i class="fas fa-star text-white"></i>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item mx-auto" style={{ maxWidth: '900px' }}>
                            <span className="fa fa-quote-left fa-3x quote-icon"></span>
                            <div className="testimonial-img mb-4">
                                <img src="assets/img/testimonial-3.jpg" className="img-fluid" alt="Image" />
                            </div>
                            <p class="fs-4 text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi deleniti ratione similique eaque blanditiis fugit voluptas ex officiis expedita repellat doloribus veniam delectus tempore, laudantium, aliquam ad? Rem, accusantium?
                            </p>
                            <div class="d-block">
                                <h4 class="text-white">Client Name</h4>
                                <p class="m-0 pb-3">Profession</p>
                                <div class="d-flex">
                                    <i class="fas fa-star text-primary"></i>
                                    <i class="fas fa-star text-primary"></i>
                                    <i class="fas fa-star text-primary"></i>
                                    <i class="fas fa-star text-primary"></i>
                                    <i class="fas fa-star text-white"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="container-fluid copyright py-4">
                <div class="container">
                    <div class="row g-4 align-items-center">
                        <div class="col-md-6 text-center text-md-start mb-md-0">
                            <span class="text-body"><a href="#" class="border-bottom text-white"><i class="fas fa-copyright text-light me-2"></i>Your Site Name</a>, All right reserved.</span>
                        </div>
                        <div class="col-md-6 text-center text-md-end text-body">

                            Designed By <a class="border-bottom text-white" href="https://htmlcodex.com">HTML Codex</a>
                            Distributed By <a href="https://themewagon.com/">ThemeWagon</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="back-to-top">
                <a href="#" class="btn"><i class="fa fa-arrow-up"></i></a>
            </div>
        </Weblayout>
    );
}

export default Home;