import { makeStyles } from '@material-ui/core/styles';

const containerStyles = {
    borderRadius: 20,
    padding: '0 5%',
};

const useStyles = makeStyles((theme) => ({
    contentContainer: {
        padding: 0,
    },
    largeContainer: {
        ...containerStyles,
        minWidth: '60%',
    },
    mobileContainer: {
        padding: '0 5%',
    },
    smallContainer: {
        ...containerStyles,
        minWidth: 600,
    },
    titleContainer: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '30px 0',
        padding: 0,
    },
    footerContainer: {
        marginTop: 20,
        marginBottom: 40,
        padding: 0,
    },
}));

export default useStyles;
