import React from 'react'

import {BasketItem} from "./BasketItem";

class Basket extends React.Component {

    constructor(props) {
        super(props);
        const {data} = this.props;
        this.state = {
            window: false,
            sum: 0,
            items: data

        }
    }

    delQuantity(id) {
        this.setState({
                ...this.state,
                items: this.state.items.map(item => {
                    if (item.id == id) {
                        item.quantity--;
                    }
                    return item;
                })
            }
        );
    };

    delAllQuantity(id) {
        this.setState({
                ...this.state,
                items: this.state.items.map(item => {
                    if (item.id == id) {
                        item.quantity = 0;
                    }
                    return item;
                })
            }
        );
    };

    delAll() {
        this.setState({
                ...this.state,
                items: this.state.items.map(item => {
                    item.quantity = 0;
                    return item;
                })
            }
        );
    };

    render() {

        return (
            <>
            <table className="products">
                <caption>Корзина</caption>
                <thead>
                <tr>
                    <th>Название</th>
                    <th>Стоимость</th>
                    <th>Количество</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.items.map((item) => {
                        if (item.quantity) {
                            return <BasketItem key={item.id} items={item} delQuantity={this.delQuantity} delAllQuantity={this.delAllQuantity}/>
                        }
                    })
                }
                <tr>
                    <td colSpan={4} className="AllPrice">
                        Всего: ${
                        this.state.items.reduce((sum, item) => {
                            const price = ((+item.price.slice(1,item.price.length))*item.quantity);
                            return sum + price;
                        }, 0)
                    }</td>
                </tr>
                </tbody>
            </table>
                <div className="controls">
                    <button
                        onClick={() => { this.props.updateData(this.state.window)}}
                        className="controls__link">
                        Перейти в список товаров
                    </button>
                    <button
                        onClick={() => this.delAll()}
                        className="controls__clear"
                    >Очистить корзину</button>
                </div>
            </>
        )
    }

}

export { Basket }
