import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
  return (
  <section className={styles.container}>
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img
            src={getImageUrl("about/aboutImage.png")}
            alt="my about image"
            className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li>
                <img src={getImageUrl("about/cursorIcon.png")} alt="cursor"/>
                <div>
                    <h3>Frontend Developer</h3>
                    <p>I am a dev and I have experience yay me.</p>
                </div>
            </li>
            <li>
                <img src={getImageUrl("about/serverIcon.png")} alt="server"/>
                <div>
                    <h3>Backend Developer</h3>
                    <p>I am a dev and I have experience yay me.</p>
                </div>
            </li>
            <li>
                <img src={getImageUrl("about/cursorIcon.png")} alt="cursor"/>
                <div>
                    <h3>UI Developer</h3>
                    <p>I am a dev and I have experience yay me.</p>
                </div>
            </li>
        </ul>
    </div>
  </section>);
}
