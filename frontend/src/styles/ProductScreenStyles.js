import { makeStyles } from '@material-ui/core/styles';

const ProductScreenStyles = makeStyles(() => ({
    media: {
        height: '20rem',
        backgroundColor: '#F8F7FA',
        backgroundSize: '14rem',
        backgroundPosition: 'center',
    },
    backgroundContainer: {
        width: '100vw',
        height: '25rem',
        position: 'absolute',
        overflow: 'hidden',
        '-ms-overflow-style': 'none' /* IE and Edge */ ,
        'scrollbar-width': 'none' /* Firefox */ ,
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    background: {
        width: '49rem',
        height: '49rem',
        borderRadius: '50%',
        background: '#FFE202',
        position: 'absolute',
        top: '-23rem',
        right: '-23rem',
        zIndex: -1,
    },
    mainTitle: {
        width: '18rem',
        marginTop: '2rem',
        marginRight: '0.75rem',
    },
    avatarContainer: {
        paddingRight: '0.75rem',
    },
    avatarIcon: {
        color: '#000',
    },
    iconBackground: {
        background: '#ffffff',
    },
    loginText: {
        fontSize: '1rem',
        fontWeight: 'bold',
        marginRight: '0.4rem',
    },
    gridContaier: {
        width: '100%',
        height: '100%',
        margin: '1rem 0',
        overflow: 'auto',
        flexWrap: 'nowrap',
        position: 'relative',
        zIndex: 1,
        '-ms-overflow-style': 'none' /* IE and Edge */ ,
        'scrollbar-width': 'none' /* Firefox */ ,
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    popularContainer: {
        padding: '0 1rem',
    },

    card: {
        display: 'flex',
        flexDirection: 'column',
        objectFit: 'cover',
        overflow: 'scroll',
        position: 'relative',
        '-ms-overflow-style': 'none' /* IE and Edge */ ,
        'scrollbar-width': 'none' /* Firefox */ ,
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    cardContent: {
        '&:last-child': {
            paddingBottom: 0,
        },
    },

    favoriteIcon: {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
    },
    leftArrowIcon: {
        position: 'absolute',
        zIndex: 2,
        top: '1rem',
        left: '1rem',
    },

    productName: {
        marginBottom: 0,
        fontWeight: 700,
    },
    productBrand: {
        fontSize: '1rem',
        color: '#A6A6AA',
    },

    price: {
        fontWeight: 'bold',
        fontSize: '1rem',
    },
    oldPrice: {
        fontSize: '0.75rem',
        color: '#CBCBD4',
        textDecoration: 'line-through',
        marginRight: '0.5rem',
    },
    offAmount: {
        background: '#EAF8EC',
        color: '#51B960',
        fontSize: '0.75rem',
        fontWeight: 'bold',
        padding: '0.25rem 0.5rem',
        borderRadius: '6.25rem',
        marginRight: '0.15rem',
    },
    productDescription: {
        marginTop: '2rem',
        fontSize: '1rem',
        fontWeight: 800,
    },
    description: {
        fontSize: '1rem',
        fontWeight: 400,
        color: '#3A3A3A',
        marginTop: '1rem',
    },
    gradIcon: {
        marginTop: '0.2rem',
        color: '#FFE202',
        '-moz-transform': 'scale(-1, 1)',
        '-o-transform': 'scale(-1, 1)',
        '-webkit-transform': ' scale(-1, 1)',
        transform: 'scale(-1, 1)',
    },
    rateNumber: {
        fontSize: '0.75rem',
        marginRight: '0.5rem',
    },
    category: {
        fontSize: '0.75rem',
        fontWeight: 800,
        marginRight: '0.5rem',
    },
    addToCart: {
        padding: 0,
        width: '5rem',
        height: '1.25rem',
        background: '#ECF6FF',
        marginRight: '3.3rem',
        borderRadius: '6.25rem',
    },
    addToCartTxt: {
        color: '#5FA1D5',
        paddingBottom: '0.1rem',
    },
    categoriesContainer: {
        width: '100%',
        margin: 0,
        marginBottom: '1.75rem',
        marginTop: '1rem',
    },
    categories: {
        width: '9.75rem',
        height: '9.75rem',
        background: '#30D6B0',
        borderRadius: '0.5rem',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },

    categoriesName: {
        color: '#fff',
    },
}));

export default ProductScreenStyles;