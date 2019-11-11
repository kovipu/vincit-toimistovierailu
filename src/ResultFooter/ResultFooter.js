import React from 'react';
import Button from '../common/Button';
import './ResultFooter.css';

export default ({ label, onShowDetails }) => {
    switch (label) {
      case 'LIKELY':
      case 'VERY_LIKELY':
        return (
          <footer className="ResultFooter ResultFooter--success">
            <div className="ResultFooter-title">
            <span>Hattu löydetty!</span>
            <i style={{color: '#2ecc71'}} className="fa fa-check" aria-hidden="true"></i>
            </div>
          </footer>
        )
      default:
        return (
          <footer className="ResultFooter ResultFooter--failure">
            <div className="ResultFooter-title">
            <span>Ei oo Hattua!</span>
            <i style={{color: '#e74c3c'}} className="fa fa-times" aria-hidden="true"></i>
          </div>
          </footer>
        );
    }
  }