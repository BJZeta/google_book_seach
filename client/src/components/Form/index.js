import React from 'react';

export function Input(props) {
    return (
        <div className='form-group'>
            <input className='form-control' {...props}/>
        </div>
    );
};

export function FormBtn(props) {
    return (
        <button {...props} style={{ float: 'right', marginBottom: 10 }} className='btn btn-success'>
            {props.children}
        </button>
    );
};

export function SaveBtn(props) {
    return (
        <button {...props} style={{paddingBottom: 10 }} className='btn btn-success'>
            {props.children}
        </button>
    );
};