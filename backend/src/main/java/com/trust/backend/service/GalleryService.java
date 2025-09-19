package com.trust.backend.service;

import com.trust.backend.model.Gallery;
import com.trust.backend.repository.GalleryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GalleryService {
    private final GalleryRepository galleryRepository;

    public GalleryService(GalleryRepository galleryRepository) {
        this.galleryRepository = galleryRepository;
    }

    public List<Gallery> getAllImages() {
        return galleryRepository.findAll();
    }

    public Gallery addImage(Gallery gallery) {
        return galleryRepository.save(gallery);
    }
}
