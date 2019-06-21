import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Button,Modal,Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';
//import {createStore} from 'redux'; import ProductAllPayTwo from ".productAllPay/productAllPayTwo.jsx";

import ProductAllPay from "./productAllPay.jsx";
import ProductAllPayTwo from "./productAllPayTwo.jsx";
import ProductAllPayThree from "./productAllPayThree.jsx";
import ProductAllPayFour from "./productAllPayFour.jsx";
import ProductAllPayFive from "./productAllPayFive.jsx";
import ProductAllPaySix from "./productAllPaySix.jsx";
import ProductAllPaySeven from "./productAllPaySeven.jsx";
import ProductAllPayEight from "./productAllPayEight.jsx"; 

const ProductAllPayList = React.createClass({
	
	getInitialState: function(){
		return {
			index: 0,
			prodAll:"",
		}
	},
	
	
	back(){
		this.setState({
			prodAll:this.state.prodAll,
		})
		this.props.prodAll(this.state.prodAll);
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
		
		
	//Step 2:Reducer :state n action
	/* const reducer = function(state, action){
		if(action.type==="ATTACK"){
			return action.payload;
		}
		if(action.type==="GREENATTACK"){
			return action.payload;
		}
		return state;
	} */
	//Step 1 store: reducer n state
	//const store=createStore(reducer,"peace");
	
	//Step 3:Subscribe
	/* store.subscribe(()=>{
		console.log("store is now",store.getState());
	}) */
	
	//Step 4:Dispatch action
	//store.dispatch({type:"ATTACK",payload:"Iron Man"})
//	store.dispatch({type:"GREENATTACK",payload:"Hulk"})
	
	
	return (
		<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
			{this.state.prodAll=="prodViewOne"?<ProductAllPay  prodAll={this.prodAlls}/>:
			(this.state.prodAll=="prodViewTwo"?<ProductAllPayTwo  prodAll={this.prodAlls}/>:
			(this.state.prodAll=="prodViewThree"?<ProductAllPayThree  prodAll={this.prodAlls}/>:
			(this.state.prodAll=="prodViewFour"?<ProductAllPayFour  prodAll={this.prodAlls}/>:
			(this.state.prodAll=="prodViewFive"?<ProductAllPayFive  prodAll={this.prodAlls}/>:
			(this.state.prodAll=="prodViewSix"?<ProductAllPaySix  prodAll={this.prodAlls}/>:
			(this.state.prodAll=="prodViewSeven"?<ProductAllPaySeven  prodAll={this.prodAlls}/>:
			(this.state.prodAll=="prodViewEight"?<ProductAllPayEight  prodAll={this.prodAlls}/>:
			<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 fix_width no-pad">
				<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12">
					<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad main_content1">
						<span className="back back_mob back1" onClick={this.back}></span>
						<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12">
							<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top new_contents trcently_purchase1">
							<span className="ppuHome"></span>Pay per use</div>
							<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top new_pop_contents">
								
								<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
									<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 sorting">
										<li className="sev_itm">58 items</li>
										<li className="sort_wdth"><span className="sort_by">Sort by:</span>
											<div className="lang_sel1">Product name (A-Z)
												<span className="select_arrow_img1"></span>
											</div>
										</li>
									</ul>
								</li>
								
								<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li sub_li1">
									<Accordion  className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_update acco_bg accord_marg_bot list_hov">
										
										<Panel onClick={this.prodView.bind(this,"prodViewOne")} eventKey="10"  collapsible="true"  className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad  boxShadow2 prod_sec prod_sec1 recent_product_heading no-hov"  
											header={
											<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul sub_ul_hov">

												<li className="col-xs-11 no-pad purchaseDate3">
													<div className="icon_div">
													{/* <span className="left_arrow1"></span> */}
														<span className="threeds_max"></span>
													</div>
													<div className="text_div1">
														<span className="autoCad_txt_media new_autoCad_txt1">3ds Max</span>
														{/* <span className="autoCad_txt_media new_autoCad_txt2">English | Windows 64</span> */}
													</div>
												</li>

												  <li className="col-xs-1 no-pad but_acco1">
													<li className="install_but prod_bot2">
														<div className="install_but1 prod_bot3">
															<span className="in_txt1">View downloads</span>
														</div>
													</li>
												</li>
											</ul>
											}>
										</Panel>
										
										
										<Panel onClick={this.prodView.bind(this,"prodViewTwo")} eventKey="10"  collapsible="true"  className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad  boxShadow2 prod_sec prod_sec1 recent_product_heading no-hov"  
											header={
											<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul sub_ul_hov">

												<li className="col-xs-11 no-pad purchaseDate3">
													<div className="icon_div">
														<span className="advanceSteel"></span>
													</div>
													<div className="text_div1">
														<span className="autoCad_txt_media new_autoCad_txt1">Advance Steel</span>
														{/* <span className="autoCad_txt_media new_autoCad_txt2">English | Windows 64</span> */}
													</div>
												</li>

												  <li className="col-xs-1 no-pad but_acco1">
													<li className="install_but prod_bot2">
														<div className="install_but1 prod_bot3">
															<span className="in_txt1">View downloads</span>
														</div>
													</li>
												</li>
											</ul>
											}>
										</Panel>
										
										
										<Panel onClick={this.prodView.bind(this,"prodViewThree")} eventKey="10"  collapsible="true"  className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad  boxShadow2 prod_sec prod_sec1 recent_product_heading no-hov"  
											header={
											<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul sub_ul_hov">

												<li className="col-xs-11 no-pad purchaseDate3">
													<div className="icon_div">
														<span className="autoCad"></span>
													</div>
													<div className="text_div1">
														<span className="autoCad_txt_media new_autoCad_txt1">AutoCAD</span>
														{/* <span className="autoCad_txt_media new_autoCad_txt2">English | Windows 64</span> */}
													</div>
												</li>

												  <li className="col-xs-1 no-pad but_acco1">
													<li className="install_but prod_bot2">
														<div className="install_but1 prod_bot3">
															<span className="in_txt1">View downloads</span>
														</div>
													</li>
												</li>
											</ul>
											}>
										</Panel>
										
										
										<Panel onClick={this.prodView.bind(this,"prodViewFour")} eventKey="10"  collapsible="true"  className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad  boxShadow2 prod_sec prod_sec1 recent_product_heading no-hov"  
											header={
											<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul sub_ul_hov">

												<li className="col-xs-11 no-pad purchaseDate3">
													<div className="icon_div">
														<span className="autoCad"></span>
													</div>
													<div className="text_div1">
														<span className="autoCad_txt_media new_autoCad_txt1">AutoCAD - mobile app Premium for subscription</span>
														{/* <span className="autoCad_txt_media new_autoCad_txt2">English | Windows 64</span> */}
													</div>
												</li>

												  <li className="col-xs-1 no-pad but_acco1">
													<li className="install_but prod_bot2">
														<div className="install_but1 prod_bot3">
															<span className="in_txt1">View downloads</span>
														</div>
													</li>
												</li>
											</ul>
											}>
										</Panel>
										
										<Panel onClick={this.prodView.bind(this,"prodViewFive")} eventKey="10"  collapsible="true"  className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad  boxShadow2 prod_sec prod_sec1 recent_product_heading no-hov"  
											header={
											<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul sub_ul_hov">

												<li className="col-xs-11 no-pad purchaseDate3">
													<div className="icon_div">
														<span className="autoCad"></span>
													</div>
													<div className="text_div1">
														<span className="autoCad_txt_media new_autoCad_txt1">AutoCAD - web application</span>
														{/* <span className="autoCad_txt_media new_autoCad_txt2">English | Windows 64</span> */}
													</div>
												</li>

												  <li className="col-xs-1 no-pad but_acco1">
													<li className="install_but prod_bot2">
														<div className="install_but1 prod_bot3">
															<span className="in_txt1">View downloads</span>
														</div>
													</li>
												</li>
											</ul>
											}>
										</Panel>
										
										<Panel onClick={this.prodView.bind(this,"prodViewSix")} eventKey="10"  collapsible="true"  className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad  boxShadow2 prod_sec prod_sec1 recent_product_heading no-hov"  
											header={
											<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul sub_ul_hov">

												<li className="col-xs-11 no-pad purchaseDate3">
													<div className="icon_div">
													{/* <span className="left_arrow1"></span> */}
														<span className="autoCadArc"></span>
													</div>
													<div className="text_div1">
														<span className="autoCad_txt_media new_autoCad_txt1">AutoCAD Arichitecture</span>
														{/* <span className="autoCad_txt_media new_autoCad_txt2">English | Windows 64</span> */}
													</div>
												</li>

												  <li className="col-xs-1 no-pad but_acco1">
													<li className="install_but prod_bot2">
														<div className="install_but1 prod_bot3">
															<span className="in_txt1">View downloads</span>
														</div>
													</li>
												</li>
											</ul>
											}>
										</Panel>
										
										
										<Panel onClick={this.prodView.bind(this,"prodViewSeven")} eventKey="10"  collapsible="true"  className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad  boxShadow2 prod_sec prod_sec1 recent_product_heading no-hov"  
											header={
											<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul sub_ul_hov">

												<li className="col-xs-11 no-pad purchaseDate3">
													<div className="icon_div">
														<span className="autoCadElec"></span>
													</div>
													<div className="text_div1">
														<span className="autoCad_txt_media new_autoCad_txt1">AutoCAD Electrical</span>
														{/* <span className="autoCad_txt_media new_autoCad_txt2">English | Windows 64</span> */}
													</div>
												</li>

												  <li className="col-xs-1 no-pad but_acco1">
													<li className="install_but prod_bot2">
														<div className="install_but1 prod_bot3">
															<span className="in_txt1">View downloads</span>
														</div>
													</li>
												</li>
											</ul>
											}>
										</Panel>
										
										
										<Panel onClick={this.prodView.bind(this,"prodViewEight")} eventKey="10"  collapsible="true"  className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad  boxShadow2 prod_sec prod_sec1 recent_product_heading no-hov"  
											header={
											<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul sub_ul_hov">

												<li className="col-xs-11 no-pad purchaseDate3">
													<div className="icon_div">
														<span className="autoCadMep"></span>
													</div>
													<div className="text_div1">
														<span className="autoCad_txt_media new_autoCad_txt1">AutoCAD MEP</span>
														{/* <span className="autoCad_txt_media new_autoCad_txt2">English | Windows 64</span> */}
													</div>
												</li>

												  <li className="col-xs-1 no-pad but_acco1">
													<li className="install_but prod_bot2">
														<div className="install_but1 prod_bot3">
															<span className="in_txt1">View downloads</span>
														</div>
													</li>
												</li>
											</ul>
											}>
										</Panel>
									</Accordion>
								</li>
							</ul>

						</div>

					</div>
				</div>
				
			</div>	)))))))}
		</div>
		
		)
	}
});

module.exports = ProductAllPayList;




