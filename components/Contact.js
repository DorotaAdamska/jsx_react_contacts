var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className='contactItem'>
        <img className='contactImage' src='ihttps://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/contact_card-512.png'/>
        <p className='contactLabel'>Name: {this.props.item.firstName}</p>
        <p className='contactLabel'>Surname: {this.props.item.lastName}</p>
        <a href={'mailto:' + this.props.item.email}>{this.props.item.email}</a>
      </div>
    )
  },
}); 
