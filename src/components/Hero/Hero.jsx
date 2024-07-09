import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Charles!</h1>
            <p className={styles.description}>
                I am a Ph.D. student at Mississippi State University focusing in AI and Robotics.
                Reach out if you'd like to learn more about what I do!
            </p>
            <a className={styles.contactBtn} href="mailto:cmr750@msstate.edu">Email</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Hero"/>
        <div classname={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}
