import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Button,Modal,Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';

const ProductAll = React.createClass({
	
	getInitialState: function(){
		return {
			prodAll:false,
			open:true,
			filterOne:false,
			liData:"Install",
			showPrd:false,
		}
	},
	back(){
		this.setState({
			prodAll:this.state.prodAll,
		})
		this.props.prodAll(this.state.prodAll);
	},
	/* componentWillReceiveProps:function(nextProps){
		this.setState({
			prodAll:nextProps.prodAll,
		})

	}, */
	
	filter() {
		if(!this.state.filterOne){
			// attach/remove event handler
			document.addEventListener('click', this.handleOutsideClick, false);
		} else {
			document.removeEventListener('click', this.handleOutsideClick, false);
		}
        this.setState({ filterOne: !this.state.filterOne });
    },
	handleOutsideClick(e) {
	// ignore clicks on the component itself
		if (this.node.contains(e.target)) {
			console.log(this.node.contains(e.target));
			return true;
		}
		this.filter();
	},
	getLi(e){
		 this.setState({ liData: e});
	},
	showProduct(){
		this.setState({ showPrd: !this.state.showPrd});
	},
	
	
	
	
	render: function() {
		console.log("this.state.filterOne",this.state.filterOne);
	return (
		<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad fix_width">
			<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12">
				<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12">
					<span className="back back_mob" onClick={this.back}></span>
					<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad main_content1 main_top_marg">
						<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
							<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top">
									<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li sub_li1">
										<PanelGroup collapsible defaultExpanded  expanded className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_update acco_bg accord_marg_bot">

											<Panel  collapsible="false" expanded={this.state.open}   className="col-xs-12 col-md-12 col-sm-12 col-lg-12 boxShadow1 no-pad recent_product_heading spl_heading no-hov prod_top"  
											header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul sub_ul_hov">

													<li className="col-xs-12 no-pad purchaseDate3">
														<div className="icon_div">
															<span className=" revit_list auto_marg"></span>
														</div>
														<div className="text_div">
															<span className="autoCad_txt_media prod_txt">Revit 2019</span>
														</div>
													</li>
												</ul>
												}>
												
												<div className="panel_body_updates panel_prod panel_body_height col-xs-12 col-md-12 col-sm-12 col-lg-12 panel_body_height">
													<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
														<span className="col-xs-12">Plan, design, construct, and manage buildings and infrastructure with powerful tools for Building Information Modeling.</span>
														<span className="col-xs-12 more more1">Access previous versions</span>
													</div>
													<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
														<li className="language">
															<div className="lang_label">Language</div>
															<div className="lang_sel">
																English
																<span className="select_arrow_img"></span>
															</div>
														</li>
														<ul className="filter_hide1 pos_option">
															<li value="all">All</li>
															<li value="allSeats">All With Seats</li>
															<li value="latest">Latest Version</li>
															<li value="mac">Mac Only</li>
														</ul>
														<li className="language">
															<div className="lang_label">Platforms</div>
															<div className="lang_sel">
																Windows 64
																<span className="select_arrow_img"></span>
															</div>
														</li>
														
														<li className="language install">
															<div className="lang_label">Install size</div>
															<div className="lang_sel in_size">4.5 GB</div>
														</li>
														
														<li className="install_but install_but_marg" onClick={this.filter}>
															<div className="install_but1">
																<span className="in_txt">{this.state.liData?this.state.liData:""}</span>
																<span className="inst_line"></span>
																<span className="inst_arrow"></span>
															</div>
														</li>
														<ul className={"license_ul "+ (this.state.filterOne?"":"ul_hide")} ref={node => {this.node = node;}} onClick={this.filter}>
															<li value="download" onClick={this.getLi.bind(this,"Download")}>Download</li>
															<li value="install" onClick={this.getLi.bind(this,"Install")}>Install</li>
														</ul>
														
													</ul>	
												</div>
											</Panel>
											</PanelGroup>
											
											{/* <div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad nor_heding">
												Included products<span className={"header_arrow1 "+(this.state.showPrd?"":"arrow_rotate")} onClick={this.showProduct}></span>
											</div> */}
											
											{this.state.showPrd?
											<PanelGroup accordion  collapsible defaultExpanded  expanded className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_update acco_bg accord_marg_bot">
											{/*collapsible="true" expanded={this.state.open}*/}
											<Panel eventKey="9"  collapsible="true"  className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad  boxShadow1 prod_sec prod_sec1 recent_product_heading no-hov"  
											header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul sub_ul_hov">

													<li className="col-xs-11 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="left_arrow1"></span>
															<span className="autoCad1"></span>
														</div>
														<div className="text_div">
															<span className="autoCad_txt_media new_autoCad_txt1">Product Name</span>
															<span className="autoCad_txt_media new_autoCad_txt2">English | Windows 64</span>
														</div>
													</li>

													  <li className="col-xs-1 no-pad but_acco1">
														<li className="install_but prod_bot2">
															<div className="install_but1 prod_bot3 animation" onClick={(event)=>{event.stopPropagation()}}>
																<span className="in_txt">Install</span>
																<span className="inst_line1"></span>
																<span className="inst_arrow1"></span>
															</div>
														</li>
													</li>
												</ul>
												}>
												
												<div className="panel_body_updates panel_body_height col-xs-12 col-md-12 col-sm-12 col-lg-12 panel_body_height">
													<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
														
													<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
														<li className="language">
															<div className="lang_sel">
																English
																<span className="select_arrow_img"></span>
															</div>
														</li>
														<ul className="filter_hide1 pos_option">
															<li value="all">All</li>
															<li value="allSeats">All With Seats</li>
															<li value="latest">Latest Version</li>
															<li value="mac">Mac Only</li>
														</ul>
														<li className="language">
															<div className="lang_sel">
																Windows 64
																<span className="select_arrow_img"></span>
															</div>
														</li>
													
													{/* <li className="install_but prod_bot2 prod_bot6">
															<div className="install_but1 prod_bot3">
																<span className="in_txt">Install</span>
																<span className="inst_line1"></span>
																<span className="inst_arrow1"></span>
															</div>
													</li> */}
													</ul>	

													</div> 
												</div>

											</Panel>
											
											<Panel eventKey="10"  collapsible="true"  className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad  boxShadow1 prod_sec prod_sec1 recent_product_heading no-hov"  
											header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul sub_ul_hov">

													<li className="col-xs-11 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="left_arrow1"></span>
															<span className="autoCad1"></span>
														</div>
														<div className="text_div">
															<span className="autoCad_txt_media new_autoCad_txt1">Product Name</span>
															<span className="autoCad_txt_media new_autoCad_txt2">English | Windows 64</span>
														</div>
													</li>

													  <li className="col-xs-1 no-pad but_acco1">
														<li className="install_but prod_bot2">
															<div className="install_but1 prod_bot3 animation" onClick={(event)=>{event.stopPropagation()}}>
																<span className="in_txt">Install</span>
																<span className="inst_line1"></span>
																<span className="inst_arrow1"></span>
															</div>
														</li>
													</li>
												</ul>
												}>
												
												<div className="panel_body_updates panel_body_height col-xs-12 col-md-12 col-sm-12 col-lg-12 panel_body_height">
													<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
														
													<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
														<li className="language">
															<div className="lang_sel">
																English
																<span className="select_arrow_img"></span>
															</div>
														</li>
														<ul className="filter_hide1 pos_option">
															<li value="all">All</li>
															<li value="allSeats">All With Seats</li>
															<li value="latest">Latest Version</li>
															<li value="mac">Mac Only</li>
														</ul>
														<li className="language">
															<div className="lang_sel">
																Windows 64
																<span className="select_arrow_img"></span>
															</div>
														</li>
													
													{/* <li className="install_but prod_bot2 prod_bot6">
															<div className="install_but1 prod_bot3">
																<span className="in_txt">Install</span>
																<span className="inst_line1"></span>
																<span className="inst_arrow1"></span>
															</div>
													</li> */}
													</ul>	

													</div> 
												</div>

											</Panel>
											
											
											<Panel eventKey="8" collapsible="true" className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad  boxShadow1 prod_sec prod_sec1 recent_product_heading no-hov"  
											header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul sub_ul_hov">

													<li className="col-xs-11 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="left_arrow1"></span>
															<span className="autoCad1"></span>
														</div>
														<div className="text_div">
															<span className="autoCad_txt_media new_autoCad_txt1">Product Name</span>
															<span className="autoCad_txt_media new_autoCad_txt2">English | Windows 64</span>
														</div>
													</li>

													  <li className="col-xs-1 no-pad but_acco1">
														<li className="install_but prod_bot2">
															<div className="install_but1 prod_bot3 animation" onClick={(event)=>{event.stopPropagation()}}>
																<span className="in_txt">Install</span>
																<span className="inst_line1"></span>
																<span className="inst_arrow1"></span>
															</div>
														</li>
													</li>
												</ul>
												}>
												
												<div className="panel_body_updates panel_body_height col-xs-12 col-md-12 col-sm-12 col-lg-12 panel_body_height">
													<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
														
													<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
														<li className="language">
															<div className="lang_sel">
																English
																<span className="select_arrow_img"></span>
															</div>
														</li>
														<ul className="filter_hide1 pos_option">
															<li value="all">All</li>
															<li value="allSeats">All With Seats</li>
															<li value="latest">Latest Version</li>
															<li value="mac">Mac Only</li>
														</ul>
														<li className="language">
															<div className="lang_sel">
																Windows 64
																<span className="select_arrow_img"></span>
															</div>
														</li>
													
													{/* <li className="install_but prod_bot2 prod_bot6">
															<div className="install_but1 prod_bot3">
																<span className="in_txt">Install</span>
																<span className="inst_line1"></span>
																<span className="inst_arrow1"></span>
															</div>
													</li> */}
													</ul>	

													</div> 
												</div>

											</Panel>
											
											<Panel eventKey="7" collapsible="true"  className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad  boxShadow1 prod_sec prod_sec1 recent_product_heading no-hov"  
											header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul sub_ul_hov">

													<li className="col-xs-11 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="left_arrow1"></span>
															<span className="autoCad1"></span>
														</div>
														<div className="text_div">
															<span className="autoCad_txt_media new_autoCad_txt1">Product Name</span>
															<span className="autoCad_txt_media new_autoCad_txt2">English | Windows 64</span>
														</div>
													</li>

													  <li className="col-xs-1 no-pad but_acco1">
														<li className="install_but prod_bot2">
															<div className="install_but1 prod_bot3 animation" onClick={(event)=>{event.stopPropagation()}}>
																<span className="in_txt">Install</span>
																<span className="inst_line1"></span>
																<span className="inst_arrow1"></span>
															</div>
														</li>
													</li>
												</ul>
												}>
												
												<div className="panel_body_updates panel_body_height col-xs-12 col-md-12 col-sm-12 col-lg-12 panel_body_height">
													<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
														
													<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
														<li className="language">
															<div className="lang_sel">
																English
																<span className="select_arrow_img"></span>
															</div>
														</li>
														<ul className="filter_hide1 pos_option">
															<li value="all">All</li>
															<li value="allSeats">All With Seats</li>
															<li value="latest">Latest Version</li>
															<li value="mac">Mac Only</li>
														</ul>
														<li className="language">
															<div className="lang_sel">
																Windows 64
																<span className="select_arrow_img"></span>
															</div>
														</li>
													
													{/* <li className="install_but prod_bot2 prod_bot6">
															<div className="install_but1 prod_bot3">
																<span className="in_txt">Install</span>
																<span className="inst_line1"></span>
																<span className="inst_arrow1"></span>
															</div>
													</li> */}
													</ul>	

													</div> 
												</div>

											</Panel>
											</PanelGroup>:""}
									</li>
							</ul>
						</div>
					</div>
				</div>
				
			</div>
			</div>	
		
		)
	}
});

module.exports = ProductAll