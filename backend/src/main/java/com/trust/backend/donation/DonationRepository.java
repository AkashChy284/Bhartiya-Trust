package com.trust.backend.donation;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DonationRepository extends JpaRepository<DonationInfo, Long> {
}