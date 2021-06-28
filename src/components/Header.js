import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
	return (
		<header className="header">
			<h1>{title}</h1>
			<Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
		</header>
	);
};

// When the header is given no props the default prop is going to be in the default prop
Header.defaultProps = {
	title: 'Task Tracker'
};

Header.propTypes = {
	title: PropTypes.string.isRequired
};

export default Header;
