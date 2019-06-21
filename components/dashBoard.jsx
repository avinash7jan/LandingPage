import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Button,Modal,Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';
import ProductAll from "./productAll.jsx";
import NotificationHistory from './notificationHistory.jsx';
import ProductAllList from './productAllList.jsx';
//import ProductAllPay from './productAllPay.jsx';
import ProductAllPayList from './productAllPayList.jsx';

const DashBoard = React.createClass({
	
	getInitialState: function(){
		return {
			index: 0,
			direction: null,
			popupShow:false,
			purchase:false,
			productUpdate:false,
			open :true,
			recentProductUpdate:true,
			showAll:false,
			showAll1:false,
			showAll2:false,
			prodAll:'',
		}
	},

	
	handleSelect(selectedIndex, e) {
		this.setState({
			index: selectedIndex,
			direction: e.direction
		});
	},
	modalShow(){
		this.setState({
			popupShow:true,
		})
	},
	close(){
		this.setState({
			popupShow:false,productUpdate:false,
			recentProductUpdate:false,
		})
	},
	showPuches(){
		this.setState({
			purchase:!this.state.purchase,
		})
	},
	
	productModal(){
		
		this.setState({
			productUpdate:true,
		})
	},
	productModalShow(){
		this.setState({
			recentProductUpdate:true,
		})
	},
	
	showAll(){
		this.setState({
			showAll:!this.state.showAll,
			showAll1:false,
			showAll2:false,
		})
	},
	prodView(e){
		this.setState({
			prodAll:e,
		})
	},
	prodAlls(data){
		this.setState({
			prodAll:data,
		})
	},
	
	
	
	
		
	render: function() {
		const tooltip = (
			<Tooltip id="tooltip" className="tool_tip">Download</Tooltip>
		);
		console.log("this.state.prodAll",this.state.prodAll);
		
	return (
		<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
		{this.props.showAllItms?<NotificationHistory/>:
		<div>

		
		{this.state.prodAll=="prodViewTwo"?<ProductAllPayList  prodAll={this.prodAlls}/>:
		(this.state.prodAll=="prodViewOne"?<ProductAllList  prodAll={this.prodAlls}/>:
		(this.state.prodAll=="prodViewThree"?<ProductAll  prodAll={this.prodAlls}/>:
		<div>	
		 <div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad dash_backg"></div> 
			<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 fix_width no-pad">
				<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 dash_top_border">
					<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad main_content1">
						<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
							<h4 className="top_wish">Good afternoon, Pat</h4>
						</div>
						<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad features ul_mobile_view">
							
							<li className="col-md-4 col-sm-6 col-lg-4 com_pad_top mob_view">
								<div className="com_back_li com_hover" onClick={this.props.leftMenuClick.bind(this,'productUpdates')}> 
									<div className="com_icon updates"></div>
									<div className="com_width">
										<div className="text_right">8</div>
										<span className="below_content">Recent Product Updates</span>
										<span className="below_content spl_text">last 30 days</span>
									</div>
								</div>	
							</li>
							
							{/* <li className="col-md-4 col-sm-6 col-lg-4 com_pad_top mob_view">
								<a href="http://172.99.67.90/url/#/" target="blank">
								<div className="com_back_li com_hover top_box_height">
									<div className="com_icon support_case"></div>
									<div className="text_right">4</div>
									<span className="below_content">Open Support Cases</span>
								</div>	
								</a>
							</li> */}
							
							
						</ul>
					</div>
				</div>
				
				
				<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 dash_bot">
					<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad main_content1">
						<div className="col-xs-12 col-md-8 col-sm-12 col-lg-8 no-pad">
							<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top new_contents trcently_purchase">Recently purchased products</div>
							<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top new_pop_contents">
							{/* <div className="col-xs-12 no-pad boxShadow new_pop_contents"> */}
									<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li sub_li1">
										<Accordion  className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_update acco_bg">

											<Panel onClick={this.prodView.bind(this,"prodViewOne")} eventKey="2" className="col-xs-12 col-md-12 col-sm-12 col-lg-12 boxShadow1 no-pad recent_product_heading spl_heading spl_heading2 no-hov"  
											header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul sub_ul_hov">

													<li className="col-xs-11 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="aeccHome"></span>
														</div>
														<div className="text_div">
															<span className="autoCad_txt_media new_autoCad_txt">Architecture Engineering & Construction Collection</span>
														</div>
														<span className="exp">View details</span>
													</li>

													<li className="col-xs-1 no-pad">
														<span className="arrow_sv arrow_sv_hover"></span>
													</li>
												</ul>
												}>
											</Panel>
											
											<Panel eventKey="2" onClick={this.prodView.bind(this,"prodViewTwo")} className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad  boxShadow1 recent_product_heading spl_heading spl_heading2 no-hov"  
											header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul sub_ul_hov">

													<li className="col-xs-11 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="ppuHome"></span>
														</div>
														<div className="text_div">
															<span className="autoCad_txt_media new_autoCad_txt">Pay-Per-Use</span>
														</div>
														<span className="exp">View details</span>
													</li>

													<li className="col-xs-1 no-pad">
														<span className="arrow_sv arrow_sv_hover"></span>
													</li>
												</ul>
												}>
											</Panel>
											
											<Panel eventKey="2" onClick={this.prodView.bind(this,"prodViewThree")} className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad boxShadow1 recent_product_heading spl_heading spl_heading2 no-hov"  
											header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul sub_ul_hov">

													<li className="col-xs-11 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="revitHome"></span>
														</div>
														<div className="text_div">
															<span className="autoCad_txt_media new_autoCad_txt">Revit</span>
														</div>
														<span className="exp">View details</span>
													</li>

													<li className="col-xs-1 no-pad">
														<span className="arrow_sv arrow_sv_hover"></span>
													</li>
												</ul>
												}>
											</Panel>
							
										</Accordion>
									</li>
							</ul>
							
							<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top new_contents trcently_purchase">Token Usage</div>
							<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12  no-pad  btn_grp desktop_view">
								<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad div_hov">
									
									<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top li_bg par_hov ">
										<div className="col-xs-12 no-pad ">
											<img src="images/charst.png" className="video_png" onClick={this.props.leftMenuClick.bind(this,'token_usage')}/>
										</div>
									</li>	
								</div>
							</ul>		
							
							<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top new_contents trcently_purchase">What's new in Account</div>
							
							<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12  no-pad  btn_grp desktop_view">
								<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad div_hov">
									
									<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top li_bg par_hov ">
										<div className="col-xs-12 no-pad ">
											
											<div className="col-xs-6 boxBord ">
												<div className="com_back_li1 com_back_li1_left boxShadow">
													<div className="com_back_li11">
														<div className="know_auto">Get to know your Autodesk Account</div>
														<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad btn_grp administrator_png">
														<img src="images/video.png" className="video_png" onClick={this.modalShow}/>
														</div>
													</div>
												</div>
											</div>
											
											<div className="col-xs-6 boxBord1 ">
												<div className="com_back_li1 com_back_li1_right boxShadow">
													<div className="com_back_li11 no_border11 com_back_li11_border">
														<div className="know_auto">Take a quick look at the new features</div>
														{/*<div className="normal_txt">Nov 2017</div>*/}
														<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad new_contents new_contents1">
															<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li sub_li1">
																<a href="http://172.99.67.90/url/#/" target="blank">Easier product activation single-user access</a>
															</li>
															<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li">
																<a href="http://172.99.67.90/url/#/" target="blank">Improved user management for single -user access</a>
															</li>
															<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li">
																<a href="http://172.99.67.90/url/#/" target="blank">Change Primary admin</a>
															</li>
															{/* <div className="normal_txt">Oct 2017</div> */}
															<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li">
																<a href="http://172.99.67.90/url/#/" target="blank">Search product Updates</a>
															</li>
															
															<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li">
																<a href="http://172.99.67.90/url/#/" target="blank">Set Download preference for windows</a>
															</li>
															
															<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li">
																<a href="#" target="blank" className="active_anchor">See all new features</a>
															</li>
															
															{/* <div className="view_purchase">
																<span className="marg_bot"><a href="#" target="blank" className="view_text">See all new features</a></span>
															</div> */}
														</ul>
													</div>
												</div>
											</div>
											
										</div>
										
										
										
									</li>

									<li className="col-xs-12 col-md-6 col-sm-12 col-lg-6 com_pad_top li_bg par_hov">
									</li>
									
								</div>
							</ul>
							
						</div>
						
						<Modal className="admin_modal" show={this.state.popupShow} onHide={this.close} bsSize="large" aria-labelledby="contained-modal-title-lg">
							<div className="close_modal" onClick={this.close}></div>
							<Modal.Body className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no_pad administrator_pop_png">
								<div className="administrator_tour"></div> 
							</Modal.Body>
						</Modal>
						
						<div className="col-xs-12 col-md-4 col-sm-12 col-lg-4 no-pad top_images1">
							<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 support_box com_box">
								<li className="new_header up_renwal"><h2>Upcoming expirations</h2></li>
								
								<ul className="notification_contents1 noti noti_height">
									
									<li  className="com_notification_hover">
										<div className="clok_txt">
											<span className="time_img  "></span>
											<span className="time_text">2 days</span>
										</div>	
										<div className="sub_exp">Your subscription expires June 5</div>
										<div className="sub_exp1">Architecture, Engineering & Construction Collection</div>
										<div className="sub_exp2">
											<a href="aaa#" target="_blank">Manage renewal</a>
										</div>
									</li>
									<li className="devider">
										<div></div>
									</li>
									
									<li  className="com_notification_hover">
										<div className="clok_txt">
											<span className="time_img  "></span>
											<span className="time_text">2 days</span>
										</div>	
										<div className="sub_exp">Your subscription expires June 20</div>
										<div className="sub_exp1">AutoCAD</div>
										<div className="sub_exp2">
											<a href="aaa#" target="_blank">Manage renewal</a>
										</div>
									</li>
									
									<li className="devider">
										<div></div>
									</li>
									
									<li  className="com_notification_hover">
										<div className="clok_txt">
											<span className="time_img  "></span>
											<span className="time_text">2 days</span>
										</div>	
										<div className="sub_exp">Your subscription expires June 25</div>
										<div className="sub_exp1">Revit</div>
										<div className="sub_exp2">
											<a href="aaa#" target="_blank">Manage renewal</a>
										</div>
									</li>
									
									<li className="devider">
										<div></div>
									</li>
									
									{/*<li  className="com_notification_hover">
										<div className="clok_txt">
											<span className="time_img  "></span>
											<span className="time_text">2 days</span>
										</div>	
										<div className="sub_exp">Your subscription expires June 5</div>
										<div className="sub_exp1">Product Design & Manufacturing Collection</div>
										<div className="sub_exp2">
											<a href="aaa#" target="_blank">Manage renewal</a>
										</div>
									</li>
									
									
									<li className="devider">
										<div></div>
									</li>
									
									<li  className="com_notification_hover">
										<div className="clok_txt">
											<span className="time_img  "></span>
											<span className="time_text">2 days</span>
										</div>	
										<div className="sub_exp">Maintenanace plan expiring on Feb 28</div>
										<div className="sub_exp1">Product Design & Manufacturing Collection</div>
										<div className="sub_exp2">
											<a href="aaa#" target="_blank">Manage renewal</a>
										</div>
									</li>
									
									<li className="devider">
										<div></div>
									</li>
									
									<li  className="com_notification_hover">
										<div className="clok_txt">
											<span className="time_img  "></span>
											<span className="time_text">2 days</span>
										</div>	
										<div className="sub_exp">Maintenanace plan expiring on Feb 28</div>
										<div className="sub_exp1">Product Design & Manufacturing Collection</div>
										<div className="sub_exp2">
											<a href="aaa#" target="_blank">Manage renewal</a>
										</div>
									</li>*/}
								</ul>

							</ul>
						</div>
						
						
						
						<div className="col-xs-12 col-md-4 col-sm-12 col-lg-4 no-pad top_images1">
							<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 support_box com_box">
								<li className="new_header sub_li3"><h2>Need help?</h2></li>
								
								<PanelGroup className="help_support">
									
									<Panel expanded={this.state.open} className="help_support_heading" collapsible header="">
										<div className="panel_body_contents col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
										<div className="col-xs-12 no-pad">
										Find help with your Account or product</div>
											<a href="https://knowledge.autodesk.com/contact-support" target="blank">
												<div className="col-xs-12 no-pad ask_ava">
													<span className="ask_text ask_text1">Account basic</span>
													<span className="ask_text ask_text1">Product tutorials & troubleshooting</span>
												</div>
											</a>
										</div>
									</Panel>
									
									<Panel  expanded={this.state.open} className="help_support_heading" collapsible header="">
										<div className="panel_body_contents col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
											<div className="col-xs-12 no-pad">Get help with installation, activation, licencing and more from Autodesk Virtual Agent</div>
											<a href="https://ava.autodesk.com/" target="blank">
												<div className="col-xs-12 no-pad ask_ava">
													<span className="ask_text">Ask AVA</span>
												</div>
											</a>
										</div>
									</Panel>
									
									<Panel expanded={this.state.open} className="help_support_heading" collapsible header="">
										<div className="panel_body_contents col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
										<div className="col-xs-12 no-pad">Tell us about your issue and find the best support option</div>
											<a href="https://knowledge.autodesk.com/support" target="blank">
												<div className="col-xs-12 no-pad ask_ava">
													<span className="ask_text ask_text1">Contact support</span>
												</div>
											</a>
										</div>
									</Panel>
								</PanelGroup>
							</ul>
						</div>
						
					</div>
				</div>
				
			</div>	
		</div>))}
		</div>}
		</div>
		
		)
	}
});

module.exports = DashBoard;