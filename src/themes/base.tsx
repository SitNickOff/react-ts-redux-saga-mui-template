import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { createTheme, ThemeOptions } from '@material-ui/core/styles';
import "npm-font-open-sans";

const fontFamily = [
    'Open Sans',
    'sans-serif',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
].join(',');


export const useGridStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        grid: {
            width: '100%'
        }
    }),
);

declare module "@material-ui/core/styles/overrides" {
    export interface ComponentNameToClassKey {
        MuiTimelineDot?: any,
        MuiTimelineConnector?: any,
        MuiTimelineItem?: any,
        MuiTimelineContent?: any,
        MuiTimelineOppositeContent?: any,
    }
}

function createMyTheme(options: ThemeOptions) {
    return createTheme(options);
}

let theme = createMyTheme({
    typography: {
        fontFamily
    },
    palette: {
        primary: { // Blue - // Разработка СТУ в работе - "голубой"
            main: '#ee1c25'
        },
        secondary: { // Green
            main: '#445562'
        },
        success: { // Green - // В работе - Зеленый
            main: '#00ac00'
        },
        error: { // Red
            main: '#454f63'
        },
        // warning: { // Orange
        //     main: '#00ac00'
        // },
        info: { // Modal BG
            main: '#2a2e43'
        },
        text: {
            primary: '#454f63', // Разработка СТУ завершена - "черный"
            secondary: '#78849e', // Завершены - Серый
        },
    },
});

const borderRadius = theme.spacing(1);

