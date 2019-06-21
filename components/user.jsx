import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Modal,Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';

const User = React.createClass({
	
	getInitialState: function(){
		return {
			activeTab:"summary",
			popupShow:false,
			popupShow1:false,
		}
	},
	activeTabs(e){
		this.setState({
			activeTab:e,
		})
	},
	modalShow(){
		this.setState({
			popupShow:true,
		})
	},
	close(){
		this.setState({
			popupShow:false,
			popupShow1:false,
		})
	},
	modalShow1(){
		this.setState({
			popupShow1:true,
		})
	},
	
		
	render: function() {
		return (
			<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12">
				<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad main_content1">
				
				
				{this.state.activeTab=="setting"?<span className="back_mob back_landingUser" onClick={this.activeTabs.bind(this,"summary")}/>:""}
				
					{this.state.activeTab=="export"?<span className="back_mob back_landing" onClick={this.activeTabs.bind(this,"summary")}/>:""}
					<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12">
						
						{this.state.activeTab=="setting"?"":
						<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top new_contents">
							<div className="seat_header">User Management</div>
							<div className="com_rgt">
								<span className="com_rgt_fst" >Can't find a product or user?</span>
								
								<button onClick={this.modalShow1} data-toggle="modal" data-target="#myModal2" className="export_btn add_usr" >+ Add users</button>
								
								<span className="user_setting" onClick={this.activeTabs.bind(this,"setting")}></span>
							</div>
						</div>}
						
						
						

						<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
							{this.state.activeTab=="summary"?
							<img src={'images/user1.png'} className="const_img img_responsive" />:""}
							
							{this.state.activeTab=="setting"?
							<div>
								<button className="set_up" onClick={this.modalShow}>Set up global access</button>
								<img src={'images/user2a.png'} className="const_img img_responsive" />
								
								<img src={'images/global_access.png'} className="const_img img_responsive dbl_img" />
							</div>:""}
							
							{this.state.activeTab=="export"?
							<img src={'images/token_export.png'} className="const_img img_responsive" />:""}
						</div>
						
						
						<Modal className="admin_modal" show={this.state.popupShow} onHide={this.close} bsSize="medium" aria-labelledby="contained-modal-title-lg">
							<div className="close_modalUser" onClick={this.close}></div>
							<Modal.Body className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no_pad administrator_pop_png">
								<img src={'images/user3.png'} className="const_img img_responsive const_imgHeight_new" />
							</Modal.Body>
						</Modal>
						
						{/* <Modal className={"admin_modal  " +(this.state.popupShow1?"admin_modal_active":"admin_modal_right")} 
						show={this.state.popupShow1} 
						onHide={this.close} bsSize="medium" aria-labelledby="contained-modal-title-lg">
							<div className="close_modalUser" onClick={this.close}></div>
							<Modal.Body className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no_pad administrator_pop_png">
								<img src={'images/user4.png'} className="const_img img_responsive const_imgHeight" />
							</Modal.Body>
						</Modal> */}
						
						{/* {this.state.popupShow1?
						<div className={"user_modal "+(this.state.popupShow1?"userModel_active":"")}>
							<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no_pad">
								<div className={"col-xs-12 col-md-12 col-sm-12 col-lg-12 no_pad userModel " +(this.state.popupShow1?"userModel_active":"")}>
									<img src={'images/user4.png'} className="const_img img_responsive" />
								</div>
							</div>
						</div>:""}	 */	}
						
					<Modal className="add_newUsers" show={this.state.popupShow1} onHide={this.close} bsSize="medium" aria-labelledby="contained-modal-title-lg">
						<div className="close_modalUser close_admin_modal" onClick={this.close}></div>
						<Modal.Body className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no_pad administrator_pop_png">
							<img src={'images/user4.png'} className="const_img const_img1 img_responsive constImg" />
						</Modal.Body>
					</Modal>	
					
					{/* {this.state.popupShow1?	
					<div className="container demo">
						<div className={"modal right fade "+(this.state.popupShow1?"show_modal":"")}>
							<div className={"modal-dialog" +(this.state.popupShow1?"show_modal1":"")} role="document">
								<div className="modal-content">
									<div className="modal-body">
										<img src={'images/user4.png'} className="const_img img_responsive" />
									</div>

								</div>
							</div>
						</div>
					</div>:""} */}
						
					
						
					</div>
				</div>
			</div>
		
				
					
		)
	}
});

module.exports = User;