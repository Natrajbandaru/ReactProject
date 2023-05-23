import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      inputValue: '',
    };
    // Bind the methods to the component instance
    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleCreate() {
    const { items, inputValue } = this.state;
    const newItem = {
      id: Date.now(),
      name: inputValue,
    };
    this.setState({
      items: [...items, newItem],
      inputValue: '',
    });
  }

  handleUpdate(itemId, updatedName) {
    const { items } = this.state;
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, name: updatedName };
      }
      return item;
    });
    this.setState({ items: updatedItems });
  }

  handleDelete(itemId) {
    const { items } = this.state;
    const updatedItems = items.filter((item) => item.id !== itemId);
    this.setState({ items: updatedItems });
  }

  render() {
    const { items, inputValue } = this.state;
    return (
      <div>
        <input type="text" value={inputValue} onChange={(e) => this.setState({ inputValue: e.target.value })} />
        <button onClick={this.handleCreate}>Add Item</button>
        <ul>
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              handleUpdate={this.handleUpdate}
              handleDelete={this.handleDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      updatedName: props.item.name,
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  handleEdit() {
    this.setState({ editMode: true });
  }

  handleSave() {
    const { item, handleUpdate } = this.props;
    const { updatedName } = this.state;
    handleUpdate(item.id, updatedName);
    this.setState({ editMode: false });
  }

  handleDeleteItem() {
    const { item, handleDelete } = this.props;
    handleDelete(item.id);
  }

  render() {
    const { item } = this.props;
    const { editMode, updatedName } = this.state;
    return (
      <li>
        {editMode ? (
          <>
            <input
              type="text"
              value={updatedName}
              onChange={(e) => this.setState({ updatedName: e.target.value })}
            />
            <button onClick={this.handleSave}>Save</button>
          </>
        ) : (
          <>
            <span>{item.name}</span>
            <button onClick={this.handleEdit}>Edit</button>
          </>
        )}
        <button onClick={this.handleDeleteItem}>Delete</button>
      </li>
    );
  }
}

export default MyComponent;
