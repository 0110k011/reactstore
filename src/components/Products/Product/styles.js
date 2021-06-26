import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', //16:9
        paddingBottom: '40%',
    },
    cardActions: {
        display: 'flex',
        justifyContent:'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        minHeight: 105,
    },
    cardPrice: {
        display: 'flex',
        justifyContent:'flex-end',
    },
}));