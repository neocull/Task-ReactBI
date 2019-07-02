import React from 'react'

class BasketItem extends React.Component {

    sumPrice(price, quantity) {
        return '$'+(+price.slice(1,price.length))*quantity;
    }

    render() {
        const { name, price, quantity } = this.props.items;
        return (
            <tr>
                <td className="article__name">{name}</td>
                <td className="article__price">{this.sumPrice(price, quantity)}</td>
                <td className="article__quantity">{quantity}</td>
                <td className="article__buttons">
                    <button onClick={(e) => this.delQuantity(e)}
                            className="article__buttons_minus">-
                    </button>
                    <button onClick={(e) => this.delAllQuantity(e)}
                            className="article__buttons_del">Удалить все
                    </button>
                </td>
            </tr>
        )
    }

}

export { BasketItem }