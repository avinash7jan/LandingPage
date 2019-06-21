import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';
import { Router, Route, Link, browserHistory, History ,RouterContext} from 'react-router';
import LeftMenu from './leftMenu.jsx';
import ScrollArea  from 'react-scrollbar';

const Header = React.createClass({
	
	getInitialState: function(){
		return {
			active :false,
			notificationContent:false,
			notificationContentSec:false,
			helpContent:false,
			allApp:false,
			notificationTop:true,
			notificationTop1:false,
			dotRemoveClass1:false,dotRemoveClass2:false,dotRemoveClass3:false,dotRemoveClassSec:false,
			emails:[],
			showAllItms:false,
			showMore:false,
			remindMsg:"",
			
			notificationTopSec:true,
			notificationTopSec1:false,
			showAllItmsSec:false,
			showMoreSec:false,
			remindMsgSec:false,
		}
	},
	toggleClass() {
		if(!this.state.active){
			// attach/remove event handler
			document.addEventListener('click', this.handleOutsideClick, false);
		} else {
			document.removeEventListener('click', this.handleOutsideClick, false);
		}
		 this.setState({ active: !this.state.active });
	}, 
	
	toggleNotification() {
		if(!this.state.notificationContent){
			// attach/remove event handler
			document.addEventListener('click', this.handleOutsideClick1, false);
		} else {
			document.removeEventListener('click', this.handleOutsideClick1, false);
		}
        this.setState({ notificationContent: !this.state.notificationContent });
    },
	handleOutsideClick1(e) {
	// ignore clicks on the component itself
		if (this.node.contains(e.target)) {
		return;
		}
		this.toggleNotification();
	},
	
	/*=====Second notification start here======*/
	toggleNotificationSec() {
		if(!this.state.notificationContentSec){
			document.addEventListener('click', this.handleOutsideClickSec, false);
		} else {
			document.removeEventListener('click', this.handleOutsideClickSec, false);
		}
        this.setState({ notificationContentSec: !this.state.notificationContentSec });
    },
	handleOutsideClickSec(e) {
		if (this.node.contains(e.target)) {
		return;
		}
		this.toggleNotificationSec();
	},
	/*=====Second notification End here======*/
	
	toggleHelp() {
		if(!this.state.helpContent){
			// attach/remove event handler
			document.addEventListener('click', this.handleOutsideClick2, false);
		} else {
			document.removeEventListener('click', this.handleOutsideClick2, false);
		}
        this.setState({ helpContent: !this.state.helpContent });
    },
	handleOutsideClick(e) {
	// ignore clicks on the component itself
		if (this.node.contains(e.target)) {
		return;
		}
		this.toggleClass();
	},
	
	handleOutsideClick2(e) {
	// ignore clicks on the component itself
		if (this.node.contains(e.target)) {
		return;
		}
		this.toggleHelp();
	},
	
	
	allApp() {
		if(!this.state.allApp){
			// attach/remove event handler
			document.addEventListener('click', this.handleOutsideClick3, false);
		} else {
			document.removeEventListener('click', this.handleOutsideClick3, false);
		}
        this.setState({ allApp: !this.state.allApp });
    },
	
	
	handleOutsideClick3(e) {
	// ignore clicks on the component itself
		if (this.node.contains(e.target)) {
		return;
		}
		this.allApp();
	},

	notificationHide(){
		this.setState({notificationTop1:true});
		setTimeout(() => {
		  this.setState({
			notificationTop:false
		  });
		}, 400);	
	},
	
	notificationHideSec(){
		this.setState({notificationTopSec1:true});
		setTimeout(() => {
		  this.setState({
			notificationTopSec:false
		  });
		}, 400);	
	},
	
	
	dotRemoveSec() {
		this.setState({dotRemoveClassSec:true});
	},
	
	dotRemove1() {
		this.setState({dotRemoveClass1:true});
	},
	dotRemove2() {
		this.setState({dotRemoveClass2:true});
	},
	dotRemove3() {
		this.setState({dotRemoveClass3:true});
	},
	
	
	
	moreAct(){
		this.setState({showMore:!this.state.showMore});
	},
	remind(e){
		
		if(this.state.remindMsg==e){
			this.setState({remindMsg:""});
		}
		else{
			this.setState({remindMsg:e});
		}
	},
	
	
	showRestSec(){
		this.setState({showAllItmsSec:true});
	},
	moreActSec(){
		this.setState({showMoreSec:!this.state.showMoreSec});
	},
	remindSec(){
		this.setState({remindMsgSec:!this.state.remindMsgSec});
	},
	

	render: function() {
		console.log("notificationContent...",this.state.notificationContent)
		return (
			<div className="top_header">
				<div className="header">
					<header className="">
						<nav className="module moduleGlobal">
							<ul className="module moduleGlobalNav">
								<li className="left_menu">
									<a className="logo1" href="#"></a> 
								 
									<a className={this.props.mobileDashboardClick?"mobile_close":"mobile_view"} href="#" onClick={this.props.mobileDashboard}></a>
									<a className="mobile_logo" href="#"></a>
								</li>
								<li className="user">
									<span className="devide"></span>
									{/* <span className="avatar" onClick={this.toggleClass}></span> */}
									
									<div className="profile_search">
										<input type="text" value="" onClick={this.toggleClass} readonly="readonly" 
										className="form-control serch_input profile_srch_txt" placeholder="Patty Smith" />
										<span onClick={this.toggleClass} className="avatar3_svg"></span>
									</div>
								</li>
								<li className="com_icon">
									<span className={this.state.notificationContent?"notification notificationActive":"notification "} onClick={this.toggleNotification}></span>
									<span className={this.state.helpContent?"question questionActive":"question"} onClick={this.toggleHelp}></span>
									<span className={this.state.allApp?"appAll questionActive":"appAll"} onClick={this.allApp}></span>
								</li>
							</ul>
						</nav>
					</header>
					
					
					{this.state.helpContent ?
					<div className="com_cont notice1 com_pop_box arrow_box"  ref={node => { this.node = node; }}>
						<ul className="search">
							<li>
								<div><a href="support" target="_blank">View my support cases</a></div>
								<div><a href="https://knowledge.autodesk.com/support" target="_blank">Support & Learning</a></div>
								<div><a href="https://knowledge.autodesk.com/contact-support" target="_blank">Contact Support</a></div>
							</li>
							
						</ul>
					</div> : null}
					
					
					{/* <div className="com_cont notice profile com_pop_box arrow_box" ref={node => { this.node = node; }}>
						<div log_cont>
							<div className="user_name">Jenny Eishingdrelo</div>
							<div className="email">jenny.eishingdrelo@autodesk.com</div>
							
							<div onClick={this.props.dotRemove5} className="profile_settings" >Profile Settings</div>
							
							<div className="profile_devide"></div>
							
							<div className="sign_btn_grp">
								<button type="button" className="sign_out but">Sign Out</button>
							</div>
						</div>
						</div> */}
						
					{this.state.active ?
						<div className="com_cont view_profile_box arrow_box"  ref={node => { this.node = node; }}>
						
						<div className="view_profile" >
						<ul className="notification_contents noti profile_li">
							<li className="disp_non">Notifications</li>

							<li  className="">
								<div className="">
									<div className="accnt"><span>Account 1</span><span className="concept_acc"> CONCEPT ONLY</span></div>
									<div className="clock_text">
										<span className="profile_img img_top1"></span>
										<span className="time_right_text profile_name">Patty Smith</span>
									</div>	
								</div>
								<div className="green_text1">patty.smith@gmail.com</div>
								<div className="green_text1"><a href="http://172.99.67.90/profile" target="_blank">View profile</a></div>
								<div className="green_text1">
									<span onClick={this.toggleClass}>
										<button  onClick={this.props.showRest.bind(this,'dashboard')} className="mng_account">Manage Account</button>
									</span>
								</div>
							</li>
							
							<li className="acct_devide">
								<div></div>
							</li>
							
							<li  className="">
								<div className="">
									<div className="accnt">Account 2</div>
									<div className="clock_text">
										<span className="profile_img img_top1"></span>
										<span className="time_right_text profile_name">Patty Smith</span>
									</div>	
								</div>
								<div className="green_text1">patty.smith@gmail.com</div>
							</li>
							
							<li className="acct_devide">
								<div></div>
							</li>
							
							<li  className="">
								<div className="">
									<div className="clock_text">
										<span className="profile_add img_top1 img_top2"></span>
										<span className="time_right_text profile_name">Add or Link Account</span>
									</div>	
								</div>
							</li>
							<li className="acct_devide">
								<div></div>
							</li>
							
							<li  className="com_notification_hover keep_cent">
								<button className="mng_account sgn_out">Sign Out</button>
							</li>
						</ul>
						
						</div>
						
						
					</div>: null}
					
					
					{this.state.allApp ?
						
						<div className="com_cont view_profile_box view_profile_box1 arrow_box"  ref={node => { this.node = node; }}>
						
						<div className="view_profile" >
						<ul className="notification_contents noti profile_li">
							
							<li className=""><span>Autodesk Cloud Switcher</span> <span className="concept_app">CONCEPT ONLY</span></li>
							<li className="acct_devide">
								<div></div>
							</li>

							<li  className="">
								<div className="">
									<div className="all_apps_icon">
										<a href="https://www.autodesk.com" target="_blank">
											<span className="icon1 "></span>
										</a>
										<span className="icon_txt">Autodesk .com</span>
									</div>

									<div className="all_apps_icon">
										<a href="http://172.99.67.90/profile/#/" target="_blank">
											<span className="icon2 "></span>
										</a>
										<span className="icon_txt">Profile</span>
									</div>

									<div className="all_apps_icon">
									
										<span onClick={this.allApp}>
											<span  onClick={this.props.showRest.bind(this,'dashboard')} className="icon3 "></span>
										</span>
										<span className="icon_txt">Account Manage & Download</span>
									</div>
									
									<div className="all_apps_icon">
										<a href="https://knowledge.autodesk.com" target="_blank">
											<span className="icon4 "></span>
										</a>
										<span className="icon_txt">Autodesk Knowledge Network</span>
									</div>
								</div>
							</li>
							
							<li className="acct_devide">
								<div></div>
							</li>
							
							<li  className="">
								<div className="">
									<div className="all_apps_icon">
										<a href="support" target="_blank">
											<span className="icon5"></span>
										</a>
										<span className="icon_txt">AutoCAD 360</span>
									</div>

									<div className="all_apps_icon">
										<a href="support1" target="_blank">
											<span className="icon6 "></span>
										</a>
										<span className="icon_txt">Autodesk Drive</span>
									</div>

									<div className="all_apps_icon">
										<a href="support2" target="_blank">
											<span className="icon7 "></span>
										</a>
										<span className="icon_txt">A 360</span>
									</div>
									
									<div className="all_apps_icon">
										<a href="support3" target="_blank">
											<span className="icon8"></span>
										</a>
										<span className="icon_txt">BIM 360</span>
									</div>
									
									<div className="all_apps_icon clr_lft">
										<a href="support4" target="_blank">
											<span className="icon9 "></span>
										</a>
										<span className="icon_txt">Revit Live</span>
									</div>
								</div>
							</li>
							
							
						</ul>
						
						</div>
						
						
					</div>: null}
					
					
					
					
					{/*Notification start here....*/}
					
					{this.state.notificationContent ?

					<div className="com_cont notification_box_fst arrow_box"  ref={node => { this.node = node; }}>
						
						<div className="notification_box1" >
						<ul className="notification_contents noti notiTop_height">
							<li>Notifications</li>

							<li  className="com_notification_hover">
								<div className=""> 
									<div className="clock_text">
										<span className="timeBig_img img_top"></span>
										<span className="time_right_text bold_text">Your Subscription expires in 2 days</span>
									</div>	
								</div>
								<div className="noti_dot"  onClick={this.remind.bind(this,'remindOne')}>
									<span className="grn_dot_hori"></span>
									<span className="grn_dot_hori"></span>
									<span className="grn_dot_hori"></span>
								</div>
								<div className="green_text1">
									<a href="aaa#" target="_blank">Manage Subscription</a>
								</div>
								<div className="green_text1">Just Now</div>
								
							
								<div className={this.state.remindMsg=="remindOne"?"remind_sec":"remind_sec remind_sec_dis"} >
									<div className="remind_div">Remind me tonight</div>
									<div className="remind_div">Remind me tomorrow</div>
									<div className="remind_div_hori"></div>
									<div className="remind_div"   onClick={this.remind.bind(this,'remindOne')}>Dismiss</div>
								</div>
							</li>
							
							
							
							
							<li className={this.state.notificationTop ?(this.state.notificationTop1 ? "com_notification_hover fst11 fst_notifi":"com_notification_hover fst_notifi"):"com_notification_hover fst_notifi hide_fst_notification"}>
								<div className=""> 
									<div className="clock_text">
										<span className="noti_avatar img_top"></span>
										<span className="time_right_text bold_text">Javier has requested access</span>
										{/* <span className="close_notification" onClick={this.notificationHide}></span> */}
									</div>
									<div className="noti_dot"  onClick={this.remind.bind(this,'remindTwo')}>
										<span className="grn_dot_hori"></span>
										<span className="grn_dot_hori"></span>
										<span className="grn_dot_hori"></span>
									</div>									
								</div>
								<div className="green_text1">
									<a href="aaa#" target="_blank">View request</a>
								</div>
								<div className="green_text1">1 min ago</div>
								
								
								<div className={this.state.remindMsg=="remindTwo"?"remind_sec":"remind_sec remind_sec_dis"}>
									<div className="remind_div">Remind me tonight</div>
									<div className="remind_div">Remind me tomorrow</div>
									<div className="remind_div_hori"></div>
									<div className="remind_div" onClick={this.remind.bind(this,'remindTwo')}>Dismiss</div>
								</div>
								
							</li>
							

							<li  className="com_notification_hover">
								<div className=""> 
									<div className="clock_text">
										<span className="noti_avatar img_top"></span>
										<span className="time_right_text bold_text">You have used 80% of your Tokens</span>
									</div>
									<div className="noti_dot"  onClick={this.remind.bind(this,'remindThree')}>
										<span className="grn_dot_hori"></span>
										<span className="grn_dot_hori"></span>
										<span className="grn_dot_hori"></span>
									</div>	
								</div>
								<div className="green_text1">
									<a href="aaa#" target="_blank">Buy more</a>
								</div>
								<div className="green_text1">9.23 am</div>
								
								
								<div className={this.state.remindMsg=="remindThree"?"remind_sec":"remind_sec remind_sec_dis"}>
									<div className="remind_div">Remind me tonight</div>
									<div className="remind_div">Remind me tomorrow</div>
									<div className="remind_div_hori"></div>
									<div className="remind_div" onClick={this.remind.bind(this,'remindThree')}>Dismiss</div>
								</div>
								
							</li>
							
							<li  className="com_notification_hover">
								<div className=""> 
									<div className="clock_text">
										<span className="autoCad_img img_top"></span>
										<span className="time_right_text bold_text">AutoCad 2020.2 update available</span>
									</div>
									
									<div className="noti_dot"  onClick={this.remind.bind(this,'remindFour')}>
										<span className="grn_dot_hori"></span>
										<span className="grn_dot_hori"></span>
										<span className="grn_dot_hori"></span>
									</div>
									
								</div>
								<div className="green_text1">
									<a href="aaa#" target="_blank">Install update</a>
								</div>
								<div className="green_text1">11.52 am</div>
								
								
								<div className={this.state.remindMsg=="remindFour"?"remind_sec":"remind_sec remind_sec_dis"}>
									<div className="remind_div">Remind me tonight</div>
									<div className="remind_div">Remind me tomorrow</div>
									<div className="remind_div_hori"></div>
									<div className="remind_div" onClick={this.remind.bind(this,'remindFour')}>Dismiss</div>
								</div>
								
								
							</li>
							
							<li  className="com_notification_hover">
								<div className=""> 
									<div className="clock_text">
										<span className="maya_img img_top"></span>
										<span className="time_right_text bold_text">Maya 2020.2 update available</span>
									</div>
									<div className="noti_dot"  onClick={this.remind.bind(this,'remindFive')}>
										<span className="grn_dot_hori"></span>
										<span className="grn_dot_hori"></span>
										<span className="grn_dot_hori"></span>
									</div>	
								</div>
								<div className="green_text1">
									<a href="aaa#" target="_blank">Install update</a>
								</div>
								<div className="green_text1">May 12,2018</div>
								
								
								<div className={this.state.remindMsg=="remindFive"?"remind_sec":"remind_sec remind_sec_dis"}>
									<div className="remind_div">Remind me tonight</div>
									<div className="remind_div">Remind me tomorrow</div>
									<div className="remind_div_hori"></div>
									<div className="remind_div" onClick={this.remind.bind(this,'remindFive')}>Dismiss</div>
								</div>
								
								
							</li>
							
							<li  className="com_notification_hover">
								<div className=""> 
									<div className="clock_text">
										<span className="autoCad_img img_top"></span>
										<span className="time_right_text bold_text">AUTOCAD 2020.1 update available</span>
									</div>	
								</div>
								
								<div className="noti_dot"  onClick={this.remind.bind(this,'remindSix')}>
									<span className="grn_dot_hori"></span>
									<span className="grn_dot_hori"></span>
									<span className="grn_dot_hori"></span>
								</div>
									
								<div className="green_text1">
									<a href="aaa#" target="_blank">Install update</a>
								</div>
								<div className="green_text1">May 11,2018</div>
								
								
								<div className={this.state.remindMsg=="remindSix"?"remind_sec":"remind_sec remind_sec_dis"}>
									<div className="remind_div">Remind me tonight</div>
									<div className="remind_div">Remind me tomorrow</div>
									<div className="remind_div_hori"></div>
									<div className="remind_div" onClick={this.remind.bind(this,'remindSix')}>Dismiss</div>
								</div>
								
								
							</li>
							
						</ul>
						<span onClick={this.toggleNotification} className="fix_view">
							{/* <li  className="com_notification_hover grn_li"  onClick={this.props.showRest.bind(this,'notification_history')}> */}
							<li  className="com_notification_hover grn_li">
								<div className="grn_div"  >View All</div>
							</li>
						</span>
						</div>
						
						
					</div>:""}
					{/*Notification End Here....*/}
					
					
					{/*=========Notification Sec sstart here==========*/}
					{this.state.notificationContentSec ?

					<div className="com_cont notification_box arrow_box"  ref={node => { this.node = node; }}>
						<div className="notification_box1">
						<ul className="notification_contents">
							<li>Notifications</li>
							<li  className="com_notification_hover fst_li_noti grn_par">
								<div className="bold_text"> 
									<span className="noti_avatar"></span>
									<span className="noti_text">Inventor trial expires</span>
								</div>
								<div className="green_text grn_child">
									<a onClick={this.dotRemoveSec} href="aaa#" target="_blank">Subscribe now</a>
								</div>
							</li>
							
							<li  className="com_notification_hover grn_par_two">
								<div className="bold_text"> 
									<span className="noti_avatar"></span>
									<span className="noti_text">Javier has requested access to Inventor</span>
								</div>
								<div className="green_text grn_child_two">
									<a onClick={this.dotRemoveSec} href="aaa#" target="_blank">Approve</a>
								</div>
								<div className="green_text grn_child_two">
									<a onClick={this.dotRemoveSec} href="aaa#" target="_blank">Decline</a>
								</div>
							</li>
							
							
							 
							<li  className={this.state.notificationTopSec  ?(this.state.notificationTopSec1 ? "com_notification_hover fst11 fst_notifi":"com_notification_hover fst_notifi"):"com_notification_hover fst_notifi hide_fst_notification"}>
								<div className="bold_text"> 
									<span className="noti_avatar"></span>
									<span className="noti_text">You have used 80% tokens</span>
									<span className="close_notification" onClick={this.notificationHideSec}></span>
								</div>
								<div className="green_text grn_child_three">
									<a href="aaa#" target="_blank">Buy more token</a>
								</div>
							</li>
							
							<li  className="com_notification_hover grn_par_four">
								<div className="bold_text"> 
									<span className="noti_avatar"></span>
									<span className="noti_text">AUTOCAD 2020.2 Update</span>
								</div>
								<div className="noti_contents ">Lorem or reduce seats on your subscriptions and align upcoming payments in your Account</div>
								<div className="green_text grn_child_four">
									<a href="aaa#" target="_blank">Install Update</a>
								</div>
								<div className="green_text grn_child_four">
									<a href="aaa#" target="_blank">More action</a>
								</div>
							</li>
							
							{!this.state.showAllItmsSec?
							<li  className="com_notification_hover grn_li" onClick={this.showRestSec}>
								<div className="grn_div">
									<span className="grn_dot"></span>
									<span className="grn_dot"></span>
									<span className="grn_dot"></span>
								</div>
							</li>:
							<li  className="com_notification_hover">
								<div className="bold_text"> 
									<span className="noti_avatar"></span>
									<span className="noti_text">AUTOCAD 2020.1 Update</span>
								</div>
								
								<div className="noti_dot" onClick={this.remindSec}>
									<span className="grn_dot_hori"></span>
									<span className="grn_dot_hori"></span>
									<span className="grn_dot_hori"></span>
								</div>
								
								{this.state.remindMsgSec?
								<div className="remind_sec">
									<div className="remind_div">Remind me tonight</div>
									<div className="remind_div">Remind me tomorrow</div>
									<div className="remind_div_hori"></div>
									<div className="remind_div" onClick={this.remindSec}>Dismiss</div>
								</div>:""}
								
								<div className="noti_contents">Lorem or reduce seats on your subscriptions and align upcoming payments in your Account</div>
								
								<div className={this.state.showMoreSec?"showless":""}>
									<div className="green_text">
										<a  href="aaa#" target="_blank">Install Update</a>
									</div>
									
									<div className="green_text" onClick={this.moreActSec}>
										<span className="more_vis">More action</span>
										<span className="noti_arrow"></span>
									</div>
								</div>
								
								<div className={this.state.showMoreSec?"showMore":"showless"}>
									<img src="images/video.png" className="noti_png" />
									<div className="noti_png_txt">Lorem or reduce seats on your subscriptions and align upcoming payments in your Account</div>
									
									<div className="green_text">
										<a  href="aaa#" target="_blank">Install Update</a>
									</div>
									
									<div className="green_text" onClick={this.moreActSec}>
										<span className="more_vis">More action</span>
										<span className="noti_arrow_up"></span>
									</div>
								</div>
								
							</li>
							}

						</ul>
						</div>
					</div> : ""}
					{/*Notification sec End Here....*/}
					
				</div>
			</div>
		)
	}
});

module.exports = Header;