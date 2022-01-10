import React, { Component } from 'react';
import Offcanvas from 'react-bootstrap/offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class OffcanvasSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsAppear: false,
      topicsAppear: false,
      featuresAppear: false,
    }

  }

  HandleSectionsAppear = (e) => {
    this.setState({
      sectionsAppear: !this.state.sectionsAppear
    })
  }
  HandleTopicsAppear = (e) => {
    this.setState({
      topicsAppear: !this.state.topicsAppear
    })
  }
  HandleFeaturesAppear = (e) => {
    this.setState({
      featuresAppear: !this.state.featuresAppear
    })
  }
  render() {
    const x = this.state.sectionsAppear;
    const y = this.state.topicsAppear;
    const z = this.state.featuresAppear;

    const SectionsCats = () => {

      return (
        <ul className='cats-ul'>
          <li className='sections-li'>
            <a href='https://nowthisnews.com/news'
              target='_blank'
              rel='noopener noreferrer'
              className='li-cat'
            >
              News
            </a>
          </li>
          <li className='sections-li'>
            <a href='https://nowthisnews.com/politics'
              target='_blank'
              rel='noopener noreferrer'
              className='li-cat'
            >
              Politics
            </a>
          </li>
          <li className='sections-li'>
            <a href='https://nowthisnews.com/culture'
              target='_blank'
              rel='noopener noreferrer'
              className='li-cat'
            >
              Culture
            </a>
          </li>
          <li className='sections-li'>
            <a href='https://nowthisnews.com/earth'
              target='_blank'
              rel='noopener noreferrer'
              className='li-cat'
            >
              Earth
            </a>
          </li>
          <li className='sections-li'>
            <a href='https://nowthisnews.com/identity'
              target='_blank'
              rel='noopener noreferrer'
              className='li-cat'
            >
              Identity
            </a>
          </li>
          <li className='sections-li'>
            <a href='https://nowthisnews.com/money'
              target='_blank'
              rel='noopener noreferrer'
              className='li-cat'
            >
              Money
            </a>
          </li>
          <li className='sections-li'>
            <a href='https://nowthisnews.com/series/nowthis-opinions'
              target='_blank'
              rel='noopener noreferrer'
              className='li-cat'
            >
              Opinions
            </a>
          </li>
        </ul>
      )
    }
    const TopicsCats = () => {

      return (
        <ul className='cats-ul'>
          <li className='sections-li'>
            <a href='https://nowthisnews.com/topic/lgbtq'
              target='_blank'
              rel='noopener noreferrer'
              className='li-cat'
            >
              LGBTQ&#43;
            </a>
          </li>
          <li className='sections-li'>
            <a href='https://nowthisnews.com/topic/sustainability'
              target='_blank'
              rel='noopener noreferrer'
              className='li-cat'
            >
              Sustainability
            </a>
          </li>
          <li className='sections-li'>
            <a href='https://nowthisnews.com/topic/health'
              target='_blank'
              rel='noopener noreferrer'
              className='li-cat'
            >
              Health
            </a>
          </li>
          <li className='sections-li'>
            <a href='https://nowthisnews.com/topic/feel-good'
              target='_blank'
              rel='noopener noreferrer'
              className='li-cat'
            >
              Feel Good
            </a>
          </li>
          <li className='sections-li'>
            <a href='https://nowthisnews.com/topic/justice'
              target='_blank'
              rel='noopener noreferrer'
              className='li-cat'
            >
              Justice
            </a>
          </li>
        </ul>
      )
    }
    const FeaturesCats = () => {

      return (
        <ul className='cats-ul'>
          <li className='sections-li'>
            <a href='https://nowthisnews.com/topic/common-good'
              target='_blank'
              rel='noopener noreferrer'
              className='li-cat'
            >
              Command Good
            </a>
          </li>
          <li className='sections-li'>
            <a href='https://nowthisnews.com/series/seen'
              target='_blank'
              rel='noopener noreferrer'
              className='li-cat'
            >
              SEEN
            </a>
          </li>
          <li className='sections-li'>
            <a href='https://nowthisnews.com/series/one-small-step'
              target='_blank'
              rel='noopener noreferrer'
              className='li-cat'
            >
              One Small Step
            </a>
          </li>
          <li className='sections-li'>
            <a href='https://nowthisnews.com/topic/in-this-together'
              target='_blank'
              rel='noopener noreferrer'
              className='li-cat'
            >
              In This Together
            </a>
          </li>
        </ul>
      )
    }

    return (
        <>
        <Offcanvas show={true}>
      <div className='sidebar-main'>
       <div className='sidebar-2' id='Sidebar'>
          <div className='sidebar-div-1'>
            <a href='https://nowthisnews.com/'>
              <svg height="36px" width="137px"
                className="nav-header-logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 473.8 102.4">
                <path d="M222.9 100.8h-16.1l-46.2-65.1v65.1H141V3.1h19.1l43.1 61.8V3.1h19.6v97.7zm79.6-23.2c-2.5 15.1-13.7 24.8-31.5 24.8-20.7 0-34.5-15.1-34.5-37.1 0-21.5 14.3-37.2 34.2-37.2 20.8 0 32.3 14.5 32.3 35.3v6h-47.4c.6 10.7 6.7 17 15.4 17 6.7 0 11.6-2.9 13.2-8.9h18.3zM256 57.5h27.5c-.2-7.5-4.6-13.4-12.7-13.4-7.6.1-13 4.7-14.8 13.4zm120 17.6l12.7-45.4h19.1l-21.6 71.1h-18.1l-11.6-43.6-11.6 43.6h-18.1L305 29.7h19.7l12.7 45.4L349 29.7h15.1L376 75.1zm56.5 4.6c1.6 5.1 6 7.8 11.9 7.8 6 0 10-2.4 10-7 0-3.2-2.2-4.8-7.2-6L433 71.2c-10.8-2.5-18.5-8.1-18.5-20.1 0-13.8 12.4-23.1 28.3-23.1 18 0 27.9 8.6 30.2 22h-18.8c-1.3-4-4.6-7-11.1-7-4.8 0-9.4 2.2-9.4 6.7 0 2.9 1.9 4.5 6.4 5.6l14.6 3.3c12.4 3 18.9 9.9 18.9 20.7 0 14.5-12.6 23.1-29.1 23.1-17.3 0-29.6-8.3-31.7-22.8h19.7z">
                </path>
                <path fill="#ff0" d="M6.6 59.6H89v35.6H6.6z">
                </path>
                <path d="M89.5 95.8H6.1V59.1h83.4v36.7zm-82.4-1h81.4V60.1H7.1v34.7z" fill="#231f20">
                </path>
                <path d="M89 59.6v35.6H6.6V59.6H89m6.7-6.6H0v48.9h95.7V53z">
                </path>
                <path d="M14.5 68.6h16.1v4.1H25v14.2h-4.8V72.7h-5.6v-4.1zm36.7 0V87h-4.8v-7.3h-7.1V87h-4.8V68.6h4.8v7h7.1v-7h4.8zm9.3 18.3h-4.8V68.6h4.8v18.3zm8.5-5.4c.4 1.3 1.5 1.9 3 1.9s2.5-.6 2.5-1.8c0-.9-.6-1.3-1.7-1.5l-3.5-.7c-2.7-.6-4.7-2-4.7-5.1 0-3.6 3-5.9 7.1-5.9 4.5 0 7 2.5 7.5 5.6h-4.7c-.4-1-1.2-1.8-2.8-1.8-1.4 0-2.3.6-2.3 1.6 0 .8.6 1.3 1.5 1.5l3.6.8c3.1.7 4.9 2.5 4.9 5.3 0 3.8-3.2 5.9-7.2 5.9-4.4 0-7.4-2.1-8-5.7H69zM89 6.6v35.6H6.6V6.6H89M95.7 0H0v48.9h95.7V0z">
                </path>
                <path d="M31.9 33.8H28l-7.7-10.7v10.7h-4.6V15.5h4.5l7.1 10.1V15.5h4.6v18.3zm12.8.3c-5.3 0-8.9-4-8.9-9.5s3.6-9.5 8.9-9.5c5.3 0 9 4 9 9.5s-3.7 9.5-9 9.5zm0-14.7c-2.5 0-4.1 2.1-4.1 5.3s1.6 5.3 4.1 5.3c2.5 0 4.2-2.1 4.2-5.3s-1.7-5.3-4.2-5.3zm25-3.9l2.8 10.8L75 15.5h4.8L75 33.9h-4.4l-2.8-10.8L65 33.8h-4.4l-4.8-18.4h4.9l2.6 10.8 2.8-10.8h3.6z">
                </path>
              </svg>
            </a>

            <i className='sidebar-i-x fas fa-times'
              onClick={this.props.handleSidebarAppear}
            ></i>
          </div>
          <div className='sidebar-div-2'>
            <input type='text'
              className='sidebar-input1'
              placeholder='What are you looking for?'
            >
            </input>

            <i className='sidebar-i-search fas fa-search'></i>
          </div>
          <div className='sidebar-div-3'
            onClick={this.HandleSectionsAppear}
          >
            <div className='cat-div'>
              <span className='catdiv-span'>
                <span className='catdiv-span-2'>Sections</span>
                <i className='sidebar-i-p fas fa-plus'></i>
              </span>

            </div>
          </div>
          {x &&
            <div className='sidebar-div-4'>
              <SectionsCats />
            </div>
          }
          <div className='sidebar-div-5'
            onClick={this.HandleTopicsAppear}
          >
            <div className='cat-div'>
              <span className='catdiv-span'>
                <span className='catdiv-span-2'>Topics</span>
                <i className='sidebar-i-p fas fa-plus'></i>
              </span>

            </div>
          </div>
          {y &&
            <div className='sidebar-div-6'>
              <TopicsCats />
            </div>
          }
          <div className='sidebar-div-7'
            onClick={this.HandleFeaturesAppear}
          >
            <div className='cat-div'>
              <span className='catdiv-span'>
                <span className='catdiv-span-2'>Features</span>
                <i className='sidebar-i-p fas fa-plus'></i>
              </span>

            </div>
          </div>
          {z &&
            <div className='sidebar-div-8'>
              <FeaturesCats />
            </div>
          }
          <div className='sidebar-div-9'>
            <div className='cat-div'>
              <span className='catdiv-span'>
                <span className='catdiv-span-2'>Podcasts</span>
                <i className='sidebar-i-p fas fa-plus'></i>
              </span>

            </div>
          </div>
          <div className='sidebar-div-10'>
          </div>
          <div className='sidebar-div-11'>
            <ul className='terms-ul'>
              <li className='terms-li'>
                <a className='terms-a'
                  href='https://www.groupninemedia.com/advertise'


                >
                  Advertise With Us
                </a>
              </li>
              <li className='terms-li'>
                <a href='https://www.groupninemedia.com/careers'
                  className='terms-a'

                >
                  Careers
                </a>
              </li>
              <li className='terms-li'>
                {/* this anchor here leads to a specific icon in the user's computer */}
                <a href='#' className='terms-a'>
                  Contact Us
                </a>
              </li>
              <li className='terms-li'>
                <a href='https://www.groupninemedia.com/legal/cookie-policy'
                  className='terms-a'
                >
                  Cookie Policy
                </a>
              </li>
              <li className='terms-li'>
                <a href='https://www.groupninemedia.com/legal/ccpa'
                  className='terms-a'
                >
                  Do Not Sell My Personal Information
                </a>
              </li>
              <li className='terms-li'>
                <a href='https://www.groupninemedia.com/press'
                  className='terms-a'
                >
                  Press
                </a>
              </li>
              <li className='terms-li'>
                <a href='https://www.groupninemedia.com/legal/privacy'
                  className='terms-a'
                >
                  Privacy
                </a>
              </li>
              <li className='terms-li'>
                <a href='https://www.groupninemedia.com/legal/tscs'
                  className='terms-a'
                >
                  Terms &#43; Conditions
                </a>
              </li>

            </ul>
          </div>
          <div className='sidebar-div-12'>
            <input type='email'
              className='form-input'
              placeholder='Your Email Address'
            ></input>
            <button type='submit' className='form-sub-btn'>subscribe</button>
            <label className='form-label'>
              <span className='span-age'>
                <input className='form-check' type='checkbox'></input>
                <p className='check-label'>I am 21&#43; years old</p>
              </span>

              <p className='row terms-links'>
                <span>
                  By Signing Up&#44; I Agree to the
                  <a className='form-terms-a'
                    href='https://www.groupninemedia.com/legal/tscs'
                    target='_blank'
                    rel='noopener noreferrer'
                  > Terms </a>
                  and
                </span>

                <a href='https://www.groupninemedia.com/legal/privacy'
                  className='form-terms-a'
                  target='_blank'
                  rel='noopener noreferrer'
                > Privacy Policy</a>&#46;
              </p>
            </label>

          </div>
          <div className='sidebar-div-13'>
            {/* the svg here needs dark dark background because it's white*/}
            <a href='https://www.groupninemedia.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='sidebar-social-logo'
            >
              <svg height="53px" width="137px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 50" enableBackground="new 0 0 104 50" preserveAspectRatio="xMinYMid meet">
                <defs>
                  <filter id="a-g9" filterUnits="userSpaceOnUse" x="0" y="5" width="104" height="40">
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0">
                    </feColorMatrix>
                  </filter>
                </defs>
                <mask maskUnits="userSpaceOnUse" x="0" y="5" width="104" height="40" id="b-g9">
                  <path d="M20 5c11 0 20 9 20 20s-9 20-20 20c-.8 0-1.6 0-2.3-.1l9.5-15c1-1.4 1.5-3.1 1.5-4.9 0-4.8-3.9-8.7-8.7-8.7-4.8 0-8.7 3.9-8.7 8.7 0 3.9 2.6 7.3 6.3 8.4l-6.2 9.7C4.6 39.8 0 33 0 25 0 14 8.9 5 20 5zm27.2 16.2c.2 1.1 1.2 1.9 2.5 1.9 1.8 0 2.8-.9 2.8-2.9v-.5c-.4.6-1.4 1.3-3.1 1.3-3 0-5.3-2.4-5.3-5.6 0-3 2.2-5.6 5.3-5.6 1.9 0 2.9.8 3.2 1.4V9.9h3.3V20c0 3.3-1.8 6.2-6.1 6.2-3.3 0-5.4-2-5.7-4.1l3.1-.9zm5.3-5.9c0-1.6-1.1-2.5-2.4-2.5-1.3 0-2.5 1-2.5 2.5s1.1 2.5 2.5 2.5c1.4.1 2.4-.9 2.4-2.5zm12.8-1.9c-.4-.1-.7-.1-1.1-.1-1.4 0-2.7.8-2.7 3.1v5H58V9.9h3.4v1.6c.6-1.3 2.1-1.7 3-1.7.3 0 .7 0 .9.1v3.5zm12.4 2.2c0 3.6-2.7 6.1-6.1 6.1-3.4 0-6.1-2.5-6.1-6.1s2.7-6.1 6.1-6.1c3.5.1 6.1 2.6 6.1 6.1zm-3.5 0c0-1.9-1.2-2.8-2.6-2.8-1.3 0-2.6.9-2.6 2.8s1.3 2.9 2.6 2.9c1.4 0 2.6-.9 2.6-2.9zm12.2 4.7c-.6 1-1.9 1.4-3.1 1.4-2.8 0-4.4-2-4.4-4.5V9.9h3.5v6.5c0 1.1.6 2 1.8 2 1.2 0 1.9-.8 1.9-2V9.9h3.5v9.4c0 1 .1 1.9.1 2.1h-3.4c.1-.2.1-.8.1-1.1zm5.5 5.5V9.9h3.4v1.2c.5-.7 1.7-1.5 3.4-1.5 3.3 0 5.3 2.5 5.3 6s-2.3 6-5.5 6c-1.5 0-2.6-.5-3.1-1.2v5.3l-3.5.1zm6-13c-1.4 0-2.6.9-2.6 2.8s1.2 2.9 2.6 2.9c1.4 0 2.6-.9 2.6-2.9s-1.2-2.8-2.6-2.8zM48.4 40.3h-3.5V28.7h3.4V30c.6-1.1 2-1.6 3.2-1.6 2.9 0 4.2 2.1 4.2 4.6v7.2h-3.5v-6.6c0-1.1-.6-2-1.9-2-1.2 0-1.9.9-1.9 2v6.7zm9.3 0V28.7h3.5v11.5l-3.5.1zm1.7-17.1c1.2 0 2.1.9 2.1 2.1 0 1.1-.9 2.1-2.1 2.1-1.1 0-2-.9-2-2.1 0-1.2.9-2.1 2-2.1zm7.5 17.1h-3.5V28.7h3.4V30c.6-1.1 2-1.6 3.2-1.6 2.9 0 4.2 2.1 4.2 4.6v7.2h-3.5v-6.6c0-1.1-.6-2-1.9-2-1.2 0-1.9.9-1.9 2v6.7zm19.7-3.4c-.6 2-2.4 3.7-5.3 3.7-3.2 0-6-2.3-6-6.1 0-3.7 2.7-6.1 5.7-6.1 3.6 0 5.8 2.2 5.8 5.9 0 .5 0 1-.1 1.1h-8c.1 1.3 1.2 2.2 2.6 2.2 1.3 0 2-.6 2.3-1.5.1 0 3 .8 3 .8zm-3.2-3.8c0-.9-.6-1.9-2.3-1.9-1.5 0-2.2 1.1-2.3 1.9h4.6z" fill="#fff" filter="url(#a-g9)">
                  </path>
                </mask><g mask="url(#b-g9)">
                  <path className="g9-logo-main-path" d="M0 5h104v40H0V5z" fillRule="evenodd" clipRule="evenodd" fill="#fff">
                  </path>
                </g>
              </svg>
            </a>
            <ul className='sidebar-social'>
              <li>
                <a href='https://www.facebook.com/NowThisNews/'
                  target='_blank'
                  rel='noopener noreferrer'
                >

                  <i className='sidebar-social-i fab fa-facebook'></i>
                </a>
              </li>
              <li>
                <a href='https://www.youtube.com/channel/UCn4sPeUomNGIr26bElVdDYg'
                  target='_blank'
                  rel='noopener noreferrer'
                >

                  <i className='sidebar-social-i fab fa-youtube'></i>
                </a>
              </li>
              <li>
                <a href='https://story.snapchat.com/p/27170b6d-1c82-4faf-af52-b77b28487b8a/3209665382008832'
                  target='_blank'
                  rel='noopener noreferrer'
                >

                  <i className='sidebar-social-i fab fa-snapchat-ghost'></i>
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/nowthisnews/'
                  target='_blank'
                  rel='noopener noreferrer'
                >

                  <i className='sidebar-social-i fab fa-instagram'></i>
                </a>
              </li>
              <li>
                <a href='https://twitter.com/nowthisnews'
                  target='_blank'
                  rel='noopener noreferrer'
                >

                  <i className='sidebar-social-i fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a href='https://www.tiktok.com/@nowthis?lang=en'
                  target='_blank'
                  rel='noopener noreferrer'
                >

                  <i className='sidebar-social-i fab fa-tiktok'></i>
                </a>
              </li>
            </ul>
          </div>
          <div className='sidebar-div-13'>
            <p className='copyrights'>2021 Group Nine Media Inc&#46;</p>
          </div>
        </div>

      </div>
      </Offcanvas>
      </>
    )
  }
}