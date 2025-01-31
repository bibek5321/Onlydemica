import React from 'react'
import "./hero.css"
import Title from '../../common/Title/Title'

const Hero = () => {
  return (
    <>
     <section className="hero">
        <div className="container">
            <div className="row">
                <Title subtitle='WELCOME TO ONLYDEMICA' title="Best Online Education"/>

                <p>An ONLYDEMICA is a digital space where users can access educational content, courses, and training materials remotely. These platforms offer a variety of learning formats, including video lectures, interactive quizzes, assignments, and discussion forums. Popular platforms like Coursera, Udemy, and edX provide courses on diverse subjects, from technology to business and arts. Online learning platforms are flexible, cost-effective, and accessible from anywhere, making education more inclusive and convenient for students, professionals, and lifelong learners.</p>
                <div className="button">
                <button className="primary-btn">
                        GET STARTED NOW<i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                    <button className="primary-btn">
                        VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                </div>
            </div>
        </div>
     </section>
     <div className="margin"></div>
    </>
  )
}

export default Hero
