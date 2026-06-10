package com.trust.backend.donation;

import jakarta.persistence.*;

@Entity
@Table(name = "donation_info")
public class DonationInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String upiId;
    private String upiName;
    private String bankName;
    private String accountNumber;
    private String ifscCode;
    private String qrImageUrl;

    public Long getId() { return id; }
    public String getUpiId() { return upiId; }
    public String getUpiName() { return upiName; }
    public String getBankName() { return bankName; }
    public String getAccountNumber() { return accountNumber; }
    public String getIfscCode() { return ifscCode; }
    public String getQrImageUrl() { return qrImageUrl; }

    public void setId(Long id) { this.id = id; }
    public void setUpiId(String upiId) { this.upiId = upiId; }
    public void setUpiName(String upiName) { this.upiName = upiName; }
    public void setBankName(String bankName) { this.bankName = bankName; }
    public void setAccountNumber(String accountNumber) { this.accountNumber = accountNumber; }
    public void setIfscCode(String ifscCode) { this.ifscCode = ifscCode; }
    public void setQrImageUrl(String qrImageUrl) { this.qrImageUrl = qrImageUrl; }
}