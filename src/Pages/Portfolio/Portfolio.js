import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <section>
                <div class="hero min-h-[60vh] bg-base-200">
                    <div class="hero-content flex-col lg:flex-row">
                        {/* <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" /> */}
                        <div>
                            <h1 class="text-5xl font-bold">Abdur Rahman</h1>
                            <p class="py-6">I am a Front End Developer</p>
                            <button type='email' class="btn btn-primary">Abdur_Rahman@mail.com</button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="hero min-h-[60vh] bg-base-200">
                    <div class="hero-content flex-col lg:flex-row">
                        <div>
                            <h1 class="text-5xl font-bold">My Skills:</h1>

                            <p class="py-6"><b> Expertise:</b>  React.js, HTML-5, CSS-3, Vanila JavaScript, Bootstrap, React, React Router, React Hook, </p>
                            <p><b>Comfortable:</b>  Firebase, Node.js, Express.js, MongoDB, JWT, Tailwind, Styled components, React Hook Form,</p>
                            <p><b>Familiar:</b> Php, Sass, Rest API, React Query</p>
                            <p><b>Tools:</b>Heroku, Netlify, git, GitHub, Postman, npm, , Figma,</p>
                        </div>
                        <div class="divider lg:divider-horizontal">AND</div>
                        <div>
                            <h1 class="text-5xl font-bold">Education</h1>
                            <p class="py-6">Ecommerce (Horns) May 2018 – Present <br />
                                Narayangonj University</p>
                            <p>
                                Course: Complete Web Development Course by programming-hero
                            </p>
                            <p>
                                Language : Bengali – Native, English – Conversational
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <h1 class="text-5xl text-center font-bold">Projects</h1>
            <section className='grid grid-cols-2 gap-20'>
                <div class="card  bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/4ZW6m7D/screenshot-doctors-portal-6736f-web-app-2022-05-26-17-59-34.png" alt="Shoes" /></figure>
                    <div class="card-body">

                        <p>
                            ● Brief description
                        </p>
                        <ul>
                            <li> - Service providing website. Logged in users can set appointment. Option to cancel appointment.</li>
                            <li> -Add new doctor and manage doctor and client, stripe payment</li>
                        </ul>

                        <p>● Technology used </p>
                        - Mern stack, tailwind CSS, firebase, Heroku

                        <div class="card-actions justify-end">
                            <a href="https://doctors-portal-6736f.web.app/">
                            <button class="btn btn-primary">Live site</button>
                            </a>
                                
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/h9H77NS/screenshot-assignment-11-e50b7-web-app-2022-05-26-17-58-38.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h1 class="text-5xl font-bold">Doctors Portal</h1>
                        <p class="py-6">– Service based website</p>
                        <p>● Features</p>
                        <ul>
                            <li>
                                - Inventory management website with google authentication, email authentication.
                            </li>
                            <li>
                                - Logged in users can update stock or add products. Option to reset the whole stock.
                            </li>
                            <li>
                                -Add new product and manage that
                            </li>
                        </ul>
                        <p>● Technology used </p>
                        - Mern stack, tailwind CSS, firebase, Heroku
                        <div class="card-actions justify-end">
                            <a href="https://assignment-11-e50b7.web.app/">
                            <button class="btn btn-primary"> Live site</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;