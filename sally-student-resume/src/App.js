import React from 'react'
import Header from "./Header"
import './App.css'

function App() {

  return (
    <div className='App'>
	<Header name="Sally Studentʻs Resume"/>
	<nav>
		<a href="index.html">About</a>
		<a href="#">Portfolio</a>
	</nav>
	<main>
		<section id="contact">
			<h2>Contact me</h2>
			<address>Sally Brown | <a href="mailto:sallybrown@gmail.com">sallybrown@gmail.com</a> | 555-666-7788</address>
			<p><img src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg" alt="Sally Brown's picture in white background" height="200" /></p>
	</section>
  <section>
    <h2>Education</h2>
    <p>2015 - 2017 College of Alameda</p>
    <p>2017 - 2020 San Francisco State University</p>
  </section>
  <section>
    <h2>Experience</h2>
    <p>Thinkful | Intern  |  01/2019 - 08/2019 </p>
    <ul>
      <li>Write custom HTML, CSS and JavaScript for existing websites and applications.</li>
      <li>Design, recommend and pitch improvements to new and existing features.</li>
      <li>Assist in troubleshooting issues on web-based systems.</li>
      <li>Update and edit website content, posts and pages.</li>
      <li>Provide technical support related to web-based systems to internal teams.</li>
      <li>Test and give feedback on new and existing technologies.</li>
      <li>Create prototypes and experiment with new    technologies and features as assigned.</li>
    </ul>
    <p>Google | Full-stack Developer |  09/2019 - Present </p>
    <ul>
      <li>Developing front end website architecture.</li>
      <li>Designing user interactions on web pages.</li>
      <li>Developing back end website applications.</li>
      <li>Creating servers and databases for functionality.</li>
      <li>Ensuring cross-platform optimization for mobile phones.</li>
      <li>Ensuring responsiveness of applications.</li>
      <li>Working alongside graphic designers for web design features.</li>
      <li>Seeing through a project from conception to finished product.</li>
      <li>Designing and developing APIs.</li>
      <li>Meeting both technical and consumer needs.</li>
      <li>Staying abreast of developments in web applications and programming languages.</li>
    </ul>
  </section>
</main>
<footer>&copy; 2020 Designed by Muhiddin Kurbonov</footer>
</div>
  );
}

export default App;