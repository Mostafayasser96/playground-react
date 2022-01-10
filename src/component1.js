import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import useState from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OffcanvasSidebar from './component2';



// ================================ the MailServiceModal =============================

export default class Parent extends Component{
	constructor(props){
		super(props);
		this.state = {
           isOpen: false
		}
	}
    componentDidMount(){
         this.setModalFlag(true);
	}
    setModalFlag = (val) => {
        this.setState({isOpen: val});
        
    }
	render(){
        const MailServiceModal = (props) => {
			// const [isOpen, setIsOpen] = React.useState(false);
			return (
			   <>
				<Modal 
					 {...props}
					 size="lg"
					 aria-labelledby='contained-model-title-vcenter'
					 centered
					 show={this.state.isOpen}
					 onHide={() => this.setModalFlag(false)}
				>	
				<div className='mail-div'>
	  
				  {/* ================ note that there is an error here when importing images (the sources contain
									   & that makes an error)
									==============================================  ) */}
				  {/* <img src='./images/mail-service-image.jpeg' alt='mail service image' />
								   
									   <img src='https://micro-cdn.sumo.com/image-resize/sumo-convert?uri=//media.
												 sumo.com/6d206e45926826c534cb181feb8b2e8a65959663eda2a6edfcd4c10ac8
												 6ade95&supported=webp,webp.alpha,webp.animation,webp.lossless&hash
												 =84a3e2365be8a7520a9e99e888d93d0d46aa2f7b72827874f0afd8b6e5f9e914&
												 format=webp' alt='mail service know this' /> */}
				  {/* <div className='mail-service-img'>
									  <img className='cover-img' />
								  </div>
								   <div className='nowthis-img'>
	  
								   </div> */}
				  <div className='col cover-div' >
					<div className='nowthis-img'>
	  
					</div>
					<div>
					  <h3 className='cover-div-h3'>The Biggest Stories</h3>
					  <p className='cover-div-p'>delivered straight to you in our newsletter</p>
					</div>
	  
				  </div>
	  
				  <div className='col form'>
					<i className='f-x-i fas fa-times' onClick={()=>this.setModalFlag(false)}></i>
					<div className='nowthis-logo'>
					  <img className='mail-service-logo'
						src="https://micro-cdn.sumo.com/image-resize/sumo-convert?uri=//media.sumo.com/9815bc8336b7f2c66d36c94cb649b504b7c07ae76aa530dbfc39396fb0dba3c0&supported=webp,webp.alpha,webp.animation,webp.lossless&hash=a09e3b702837ef88a3fb8b258d4c187061411ff22d2efc14d11d956ba1715ede&format=webp"
						alt='nowthis logo'
					  />
					</div>
					<input type='email'
					  placeholder='Enter Your Email'
					  className='row mail-service-email'
					></input>
					<button className='mail-service-btn'
					  type='submit'
					>subscribe now</button>
					<p className='mail-service-terms'>
					  By signing up for the NowThis Newsletter, you agree to our&nbsp;
					  <a className='mail-service-terms-a1'
						href='https://www.groupninemedia.com/legal/tscs'
						target='_blank'
						rel='noopener noreferrer'
					  > Terms of Service </a>&nbsp;and&nbsp;
					  <a className='mail-service-terms-a2'
						href='https://www.groupninemedia.com/legal/privacy'
						target='_blank'
						rel='noopener noreferrer'
					  >Privacy Policy.</a>
					</p>
				  </div>
				</div>
				</Modal>
				</>				
			)
		  }
	  
		return(
          <div className='parent'>
                 {/* {z && <MailServiceModal />} */}
				 <MailServiceModal />
		  </div>
		)
	}
}

// ============================== the end of the MailServiceModal ===============================



// ============================= the sidebar Modal(using Offcanvas) ========================================
//    we will do it using offcanvas
// export default class Parent extends Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {
//            appear: false
// 		}
// 	}
//     HandleSidebarAppear = () => {
// 		this.setState({ appear: !this.state.appear})
// 	}
// 	render(){
// 		const x = this.state.appear;
// 		return(
// 			<div className='parent'>
// 				<button className='appear-btn' onClick={() => this.HandleSidebarAppear()}>Click</button>
// 				{ x && <OffcanvasSidebar handleSidebarAppear={this.HandleSidebarAppear} />}
// 			</div>
// 		)
// 	}
// }

// ============================= the end of the sidebar modal =================================


// ============================= the start of cookies policy modal ============================
// export default class Parent extends Component{
//     constructor(props){
//         super(props);
//         this.state = {

//         }
//     }

//     render(){
//         return(
//             <div className='parent'>
//                 <>
//                 <Modal
                    
//                 >

//                 </Modal>
//                 </>
//             </div>
//         )
//     }
// }



// ============================= the end of the cookies policy modal ==========================