/*
 * @file: Layouts.js
 * @description: Defined all Layouts for application
 * @date: 27 Feb 2018
 * @author: Monika Rani
*/

import React from 'react';
import Header from './Header';

/*************** Front Layout ***************/

export const frontLayout = props => (
	<div>
		<Header history={props.children.props.history} />
		{props.children}
	</div>
);
