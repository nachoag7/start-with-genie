# Email Deliverability Guide

## 🚨 **Current Issue: Emails Going to Spam**

The emails are being sent to spam folders. Here's how to fix this:

## 🔧 **Immediate Fixes Applied**

### 1. **Improved Email Template**
- ✅ Added proper HTML structure with DOCTYPE
- ✅ Used table-based layout for better email client compatibility
- ✅ Added plain text version for better deliverability
- ✅ Improved sender address (hello@ instead of noreply@)

### 2. **Better Email Structure**
- ✅ Added proper HTML headers
- ✅ Used responsive design
- ✅ Included both HTML and text versions

## 📧 **Resend Configuration Steps**

### **Step 1: Domain Verification**
1. Go to your [Resend Dashboard](https://resend.com/domains)
2. Add your domain: `startwithgenie.com`
3. Follow the DNS setup instructions:
   - Add SPF record
   - Add DKIM record
   - Add DMARC record

### **Step 2: DNS Records to Add**

Add these records to your domain's DNS:

#### **SPF Record:**
```
Type: TXT
Name: @
Value: v=spf1 include:_spf.resend.com ~all
```

#### **DKIM Record:**
```
Type: TXT
Name: resend._domainkey
Value: [Get this from Resend dashboard]
```

#### **DMARC Record:**
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=quarantine; rua=mailto:dmarc@startwithgenie.com
```

### **Step 3: Verify Domain**
1. Wait for DNS propagation (up to 24 hours)
2. Click "Verify" in Resend dashboard
3. Check that all records are green

## 🎯 **Additional Improvements**

### **1. Warm Up Your Domain**
- Send emails gradually (start with 10-20 per day)
- Build reputation over time
- Monitor bounce rates

### **2. Email Content Best Practices**
- ✅ Avoid spam trigger words
- ✅ Use proper HTML structure
- ✅ Include plain text version
- ✅ Keep images minimal
- ✅ Use clear sender name

### **3. Technical Improvements**
- ✅ Proper email headers
- ✅ Responsive design
- ✅ Fast loading content
- ✅ Clear unsubscribe option

## 📊 **Monitoring Deliverability**

### **Check These Metrics in Resend:**
1. **Delivery Rate**: Should be >95%
2. **Open Rate**: Should be >20%
3. **Bounce Rate**: Should be <5%
4. **Spam Complaints**: Should be <0.1%

### **Tools to Monitor:**
- [Mail Tester](https://www.mail-tester.com/)
- [GlockApps](https://glockapps.com/)
- [250ok](https://250ok.com/)

## 🚀 **Production Checklist**

### **Before Going Live:**
- [ ] Domain verified in Resend
- [ ] DNS records properly configured
- [ ] Test emails delivered to inbox
- [ ] Monitor first 100 emails
- [ ] Check spam folder regularly

### **Ongoing Monitoring:**
- [ ] Check delivery rates weekly
- [ ] Monitor bounce rates
- [ ] Review spam complaints
- [ ] Update email content based on feedback

## 🔍 **Testing Your Fixes**

### **Test Email Delivery:**
```bash
# Test the API with your email
curl -X POST http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d '{"email":"ignacioaguilarg007@gmail.com","sourcePage":"/test","type":"ein_guide"}'
```

### **Check Email Headers:**
1. Open the received email
2. View email headers
3. Look for authentication results
4. Check for any warnings

## 📈 **Expected Results**

After implementing these fixes:
- ✅ Emails should land in inbox (not spam)
- ✅ Delivery rate should improve to >95%
- ✅ Open rates should increase
- ✅ Bounce rates should decrease

## 🆘 **If Still Going to Spam**

### **Additional Steps:**
1. **Check Domain Reputation**: Use tools like [Sender Score](https://senderscore.org/)
2. **Review Email Content**: Avoid spam trigger words
3. **Improve Sender Reputation**: Send consistently, not sporadically
4. **Use Email Authentication**: Ensure SPF, DKIM, DMARC are working
5. **Monitor Feedback Loops**: Set up complaint handling

## 📞 **Need Help?**

If emails are still going to spam after implementing these fixes:
1. Check Resend dashboard for specific errors
2. Test with different email providers (Gmail, Outlook, etc.)
3. Use email testing tools to identify issues
4. Contact Resend support if needed 