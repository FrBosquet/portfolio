import React from 'react'
import './presentation.css'

export default () =>
  <article className="presentation">
      <img className="avatar" src="images/fran.png" alt="Fran's face"/>
      <section className="title">
        <h1>
          Fran
          <img src="images/logoCherry.png" alt=""/>
          Bosquet
        </h1>
        <h5>
          Fullstack web developer
        </h5>
      </section>
      <section className="resume">
        <p>
          <strong>Hi! My name is Fran.</strong> I'm a fullstack developer converted from the building bussiness. I'm passionated about programming and one day i decided to turn my hobby into my profession.
        </p>
        <p>
          Mainly focused in the web and the JavaScript enviroment, I already coded in other enviroments and languages and I'm looking forward for my next language, framework or platform to learn.
        </p>
        <p>
          My goal is to build nice products, with nice people, using nice technologies, ¡And enjoy the process!
        </p>
      </section>
  </article>
