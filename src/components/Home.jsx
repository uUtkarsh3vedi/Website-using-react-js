import React from 'react'
import vg from "../assets/2 (1).webp"
import {AiFillGoogleCircle,
  AiFillFacebook,
  AiFillTwitterCircle,
AiFillInstagram} from "react-icons/ai"

function Home() {
  return (
     <>
    <div className= "home" id= "home">
        <main>
            <h1>Acme Solutions</h1>
            <p>Solution for All your Needs</p>
        </main>
    </div>
<div className="home2">

<img src={vg} alt="Graphics" />
<div>
    <p>
    The top technology team of Acme Solutions does not use any random technology for their client’s projects. They use the most effective, recent and modern technologies. One such is JavaScript. JavaScript has so many technological advantages that the Team Acme Solutions is able to provide successful software development to all their clients. Unlike other languages, JavaScript is executed on the user’s server and not the web server. This helps to reduce the bandwidth as well as the load on the web server. Another reason why it is employed is because of its simplicity.

    </p>
</div>
</div>


<div className="home3" id ="about">
  <div>
  <h1>Who we are?</h1>
  <p>Acme Solutions is the largest Web & solar IPPs in India, having a portfolio of  web & solar power projects with an aggregate capacity of more than 5500 MWp. We develop, build, own, operate and maintain utility scale grid connected solar power projects & IT projects (through our in-house engineering and O&M operations), and generate revenue through the sale of electricity to central and state government entities and government-backed corporations. We have grown our portfolio of operational solar power projects from 15 MWp in December 2011 to 2900+ MWp currently. The rest of the 2600 MWp is under different phases of development. We are present across 12 Indian states, Uttarakhand, Gujarat, Chhattisgarh, Telangana, Karnataka, Punjab, Bihar, Uttar Pradesh, Odisha, Madhya Pradesh, Rajasthan and Andhra Pradesh.
  </p>
</div>
</div>


<div className="home4" id="Social">
<div>
  <h1>Social Handles</h1>
  
  <article>
    <div 
    style={{
      animationDelay: "0.3s",
      
    }}>
     <AiFillGoogleCircle />
     <p>Google</p>
      
    </div>
    <div 
    style={{
      animationDelay: "0.5s",
      
    }}>
     <AiFillFacebook />
     <p>Facebook</p>
      
    </div>
    <div 
    style={{
      animationDelay: "0.7s",
      
    }}>
     <AiFillTwitterCircle />
     <p>Twitter</p>
      
    </div>
    <div 
    style={{
      animationDelay: "1s",
      
    }}>
     <AiFillInstagram />
     <p>Instagram</p>
      
    </div>


  </article>
</div>
</div>
</>
  );
};

export default Home;