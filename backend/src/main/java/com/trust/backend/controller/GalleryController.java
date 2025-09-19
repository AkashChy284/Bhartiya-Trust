package com.trust.backend.controller;

import com.trust.backend.model.Gallery;
import com.trust.backend.repository.GalleryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/gallery")
public class GalleryController {

    @Autowired
    private GalleryRepository galleryRepository;

    @GetMapping
    public List<Gallery> getAllGalleryItems() {
        return galleryRepository.findAll();
    }

    @PostMapping
    public Gallery createGalleryItem(@RequestBody Gallery gallery) {
        return galleryRepository.save(gallery);
    }

    @GetMapping("/{id}")
    public Gallery getGalleryItemById(@PathVariable String id) {
        return galleryRepository.findById(id).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteGalleryItem(@PathVariable String id) {
        galleryRepository.deleteById(id);
    }
}
