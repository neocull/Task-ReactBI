import React from "react";

import '../styles/App.scss';
import productsData from '../data/productsData';
import {Products} from "./Products";
import {Basket} from "./Basket";

class App extends React.Component {

    state = {
        window: true,

    };

    updateData = (value) => {
        this.setState({ window: value },() => {
            if(window) {
                return <Basket data={productsData} updateData={this.updateData}/>
            } else {
                return <Products data={productsData} updateData={this.updateData}/>
            }
        })
    };

    render() {
        const {window} = this.state;
        if(window) {
            return <Basket data={productsData} updateData={this.updateData}/>
        } else {
            return <Products data={productsData} updateData={this.updateData}/>
        }
    };


}

export default App;