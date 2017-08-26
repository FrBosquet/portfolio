import React from 'react';
import './contact.css'

const Network = (props) =>
  <a href={props.link}
    target="_blank">
    <img
      src={`images/networks/${props.image}.png`}
      alt={props.image}
      title={props.image}/>
  </a>

export default () =>
  <footer className="contact">
    <h2 className="title">
      Contact information
    </h2>
    <p className='email'>
      You can send me an email to <a href="http://frbosquet@gmail.com">frbosquet@gmail.com</a> or contact me in any of these networks:
    </p>
    <div className="networks">
      <Network image="linkedin" link="https://www.linkedin.com/in/fran-bosquet/" />
      <Network image="github" link="https://github.com/FrBosquet" />
      <Network image="codepen" link="https://codepen.io/FrBosquet/" />
      <Network image="freeCodeCamp" link="https://www.freecodecamp.org/frbosquet" />
      <Network image="twitter" link="https://twitter.com/FrBosquet" />
    </div>
    <p>
      Copyright Fran Bosquet (c) 2017
    </p>
    <img src="images/logoWhite.png" alt="Fran Bosquet"/>
  </footer>
