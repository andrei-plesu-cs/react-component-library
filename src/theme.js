const theme = {
    
    form: {
        general: {
            invalid: {
                color: 'red',
                border: '2px solid red'
            }
        },

        input: {
            color: '#313237',
            placeholderColor: '#b8c0c0',
            carretColor: '#313237'
        },

        textarea: {
            color: '#313237',
            placeholderColor: '#b8c0c0',
            carretColor: '#313237',
            contentHeight: '70px'
        },

        formBox: {
            normal: {
                background: '#fff',
                borderRadius: '5px',
                padding: '0.8rem 1rem',
                border: '2px solid #b8c0c0'
            },

            hover: {
                background: '#fff',
                borderRadius: '5px',
                padding: '0.8rem 1rem',
                border: '2px solid gray'
            },

            focus: {
                background: '#fff',
                borderRadius: '5px',
                padding: '0.8rem 1rem',
                border: '2px solid #3e7afc'
            },

            disabled: {
                background: '#fff',
                borderRadius: '5px',
                padding: '0.8rem 1rem',
                border: '2px solid #b8c0c0'
            }
        },

        checkbox: {
            text: {
                color: '#313237'
            },

            unchecked: {
                background: '#fff',
                borderRadius: '5px',
                border: '2px solid #b8c0c0'
            },

            checked: {
                background: '#3e7afc',
                borderRadius: '5px',
                border: '2px solid #3e7afc',
                checkmarkColor: '#fff'
            },

            hover: {
                background: '#fff',
                borderRadius: '5px',
                border: '2px solid gray',
                checkmarkColor: '#fff'
            },

            disabled: {
                background: '#ececec',
                borderRadius: '5px',
                border: '2px solid #b8c0c0',
                checkmarkColor: 'gray'
            }
        }
    },

    font: {
        fontSize1: '0.5rem',
        fontSize2: '0.85rem',
        fontSize3: '1rem',
        fontSize4: '1.25rem',
        fontSize5: '1.5rem',
        fontSize6: '1.75rem',
        fontSize7: '2rem',

        fontColorPrimary: '#000',
        fontColorSecondary: 'gray',

        fontPrimary: '"Poppins", sans-serif',
        fontSecondary: '"Roboto", sans-serif'
    },

    boxShadows: {
        boxShadow1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        boxShadow2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        boxShadow3: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        boxShadow4: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        boxShadow5: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
    },

    buttons: {
        primary: {
            primary: '#3e7afc',
            accent: '#fff'
        },
        secondary: {
            primary: '#02234b',
            accent: '#fff'
        },
        tertiary: {
            primary: '#f43aac',
            accent: '#fff'
        },
        success: {
            primary: '#00d0a0',
            accent: '#fff'
        },
        error: {
            primary: '#d50000',
            accent: '#fff'
        },
        warning: {
            primary: '#ffc400',
            accent: '#fff'
        }
    },

    general: {
        hoverBackgroundColor: '#ececec'
    }

}

export default theme;