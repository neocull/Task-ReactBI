import React from "react";

import '../styles/App.scss';
import productsData from '../data/productsData';
import {Products} from "./Products";
import {Basket} from "./Basket";

class App extends React.Component {

    state = {
        showBasket: true,

    };

    updateData = () => {
        this.setState({
            showBasket: !this.state.showBasket
        })
    };

    render() {
        const {showBasket} = this.state;
            return (
                showBasket ?
                    <Basket data={productsData} updateData={this.updateData}/> :
                    <Products data={productsData} updateData={this.updateData}/>
            )
        }


}

export default App;
