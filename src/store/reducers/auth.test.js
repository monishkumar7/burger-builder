import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
    it('should return initial state for invalid actions', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        }, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    });

    it('should return token for login', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        }, {
            type:actionTypes.AUTH_SUCCESS,
            idToken: 'some-token',
            userId: 'some-id'
        })).toEqual({
            token: 'some-token',
            userId: 'some-id',
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    });
})