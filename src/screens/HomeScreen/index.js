import React, { useEffect } from 'react';
import { Text, View, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { Loading } from '_components/Loading';
import { fetchMusic } from '../redux/ActionCreators';
import GridItem from '_components/GridItem';
import { styles } from './style';

const HomeScreen = ({ navigation }) => {

    const music = useSelector(state => state.music.music)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMusic());
    }, [])

    if (music.isLoading) {
        return (
            <Loading />
        );
    }
    else if (music.errMess) {
        return (
            <View style={styles.container}>
                <Text>{`Network Error: ${music.errMess}`}</Text>
            </View>
        );
    }
    else {
        return (
            <View style={styles.container}>
                <FlatList
                    data={music}
                    renderItem={({ item }) => {
                        return <GridItem item={item} navigation={navigation} />
                    }}
                    numColumns={3}
                    keyExtractor={item => item.trackId.toString()}
                />
            </View>
        );
    }

}

export default HomeScreen;
