import React from 'react';
import { connect } from 'react-redux';
import { activate } from '../../store/Categories.js';
import { Breadcrumbs } from '@material-ui/core';
import { Link } from '@material-ui/core';

const Categories = props => {
    return (
        <div className='links'>
        <h3>Browse Our Categories</h3>
        <Breadcrumbs aria-label="breadcrumb">
            {props.categories.categories.map((category, idx) =>
                <Link color="primary" onClick={() => props.activate(category.name)} key={idx}>
                    {category.displayName}
                </Link>
            )}
        </Breadcrumbs>
        </div>

    )
}

const mapStateToProps = state => ({
    categories: state.categories,
    state
});

const mapDispatchToProps = { activate };

export default connect(mapStateToProps, mapDispatchToProps)(Categories); 