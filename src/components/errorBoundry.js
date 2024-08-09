import React  , {Component} from 'react'

class errorBoundry extends Component{
constructor(props){
    super(props);
    this.state = {
        hasError : false
    }
}
componentDidCatch(error , info){
    this.setState({hasErro : true})
}
render(){
    return this.state.hasError ? <h1>There is a problem</h1> : this.props.children;
}}


export default errorBoundry;