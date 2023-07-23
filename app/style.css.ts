import { style, globalStyle } from '@vanilla-extract/css'

export const myStyle = style({
    color: 'red',
    backgroundColor: 'blue',
    fontSize: '100px',
});

globalStyle('body', {
    color: 'rgba(50,50,60, 0)'
});