theme.overrides = {
    MuiAppBar: {
        root: {
            zIndex: 1500,
            boxShadow: '0px 8px 10px 0px rgba(69, 91, 99, 0.08)',
        },
        colorDefault: {
            // boxShadow: 'none',     
            paddingTop: `env(safe-area-inset-top)`,
            paddingLeft: `env(safe-area-inset-left)`,
            paddingRight: `env(safe-area-inset-right)`,
            backgroundColor: '#ffffff', /*theme.palette.primary.main,*/
            borderBottom: '1px solid #f4f4f6',
        },
        colorSecondary: {
            // top: 48,
            zIndex: 1501,
            backgroundColor: '#ffffff',
            borderTop: '1px solid #f4f4f6',
            top: `calc(env(safe-area-inset-top) + 48px)`,
            paddingLeft: `env(safe-area-inset-left)`,
            paddingRight: `env(safe-area-inset-right)`,
        }
    },
    MuiIconButton: {
        root: {
            color: theme.palette.text.primary,//'#fff',
        }
    },
    // Style sheet name ⚛️
    MuiTypography: {
        // Name of the rule
        subtitle2: {
            // Some CSS
            fontWeight: 600,
        },
        h4: {
            fontSize: 23,
            // fontWeight: 600,
            color: theme.palette.text.primary, //theme.background.paper,
        },
        h5: {
            fontSize: '19px',
            fontWeight: 600,
            color: theme.palette.text.primary,
        },
        h6: {
            fontSize: 15,
            fontWeight: 600,
        },
        body2: {
            color: theme.palette.text.secondary,
            wordBreak: 'break-word'
        },
        body1: {
            fontSize: 15,
            // color: theme.palette.text.primary,
        },
        h3: {
            color: theme.palette.text.primary,
            fontWeight: 300
        }
    },
    MuiSlider: {
        markLabel: {
            transform: 'none',
            '&[data-index="1"]': {
                transform: 'translateX(-100%)'
            }
        }
    },
    MuiBottomNavigationAction: {
        root: {
            minWidth: 0,
            '&$selected': {
                fill: theme.palette.primary.main
            }
        },
        label: {
            fontSize: 10,
            fontWeight: 600,
            '&$selected': {
                fontSize: 10,
                fontWeight: 600,
            }
        }
    },
    MuiPaper: {
        elevation1: {
            boxShadow: '0px 4px 18px 0px rgba(69, 91, 99, 0.08)',
        },
        rounded: {
            borderRadius,
        },
    },
    MuiAvatar: {
        square: {
            width: 24,
            height: 8,
            borderRadius: 5,
            '& colorDefault': {
                backgroundColor: 'none'
            },
        },
    },
    MuiTab: {
        wrapper: {
            fontSize: '0.68rem',
            fontWeight: 700
        },
        root: {
            padding: '6px 5px',
            '@media (min-width: 600px)': {
                minWidth: 'auto'
            },
        }
    },
    MuiDrawer: {
        modal: {
        },
        paper: {
            minWidth: '100%'
        }
    },
    MuiListItemIcon: {
        root: {
            minWidth: 40,
        },
    },
    MuiCardContent: {
        root: {
            padding: '16px 22px',
            '&:last-child': {
                paddingBottom: 16
            }
        }
    },
    MuiDialog: {
        root: {
            textAlign: 'center',
            zIndex: 1600,
        },
        paper: {
            backgroundColor: theme.palette.info.main,
        }
    },
    MuiDialogActions: {
        root: {
            justifyContent: 'center',
            paddingBottom: 22,
        },
    },
    MuiButton: {
        root: {
            "&.Mui-disabled": {
                color: theme.palette.text.primary
            },
        },
        containedSizeLarge: {
            padding: '10px 22px',
            borderRadius: 40,
            paddingLeft: 60,
            paddingRight: 60,
        }
    },
    MuiTextField: {
        root: {
            '& .MuiFormLabel-root': {   
                top: 0,
                left: 0
            }
        }
    },
    MuiInputBase: {
        root: {
            boxShadow: '0px 4px 18px 0px rgba(69, 91, 99, 0.08)',
            backgroundColor: 'rgb(255, 255, 255)',
        },
        inputMultiline: {
            lineHeight: 1.5,
        },
        input: {
            padding: '12px 24px',
        },
    },
    // MuiInputLabel: {
    //     formControl: {
    //         top: 12,
    //         left: 24,
    //         zIndex: 1
    //     },
    //     shrink: {
    //         top: '-6px !important',
    //         left: '0px !important'
    //     }
    // },
    MuiSelect: {
        select: {
            '&:focus': {
                backgroundColor: 'rgb(255, 255, 255)',
            }
        }
    },
    MuiInput: {
        root: {
            borderRadius,
        },
        underline: {
            borderBottom: '0 !important',
            '&:hover': {
                borderBottom: 0,
                '&:not(.Mui-disabled)': {
                    '&:before': {
                        borderBottom: 0,
                    }
                }
            },
            '&:after': {
                borderBottom: 0,
            },
            '&:before': {
                borderBottom: 0,
            },
            '@media (hover: none)': {
                borderBottom: 0,
                '&:hover': {
                    borderBottom: 0,
                    '&:not(.Mui-disabled)': {
                        '&:before': {
                            borderBottom: '0 !important',
                        }
                    }
                },
                '&:after': {
                    borderBottom: 0,
                },
                '&:before': {
                    borderBottom: 0,
                }
            },
        },
    },
    MuiMenuItem: {
        root: {
            '@media (min-width: 600px)': {
                minHeight: theme.spacing(6),
            },
        }
    },
    MuiSnackbar: {
        anchorOriginBottomLeft: {
            bottom: 85,
            '@media (min-width: 600px)': {
                bottom: 85
            }
        }
    },
    MuiCardActionArea: {
        root: {
            borderRadius
        }
    },
    MuiTimelineDot: {
        root: {
            boxShadow: 'none'
        },
        defaultExample: { 
            color: 'rgba(0, 0, 0, 0.87)',
            borderColor: 'transparent',
            backgroundColor: theme.palette.success.main,
        },
        defaultGrey: { 
            color: 'rgba(0, 0, 0, 0.87)',
            borderColor: 'transparent',
            backgroundColor: theme.palette.text.secondary,
        },
        defaultPrimary: { 
            color: 'rgba(0, 0, 0, 0.87)',
            borderColor: 'transparent',
            backgroundColor: theme.palette.primary.main,
        },
        defaultSecondary: { 
            color: 'rgba(0, 0, 0, 0.87)',
            borderColor: 'transparent',
            backgroundColor: theme.palette.text.primary,
        },
    },
    MuiTimelineConnector: {
        root: {
            width: 1,
            backgroundColor: 'none',
            borderLeft: '3px dotted rgb(120 132 158 / 0.2)',
        }
    },
    MuiTimelineItem: {
        root: {
            textAlign: 'left',
        },
        missingOppositeContent: {
            '&:before': {
                flex: 0,
                padding: 0,
            }
        },
    },
    MuiTimelineContent: {
        root: {
            flex: 6,
            padding: '4px 16px',
            paddingBottom: theme.spacing(4),
        }
    },
    MuiTimelineOppositeContent: {
        root: {
            padding: '6px 16px 0 0',
            textAlign: 'left',
        }
    },
    MuiTableCell: {
        head: {
            fontWeight: 600
        },
        alignRight: {
            whiteSpace: 'nowrap'
        }
    },
    MuiContainer: {
        root: {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
        }
    }
};

// 

export default theme;