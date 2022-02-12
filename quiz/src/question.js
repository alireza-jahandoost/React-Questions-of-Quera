import React from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Question extends React.Component{



    render(){
         return(<div></div>)

    }

}

const mapStateToProps = (state) => {
     return({})
};


const mapDispatchToProps = (dispatch, ownProps) => (bindActionCreators({
}, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(Question);
