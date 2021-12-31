/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, useState } from 'react-native';
 import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
 import { Table, Row} from 'react-native-table-component';
 import styles from './css/AppStyle'
 
 const Section = ({title,children}) => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? Colors.white : Colors.black,
           },
         ]}>
         {title}
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 };

 
 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
  
   const table = {
      tbHead: ['No', 'Nama', 'Nim'],
      widths: [100, 120, 130],
      DataTable: [
        ['1', 'FATHONI WASESO', '1103180147'],
        ['2', 'ASENG ALFIAN', '1103184082'],
        ['3', 'FAUZUL HAQI', '1103180037'],
        ['4', 'ALDY PUTRA P', '1103184102'],

      ]
    }

   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}>
         <Header />
         <View
           style={{
             backgroundColor: isDarkMode ? Colors.black : Colors.white,
           }}>
           <Section title="KELOMPOK VIII PEMORGRAMAN MOBILE">
           <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table>
              <Row data={table.tbHead} widths={table.widths} style={styles.headerWrapper} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table>
                {
                  table.DataTable.map((totlatRows, index) => (
                    <Row
                      data={totlatRows}
                      key={index}
                      textStyle={styles.text}
                      widthArr={table.widths}
                      style={[styles.row, index%2 && {backgroundColor: '#ffffff'}]}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
           </Section>
           <Section title="See Your Changes">
             <ReloadInstructions />
           </Section>
           <Section title="Debug">
             <DebugInstructions />
           </Section>
           <Section title="Learn More">
             Read the docs to discover what to do next:
           </Section>
           <LearnMoreLinks />
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };
 

 //css

 
 export default App;
 