import React from 'react'
import './education.css'

export default () =>
  <article className='education'>
    <h2 className="title">
      My education
    </h2>
    <section className="carrousel">
        <div className="page">
          <h3>Coding</h3>
          <ul>
            <li>
              <b>Web Development Bootcamp</b> FullStack MEAN developer, in IronHack (2017)
            </li>
            <li>
              <b>Online Web Dev Bootcamp</b>, in FreeCodeCamp (2016-Pending)
            </li>
            <li>
              <b>Computer Engineering Deegree</b>, in Universidad Isabel I (2015-Pending)
            </li>
          </ul>
          <h5>Courses</h5>
          <ul>
            <li>
              <b>Expert developer in J2EE technologies (450h)</b>, in Almerimatik Formación (2013)
            </li>
            <li>
              <b>Object Oriented Applications (270h)</b>, in Almerimatik Formación (2012)
            </li>
          </ul>
        </div>
        <div className="page">
          <h3>Non-coding</h3>
          <ul>
            <li>
              <b>Master in building technical innovation</b>, in U. Politécnica Madrid (2013-2014)
            </li>
            <li>
              <b>Building engineering deegree</b>, in U. Camilo José Cela (2011-2012)
            </li>
            <li>
              <b>Technical Architect</b>, in U. Granada (2004-2011)
            </li>
          </ul>
      </div>
    </section>
  </article>
