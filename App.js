import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import { Table, Row } from 'react-native-table-component';

const accountsData = [
  { ID: 1, username: 'marites', password: 'mar123', usertype: 'Students' },
  { ID: 2, username: 'marisol', password: 'sol456', usertype: 'Teacher' },
  { ID: 3, username: 'marietta', password: 'ieta678', usertype: 'Teacher' },
  { ID: 4, username: 'marissa', password: 'issa789', usertype: 'Students' },
  { ID: 5, username: 'marina', password: 'ina098', usertype: 'Director' },
];

const usersData = [
  { ID: 1, firstname: 'Marites', lastname: 'Anolatest', course: 'BSIT', year: '1', section: 'C' },
  { ID: 2, firstname: 'Marisol', lastname: 'Tagasulsol', course: 'BSCRIM', year: '4', section: 'B' },
  { ID: 3, firstname: 'Marietta', lastname: 'Etopa', course: 'BSET', year: '3', section: 'E' },
  { ID: 4, firstname: 'Marissa', lastname: 'Mayisapa', course: 'BSED', year: '4', section: 'D' },
  { ID: 5, firstname: 'Marina', lastname: 'Anona', course: 'BEED', year: '2', section: 'A' },
];

const studentsData = accountsData
  .filter((account) => account.usertype === 'Teacher')
  .map((student) => ({
    ID: student.ID,
    name: usersData.find((user) => user.ID === student.ID)?.firstname || '',
    course: usersData.find((user) => user.ID === student.ID)?.course || '',
  }));

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  tableContainer: { marginTop: 10, marginBottom: 20 },
  head: { height: 40, backgroundColor: 'black' },
  text: { margin: 6, textAlign: 'center', fontFamily: 'Montserrat', color: 'blue' }, // Change font color to blue
});

const App = () => {
  const renderTable = (data, headers) => (
    <Table borderStyle={{ borderWidth: 1, borderColor: 'black' }}>
      <Row data={headers} style={styles.head} textStyle={styles.text} />
      {data.map((rowData, index) => (
        <Row key={index} data={Object.values(rowData)} textStyle={styles.text} />
      ))}
    </Table>
  );
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>Accounts Table</Text>
      <ScrollView style={styles.tableContainer}>
        {renderTable(accountsData, ['ID', 'Username', 'Password', 'User Type'])}
      </ScrollView>

      <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black', marginTop: 20 }}>Users Table</Text>
      <ScrollView style={styles.tableContainer}>
        {renderTable(usersData, ['ID', 'First Name', 'Last Name', 'Course', 'Year', 'Section'])}
      </ScrollView>

      <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black', marginTop: 20 }}>Students Table</Text>
      <ScrollView style={styles.tableContainer}>
        {renderTable(studentsData, ['ID', 'Name', 'Course'])}
      </ScrollView>
    </View>
  );
};

export default App;
