import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Separator = () => (
    <View style = { styles.separator }/>
);

const Listen = () => (
    <SafeAreaView style={styles.container}>
        <ScrollView>
        <View>
            <Button
                title='Alien'
                onPress={() => Alert.alert('Listennig: Alien')}
            />

        </View>
        <Separator/>
        <View style={styles.fixToText}>
            <Button
                title='Bankbiik'
                onPress={() => Alert.alert('Listenning: Bankbook')}
            />
        </View>
        <Separator/>
        <View>
            <Button
                title='Consulate'
                onPress={() => Alert.alert('Listenning: Consulate')}
            />
        </View>
        <Separator/>
        <View>
            <Button
                title='Deportation'
                onPress={() => Alert.alert('Listennig: Deportation')}
            />

        </View>
        <Separator/>
        <View style={styles.fixToText}>
            <Button
                title='Embassy'
                onPress={() => Alert.alert('Listenning: Embassy')}
            />
        </View>
        <Separator/>
        <View>
            <Button
                title='Fraud'
                onPress={() => Alert.alert('Listenning: Fraud')}
            />
        </View>
        <Separator/>
        <View>
            <Button
                title='Impersonation'
                onPress={() => Alert.alert('Listennig: Impersonation')}
            />

        </View>
        <Separator/>
        <View style={styles.fixToText}>
            <Button
                title='Landlord'
                onPress={() => Alert.alert('Listenning: Landlord')}
            />
        </View>
        <Separator/>
        <View>
            <Button
                title='Naturalize'
                onPress={() => Alert.alert('Listenning: Naturalize')}
            />
        </View>
        <Separator/>
        <View>
            <Button
                title='Parents'
                onPress={() => Alert.alert('Listennig: Parents')}
            />

        </View>
        <Separator/>
        <View style={styles.fixToText}>
            <Button
                title='Regulation'
                onPress={() => Alert.alert('Listenning: Regulation')}
            />
        </View>
        <Separator/>
        <View>
            <Button
                title='Salary'
                onPress={() => Alert.alert('Listenning: Salary')}
            />
        </View>
        <Separator/>
        <View>
            <Button
                title='Thief'
                onPress={() => Alert.alert('Listennig: Thief')}
            />
        </View>
        <Separator/>
        <View style={styles.fixToText}>
            <Button
                title='Violation'
                onPress={() => Alert.alert('Listenning: Violation')}
            />
        </View>
        <Separator/>
        </ScrollView>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#fff',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default Listen;