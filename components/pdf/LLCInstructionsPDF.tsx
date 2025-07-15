import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 14, fontFamily: 'Helvetica' },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  section: { marginBottom: 16 },
  list: { marginLeft: 16, marginBottom: 8 },
  listItem: { marginBottom: 6 },
});

export function LLCInstructionsPDF({ user, instructions }: { user: any, instructions: string[] }) {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.heading}>LLC Filing Instructions for {user.business_name}</Text>
        <View style={styles.section}>
          <Text>What You’ll Need:</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Business name: {user.business_name}</Text>
            <Text style={styles.listItem}>• Business address: {user.business_address}</Text>
            {/* ...other fields... */}
          </View>
        </View>
        <View style={styles.section}>
          <Text>Step-by-Step Instructions:</Text>
          <View style={styles.list}>
            {instructions.map((step, i) => (
              <Text key={i} style={styles.listItem}>{`${i + 1}. ${step}`}</Text>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
} 