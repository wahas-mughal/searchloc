import { StyleSheet, Text, View, Image, Pressable, Animated } from 'react-native'
import React from 'react'


const Onboarding = () => {

    return (
        <View style={styles.container}>
            <Pressable onPress={() => { }}>
                <Text style={styles.skipText} > Skip </Text>
            </Pressable>
            <View style={{ marginBottom: 20 }}>
                <Image source={require('../assets/images/onboarding_vector_1.png')} style={{ width: 350, height: 350 }} />
            </View>
            <View>
                <Text style={styles.headingText}>Navigate your world {'\n'}with ease & confidence</Text>
                <Text style={styles.contentText}>Discover new places, find your way {'\n'}and never get loss again!</Text>
            </View>

            <View style={styles.dots}>
                {[{}, {}, {
                    active: true
                }, {}].map((el) => (
                    <View style={{ width: el?.active ? 3 : 5, height: el?.active ? 10 : 5, borderRadius: 5, backgroundColor: '#a8ff83', marginHorizontal: 2 }} />
                ))}
            </View>

            <View style={{ position: 'absolute', bottom: 20, left: 18, width: '100%' }}>
                <Pressable style={styles.btn}>
                    <Text style={styles.actionText}> Get Started </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    headingText: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center',
        letterSpacing: 1,
        lineHeight: 32
    },
    contentText: {
        marginTop: 15,
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center'
    },
    skipText: {
        color: '#FFF',
        fontSize: 16,
        alignSelf: 'flex-end',
        marginBottom: 50
    },
    btn: {
        width: '100%',
        height: 50,
        borderRadius: 30,
        backgroundColor: '#a8ff83',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionText: {
        color: '#0f200a',
        fontWeight: '700',
        fontSize: 16,
    },
    dots: {
        flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: 50
    }
})
