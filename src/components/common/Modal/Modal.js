import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 600,
      maxHeight: '100%',
      margin: '0 auto',
      position: 'relative',
    };

    const modalBody = {
      width: '100%',
      height: 500,
      paddingLeft: 30,
      paddingRight: 30,
      overflowX: 'hidden',
      overflowY: 'scroll'
    }

    const modalHeader = {
      paddingLeft: 30,
      paddingRigt: 30,
      paddingTop: 15
    }

    const ModalCloseBtn = {
      position: 'absolute',
      right: 0,
      top: 0,
      cursor: 'pointer',
      background: 'rgba(0,0,0,.8)',
      color: '#fff',
      borderRadius: '50%',
      width: '25px',
      height: '25px',
      textAlign: 'center'
    }

    return (
      <div style={backdropStyle}>
        <div style={modalStyle}>
          <div style={modalHeader}>
            <h4>Create New User</h4>
            <span onClick={this.props.onClose} style={ModalCloseBtn}>
              x
            </span>
          </div>
          <hr/>
          <div style={modalBody}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export { Modal };
