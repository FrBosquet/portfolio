import React from 'react'
import ProjectCard from './card/project-card.js'
import './projects.css'

class project {
    constructor(title, description, image, badges, link){
      this.title = title
      this.description = description
      this.image = image
      this.badges = badges
      this.link = link
    }
}

let projects = [
  new project('This portfolio',
    'This portfolio is my first project after the Web Dev Bootcamp. I made it using React to try and learn a new library after Angular 4. I tryed to kept it simple a nice with a plain minimal design.',
    'portfolio.png',
    ['react','css'],
    'http://www.franbosquet.com/portfolio'
  ),
  new project('Want-It',
    'A wish list with social superpowers. Lets the user create and share his own wishes and make instagram-like post about it. Third and final bootcamp project in IronHack. Finalist project featured in the hackshow ',
    'wantit.png',
    ['mongo', 'express', 'node', 'angular', 'sass', 'ec2'],
    'http://want-it.co'
  ),
  new project('Poetry generator',
    'A random online poetry generator. Allows the user to generate, save, share verses and create its own words and expresións to fill the database. Second bootcamp project in IronHack coded along with Fer Rodriguez.',
    'poetry.png',
    ['mongo', 'express', 'node', 'pug', 'heroku'],
    'http://poetry-generator.herokuapp.com/'
  ),
  new project('Iron Gunz',
    'A 2-players top down shooter inspired in famous Denaton Games Hotline Miami series. Features fast paced gameplay, four characters and rewind effect. First bootcamp project in Ironhack, earned the "Best game award" of that promotion',
    'irongunz.png',
    ['html', 'css', 'js'],
    'https://frbosquet.github.io/project-iron-gunz/'
  ),
  new project('Clay',
    'Personal project being develop in Unity 5 and C#. The goal is to build a flexible 3d car designer which ables the players to easily model their dream car using a lego-like builder and a mesh modifier. There is no release date yet, but you can check the repo',
    'clay.png',
    ['unity','c'],
    'https://github.com/FrBosquet/PartBlocks'
  ),
  new project('My blog',
    'When i decided to take this leap from the building bussiness to the tech bussines, i also decided to write about it to help others thinking about it in the future. Particularly, i devoted myself to narrate the entire bootcamp experience. The blog is implemented in WordPress with some css work here and there',
    'blog.png',
    ['wordpress', 'css'],
    'http://www.franbosquet.com/'
  )
]

export default () =>
  <article className="projects">
    <h2 className="title">
      Latest projects
    </h2>
    <section className="showroom">
      {projects.map((project, idx) =>
        <ProjectCard
          key = {idx}
          title = {project.title}
          description = {project.description}
          image = {project.image}
          badges = {project.badges}
          link = {project.link}
        />)}
    </section>
  </article>
