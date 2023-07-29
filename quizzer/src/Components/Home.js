import React from 'react'
import '../App.css'
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  } from "./FooterStyles";
  
const Home = (props) => {

  const navigate = useNavigate();

  const navigateToQuestions = () => {
    navigate('/Questions');
  };
 
  const navigateToQuiz = () => {
    navigate('/Quiz');
  };

  return (
    <>
    <div className='home-text'>
      <div className='content'>
        <p>
Introducing Quizzer: The Ultimate Knowledge Challenge!
</p>
<p>
Are you ready to put your brainpower to the test? Look no further than Quizzer, the interactive quiz app designed to entertain and educate. Whether you're a trivia enthusiast, a curious learner, or simply seeking a fun way to pass the time, Quizzer is the perfect companion for your quest for knowledge.
</p>
<p>
With Quizzer, you'll embark on an exciting journey through a vast array of categories and topics. From history to science, pop culture to sports, there's something for everyone. Challenge yourself with thought-provoking questions that will keep you engaged and eager to learn more. With thousands of quizzes at your fingertips, Quizzer guarantees endless hours of entertainment.
</p>
<p>
Not only will you have a blast testing your knowledge, but Quizzer also offers a competitive edge. Compete against friends, family, or other trivia enthusiasts from around the world to climb the global leaderboard. Show off your intellectual prowess and prove that you're the ultimate Quizzer champion!
</p>
<p>
What sets Quizzer apart is its user-friendly interface and engaging features. Enjoy vibrant visuals, intuitive controls, and a seamless navigation system that makes exploring quizzes a breeze. Track your progress, unlock achievements, and collect badges as you conquer new challenges. Stay motivated and strive to reach the top of the leaderboard.
</p>
<p>
Ready to take on the world of trivia? Download Quizzer today and unlock the door to endless learning and entertainment. Sharpen your mind, expand your knowledge, and become a true Quizzer master!
</p>
</div>
<button className='start-quiz-button' onClick={navigateToQuestions} >Create Quiz</button>
<button className='start-quiz-button' onClick={navigateToQuiz} >Play Quiz</button>
</div>
<div className="footer--pin">
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Writing</FooterLink>
			<FooterLink href="#">Internships</FooterLink>
			<FooterLink href="#">Coding</FooterLink>
			<FooterLink href="#">Teaching</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Uttar Pradesh</FooterLink>
			<FooterLink href="#">Ahemdabad</FooterLink>
			<FooterLink href="#">Indore</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
    </div>
</>
  )
}

export default Home