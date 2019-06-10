import React from 'react'

class Products extends React.Component {

    constructor(props) {
        super(props);
        const {data} = this.props;
        this.state = {
            window: true,
            items: data

        }
    }

    addQuantity(id) {
        this.setState({
                ...this.state,
                items: this.state.items.map(item => {
                    if (item.id == id) {
                        item.quantity++;
                    }
                    return item;
                })
            }
        );
    };

    render() {
        return (
            <>
                <table className="products">
                    <caption></caption>
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
                            return <tr key={key}>
                                <td className="article__name">{item.name}</td>
                                <td className="article__price">{item.price}</td>
                                <td className="article__quantity">{item.quantity}</td>
                                <td className="article__buttons">
                                    <button onClick={() => this.addQuantity(item.id, item.quantity)}
                                        className="article__buttons_minus">+</button>
                                </td>
                                </tr>
                        })
                    }
                    </tbody>
                </table>
                <div className="controls">
                    <button
                        onClick={() => { this.props.updateData(this.state.window)}}
                        className="controls__link">Корзина</button>
                </div>
            </>
        )
    }

}

export { Products }