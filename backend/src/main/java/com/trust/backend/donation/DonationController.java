package com.trust.backend.donation;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/donation-info")
@CrossOrigin(origins = "*")
public class DonationController {

    private final DonationRepository donationRepository;
    private final Cloudinary cloudinary;

    public DonationController(DonationRepository donationRepository, Cloudinary cloudinary) {
        this.donationRepository = donationRepository;
        this.cloudinary = cloudinary;
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
            Map uploadResult = cloudinary.uploader().upload(
                    qrImage.getBytes(),
                    ObjectUtils.asMap("folder", "bhartiya-trust/donation")
            );

            String imageUrl = uploadResult.get("secure_url").toString();
            donation.setQrImageUrl(imageUrl);
        }

        return donationRepository.save(donation);
    }
}