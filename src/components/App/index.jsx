import React from "react";

// import DangerousHTML from "dangerous-html/react";
// import { Helmet } from "react-helmet";

import "./index.css";

const App = (props) => {
  return (
    <div className="home-container">
      {/* <Helmet>
        <title>Character NFT template</title>
        <meta property="og:title" content="Character NFT template" />
      </Helmet> */}
      <header data-thq="thq-navbar" className="home-navbar">
        <span className="home-logo">Character</span>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="home-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="home-nav"
          >
            <button className="home-button button button-clean">
              About me
            </button>
            <button className="home-button1 button-clean button">
              Features
            </button>
            <button className="home-button2 button-clean button">
              Pricing
            </button>
            <button className="home-button3 button-clean button">Team</button>
            <button className="home-button4 button-clean button">Blog</button>
            <button className="home-button5 button-clean button">Blog</button>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="home-btn-group">
          <div className="home-socials">
            <button className="social button">
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="home-image"
              />
            </button>
            <button className="social button">
              <img
                alt="image"
                src="/Icons/discord.svg"
                className="home-image01"
              />
            </button>
          </div>
          <button className="button">View on Opensea</button>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <button className="button home-button6">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </button>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="home-nav1"
          >
            <div className="home-container1">
              <span className="home-logo1">Character</span>
              <div data-thq="thq-close-menu" className="home-menu-close">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="home-nav2"
            >
              <span className="home-text">About</span>
              <span className="home-text01">Features</span>
              <span className="home-text02">Features</span>
              <span className="home-text03">Pricing</span>
              <span className="home-text04">Team</span>
              <span className="home-text05">Blog</span>
            </nav>
            <div className="home-container2">
              <button className="home-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div className="home-icon-group">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <section className="home-hero">
        <div className="home-heading">
          <h1 className="home-header">
            Notes for Quick Revision for Interviews by Shaurya Singhal.
          </h1>
          <p className="home-caption">
            includes: STL, C++, Graphs, GameTheory, Interview Questions
            List,Git, React, Typescript, Code Template and much more...
          </p>
        </div>
        <div className="home-buttons">
          <button className="button">View on Opensea</button>
          <button className="home-learn button-clean button">Learn more</button>
        </div>
      </section>
      <section className="home-description">
        <img
          alt="image"
          src="/hero-divider-1500w.png"
          className="home-divider-image"
        />
        <div className="home-container3">
          <div className="home-description01">
            <div className="home-content">
              <p className="home-paragraph">
                We are a team of digital aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat.
              </p>
              <p className="home-paragraph1">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
            <div className="home-links">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="button-link button"
              >
                <span>Follow me on Twitter</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-arrow"
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link01 button-link button"
              >
                <span>Join us on Discord</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-arrow1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="home-cards">
        <div className="home-row">
          <div className="home-card">
            <div className="home-avatar">
              <img
                alt="image"
                src="/Avatars/avatar.svg"
                className="home-avatar1"
              />
            </div>
            <div className="home-main">
              <div className="home-content01">
                <h2 className="home-header01">10,000+ unique characters</h2>
                <p className="home-description02">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliquat
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi
                </p>
              </div>
              <button className="home-learn1 button">
                <span className="home-text08">Learn more</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-image02"
                />
              </button>
            </div>
          </div>
          <div className="home-card01">
            <div className="home-avatar2">
              <img
                alt="image"
                src="/Avatars/default-avatar.svg"
                className="home-avatar3"
              />
            </div>
            <div className="home-main1">
              <div className="home-content02">
                <h2 className="home-header02">
                  Create yourself for the metaverse
                </h2>
                <p className="home-description03">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliquat
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi
                </p>
              </div>
              <button className="home-learn2 button">
                <span className="home-text09">Learn more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image03"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="home-card02">
          <div className="home-avatar4">
            <img
              alt="image"
              src="/Avatars/light-avatar.svg"
              className="home-avatar5"
            />
          </div>
          <div className="home-row1">
            <div className="home-main2">
              <div className="home-content03">
                <h2 className="home-header03">
                  Create yourself for the metaverse
                </h2>
                <p className="home-description04">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliquat
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi
                </p>
              </div>
              <button className="home-learn3 button">
                <span className="home-text10">Learn more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image04"
                />
              </button>
            </div>
            <img alt="image" src="/group%202262.svg" className="home-image05" />
          </div>
        </div>
      </section>
      <section className="home-collection">
        <div className="home-content04">
          <span className="home-caption01">collection</span>
          <div className="home-heading01">
            <h2 className="home-header04">All time best collections</h2>
            <p className="home-header05">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
        </div>
        <div className="home-main3">
          <div className="home-card03">
            <div className="home-image06">
              <img
                alt="image"
                src="/Characters/character-1.svg"
                className="home-image07"
              />
            </div>
            <div className="home-content05">
              <span className="home-caption02">Character #1</span>
              <h3 className="home-title">0.05 ETH</h3>
            </div>
          </div>
          <div className="home-card04">
            <div className="home-image08">
              <img
                alt="image"
                src="/Characters/character-2.svg"
                className="home-image09"
              />
            </div>
            <div className="home-content06">
              <span className="home-caption03">Character #2</span>
              <h3 className="home-title1">0.05 ETH</h3>
            </div>
          </div>
          <div className="home-card05">
            <div className="home-image10">
              <img
                alt="image"
                src="/Characters/character-3.svg"
                className="home-image11"
              />
            </div>
            <div className="home-content07">
              <span className="home-caption04">Character #3</span>
              <h3 className="home-title2">0.05 ETH</h3>
            </div>
          </div>
          <div className="home-card06">
            <div className="home-image12">
              <img
                alt="image"
                src="/Characters/character-4.svg"
                className="home-image13"
              />
            </div>
            <div className="home-content08">
              <span className="home-caption05">
                <span>Character #4</span>
                <br></br>
              </span>
              <h3 className="home-title3">0.05 ETH</h3>
            </div>
          </div>
          <div className="home-card07">
            <div className="home-image14">
              <img
                alt="image"
                src="/Characters/character-5.svg"
                className="home-image15"
              />
            </div>
            <div className="home-content09">
              <span className="home-caption06">Character #5</span>
              <h3 className="home-title4">0.05 ETH</h3>
            </div>
          </div>
          <div className="home-card08">
            <div className="home-image16">
              <img
                alt="image"
                src="/Characters/character-6.svg"
                className="home-image17"
              />
            </div>
            <div className="home-content10">
              <span className="home-caption07">Character #6</span>
              <h3 className="home-title5">0.05 ETH</h3>
            </div>
          </div>
          <div className="home-card09">
            <div className="home-image18">
              <img
                alt="image"
                src="/Characters/character-7.svg"
                className="home-image19"
              />
            </div>
            <div className="home-content11">
              <span className="home-caption08">Character #7</span>
              <h3 className="home-title6">0.05 ETH</h3>
            </div>
          </div>
          <div className="home-card10">
            <div className="home-image20">
              <img
                alt="image"
                src="/Characters/character-8.svg"
                className="home-image21"
              />
            </div>
            <div className="home-content12">
              <span className="home-caption09">Character #8</span>
              <h3 className="home-title7">0.05 ETH</h3>
            </div>
          </div>
        </div>
        <button className="home-view2 button-link button">View all</button>
      </section>
      <section className="home-project">
        <div className="home-understand">
          <div className="home-content13">
            <span className="home-caption10">Project</span>
            <div className="home-heading02">
              <h2 className="home-header06">Understand the project</h2>
              <p className="home-header07">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <button className="home-view3 button-link button">
              <span>Learn More</span>
              <img
                alt="image"
                src="/Icons/arrow.svg"
                className="home-image22"
              />
            </button>
          </div>
          <img alt="image" src="/group%202415.svg" className="home-image23" />
        </div>
        <div className="home-mining">
          <img alt="image" src="/group%202422.svg" className="home-image24" />
          <div className="home-content14">
            <span className="home-caption11">Project</span>
            <div className="home-heading03">
              <h2 className="home-header08">How the minting works</h2>
              <p className="home-header09">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </span>
                <br></br>
                <br></br>
                <span>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </span>
                <br></br>
              </p>
            </div>
            <button className="home-view4 button-link button">
              <span>Learn More</span>
              <img
                alt="image"
                src="/Icons/arrow.svg"
                className="home-image25"
              />
            </button>
          </div>
        </div>
      </section>
      <section className="home-roadmap">
        <div className="home-heading04">
          <h2 className="home-header10">Roadmap</h2>
          <p className="home-header11">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
        <div className="home-list">
          <div className="home-step">
            <span className="home-caption12">01</span>
            <div className="home-heading05">
              <h2 className="home-header12">Project Launch</h2>
              <p className="home-header13">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <button className="home-button7 button">View on Opensea</button>
          </div>
          <div className="home-step1">
            <span className="home-caption13">02</span>
            <div className="home-heading06">
              <h2 className="home-header14">Metadata and Character</h2>
              <p className="home-header15">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </span>
                <br></br>
              </p>
            </div>
          </div>
          <div className="home-step2">
            <span className="home-caption14">03</span>
            <div className="home-heading07">
              <h2 className="home-header16">Get Physical</h2>
              <p className="home-header17">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </span>
                <br></br>
              </p>
            </div>
          </div>
          <div className="home-step3">
            <span className="home-caption15">04</span>
            <div className="home-heading08">
              <h2 className="home-header18">Private club community</h2>
              <p className="home-header19">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </p>
              <div className="home-benefits">
                <div className="home-item">
                  <img
                    alt="image"
                    src="/Icons/people.svg"
                    className="home-image26"
                  />
                  <p className="home-header20">Consectetur adipiscing elit</p>
                </div>
                <div className="home-item1">
                  <img
                    alt="image"
                    src="/Icons/paper.svg"
                    className="home-image27"
                  />
                  <p className="home-header21">Consectetur adipiscing elit</p>
                </div>
                <div className="home-item2">
                  <img
                    alt="image"
                    src="/Icons/checklist.svg"
                    className="home-image28"
                  />
                  <p className="home-header22">Consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-join-us">
        <div className="home-content15">
          <div className="home-main4">
            <div className="home-heading09">
              <h2 className="home-header23">Create your character now</h2>
              <p className="home-caption16">
                A character custom collection is joining the NFT space on
                Opensea.
              </p>
            </div>
            <button className="home-view5 button">View on Opensea</button>
          </div>
          <img alt="image" src="/group%202273.svg" className="home-image29" />
        </div>
      </section>
      <section className="home-faq">
        <h2 className="home-header24">We have all the answers</h2>
        <div className="home-accordion">
          <div
            data-role="accordion-container"
            className="home-element accordion"
          >
            <div className="home-content16">
              <span className="home-header25">
                Lorem ipsum dolor sit ametetur elit?
              </span>
              <span
                data-role="accordion-content"
                className="home-description05"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </div>
            <div className="home-icon-container">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="home-icon10"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="home-icon12"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="home-element1 accordion"
          >
            <div className="home-content17">
              <span className="home-header26">
                Excepteur sint occaecat cupidatat non sunt in culpa qui officia
                deserunt mollit anim id est laborum?
              </span>
              <span
                data-role="accordion-content"
                className="home-description06"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </div>
            <div className="home-icon-container1">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="home-icon14"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="home-icon16"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="home-element2 accordion"
          >
            <div className="home-content18">
              <span className="home-header27">
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </span>
              <span
                data-role="accordion-content"
                className="home-description07"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </div>
            <div className="home-icon-container2">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="home-icon18"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="home-icon20"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="home-element3 accordion"
          >
            <div className="home-content19">
              <span className="home-header28">
                Lorem ipsum dolor sit ametetur elit?
              </span>
              <span
                data-role="accordion-content"
                className="home-description08"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </div>
            <div className="home-icon-container3">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="home-icon22"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="home-icon24"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="home-element4 accordion"
          >
            <div className="home-content20">
              <span className="home-header29">
                Incididunt ut labore et dolore?
              </span>
              <span
                data-role="accordion-content"
                className="home-description09"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </div>
            <div className="home-icon-container4">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="home-icon26"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="home-icon28"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="home-get-yours">
        <div className="home-row2">
          <div className="home-column">
            <div className="home-card11">
              <img
                alt="image"
                src="/Characters/character-9.svg"
                className="home-image30"
              />
            </div>
          </div>
          <div className="home-column1">
            <div className="home-card12">
              <img
                alt="image"
                src="/Characters/character-10.svg"
                className="home-image31"
              />
            </div>
          </div>
        </div>
        <div className="home-column2">
          <div className="home-card13">
            <div className="home-content21">
              <h2 className="home-header30">Get yours now</h2>
              <p className="home-description10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliquat enim
                ad minim veniam.
              </p>
            </div>
            <button className="home-button8 button">View on Opensea</button>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-main5">
          <div className="home-branding">
            <div className="home-heading10">
              <h2 className="home-logo2">Character</h2>
              <p className="home-caption17">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
            <div className="home-socials1">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-twitter1 social button"
              >
                <img
                  alt="image"
                  src="/Icons/twitter.svg"
                  className="home-image32"
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-discord1 social button"
              >
                <img
                  alt="image"
                  src="/Icons/discord.svg"
                  className="home-image33"
                />
              </a>
            </div>
          </div>
          <div className="home-links1">
            <div className="home-list1">
              <h3 className="home-heading11">Site</h3>
              <div className="home-items">
                <button className="home-link02 button-clean button">
                  About
                </button>
                <button className="home-link03 button-clean button">
                  Collection
                </button>
                <button className="home-link04 button-clean button">
                  Roadmap
                </button>
                <button className="home-link05 button-clean button">
                  Features
                </button>
              </div>
            </div>
            <div className="home-list2">
              <h3 className="home-heading12">Company</h3>
              <div className="home-items1">
                <button className="home-link06 button-clean button">
                  Team
                </button>
                <button className="home-link07 button-clean button">
                  Press
                </button>
                <button className="home-link08 button-clean button">
                  Terms
                </button>
                <button className="home-link09 button-clean button">
                  Limitations
                </button>
                <button className="home-link10 button-clean button">
                  Licenses
                </button>
              </div>
            </div>
          </div>
          <div className="home-socials2">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-twitter2 social button"
            >
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="home-image34"
              />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-discord2 social button"
            >
              <img
                alt="image"
                src="/Icons/discord.svg"
                className="home-image35"
              />
            </a>
          </div>
        </div>
        <span className="home-copyright">
          © 2022 Character. All Rights Reserved.
        </span>
      </footer>
  
    </div>
  );
};

