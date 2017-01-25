import React from 'react';

class Content extends React.Component{
	constructor(props){
		super(props);
	}	
	
    displayForSmall(keyy){
    	this.props.dispContent(keyy);    	
    	$('#listmenu').removeClass("show").addClass("hide");
    	$('#listdata').removeClass("hide-on-small-only").removeClass("hide").addClass("show");
    }

    backBtn(){
    	$('#listmenu').removeClass("hide").addClass("show");
    	$('#listdata').addClass("hide-on-small-only");
    }

    render(){
    	var _this=this;
    	var listItem = Object.keys(_this.props.states.dinosaurData).map(function(key,i){
    		return(
				<li key={key} id={key}>
					<a className="hide-on-small-only btn sname" onClick={()=>{_this.props.dispContent(key)}}>{key}</a>
					<a className="hide-on-med-and-up btn sname" onClick={_this.displayForSmall.bind(_this,key)}>{key}</a>
				</li>		
			);
    	});

    	return(
	    	<div className="row">
	            <div className="col l4 m4 s12" id="listmenu">
		           	<ul className="menu">
		           		{listItem}	
		       		</ul>
	            </div>
	           	<div className="col l8 m8 s12 hide-on-small-only" id="listdata">
				  	<h4 className="center">{this.props.states.specName}</h4>
				  	<h5 className="center">Appeared:{this.props.states.appeared}</h5>
				  	<h5 className="center">Height:{this.props.states.height}</h5>
				  	<h5 className="center">Length:{this.props.states.length}</h5>
				  	<h5 className="center">Order:{this.props.states.order}</h5>
				  	<h5 className="center">Vanished:{this.props.states.vanished}</h5>
				  	<h5 className="center">Weight:{this.props.states.weight}</h5>
				  	<div className="hide-on-med-and-up">
				  		<button className="waves-effect waves-light btn center" id="back" onClick={this.backBtn.bind(this)}>Back<i className="small material-icons">fast_rewind</i></button>
				  	</div>
	            </div>
	        </div>
        );
    }
}

export default Content;