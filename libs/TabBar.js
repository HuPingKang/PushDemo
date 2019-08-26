import React, { Component } from 'react';
import { 
    Text, 
    View, 
    TouchableOpacity, 
    Dimensions
} from 'react-native';

export default class TabBar extends Component {
    renderItem(route, index) {
        const { navigation, jumpTo, activeTintColor, inactiveTintColor } = this.props;
        const focused = (index === navigation.state.index);
        const color = focused ? activeTintColor : inactiveTintColor;
        const TabScene = {
            focused,
            route,
            color,
        };
            const labels = {
                'HomePage':'头条',
                'GlobalPage':'体育',
                'VideoPage':'视频',
            }
            return (
                <TouchableOpacity
                    key={route.key} 
                    style={styles.tabItem} 
                    onPress={() => jumpTo(route.key)}
                    >
                    <View style={styles.tabItem}>
                        {this.props.renderIcon(TabScene)}
                        <Text style={{color, fontSize: 10,marginTop:3,textAlign:'center'}}>
                            {labels[route.key]}
                        </Text>
                    </View>
                </TouchableOpacity>
            );
    };
    render(){
        const { navigation } = this.props;
        const { routes } = navigation.state;
        return (
            <View style={styles.tab}>
                {routes && routes.map((route,index) => this.renderItem(route, index))}
            </View>
        );
    }
}
const styles = {
    tab: {
        backgroundColor: '#fff',
        flexDirection:'row',
        justifyContent:'space-around',
        borderTopColor: 'rgba(0, 0, 0, 0.3)',
        borderTopWidth: 0.5,
        paddingBottom:  Dimensions.get('window').height>=812? 34 : 0,
    },
    tabLine: {
        height: 0.5, 
        backgroundColor: 'rgba(100, 100, 100, 0.3)', 
    },
    tabItem: {
        height:49,
        width:49,
        alignItems:'center',
        justifyContent:'center'
    },
};
