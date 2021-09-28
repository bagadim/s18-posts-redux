import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
    render() {
        if (!this.props.user) {
            return null;
        }
        return <div className="header">{this.props.user.name}</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return { user: state.users.find((user) => ownProps.userId === user.id) };
};

export default connect(mapStateToProps)(UserHeader);
