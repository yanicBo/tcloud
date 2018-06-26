import React, { Component } from 'react';
import { Form } from 'antd';

const formData = 'formData'

export const formData_action = value => ({
    type: formData,
    payload: value
});

export const formData_reducer = (state = {}, action) => {
    switch (action.type) {
        case formData:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}

export const createForm = {
    mapPropsToFields(props) {
        const Infos = props.formData_reducer
        for (let key in props.formData_reducer) {
            if (props.formData_reducer[key].name) {
                Infos[key] = Form.createFormField(props.formData_reducer[key])
            }
        }
        return Infos
    },
    onFieldsChange(props, fields) {
        props.formData_reducer(fields)
    }
}