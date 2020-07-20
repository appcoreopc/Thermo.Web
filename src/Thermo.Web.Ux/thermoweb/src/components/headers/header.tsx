import React from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from "react-redux";
import { debug } from 'console';

export const Header = ({ count }: any) => (
    <div>
        Default Home Header  <br />
        {count}
    </div>
);




