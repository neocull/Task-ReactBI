import React from 'react'

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

    sumPrice(price, quantity) {
       return '$'+(+price.slice(1,price.length))*quantity;
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
                    this.state.items.map((item, key) => {
                        if (item.quantity) {
                            return <tr key={key}>
                                <td className="article__name">{item.name}</td>
                                <td className="article__price">{this.sumPrice(item.price, item.quantity)}</td>
                                <td className="article__quantity">{item.quantity}</td>
                                <td className="article__buttons">
                                    <button onClick={() => this.delQuantity(item.id)}
                                            className="article__buttons_minus">-
                                    </button>
                                    <button onClick={() => this.delAllQuantity(item.id)}
                                            className="article__buttons_del">Удвлить все
                                    </button>
                                </td>
                            </tr>
                        }
                    })
                }
                <tr>
                    <td colSpan={4}>
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