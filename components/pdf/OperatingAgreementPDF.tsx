import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 14, fontFamily: 'Helvetica' },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  section: { marginBottom: 16 },
  signatureRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 40 },
  signatureBlock: { width: '45%', alignItems: 'center' },
  signatureLine: { borderBottom: '1pt solid #000', width: '100%', height: 24, marginBottom: 4 },
  signatureLabel: { fontSize: 12, marginBottom: 2 },
  dateLine: { borderBottom: '1pt solid #000', width: '100%', height: 24, marginBottom: 4 },
});

export function OperatingAgreementPDF({ user, isMultiMember }: { user: any, isMultiMember: boolean }) {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.heading}>Operating Agreement for {user.business_name}</Text>
        <View style={styles.section}>
          <Text>Company Overview</Text>
          <Text>Principal Address: {user.business_address || '[Not specified]'}</Text>
          {/* ...other fields... */}
        </View>
        {/* ...rest of OA content... */}
        {/* Signature section */}
        <View style={styles.signatureRow}>
          <View style={styles.signatureBlock}>
            <View style={styles.signatureLine} />
            <Text style={styles.signatureLabel}>
              {isMultiMember ? 'Member 1 Signature' : 'Member Signature'}
            </Text>
            <View style={styles.dateLine} />
            <Text style={styles.signatureLabel}>Date</Text>
          </View>
          {isMultiMember && (
            <View style={styles.signatureBlock}>
              <View style={styles.signatureLine} />
              <Text style={styles.signatureLabel}>Member 2 Signature</Text>
              <View style={styles.dateLine} />
              <Text style={styles.signatureLabel}>Date</Text>
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
} 
 
 
 
 