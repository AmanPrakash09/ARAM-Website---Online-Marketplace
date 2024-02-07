import { useEffect } from "react";
import styles from "./AboutContainer.module.css";

const AboutContainer = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.about} data-scroll-to="aboutContainer">
      <b className={styles.aboutTitle} data-animate-on-scroll>
        about
      </b>
      <div className={styles.outerWorkerFrame}>
        <div className={styles.innerWorkerFrame}>
          <div className={styles.workerPictures} data-animate-on-scroll>
            <img className={styles.worker1Icon} alt="" src="/worker1@2x.png" />
            <img className={styles.worker2Icon} alt="" src="/worker2@2x.png" />
            <img className={styles.worker3Icon} alt="" src="/worker3@2x.png" />
          </div>
          <div className={styles.aRamIntro} data-animate-on-scroll>
            <p className={`${styles.text1} text1`}>
              Welcome to A-RAM, where the tapestry of tradition and innovation
              seamlessly weave together. Nestled in the heart of India, our
              roots in the ancient art of rug making stretch back nearly three
              centuries, creating a legacy that transcends time.
            </p>
            {/* <p className={styles.welcomeToARam}>&nbsp;</p> */}
            <p className={`${styles.text2} text2`}>
              In the hallowed halls of the A-RAM weaving community,
              craftsmanship is not just a skill; it's a testament to resilience.
              Faced with challenges arising from the passage of time and limited
              resources, we have chosen a path of purpose. Beyond the looms, our
              commitment extends to fostering the well-being of our artisans,
              ensuring access to healthcare, life insurance, education, and
              empowering opportunities for self-employment.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.outerCpaFrame}>
        <div className={styles.innerCpaFrame}>
          <img
            className={styles.rohitLinkedinProfile1IconTop}
            alt=""
            src="/rohitlinkedinprofile-1@2x.png"
            data-animate-on-scroll
          />
          <div className={styles.rohitIntro} data-animate-on-scroll>
            <p className={`${styles.text3} text3`}>
              At the helm is our visionary Founder and CEO, Rohit Prakash, CPA,
              CMA. With a global career spanning 25 years in strategy, finance,
              and quality management, Rohit has traded boardrooms for a higher
              purpose. His dedication to philanthropy is a testament to his
              belief that success is most meaningful when it uplifts others.
            </p>
            {/* <p className={styles.welcomeToARam}>&nbsp;</p> */}
            <p className={`${styles.text4} text4`}>
              Our journey is fueled by a passion to revive the vibrant hues of
              Indian culture within our weaving communities. As we bridge the
              gap between tradition and the demands of the contemporary global
              market, Rohit leverages his Canadian presence and international
              experience to breathe new life into the fading artistry.
            </p>
          </div>
          <img
            className={styles.rohitLinkedinProfile1IconBottom}
            alt=""
            src="/rohitlinkedinprofile-1@2x.png"
            data-animate-on-scroll
          />
        </div>
      </div>
      <div className={styles.asYouExplore} data-animate-on-scroll>
        As you explore our collection, know that each rug tells a story—a story
        of tradition, resilience, and a shared commitment to making a
        difference. Join us on this journey as we weave together a tapestry that
        transcends borders, enriching homes and communities alike.
      </div>
      <div className={styles.pinkUnderlap1} data-animate-on-scroll>
        <img
          className={styles.networking2Icon}
          alt=""
          src="/networking-2@2x.png"
        />
        <div className={styles.weAimNot}>
          We aim not only to meet but surpass the expectations of those who
          believe in our mission.
        </div>
      </div>
      <div className={styles.yellowOverlap1} data-animate-on-scroll>
        <div className={styles.exceedingStakeholderExpectat}>
          Exceeding Stakeholder Expectations
        </div>
      </div>
      <div className={styles.pinkUnderlap2} data-animate-on-scroll>
        <img
          className={styles.graduationCap1Icon}
          alt=""
          src="/graduationcap-1@2x.png"
        />
        <div className={styles.beyondRugsWe}>
          {" "}
          Beyond rugs, we invest in the education and health of our communities,
          ensuring a brighter future for generations to come.
        </div>
        <img
          className={styles.healthcare1Icon}
          alt=""
          src="/healthcare-1@2x.png"
        />
      </div>
      <div className={styles.yellowOverlap2} data-animate-on-scroll>
        <div
          className={styles.exceedingStakeholderExpectat}
        >{`Promoting Community Education & Health`}</div>
      </div>
      <div className={styles.pinkUnderlap3} data-animate-on-scroll>
        <div className={styles.atARamRespect}>
          At A-RAM, respect is the foundation upon which we build both our
          workplace and our relationships with our global family.
        </div>
        <img className={styles.honesty1Icon} alt="" src="/honesty-1@2x.png" />
      </div>
      <div className={styles.yellowOverlap3} data-animate-on-scroll>
        <div className={styles.respect}>Respect</div>
      </div>
      <div className={styles.purpleUnderlap2} data-animate-on-scroll>
        <div className={styles.weAreCommitted}>
          We are committed to preserving the rich tapestry of artistic
          expression within our weaving heritage.
        </div>
        <img className={styles.india2Icon} alt="" src="/india-2@2x.png" />
      </div>
      <div className={styles.blueOverlap2} data-animate-on-scroll>
        <div className={styles.preservingArt}>Preserving Art</div>
      </div>
      <div className={styles.purpleUnderlap1} data-animate-on-scroll>
        <div className={styles.embracingChangeWhile}>
          Embracing change while cherishing tradition, we innovate to stay at
          the forefront of the home decor industry.
        </div>
        <img
          className={styles.projectManagement1Icon}
          alt=""
          src="/projectmanagement-1@2x.png"
        />
      </div>
      <div className={styles.blueOverlap1} data-animate-on-scroll>
        <div className={styles.acceptanceAndInnovation}>
          Acceptance and Innovation
        </div>
      </div>
      <div className={styles.purpleUnderlap3} data-animate-on-scroll>
        <div className={styles.ourPursuitOf}>
          Our pursuit of excellence extends to crafting top-tier products that
          embody the essence of quality and craftsmanship.
        </div>
        <img className={styles.quality2Icon} alt="" src="/quality-2@2x.png" />
      </div>
      <div className={styles.blueOverlap3} data-animate-on-scroll>
        <div className={styles.acceptanceAndInnovation}>
          Producing Top Class Products
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
