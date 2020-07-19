import i18n from 'i18next';import k from "./../i18n/keys";import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar-main-container">
               <div className="navbar-logo-container">
                    <div className="navbar-logo">{i18n.t(k.IPSUM_CORPORATION)}</div>
               </div>
               <div className="navbar-options-container">
                   <div>{i18n.t(k.LOGIN)}</div>
                   <div>{i18n.t(k.SUPPORT)}</div>
                   <div>{i18n.t(k.ABOUT)}</div>
               </div>
           </div>);

};
export default Navbar;