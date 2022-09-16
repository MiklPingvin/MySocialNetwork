import Friends from "./Friends";
import {connect} from "react-redux";



let mapStateToProps=(state)=>{
    return{
        sideBar: state.sideBar
    }
}
let mapDispatchToProps=()=>{
    return{

    }
}

let FriendsContainer=connect(mapStateToProps,mapDispatchToProps)(Friends);


export default FriendsContainer