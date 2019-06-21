import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';



const TokenUsage = React.createClass({
	
	getInitialState: function(){
		return {
			activeTab:"summary",
			liData:"Last 3 months",
		}
	},
	activeTabs(e){
		this.setState({
				activeTab:e,
			})
	},
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
	
		
	render: function() {
		return (
			<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12">
				<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad main_content1">
					{this.state.activeTab=="export"?<span className="back_mob back_landing" onClick={this.activeTabs.bind(this,"summary")}/>:""}
					<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12">
						
						{this.state.activeTab=="export"?"":
						<div>
							<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top new_contents">
								<div className="seat_header">Token Usage</div>
								<button className="export_btn" onClick={this.activeTabs.bind(this,"export")}>Export as CSV</button>
							</div>
							<p className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top_new">Reporting for Pay-Per-Use</p>
							
							<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top tabGrp_marg">
								<div className="seat_tab">
									<span className={"sum_tab "+ (this.state.activeTab=="summary"?"seat_active":"")} onClick={this.activeTabs.bind(this,"summary")}>Summary</span>
									<span className="seat_tab_devider"></span>
									<span className={"byProd_tab "+ (this.state.activeTab=="byProduct"?"seat_active":"")}  onClick={this.activeTabs.bind(this,"byProduct")}>By product</span>
									
									<span className="seat_tab_devider"></span>
									<span className={"byProd_tab "+ (this.state.activeTab=="byUser"?"seat_active":"")}  onClick={this.activeTabs.bind(this,"byUser")}>By user</span>
								
									{/*<span className="seat_tab_devider"></span>
									<span className={"byProd_tab "+ (this.state.activeTab=="contract"?"seat_active":"")}  onClick={this.activeTabs.bind(this,"contract")}>Contract</span>*/}
								
								
								</div>

								
								<div className="month_slt" onClick={this.filter}>
									{this.state.liData?this.state.liData:""}<span className="select_arrow_img1"></span>
								</div>
								<ul className={"license_ul1 "+ (this.state.filterOne?"":"ul_hide")} ref={node => {this.node = node;}} onClick={this.filter}>
									<li value="download" onClick={this.getLi.bind(this,"This month")}>This month</li>
									<li value="download" onClick={this.getLi.bind(this,"Last 3 months")}>Last 3 months</li>
									<li value="install" onClick={this.getLi.bind(this,"Last 6 months")}>Last 6 months</li>
									<li value="install" onClick={this.getLi.bind(this,"Last 9 months")}>Last 9 months</li>
									<li value="install" onClick={this.getLi.bind(this,"Last 12 months")}>Last 12 months</li>
									<li value="install" onClick={this.getLi.bind(this,"Contract to date")}>Contract to date</li>
								</ul>
								
							</div>
						</div>}
						
						<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
							{this.state.activeTab=="summary"?
							<img src={'images/token_summary.png'}  className="const_img img_responsive" />:""}
							
							{this.state.activeTab=="byProduct"?
							<img src={'images/token_byproduct.png'} className="const_img img_responsive" />:""}
							
							{this.state.activeTab=="export"?
							<img src={'images/token_export.png'} className="const_img img_responsive" />:""}
							
							{this.state.activeTab=="byUser"?
							<img src={'images/by-user.png'} className="const_img img_responsive" />:""}
							
							{this.state.activeTab=="contract"?
							<img src={'images/token_export.png'} className="const_img img_responsive" />:""}
						</div>
					</div>
				</div>
			</div>		
		)
	}
});

module.exports = TokenUsage;