import React from 'react';
import './Home.scss';
import profile_pic from '../../assets/profile_pic.jpg';
import { Link } from 'react-scroll';
import { FaHandshake } from 'react-icons/fa';

function Home() {
  return (
    <section id='intro'>
      <div className='intro-content'>
        <span className="intro-text">
          Je suis <span className="intro-name">Wiam Bouchaib</span> <br />
          Développeuse Web
        </span>
        <p className="intro-paragraph">  Développeuse web passionnée, je crée des solutions modernes et intuitives pour améliorer l'expérience utilisateur. J'aime relever de nouveaux défis, apprendre en continu, et transformer des idées en projets concrets et impactants.
        </p>
        <Link to="contact" smooth={true} duration={500}>
          <button className="btn-contact">
            <FaHandshake className='collab-icon' /> Développons ensemble
          </button>
        </Link>
        </div>
        <img className='profile_pic' src={profile_pic} alt="photo de profil" />
    </section>
  );
}

export default Home;