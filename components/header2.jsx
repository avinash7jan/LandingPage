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
			helpContent:false,
			notificationTop:true,
			notificationTop1:false,
			dotRemoveClass1:false,dotRemoveClass2:false,dotRemoveClass3:false,
			emails:[],
			showAllItms:false,
			showMore:false,
			remindMsg:false,
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
	
	handleOutsideClick1(e) {
	// ignore clicks on the component itself
		if (this.node.contains(e.target)) {
		return;
		}
		this.toggleNotification();
	},
	handleOutsideClick2(e) {
	// ignore clicks on the component itself
		if (this.node.contains(e.target)) {
		return;
		}
		this.toggleHelp();
	},

	notificationHide(){
		this.setState({notificationTop1:true});
		setTimeout(() => {
		  this.setState({
			notificationTop:false
		  });
		}, 400);	
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
	
	showRest(){
		this.setState({showAllItms:true});
	},
	moreAct(){
		this.setState({showMore:!this.state.showMore});
	},
	
	remind(){
		this.setState({remindMsg:!this.state.remindMsg});
	},
	
	
	
	
	render: function() {
console.log("this.state.notificationContent...."+this.state.notificationContent);
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
									<span className="avatar" onClick={this.toggleClass}></span>
								</li>
								<li className="com_icon">
									<span className={this.state.notificationContent?"notification notificationActive":"notification "} onClick={this.toggleNotification}></span>
									
									<span className={this.state.helpContent?"question questionActive":"question"} onClick={this.toggleHelp}></span>
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
					
					
					
					{this.state.active ?
					<div className="com_cont notice profile com_pop_box arrow_box" ref={node => { this.node = node; }}>
						<div log_cont>
							<div className="user_name">Jenny Eishingdrelo</div>
							<div className="email">jenny.eishingdrelo@autodesk.com</div>
							
							<div onClick={this.props.dotRemove5} className="profile_settings" >Profile Settings</div>
							
							<div className="profile_devide"></div>
							
							<div className="sign_btn_grp">
								<button type="button" className="sign_out but">Sign Out</button>
							</div>
						</div>
					</div>: null}
					
					
					
					
					{/*Notification start here....*/}
					
					{this.state.notificationContent ?

					<div className="com_cont notification_box arrow_box"  ref={node => { this.node = node; }}>
						<div className="notification_box1">
						<ul className="notification_contents">
							<li>Notifications</li>

							
							<li  className="com_notification_hover fst_li_noti grn_par">
								<div className="bold_text"> 
									<span className="noti_avatar"></span>
									<span className="noti_text">Inventor trial expires in 2 days</span>
								</div>
								<div className="green_text grn_child">
									<a onClick={this.dotRemove1} href="aaa#" target="_blank">Subscribe now</a>
								</div>
							</li>
							
							<li  className="com_notification_hover grn_par_two">
								<div className="bold_text"> 
									<span className="noti_avatar"></span>
									<span className="noti_text">Javier has requested access to Inventor</span>
								</div>
								<div className="green_text grn_child_two">
									<a onClick={this.dotRemove1} href="aaa#" target="_blank">Approve</a>
								</div>
								<div className="green_text grn_child_two">
									<a onClick={this.dotRemove1} href="aaa#" target="_blank">Decline</a>
								</div>
							</li>
							
							
							
							<li  className={this.state.notificationTop ?(this.state.notificationTop1 ? "com_notification_hover fst11 fst_notifi":"com_notification_hover fst_notifi"):"com_notification_hover fst_notifi hide_fst_notification"}>
								<div className="bold_text"> 
									<span className="noti_avatar"></span>
									<span className="noti_text">You have used 250 tokens (80%)</span>
									<span className="close_notification" onClick={this.notificationHide}></span>
								</div>
								<div className="green_text grn_child_three">
									<a href="aaa#" target="_blank">Buy more token</a>
								</div>
							</li>
							
							<li  className="com_notification_hover grn_par_four">
								<div className="bold_text"> 
									<span className="noti_avatar"></span>
									<span className="noti_text">AUTOCAD 2020.2 Update is available</span>
								</div>
								<div className="noti_contents ">Lorem or reduce seats on your subscriptions and align upcoming payments in your Account</div>
								<div className="green_text grn_child_four">
									<a href="aaa#" target="_blank">Install Update</a>
								</div>
								<div className="green_text grn_child_four">
									<a href="aaa#" target="_blank">More action</a>
								</div>
							</li>
							
							{!this.state.showAllItms?
							<li  className="com_notification_hover grn_li" onClick={this.showRest}>
								<div className="grn_div">
									<span className="grn_dot"></span>
									<span className="grn_dot"></span>
									<span className="grn_dot"></span>
								</div>
							</li>:
							<li  className="com_notification_hover">
								<div className="bold_text"> 
									<span className="noti_avatar"></span>
									<span className="noti_text">AUTOCAD 2020.1 Update is available</span>
								</div>
								
								<div className="noti_dot" onClick={this.remind}>
									<span className="grn_dot_hori"></span>
									<span className="grn_dot_hori"></span>
									<span className="grn_dot_hori"></span>
								</div>
								
								{this.state.remindMsg?
								<div className="remind">
									<div className="remind_div">Remind me tonight</div>
									<div className="remind_div">Remind me tomorrow</div>
									<div className="remind_div_hori"></div>
									<div className="remind_div" onClick={this.remind}>Dismiss</div>
								</div>:""}
								
								<div className="noti_contents">Lorem or reduce seats on your subscriptions and align upcoming payments in your Account</div>
								
								<div className={this.state.showMore?"showless":""}>
									<div className="green_text">
										<a  href="aaa#" target="_blank">Install Update</a>
									</div>
									
									<div className="green_text" onClick={this.moreAct}>
										<span className="more_vis">More action</span>
										<span className="noti_arrow"></span>
									</div>
								</div>
								
								<div className={this.state.showMore?"showMore":"showless"}>
									<img src="images/video.png" className="noti_png" />
									<div className="noti_png_txt">Lorem or reduce seats on your subscriptions and align upcoming payments in your Account</div>
									
									<div className="green_text">
										<a  href="aaa#" target="_blank">Install Update</a>
									</div>
									
									<div className="green_text" onClick={this.moreAct}>
										<span className="more_vis">More action</span>
										<span className="noti_arrow_up"></span>
									</div>
								</div>
								
							</li>
							}

						</ul>
						</div>
					</div> : ""}
					{/*Notification End Here....*/}
					
				</div>
			</div>
		)
	}
});

module.exports = Header;