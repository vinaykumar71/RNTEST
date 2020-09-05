import React, { Component } from 'react';
import { View, Text, Image, NativeModules } from 'react-native';
import i18n from '_locales/i18n';
import { convertToDate } from '_utils';
import { styles } from './style';
import TrackPlayer from 'react-native-track-player';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import Sound from 'react-native-sound'

export class ItemDetail extends Component {

    constructor(props) {
        super(props)

        const { route } = this.props;
        const { selectedItem } = route.params;

        this.state = {
            item: selectedItem
        }
    }

    playTrack = () => {
        NativeModules.CheckInternet.getInternetStatus( err => {
            alert(err);
        }, msg => { 
            alert(msg);
        },
        );
           
    }

    // this.props.navigation.navigate('PlayerScreen', {title:"hello", filepath:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/94/25/9c/94259c23-84ee-129d-709c-577186cbe211/mzaf_5653537699505456197.plus.aac.p.m4a"});
    // // const track = new Sound('https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/94/25/9c/94259c23-84ee-129d-709c-577186cbe211/mzaf_5653537699505456197.plus.aac.p.m4a', null, (e) => {
    //   if (e) {
    //     console.log('error loading track:', e)
    //   } else {
    //     track.play()
    //   }
    // })

    // playTrack() {

        // TrackPlayer.setupPlayer().then(async () => {

        //     // Adds a track to the queue
        //     await TrackPlayer.add({
        //         id: 'trackId',
        //         url: require('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'),
        //         title: 'Track Title',
        //         artist: 'Track Artist',
        //         artwork: require('https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/be/38/d0/be38d058-31ed-c0ea-91e6-12052865fd20/source/100x100bb.jpg')
        //     });

        //     // Starts playing it
        //     TrackPlayer.play();

        // });
        // console.log("button clicked")
    

render() {
    return (
        <View style={styles.container}>
            <View style={styles.card_view}>
                <View style={{ flexDirection: 'column' }}>
                    <View style={styles.cardTopView}>
                        <Text style={styles.cardTitle}>{this.state.item.artistName}</Text>
                        <Image style={styles.musicImage}
                            source={{ uri: this.state.item.artworkUrl100 }} />
                    </View>
                    <Text style={styles.cardTitleName}>{this.state.item.trackName}</Text>
                    <View style={styles.cardBottomView}>
                        <Text style={styles.txtGraySmall}>{i18n.t('detail_screen.lbl_genres')}</Text>
                        <Text style={styles.txtValue}>{this.state.item.primaryGenreName}</Text>
                        <Text style={styles.txtGraySmall}>{i18n.t('detail_screen.lbl_released')}</Text>
                        <Text style={styles.txtValue}>{convertToDate(this.state.item.releaseDate)}</Text>
                        <Text style={styles.txtGraySmall}>{i18n.t('detail_screen.lbl_origin')}</Text>
                        <Text style={styles.txtValue}>{this.state.item.country}</Text>
                    </View>

                    <TouchableOpacity style={{ backgroundColor: "#039BE5", width: 80, marginBottom: 20, borderRadius: 10 }} onPress={this.playTrack}>
                        <Text style={{ color: '#FFFFFF', padding: 3 }}>Play Song</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}
}

export default ItemDetail

