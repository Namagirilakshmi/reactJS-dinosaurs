import React from 'react';
import Content from './content.jsx';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state={
			dinosaurData:[]
		}
		this.display=this.display.bind(this);

	}
	componentDidMount(){
		fetch("data/dinosaurData.json")
	        .then(response => response.json())
	        .then(json => {
	        this.setState({
	          dinosaurData: json
	        });
	        var key = Object.keys(this.state.dinosaurData)[0];
    		this.display(key);
	    });
    }

    display(keyy){
    	var _this=this;
    	var listContent = Object.keys(this.state.dinosaurData).map(function(key,i){
    		if(keyy==key)
    		{
    			var item=_this.state.dinosaurData[key];
    	    	_this.setState({
    	    		specName:keyy,
    				appeared:item.appeared,
	    			height:item.height,
	    			length:item.length,
	    			order:item.order,
	    			vanished:item.vanished,
	    			weight:item.weight
    			});	
    			var selectedItem=".menu "+"#"+keyy;
		    	$(".menu li").removeClass("active");
		    	$(selectedItem).addClass("active");	
    	    }    
    	});	
    	
    }
    
	render() {
        return (
            <div className="container">
            	<div className="row">
            		<h3 className="col l12 m12 s12 center">Dinosaur Species</h3>
            	</div>
            	<Content states={this.state} dispContent={this.display}/>
            	<div className="row">
            		<p className="col l12 m12 s12 center">&copy; copyRights</p>
            	</div>
            </div>
        );
    }
}

export default App;