import { StyleSheet } from 'react-native';
import { widthToDp, heightToDp } from '_utils';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10
    },
    card_view: {
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'lightgray',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 10,
        marginRight: 10,
        height: heightToDp('50%'),
        justifyContent: 'space-evenly',
        paddingHorizontal: 10
    },
    cardTitle: {
        flex: 1,
        fontSize: widthToDp('8%'),
        marginTop: 5
    },
    cardTitleName: {
        marginTop: 10,
        color: 'gray',
        fontSize: widthToDp('4%')
    },
    musicImage: {
        height: heightToDp('8%'),
        width: heightToDp('8%'),
        marginTop: 10,
        resizeMode: 'contain',
        borderRadius: heightToDp('5%') / 2,
        overflow: "hidden", borderWidth: 1,
        borderColor: "#FF9500",
        alignItems: 'flex-end',
    },
    cardTopView: {
        flexDirection: 'row',
    },
    cardBottomView: {
        alignItems: 'flex-end',
        marginRight: 10
    },
    txtGraySmall: {
        marginTop: 5,
        color: 'gray',
        fontSize: 12
    },
    txtValue: {
        fontSize: 18,
        marginTop: 5
    },
})