import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
            "id": 1,
            "title": "Продукт 1",
            "img": "kros.png",
            "desc": "Описание продукта 1",
            "category": "Категория 1",
            "price": 10.99
          },
          {
            "id": 2,
            "title": "Продукт 2",
            "img": "kros2.png",
            "desc": "Описание продукта 2",
            "category": "Категория 2",
            "price": 19.99
          },
          {
            "id": 3,
            "title": "Продукт 3",
            "img": "kros3.png",
            "desc": "Описание продукта 3",
            "category": "Категория 1",
            "price": 8.49
          },
          {
            "id": 4,
            "title": "Продукт 4",
            "img": "kros6.png",
            "desc": "Описание продукта 4",
            "category": "Категория 3",
            "price": 15.29
          },
          {
            "id": 5,
            "title": "Продукт 5",
            "img": "kros5.png",
            "desc": "Описание продукта 5",
            "category": "Категория 2",
            "price": 12.99
          },
          {
            "id": 6,
            "title": "Продукт 6",
            "img": "kros7.png",
            "desc": "Описание продукта 6",
            "category": "Категория 3",
            "price": 7.99
          }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }
  render() {
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder} />
      <Items items={this.state.items} onAdd={this.addToOrder}/>
      <Footer />
    </div>
  )
}

deleteOrder(id) {
  this.setState({orders: this.state.orders.filter(el => el.id !== id)})
}

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id) {
        isInArray = true
      }
    })

    if(!isInArray) {
    this.setState({orders: [...this.state.orders, item] })
    }
  }
}

export default App;
