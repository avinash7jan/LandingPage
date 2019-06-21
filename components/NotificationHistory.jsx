import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';


const NotificationHistory = React.createClass({
	
	getInitialState: function(){
		return {
			options:[{ value: 'audoCad', label: 'AutoCad' },
				  { value: 'arichitecture', label: 'Arichitecture' },
				  { value: 'revit', label: 'Revit' },
				  { value: 'autoDesk', label: 'AutoDesk' }], 
				  
				  
			obj1: [{options1 : [{ value: 'audoCad', label: 'AutoCad' },
								  { value: 'arichitecture1', label: 'Arichitecture' },
								  { value: 'revit', label: 'Revit' },
								  { value: 'autoDesk', label: 'AutoDesk' }],
					
					options2 : [{ value: 'audoCad', label: 'AutoCad' },
								  { value: 'arichitecture2', label: 'Arichitecture' },
								  { value: 'revit', label: 'Revit' },
								  { value: 'autoDesk', label: 'AutoDesk' }],
					options3 : [{ value: 'audoCad', label: 'AutoCad' },
								  { value: 'arichitecture3', label: 'Arichitecture' },
								  { value: 'revit', label: 'Revit' },
								  { value: 'autoDesk', label: 'AutoDesk' }]}],	    
			selectedOption1:[],	
			selectedOption:[],
			selectedOption2:{ value: 'audoCad', label: 'AutoCad' }, 
			selectedOption3:{ value: 'arichitecture', label: 'Arichitecture' },
			selectedOption4:{ value: 'revit', label: 'Revit'},
			selectedOption5:{ value: 'autoDesk', label: 'AutoDesk'},
			filterOne:false,
			filterTwo:false,
			filterThree:false,
			filterFour:false,
			filterFive:false,
			radioData:"All",
			radioText:"",
			selectedOption2:[],
			checkBoxData1:true,
			checkBoxData2:true,
			checkBoxData3:true,
			checkBoxData4:false,
			checkBoxData5:false,
			
			checkBoxDataFilter:"",
			checkBoxData2Filter:"",
			checkBoxData3Filter:"",
			checkBoxData4Filter:"",
			checkBoxData5Filter:"",
			
			checkBoxData:[],
			checkBoxDataTwo:[],
			checkBoxDataThree:[],
			
			checkBoxDataFilt:[],
			checkBoxDataTwoFilt:[],
			checkBoxDataThreeFilt:[],
			
			checkBoxDataArr:[],
			checkBoxDataTwoArr:[],
			checkBoxDataThreeArr:[],
			updates : [
				"Updates",
				"Updates",
				"Updates",
				"Updates",
				"Updates",
				"Updates",
				"Updates",
			],
			usage : [
				"Usage Notifications",
				"Usage Notifications",
				"Usage Notifications",
				"Usage Notifications",
				"Usage Notifications",
				"Usage Notifications",
			],
			recommendations : [
				"Recommendations",
				"Recommendations",
				"Recommendations",
				"Recommendations",
				"Recommendations",
				"Recommendations",
				"Recommendations",
			],
			renewal : [
				"Renewal Notifications",
				"Renewal Notifications",
				"Renewal Notifications",
				"Renewal Notifications",
				"Renewal Notifications",
				"Renewal Notifications",
				"Renewal Notifications",
			],
			approvals : [
				"Requests/Approvals" ,
				"Requests/Approvals" ,
				"Requests/Approvals" ,
				"Requests/Approvals" ,
				"Requests/Approvals" ,
			],
			   
		   allList:[
				"Updates", 
				"Requests/Approvals" , 
				"Renewal Notifications", 
				"Recommendations", 
				"Usage Notifications",
				"Updates", 
				"Requests/Approvals" , 
				"Renewal Notifications", 
				"Recommendations", 
				"Usage Notifications",
				"Updates", 
				"Requests/Approvals" , 
				
		   ],
			   initialItems: [
					 "AutoCad",
					 "AutoCad  ",
					 "AutoCad "
					],
				initialItemsTwo: [
					 "AutoCad in All",
					],	
			   items: [],
			   showList:false,
			   textLength:"",
			   searchText:"",
			   liText:"",
			   suggest:"",
			   remindMsg:false,
			   tab:"tab1",
		}
	},

	handleChange(selectedOption){
		  if(selectedOption){
			this.setState({ selectedOption1:selectedOption});
		}
		else{
			this.setState({ selectedOption1:"" });
		} 
	},
	 
	 handleChange11(selectedOption){
		if(selectedOption){
			var counts=this.state.selectedOption1;
			counts.push(selectedOption);
			this.setState({ selectedOption1:counts});
		}
		else{
			this.setState({ selectedOption1:"" });
		} 
	},
	

	checkData(e){
		for(var i=0;i<this.state.selectedOption1.length;i++){
			if(this.state.selectedOption1[i].value==e){
				return true;
			}
		}
	},
	filter1() {
		if(!this.state.filterOne){
			// attach/remove event handler
			document.addEventListener('click', this.handleOutsideClick1, false);
		} else {
			document.removeEventListener('click', this.handleOutsideClick1, false);
		}
        this.setState({ filterOne: !this.state.filterOne });
    },
	
	filter2() {
		if(!this.state.filterTwo){
			// attach/remove event handler
			document.addEventListener('click', this.handleOutsideClick2, false);
		} else if(this.state.filterTwo) {
			document.removeEventListener('click', this.handleOutsideClick2, false);
			this.setState({ checkBoxDataFilt: this.state.checkBoxData });
		}
        this.setState({ filterTwo: !this.state.filterTwo });
    },
	
	handleOutsideClick2(e) {
		if (this.node2.contains(e.target)) {
			return true;
		}
		this.filter2();
	},
	
	filter3() {
		if(!this.state.filterThree){
			// attach/remove event handler
			document.addEventListener('click', this.handleOutsideClick3, false);
		} else {
			document.removeEventListener('click', this.handleOutsideClick3, false);
			this.setState({ checkBoxDataTwoFilt: this.state.checkBoxDataTwo });
		}
        this.setState({ filterThree: !this.state.filterThree });
    },
	
	filter4() {
		if(!this.state.filterFour){
			// attach/remove event handler
			document.addEventListener('click', this.handleOutsideClick4, false);
		} else {
			document.removeEventListener('click', this.handleOutsideClick4, false);
			 this.setState({ checkBoxDataThreeFilt: this.state.checkBoxDataThree });
		}
        this.setState({ filterFour: !this.state.filterFour });
    },
	
	filter5() {
		if(!this.state.filterFive){
			document.addEventListener('click', this.handleOutsideClick5, false);
		} else {
			document.removeEventListener('click', this.handleOutsideClick5, false);
		}
        this.setState({ filterFive: !this.state.filterFive });
    },
	
	handleOutsideClick1(e) {
	// ignore clicks on the component itself
		if (this.node.contains(e.target)) {
			console.log(this.node.contains(e.target));
			return true;
		}
		this.filter1();
	},
	
	
	
	handleOutsideClick3(e) {
		if (this.node3.contains(e.target)) {
			return true;
		}
		this.filter3();
	},
	
	handleOutsideClick4(e) {
		if (this.node4.contains(e.target)) {
			return true;
		}
		this.filter4();
	},
	
	handleOutsideClick5(e) {
		if (this.node5.contains(e.target)) {
			return true;
		}
		this.filter5();
	},
	
	getRadio(e){
		 this.setState({ radioData: e});
	},
	pushLi(){
		this.setState({ 
			selectedOption2:this.state.selectedOption1,
			checkBoxDataArr:this.state.checkBoxData,
			checkBoxDataTwoArr:this.state.checkBoxDataTwo,
			checkBoxDataThreeArr:this.state.checkBoxDataThree,
		});
	},
	getCheck1(){
		this.setState({ checkBoxData1: !this.state.checkBoxData1});
	},
	getCheck2(){
		this.setState({ checkBoxData2: !this.state.checkBoxData2});
	},
	getCheck3(){
		this.setState({ checkBoxData3: !this.state.checkBoxData3});
	},
	getCheck4(){
		this.setState({ checkBoxData4: !this.state.checkBoxData4});
	},
	getCheck5(){
		this.setState({ checkBoxData5: !this.state.checkBoxData5});
	},
	
	handleCheckbox(e){
		 if(e.target.checked){
			var counts=this.state.checkBoxData;
			counts.push(e.target.value);
			
			this.setState({
				checkBoxData:counts
			});
		} 
		
		if(!e.target.checked){
			var check_val= e.target.value;
			var filteredAry = this.state.checkBoxData.filter(function(e) { return e !== check_val })
			this.setState({
				checkBoxData:filteredAry
			});
		} 
	},
	productAdd(e){
		this.setState({
		  searchText: `${this.state.searchText}\n ${e}`,suggest:e
		});
	},
	productRemove(e){
		
	},
	
	handleCheckboxTwo(e){
		 if(e.target.checked){
			var counts=this.state.checkBoxDataTwo;
			counts.push(e.target.value);
			
			this.setState({
				checkBoxDataTwo:counts
			});
		} 
		
		if(!e.target.checked){
			var check_val= e.target.value;
			var filteredAry = this.state.checkBoxDataTwo.filter(function(e) { return e !== check_val })
			this.setState({
				checkBoxDataTwo:filteredAry
			});
		} 
	},
	
	productRemoveTwo(e){
		var check_val= e.target.id;
		var filteredAry = this.state.checkBoxDataTwo.filter(function(e) { return e !== check_val })
		this.setState({
			checkBoxDataTwo:filteredAry,checkBoxDataTwoFilt:filteredAry
		});
	},
	
	handleCheckboxThree(e){
		 if(e.target.checked){
			var counts=this.state.checkBoxDataThree;
			counts.push(e.target.value);
			
			this.setState({
				checkBoxDataThree:counts
			});
		} 
		
		if(!e.target.checked){
			var check_val= e.target.value;
			var filteredAry = this.state.checkBoxDataThree.filter(function(e) { return e !== check_val })
			this.setState({
				checkBoxDataThree:filteredAry
			});
		} 
	},
	
	productRemoveThree(e){
		var check_val= e.target.id;
		var filteredAry = this.state.checkBoxDataThree.filter(function(e) { return e !== check_val })
		this.setState({
			checkBoxDataThree:filteredAry,checkBoxDataThreeFilt:filteredAry
		});
	},
	
	filterList: function(event){
		if(this.state.radioData=="All"){
			var updatedList = this.state.initialItemsTwo;
		}
		else{
			var updatedList = this.state.initialItems;
		}
		var updatedList = updatedList.filter(function(item){
		  return item.toLowerCase().search(
			event.target.value.toLowerCase()) !== -1;
		});
		this.setState({items: updatedList,showList:true,searchText:event.target.value});
	},
	
	
	resetData:function(){
		this.setState({searchText:"",showList:false,liText:"",suggest:"",radioData:"All"});
	},
	
	
	
	getTextLi:function(e){
		const splitString = e.split(" ");
		var splitStrings=splitString[0];
		this.setState({liText:splitStrings,showList:false,searchText:splitStrings});
	},
	remind(){
		this.setState({remindMsg:!this.state.remindMsg});
	},
	tab:function(e){
		this.setState({tab:e});
	},
	
	
	
		
	render: function() {
		return (
		<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad fix_width">
			<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 fix_width no-pad">

				<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12">
					<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad main_content1">
						<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
							
							<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 all_products_heading">
								<div className="all_pro">Notification History</div>
								<div className="all_pro_right2"></div>
							</div>

							<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top filter_content">
							{(this.state.selectedOption1.length || this.state.checkBoxDataThree.length || this.state.checkBoxDataTwo.length || this.state.checkBoxData.length)?<span className="save_search" onClick={this.pushLi}>Save Search</span>:
							<span className="save_search">&nbsp;</span>}
								<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad filter">
									
									<li className="com_li marg_rgt1 selected_col" onClick={this.filter1}>
										{this.state.radioData?this.state.radioData:"All"}
										<span className="select_row_img select_arrow_img" />
									</li>
									
									<ul onClick={this.filter1} className={this.state.filterOne?"license_ul pos_ul2":"filter_hide1"} ref={node => { this.node = node; }}>
										<li value="all" onClick={this.getRadio.bind(this,"All")}>All</li>
										<li value="latest" onClick={this.getRadio.bind(this,"Update")}>Updates</li>
										<li value="allSeats" onClick={this.getRadio.bind(this,"Requests/Approvals")}>Requests/Approvals</li>
										<li value="latest" onClick={this.getRadio.bind(this,"Renewal Notifications")}>Renewal Notifications</li>
										<li value="allSeats" onClick={this.getRadio.bind(this,"Recommendations")}>Recommendations</li>
										<li value="latest" onClick={this.getRadio.bind(this,"Usage Notifications")}>Usage Notifications</li>
										{this.state.selectedOption2.map(function(purpose,index) {
										return (
											<li value={this.state.selectedOption2[index].value} onClick={this.getRadio}>
												{this.state.selectedOption2[index].label}
											</li>
										)}.bind(this))}
									</ul>
									
									
									<li className="col-sm-8 col-lg-10 col-md-10 no-pad li_search search_li_width">
									<input type="text"   value = {this.state.searchText} className="form-control form-control-lg serch_input" placeholder="Search"/>
										{this.state.searchText.length?
											<span className="search_cross" onClick={this.resetData}>X</span>:
											<span className="search_png"></span>
										}
																				
										{this.state.showList?
										<li className="search_list">
										{	this.state.items.length?
											<div>
											{this.state.items.map(function(item) {
												return( 
												<div className="all_list" value={item} data-category={item} key={item}
												onClick={this.getTextLi.bind(this,item)}>
												
												{this.state.radioData=="All"?
												<div>
													<div   className="all_list2">AutoCAD ..<span className="fad"> in All</span></div>
													
													<div onClick={this.getRadio.bind(this,"All With Seats")} className="all_list4">AutoCA ..<span className="fad"> in All With Seats</span></div>
													
													<div onClick={this.getRadio.bind(this,"Latest Version")} className="all_list4">AutoCA ..<span className="fad"> in Latest Version</span></div>
													
													<div onClick={this.getRadio.bind(this,"Mac Only")} className="all_list4">AutoCA ..<span className="fad"> in Mac Only</span></div>
													
												</div>:
												<div className="all_list3">
													{item}{this.state.radioData=="All"?"":""}
													{this.state.radioData=="Install"?<span className="fad"> in Install</span>:""}
													{this.state.radioData=="Update"?<span className="fad"> in Update</span>:""}
													{this.state.radioData=="Mac Only"?<span className="fad"> in Mac Only</span>:""}
												</div>}
												
												</div>
											)}.bind(this))}</div>:<div className="all_list">No results found</div>
										}
										</li>:""}
										
									</li>
								</ul>
								<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12">
								{this.state.liText?<div>
									<li className="prod_name" onClick={this.productAdd.bind(this,"Sug1")}>
										<span>Sug1</span>
										<span className="close_search" onClick={(event)=>{event.stopPropagation();this.productRemove.bind(this,"Sug1")}}>X</span>
									</li>
									<li className="prod_name" onClick={this.productAdd.bind(this,"Sug2")}>
										<span>Sug2</span> 
										<span className="close_search" onClick={(event)=>{event.stopPropagation();this.productRemove.bind(this,"Sug2")}}>X</span>
									</li>
									<li className="prod_name" onClick={this.productAdd.bind(this,"Sug3")}>
										<span>Sug3</span> 
										<span className="close_search" onClick={(event)=>{event.stopPropagation();this.productRemove.bind(this,"Sug3")}}>X</span>
									</li>
								</div>:""}
								</ul>
								<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
									<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad menu_tab">
							
										<li className={"com_tab "+(this.state.tab=="tab1"?"active":"")} onClick={this.tab.bind(this,"tab1")}>
											<span className="uperTab_txt">All</span>
											<span className="lowerTab_txt">10</span>
										</li>
										<li className={"com_tab "+(this.state.tab=="tab2"?"active":"")} onClick={this.tab.bind(this,"tab2")}>
											<span className="uperTab_txt">Updates</span>
											<span className="lowerTab_txt">3</span>
										</li>
										<li className={"com_tab "+(this.state.tab=="tab3"?"active":"")} onClick={this.tab.bind(this,"tab3")}>
											<span className="uperTab_txt">Requests</span>
											<span className="lowerTab_txt">2</span>
										</li>
										<li className={"com_tab "+(this.state.tab=="tab4"?"active":"")} onClick={this.tab.bind(this,"tab4")}>
											<span className="uperTab_txt">Renewal</span>
											<span className="lowerTab_txt">2</span>
										</li>
										<li className={"com_tab "+(this.state.tab=="tab5"?"active":"")} onClick={this.tab.bind(this,"tab5")}>
											<span className="uperTab_txt">Recommendations</span>
											<span className="lowerTab_txt">3</span>
										</li>
									</ul>
								</div>
								
								<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 marg_ul_top no-pad">
									<div className=" prd_txt">
										
										{/* <span className="com_li right_fil_span">
											<OverlayTrigger placement="top" >
												<span className="sort_menu"></span>
											</OverlayTrigger>
										</span> */}

										{this.state.tab=="tab1"?"69 Items in All":""}
										{this.state.tab=="tab2"?" 8 Items in updates":""}
										{this.state.tab=="tab3"?" 27 Items in requests":""}
										{this.state.tab=="tab4"?" 7 Items in renewal":""}
										{this.state.tab=="tab5"?" 17 Items in recommendation":""}
										{/* {this.state.tab?(" in "+this.state.radioData.toLowerCase()):""} */}
									</div>
									<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li sub_li1 all_itm">
										{this.state.tab=="tab1"?
										<Accordion  className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_update prod_all_list">
												<Panel aria-expanded="false" aria-selected="false" class="collapsed" eventKey="1" className={"col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading spl_heading " + (this.state.showAll?'dif_had':'pos1')}  
												header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul panel-title">
													<li className="col-xs-8 no-pad purchaseDate3">
														<div className="aa">
														<div className="icon_div">
															<span className="time_img1"></span>
														</div>
														<div className="text_div1">
															<span className="autoCad_txt_media prod_top_text">Your Subscription expires in 2 days</span>
															<span className="newPurchaseDate">The standard chunk of Lorem Ipsum used since the 1500s</span>
														</div>
														</div>
													</li>
												
												
													<li className="col-xs-4 no-pad">
														<span className="tim_txt">Just now</span>
														<a href="aaa#" target="_blank" className="anch_text">Manage Subscription</a>
													</li>
												</ul>
												}>
											</Panel>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 pad_bord6">
												<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 bordd"></div>
											</div>
											
											
										{/* )}.bind(this)):""} */}
										
											<Panel eventKey="1" className={"col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading spl_heading " + (this.state.showAll?'dif_had':'pos1')}  
												header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul">
													<li className="col-xs-8 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="noti_avatar1"></span>
														</div>
														<div className="text_div1">
															<span className="autoCad_txt_media prod_top_text">Javier has requested access</span>
															<span className="newPurchaseDate">The standard chunk of Lorem Ipsum used since the 1500s</span>
														</div>
													</li>
													

													<li className="col-xs-4 no-pad">
														<span className="tim_txt">1 min ago</span>
														<a href="aaa#" target="_blank" className="anch_text">View request</a>
														
													</li>
												</ul>
												}>
											</Panel>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 pad_bord6">
												<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 bordd"></div>
											</div>
											
											<Panel eventKey="1" className={"col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading spl_heading " + (this.state.showAll?'dif_had':'pos1')}  
												header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul">
													<li className="col-xs-8 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="noti_avatar1"></span>
														</div>
														<div className="text_div1">
															<span className="autoCad_txt_media prod_top_text">You have used 80% of your Tokens</span>
															<span className="newPurchaseDate">The standard chunk of Lorem Ipsum used since the 1500s</span>
														</div>
													</li>

													<li className="col-xs-4 no-pad">
														<span className="tim_txt">9.23 am</span>
														<a href="aaa#" target="_blank" className="anch_text">Buy more</a>
														
													</li>
												</ul>
												}>
											</Panel>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 pad_bord6">
												<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 bordd"></div>
											</div>
											
											<Panel eventKey="1" className={"col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading spl_heading " + (this.state.showAll?'dif_had':'pos1')}  
												header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul">
													<li className="col-xs-8 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="autoCad_img1"></span>
														</div>
														<div className="text_div1">
															<span className="autoCad_txt_media prod_top_text">AutoCad 2020.2 update available</span>
															<span className="newPurchaseDate">The standard chunk of Lorem Ipsum used since the 1500s</span>
														</div>
													</li>

													<li className="col-xs-4 no-pad">
														<span className="tim_txt">May 12,2018</span>
														<a href="aaa#" target="_blank" className="anch_text">Install update</a>
														
													</li>
												</ul>
												}>
											</Panel>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 pad_bord6">
												<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 bordd"></div>
											</div>
											
											
											<Panel eventKey="1" className={"col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading spl_heading " + (this.state.showAll?'dif_had':'pos1')}  
												header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul">
													<li className="col-xs-8 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="maya_img1"></span>
														</div>
														<div className="text_div1">
															<span className="autoCad_txt_media prod_top_text">Maya 2020.2 update available</span>
															<span className="newPurchaseDate">The standard chunk of Lorem Ipsum used since the 1500s</span>
														</div>
													</li>

													<li className="col-xs-4 no-pad">
														<span className="tim_txt">May 11,2018</span>
														<a href="aaa#" target="_blank" className="anch_text">Install update</a>
														
													</li>
												</ul>
												}>
											</Panel>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 pad_bord6">
												<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 bordd"></div>
											</div>
										{/* )}.bind(this)):""} */}
										
											<Panel eventKey="1" className={"col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading spl_heading " + (this.state.showAll?'dif_had':'pos1')}  
												header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul">
													<li className="col-xs-8 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="noti_avatar1"></span>
														</div>
														<div className="text_div1">
															<span className="autoCad_txt_media prod_top_text">Javier has requested access</span>
															<span className="newPurchaseDate">The standard chunk of Lorem Ipsum used since the 1500s</span>
														</div>
													</li>

													<li className="col-xs-4 no-pad">
														<span className="tim_txt">April 23,2018</span>
														<a href="aaa#" target="_blank" className="anch_text">View request</a>
														
													</li>
												</ul>
												}>
											</Panel>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 pad_bord6">
												<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 bordd"></div>
											</div>
											
											<Panel eventKey="1" className={"col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading spl_heading " + (this.state.showAll?'dif_had':'pos1')}  
												header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul">
													<li className="col-xs-8 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="noti_avatar1"></span>
														</div>
														<div className="text_div1">
															<span className="autoCad_txt_media prod_top_text">You have used 80% of your Tokens</span>
															<span className="newPurchaseDate">The standard chunk of Lorem Ipsum used since the 1500s</span>
														</div>
													</li>

													<li className="col-xs-4 no-pad">
														<span className="tim_txt">March 12, 2018</span>
														<a href="aaa#" target="_blank" className="anch_text">Buy more</a>
														
													</li>
												</ul>
												}>
											</Panel>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 pad_bord6">
												<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 bordd"></div>
											</div>
											
											<Panel eventKey="1" className={"col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading spl_heading " + (this.state.showAll?'dif_had':'pos1')}  
												header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul">
													<li className="col-xs-8 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="autoCad_img1"></span>
														</div>
														<div className="text_div1">
															<span className="autoCad_txt_media prod_top_text">AutoCad 2020.1 update available</span>
															<span className="newPurchaseDate">The standard chunk of Lorem Ipsum used since the 1500s</span>
														</div>
													</li>

													<li className="col-xs-4 no-pad">
														<span className="tim_txt">March 12,2018</span>
														<a href="aaa#" target="_blank" className="anch_text">Install update</a>
														
													</li>
												</ul>
												}>
											</Panel>
										</Accordion>:""}
										
										
										{this.state.tab=="tab1"?
										<Accordion  className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_update prod_all_list">
												<Panel aria-expanded="false" aria-selected="false" class="collapsed" eventKey="1" className={"col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading spl_heading " + (this.state.showAll?'dif_had':'pos1')}  
												header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul panel-title">
													<li className="col-xs-8 no-pad purchaseDate3">
														<div className="aa">
														<div className="icon_div">
															<span className="time_img1"></span>
														</div>
														<div className="text_div1">
															<span className="autoCad_txt_media prod_top_text">Your Subscription expires in 2 days</span>
															<span className="newPurchaseDate">The standard chunk of Lorem Ipsum used since the 1500s</span>
														</div>
														</div>
													</li>
												
												
													<li className="col-xs-4 no-pad">
														<span className="tim_txt">Just now</span>
														<a href="aaa#" target="_blank" className="anch_text">Manage Subscription</a>
													</li>
												</ul>
												}>
											</Panel>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 pad_bord6">
												<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 bordd"></div>
											</div>
											
											
										{/* )}.bind(this)):""} */}
										
											<Panel eventKey="1" className={"col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading spl_heading " + (this.state.showAll?'dif_had':'pos1')}  
												header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul">
													<li className="col-xs-8 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="noti_avatar1"></span>
														</div>
														<div className="text_div1">
															<span className="autoCad_txt_media prod_top_text">Javier has requested access</span>
															<span className="newPurchaseDate">The standard chunk of Lorem Ipsum used since the 1500s</span>
														</div>
													</li>
													

													<li className="col-xs-4 no-pad">
														<span className="tim_txt">1 min ago</span>
														<a href="aaa#" target="_blank" className="anch_text">View request</a>
														
													</li>
												</ul>
												}>
											</Panel>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 pad_bord6">
												<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 bordd"></div>
											</div>
											
											<Panel eventKey="1" className={"col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading spl_heading " + (this.state.showAll?'dif_had':'pos1')}  
												header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul">
													<li className="col-xs-8 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="noti_avatar1"></span>
														</div>
														<div className="text_div1">
															<span className="autoCad_txt_media prod_top_text">You have used 80% of your Tokens</span>
															<span className="newPurchaseDate">The standard chunk of Lorem Ipsum used since the 1500s</span>
														</div>
													</li>

													<li className="col-xs-4 no-pad">
														<span className="tim_txt">9.23 am</span>
														<a href="aaa#" target="_blank" className="anch_text">Buy more</a>
														
													</li>
												</ul>
												}>
											</Panel>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 pad_bord6">
												<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 bordd"></div>
											</div>
											
											<Panel eventKey="1" className={"col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading spl_heading " + (this.state.showAll?'dif_had':'pos1')}  
												header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul">
													<li className="col-xs-8 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="autoCad_img1"></span>
														</div>
														<div className="text_div1">
															<span className="autoCad_txt_media prod_top_text">AutoCad 2020.2 update available</span>
															<span className="newPurchaseDate">The standard chunk of Lorem Ipsum used since the 1500s</span>
														</div>
													</li>

													<li className="col-xs-4 no-pad">
														<span className="tim_txt">May 12,2018</span>
														<a href="aaa#" target="_blank" className="anch_text">Install update</a>
														
													</li>
												</ul>
												}>
											</Panel>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 pad_bord6">
												<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 bordd"></div>
											</div>
											
											
											<Panel eventKey="1" className={"col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading spl_heading " + (this.state.showAll?'dif_had':'pos1')}  
												header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul">
													<li className="col-xs-8 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="maya_img1"></span>
														</div>
														<div className="text_div1">
															<span className="autoCad_txt_media prod_top_text">Maya 2020.2 update available</span>
															<span className="newPurchaseDate">The standard chunk of Lorem Ipsum used since the 1500s</span>
														</div>
													</li>

													<li className="col-xs-4 no-pad">
														<span className="tim_txt">May 11,2018</span>
														<a href="aaa#" target="_blank" className="anch_text">Install update</a>
														
													</li>
												</ul>
												}>
											</Panel>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 pad_bord6">
												<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 bordd"></div>
											</div>
										{/* )}.bind(this)):""} */}
										
											<Panel eventKey="1" className={"col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading spl_heading " + (this.state.showAll?'dif_had':'pos1')}  
												header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul">
													<li className="col-xs-8 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="noti_avatar1"></span>
														</div>
														<div className="text_div1">
															<span className="autoCad_txt_media prod_top_text">Javier has requested access</span>
															<span className="newPurchaseDate">The standard chunk of Lorem Ipsum used since the 1500s</span>
														</div>
													</li>

													<li className="col-xs-4 no-pad">
														<span className="tim_txt">April 23,2018</span>
														<a href="aaa#" target="_blank" className="anch_text">View request</a>
														
													</li>
												</ul>
												}>
											</Panel>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 pad_bord6">
												<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 bordd"></div>
											</div>
											
											<Panel eventKey="1" className={"col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading spl_heading " + (this.state.showAll?'dif_had':'pos1')}  
												header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul">
													<li className="col-xs-8 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="noti_avatar1"></span>
														</div>
														<div className="text_div1">
															<span className="autoCad_txt_media prod_top_text">You have used 80% of your Tokens</span>
															<span className="newPurchaseDate">The standard chunk of Lorem Ipsum used since the 1500s</span>
														</div>
													</li>

													<li className="col-xs-4 no-pad">
														<span className="tim_txt">March 12, 2018</span>
														<a href="aaa#" target="_blank" className="anch_text">Buy more</a>
														
													</li>
												</ul>
												}>
											</Panel>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 pad_bord6">
												<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 bordd"></div>
											</div>
											
											<Panel eventKey="1" className={"col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading spl_heading " + (this.state.showAll?'dif_had':'pos1')}  
												header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul">
													<li className="col-xs-8 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="autoCad_img1"></span>
														</div>
														<div className="text_div1">
															<span className="autoCad_txt_media prod_top_text">AutoCad 2020.1 update available</span>
															<span className="newPurchaseDate">The standard chunk of Lorem Ipsum used since the 1500s</span>
														</div>
													</li>

													<li className="col-xs-4 no-pad">
														<span className="tim_txt">March 12,2018</span>
														<a href="aaa#" target="_blank" className="anch_text">Install update</a>
														
													</li>
												</ul>
												}>
											</Panel>
										</Accordion>:""}
										
										
										{this.state.tab=="tab2"?
										<Accordion  className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_update prod_all_list">
											<Panel eventKey="1" className={"col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading spl_heading " + (this.state.showAll?'dif_had':'pos1')}  
												header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul">
													<li className="col-xs-8 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="autoCad_img1"></span>
														</div>
														<div className="text_div1">
															<span className="autoCad_txt_media prod_top_text">AutoCad 2020.2 update available</span>
															<span className="newPurchaseDate">The standard chunk of Lorem Ipsum used since the 1500s</span>
														</div>
													</li>

													<li className="col-xs-4 no-pad">
														<span className="tim_txt">May 12,2018</span>
														<a href="aaa#" target="_blank" className="anch_text">Install update</a>
														
													</li>
												</ul>
												}>
											</Panel>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 pad_bord6">
												<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 bordd"></div>
											</div>
											
											
											<Panel eventKey="1" className={"col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading spl_heading " + (this.state.showAll?'dif_had':'pos1')}  
												header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul">
													<li className="col-xs-8 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="maya_img1"></span>
														</div>
														<div className="text_div1">
															<span className="autoCad_txt_media prod_top_text">Maya 2020.2 update available</span>
															<span className="newPurchaseDate">The standard chunk of Lorem Ipsum used since the 1500s</span>
														</div>
													</li>

													<li className="col-xs-4 no-pad">
														<span className="tim_txt">May 11,2018</span>
														<a href="aaa#" target="_blank" className="anch_text">Install update</a>
														
													</li>
												</ul>
												}>
											</Panel>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 pad_bord6">
												<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 bordd"></div>
											</div>

											<Panel eventKey="1" className={"col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading spl_heading " + (this.state.showAll?'dif_had':'pos1')}  
												header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul">
													<li className="col-xs-8 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="autoCad_img1"></span>
														</div>
														<div className="text_div1">
															<span className="autoCad_txt_media prod_top_text">AutoCad 2020.1 update available</span>
															<span className="newPurchaseDate">The standard chunk of Lorem Ipsum used since the 1500s</span>
														</div>
													</li>

													<li className="col-xs-4 no-pad">
														<span className="tim_txt">March 12,2018</span>
														<a href="aaa#" target="_blank" className="anch_text">Install update</a>
														
													</li>
												</ul>
												}>
											</Panel>
										</Accordion>:""}
										
										
										
										{this.state.tab=="tab3"?
										<Accordion  className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_update prod_all_list">
												<Panel aria-expanded="false" aria-selected="false" class="collapsed" eventKey="1" className={"col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading spl_heading " + (this.state.showAll?'dif_had':'pos1')}  
												header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul panel-title">
													<li className="col-xs-8 no-pad purchaseDate3">
														<div className="aa">
														<div className="icon_div">
															<span className="time_img1"></span>
														</div>
														<div className="text_div1">
															<span className="autoCad_txt_media prod_top_text">Your Subscription expires in 2 days</span>
															<span className="newPurchaseDate">The standard chunk of Lorem Ipsum used since the 1500s</span>
														</div>
														</div>
													</li>
												
												
													<li className="col-xs-4 no-pad">
														<span className="tim_txt">Just now</span>
														<a href="aaa#" target="_blank" className="anch_text">Requests</a>
													</li>
												</ul>
												}>
											</Panel>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 pad_bord6">
												<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 bordd"></div>
											</div>
											<Panel eventKey="1" className={"col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading spl_heading " + (this.state.showAll?'dif_had':'pos1')}  
												header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul">
													<li className="col-xs-8 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="autoCad_img1"></span>
														</div>
														<div className="text_div1">
															<span className="autoCad_txt_media prod_top_text">AutoCad 2020.1 update available</span>
															<span className="newPurchaseDate">The standard chunk of Lorem Ipsum used since the 1500s</span>
														</div>
													</li>

													<li className="col-xs-4 no-pad">
														<span className="tim_txt">March 12,2018</span>
														<a href="aaa#" target="_blank" className="anch_text">Requests</a>
														
													</li>
												</ul>
												}>
											</Panel>
										</Accordion>:""}
										
										
										
										{this.state.tab=="tab4"?
										<Accordion  className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_update prod_all_list">
											<Panel eventKey="1" className={"col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading spl_heading " + (this.state.showAll?'dif_had':'pos1')}  
												header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul">
													<li className="col-xs-8 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="noti_avatar1"></span>
														</div>
														<div className="text_div1">
															<span className="autoCad_txt_media prod_top_text">You have used 80% of your Tokens</span>
															<span className="newPurchaseDate">The standard chunk of Lorem Ipsum used since the 1500s</span>
														</div>
													</li>

													<li className="col-xs-4 no-pad">
														<span className="tim_txt">March 12, 2018</span>
														<a href="aaa#" target="_blank" className="anch_text">Renew</a>
														
													</li>
												</ul>
												}>
											</Panel>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 pad_bord6">
												<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 bordd"></div>
											</div>
											
											<Panel eventKey="1" className={"col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading spl_heading " + (this.state.showAll?'dif_had':'pos1')}  
												header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul">
													<li className="col-xs-8 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="autoCad_img1"></span>
														</div>
														<div className="text_div1">
															<span className="autoCad_txt_media prod_top_text">AutoCad 2020.1 update available</span>
															<span className="newPurchaseDate">The standard chunk of Lorem Ipsum used since the 1500s</span>
														</div>
													</li>

													<li className="col-xs-4 no-pad">
														<span className="tim_txt">March 12,2018</span>
														<a href="aaa#" target="_blank" className="anch_text">Renew</a>
														
													</li>
												</ul>
												}>
											</Panel>
										</Accordion>:""}
										
										
										
										{this.state.tab=="tab5"?
										<Accordion  className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_update prod_all_list">
												<Panel aria-expanded="false" aria-selected="false" class="collapsed" eventKey="1" className={"col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading spl_heading " + (this.state.showAll?'dif_had':'pos1')}  
												header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul panel-title">
													<li className="col-xs-8 no-pad purchaseDate3">
														<div className="aa">
														<div className="icon_div">
															<span className="time_img1"></span>
														</div>
														<div className="text_div1">
															<span className="autoCad_txt_media prod_top_text">Your Subscription expires in 2 days</span>
															<span className="newPurchaseDate">The standard chunk of Lorem Ipsum used since the 1500s</span>
														</div>
														</div>
													</li>
												
												
													<li className="col-xs-4 no-pad">
														<span className="tim_txt">Just now</span>
														<a href="aaa#" target="_blank" className="anch_text">Recommendations</a>
													</li>
												</ul>
												}>
											</Panel>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 pad_bord6">
												<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 bordd"></div>
											</div>
											
											
										{/* )}.bind(this)):""} */}
										
											<Panel eventKey="1" className={"col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading spl_heading " + (this.state.showAll?'dif_had':'pos1')}  
												header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul">
													<li className="col-xs-8 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="noti_avatar1"></span>
														</div>
														<div className="text_div1">
															<span className="autoCad_txt_media prod_top_text">Javier has requested access</span>
															<span className="newPurchaseDate">The standard chunk of Lorem Ipsum used since the 1500s</span>
														</div>
													</li>
													

													<li className="col-xs-4 no-pad">
														<span className="tim_txt">1 min ago</span>
														<a href="aaa#" target="_blank" className="anch_text">Recommendations</a>
														
													</li>
												</ul>
												}>
											</Panel>
											<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 pad_bord6">
												<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 bordd"></div>
											</div>
											
											<Panel eventKey="1" className={"col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad recent_product_heading spl_heading " + (this.state.showAll?'dif_had':'pos1')}  
												header={
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_ul">
													<li className="col-xs-8 no-pad purchaseDate3">
														<div className="icon_div">
															<span className="noti_avatar1"></span>
														</div>
														<div className="text_div1">
															<span className="autoCad_txt_media prod_top_text">You have used 80% of your Tokens</span>
															<span className="newPurchaseDate">The standard chunk of Lorem Ipsum used since the 1500s</span>
														</div>
													</li>

													<li className="col-xs-4 no-pad">
														<span className="tim_txt">9.23 am</span>
														<a href="aaa#" target="_blank" className="anch_text">Recommendations</a>
														
													</li>
												</ul>
												}>
											</Panel>
										</Accordion>:""}
									</li>
								</ul>

							</div>
						</div>
					</div>
				</div>
				
			</div>	
		</div>
		
		)
	}
});

module.exports = NotificationHistory;