export default App;


// <div>
// <DangerousHTML
//   html={`<script>

// const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
// const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
// const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
// const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

// accordionContents.forEach((accordionContent) => {
// accordionContent.style.display = "none"; //Hides all accordion contents
// });

// accordionIconsClosed.forEach((icon) => {
// icon.style.display = "flex"
// })

// accordionIconsOpen.forEach((icon) => {
// icon.style.display = "none"
// })

// accordionContainers.forEach((accordionContainer, index) => {
// accordionContainer.addEventListener("click", () => {
//   if (accordionContents[index].style.display === "flex") {
//       // If the accordion is already open, close it
//       accordionContents[index].style.display = "none";
//       accordionIconsClosed[index].style.display = "flex";
//       accordionIconsOpen[index].style.display = "none"
//   } else {
//       // If the accordion is closed, open it
//       accordionContents.forEach((accordionContent) => {
//           accordionContent.style.display = "none"; //Hides all accordion contents
//       });

//       accordionIconsClosed.forEach((accordionIcon) => {
//           accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
//       });

//       accordionIconsOpen.forEach((accordionIcon) => {
//         accordionIcon.style.display = "none";
//       })
      
//       accordionContents[index].style.display = "flex"; // Shows accordion content
//       accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
//       accordionIconsOpen[index].style.display = "flex";
//   }
// });
// });
// </script>
// `}
// ></DangerousHTML>
// </div>