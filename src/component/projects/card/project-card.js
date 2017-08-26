import React, { Component } from 'react'
import './project-card.css'

const techs = {
  mongo:'MongoDB',
  express:'ExpressJS',
  angular:'Angular 4',
  node: 'NodeJS',
  sass:'Angular 4',
  ec2: 'Amazon Elastic Cloud 2',
  pug: 'Pug template engine (Jade)',
  heroku: 'Heroku',
  html: 'HTML5',
  css: 'CSS3',
  js: 'JavaScript',
  c: 'C#',
  unity: 'Unity 5',
  react: 'ReactJS'
}

class ProjectCard extends Component{
  render(){
      return (
        <div className="card">
          <h2>{this.props.title}</h2>
          <div className="content">
            <img src={`images/projects/${this.props.image}`}/>
            <p>
              {this.props.description}
            </p>
          </div>
          <span className="link"> Check it <a href={this.props.link} target="_blank">here</a></span>
          <footer>
            {this.props.badges.map((badge, idx) =>
              <img
                key={idx}
                src={`images/projects/badges/${badge}.png`}
                title={techs[badge]}
                alt={techs[badge]}/>)}
          </footer>
        </div>
      )
  }
}

export default ProjectCard;
