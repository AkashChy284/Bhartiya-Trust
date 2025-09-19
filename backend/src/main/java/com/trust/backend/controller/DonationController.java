package com.trust.backend.controller;

import com.trust.backend.model.Donation;
import com.trust.backend.repository.DonationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/donations")
public class DonationController {

    @Autowired
    private DonationRepository donationRepository;

    @GetMapping
    public List<Donation> getAllDonations() {
        return donationRepository.findAll();
    }

    @PostMapping
    public Donation createDonation(@RequestBody Donation donation) {
        return donationRepository.save(donation);
    }

    @GetMapping("/{id}")
    public Donation getDonationById(@PathVariable String id) {
        return donationRepository.findById(id).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteDonation(@PathVariable String id) {
        donationRepository.deleteById(id);
    }
}
