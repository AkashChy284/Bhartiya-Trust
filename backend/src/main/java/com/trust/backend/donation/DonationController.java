package com.trust.backend.donation;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/donation-info")
@CrossOrigin(origins = "*")
public class DonationController {

    private final DonationRepository donationRepository;

    public DonationController(DonationRepository donationRepository) {
        this.donationRepository = donationRepository;
    }

    @GetMapping
    public DonationInfo getDonationInfo() {
        List<DonationInfo> list = donationRepository.findAll();

        if (list.isEmpty()) {
            DonationInfo donation = new DonationInfo();
            donation.setUpiId("");
            donation.setUpiName("");
            donation.setBankName("");
            donation.setAccountNumber("");
            donation.setIfscCode("");
            donation.setQrImageUrl("");
            return donationRepository.save(donation);
        }

        return list.get(0);
    }

    @PutMapping("/{id}")
    public DonationInfo updateDonationInfo(
            @PathVariable Long id,
            @RequestParam("upiId") String upiId,
            @RequestParam("upiName") String upiName,
            @RequestParam("bankName") String bankName,
            @RequestParam("accountNumber") String accountNumber,
            @RequestParam("ifscCode") String ifscCode,
            @RequestParam(value = "qrImage", required = false) MultipartFile qrImage
    ) throws IOException {

        DonationInfo donation = donationRepository.findById(id).orElseThrow();

        donation.setUpiId(upiId);
        donation.setUpiName(upiName);
        donation.setBankName(bankName);
        donation.setAccountNumber(accountNumber);
        donation.setIfscCode(ifscCode);

        if (qrImage != null && !qrImage.isEmpty()) {
            String uploadDir = System.getProperty("user.dir") + "/uploads/";
            File folder = new File(uploadDir);

            if (!folder.exists()) {
                folder.mkdirs();
            }

            String fileName = System.currentTimeMillis() + "_" + qrImage.getOriginalFilename();
            File savedFile = new File(uploadDir + fileName);

            qrImage.transferTo(savedFile);

            donation.setQrImageUrl("https://bhartiya-trust-6.onrender.com/uploads/" + fileName);
        }

        return donationRepository.save(donation);
    }
}