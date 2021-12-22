import React from 'react';
import ReactDOM from 'react-dom';
import ReviewList from './components/ReviewList/ReviewList';
import Accordion from './components/Accordion/Accordion'
import InnerData from './components/InnerData/InnerData';
import './scss/main.scss';

ReactDOM.render(
    <>
    <ReviewList />
    <Accordion />
    <InnerData />
    </>,
    document.getElementById('root')
    );